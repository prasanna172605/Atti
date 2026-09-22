export default {
  async fetch(request, env) {
    const corsHeaders = {
      "Access-Control-Allow-Origin": "https://onevision.web.app",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    };

    // Handle CORS preflight requests
    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders });
    }

    if (request.method !== "POST") {
      return new Response(JSON.stringify({ success: false, error: "Method not allowed" }), {
        status: 405,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    try {
      const data = await request.json();

      // Basic Honeypot check
      if (data.fax_number) {
        // Silently succeed to fool spam bots
        return new Response(JSON.stringify({ success: true }), {
          status: 200,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }

      const { name, email, phone, website, budget, details } = data;

      // Basic validation
      if (!name || !email || !details) {
        return new Response(JSON.stringify({ success: false, error: "Missing required fields" }), {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }

      // Check required secrets
      if (!env.BREVO_API_KEY || !env.BREVO_SENDER_EMAIL || !env.BREVO_SENDER_NAME || !env.CONTACT_RECEIVER_EMAIL) {
        return new Response(JSON.stringify({ success: false, error: "Server misconfiguration" }), {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }

      // Sanitize simple inputs for HTML inclusion
      const escapeHTML = (str) =>
        str.replace(/[&<>'"]/g, (tag) => ({
          '&': '&amp;',
          '<': '&lt;',
          '>': '&gt;',
          "'": '&#39;',
          '"': '&quot;',
        })[tag] || tag);

      const htmlContent = `
        <div style="font-family: sans-serif; color: #000; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563FF;">New Enquiry — One Vision</h2>
          <p><strong>Name:</strong> ${escapeHTML(name.substring(0, 100))}</p>
          <p><strong>Email:</strong> ${escapeHTML(email.substring(0, 254))}</p>
          <p><strong>Phone:</strong> ${escapeHTML((phone || 'N/A').substring(0, 30))}</p>
          <p><strong>Website:</strong> ${escapeHTML((website || 'N/A').substring(0, 150))}</p>
          <p><strong>Budget:</strong> ${escapeHTML((budget || 'N/A').substring(0, 100))}</p>
          <p><strong>Message/Goals:</strong></p>
          <blockquote style="border-left: 4px solid #2563FF; padding-left: 15px; margin-left: 0;">
            ${escapeHTML(details.substring(0, 5000)).replace(/\n/g, '<br>')}
          </blockquote>
        </div>
      `;

      // 1. Send transactional email
      const emailResponse = await fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "api-key": env.BREVO_API_KEY
        },
        body: JSON.stringify({
          sender: { email: env.BREVO_SENDER_EMAIL, name: env.BREVO_SENDER_NAME },
          to: [{ email: env.CONTACT_RECEIVER_EMAIL }],
          replyTo: { email: email.substring(0, 254) },
          subject: "New Enquiry — One Vision",
          htmlContent: htmlContent
        })
      });

      if (!emailResponse.ok) {
        const errorData = await emailResponse.text();
        console.error("Brevo Email API Error:", errorData);
        throw new Error("Failed to send email");
      }

      // 2. Add to contact list (Optional)
      if (env.BREVO_LIST_ID) {
        try {
          const contactResponse = await fetch("https://api.brevo.com/v3/contacts", {
            method: "POST",
            headers: {
              "Accept": "application/json",
              "Content-Type": "application/json",
              "api-key": env.BREVO_API_KEY
            },
            body: JSON.stringify({
              email: email.substring(0, 254),
              attributes: {
                FIRSTNAME: name.substring(0, 100),
                SMS: (phone || '').substring(0, 30),
              },
              listIds: [parseInt(env.BREVO_LIST_ID, 10)],
              updateEnabled: true
            })
          });

          if (!contactResponse.ok) {
            console.error("Brevo Contact API Error:", await contactResponse.text());
            // Intentionally not throwing so the user still gets a success response
          }
        } catch (contactError) {
          console.error("Failed to add to Brevo list", contactError);
        }
      }

      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });

    } catch (err) {
      console.error(err);
      return new Response(JSON.stringify({ success: false, error: "Unable to send enquiry" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
  }
};
