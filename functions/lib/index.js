"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.api = void 0;
const https_1 = require("firebase-functions/v2/https");
const admin = __importStar(require("firebase-admin"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
// Initialize Firebase Admin
admin.initializeApp();
const app = (0, express_1.default)();
// Configure CORS to allow localized and production connections
app.use((0, cors_1.default)({ origin: true }));
app.use(express_1.default.json());
// HTML sanitization helper to prevent XSS injection in email template
function sanitize(text) {
    if (!text)
        return "";
    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}
// Contact endpoint handler mapping resiliently to both local and proxy routes
const handleContactEnquiry = async (req, res) => {
    try {
        const { name, email, phone, website, budget, details, fax_number } = req.body;
        // 1. Honeypot check - silently ignore automated spam submissions
        if (fax_number) {
            console.log("Spam detected via honeypot field:", { fax_number });
            return res.status(200).json({
                success: true,
                message: "Enquiry received. Thank you for reaching out to One Vision. We'll get back to you shortly."
            });
        }
        // 2. Trim inputs
        const trimmedName = typeof name === "string" ? name.trim() : "";
        const trimmedEmail = typeof email === "string" ? email.trim() : "";
        const trimmedPhone = typeof phone === "string" ? phone.trim() : "";
        const trimmedWebsite = typeof website === "string" ? website.trim() : "";
        const trimmedBudget = typeof budget === "string" ? budget.trim() : "";
        const trimmedDetails = typeof details === "string" ? details.trim() : "";
        // 3. Server-side Validation
        if (!trimmedName || !trimmedEmail || !trimmedPhone || !trimmedDetails) {
            return res.status(400).json({
                error: "Required fields are missing: Name, Email, Phone, and Details are required."
            });
        }
        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(trimmedEmail)) {
            return res.status(400).json({
                error: "Invalid email format."
            });
        }
        // Validate maximum lengths to prevent resource exhaustion / buffer spam
        if (trimmedName.length > 100) {
            return res.status(400).json({ error: "Name is too long (max 100 characters)." });
        }
        if (trimmedEmail.length > 254) {
            return res.status(400).json({ error: "Email is too long (max 254 characters)." });
        }
        if (trimmedPhone.length > 30) {
            return res.status(400).json({ error: "Phone number is too long (max 30 characters)." });
        }
        if (trimmedWebsite.length > 150) {
            return res.status(400).json({ error: "Website link is too long (max 150 characters)." });
        }
        if (trimmedBudget.length > 100) {
            return res.status(400).json({ error: "Budget description is too long (max 100 characters)." });
        }
        if (trimmedDetails.length > 5000) {
            return res.status(400).json({ error: "Details are too long (max 5000 characters)." });
        }
        // 4. Retrieve credentials securely from server-side environment variables
        const BREVO_API_KEY = process.env.BREVO_API_KEY;
        const BREVO_SENDER_EMAIL = process.env.BREVO_SENDER_EMAIL;
        const BREVO_SENDER_NAME = process.env.BREVO_SENDER_NAME || "One Vision";
        const CONTACT_RECEIVER_EMAIL = process.env.CONTACT_RECEIVER_EMAIL;
        if (!BREVO_API_KEY || !BREVO_SENDER_EMAIL || !CONTACT_RECEIVER_EMAIL) {
            console.error("Missing server configuration: BREVO_API_KEY, BREVO_SENDER_EMAIL, or CONTACT_RECEIVER_EMAIL.");
            return res.status(500).json({
                error: "Unable to send your enquiry right now. Please try again in a moment."
            });
        }
        // 5. Construct & Send Email via Brevo Transactional Email API
        const emailPayload = {
            sender: {
                name: BREVO_SENDER_NAME,
                email: BREVO_SENDER_EMAIL
            },
            to: [
                {
                    email: CONTACT_RECEIVER_EMAIL
                }
            ],
            replyTo: {
                email: trimmedEmail,
                name: trimmedName
            },
            subject: `[NEW ENQUIRY] One Vision Website - ${trimmedName}`,
            htmlContent: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Enquiry | One Vision</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      background-color: #f8fafc;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      color: #1e293b;
      -webkit-font-smoothing: antialiased;
    }
    .container {
      max-width: 600px;
      margin: 40px auto;
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05), 0 2px 4px -1px rgba(0,0,0,0.03);
    }
    .header {
      background-color: #0f172a;
      padding: 40px 32px;
      text-align: center;
      border-bottom: 4px solid #2563eb;
    }
    .header-tag {
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      color: #3b82f6;
      font-weight: 700;
      margin-bottom: 8px;
    }
    .header-title {
      font-size: 24px;
      font-weight: 800;
      letter-spacing: 0.05em;
      color: #ffffff;
      margin: 0;
      text-transform: uppercase;
    }
    .content {
      padding: 40px 32px;
    }
    .section-title {
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: #64748b;
      font-weight: 700;
      margin-top: 32px;
      margin-bottom: 12px;
      padding-bottom: 6px;
      border-bottom: 1px solid #f1f5f9;
    }
    .section-title:first-child {
      margin-top: 0;
    }
    .field-group {
      margin-bottom: 20px;
    }
    .field-label {
      font-size: 12px;
      color: #64748b;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      font-weight: 600;
      margin-bottom: 4px;
    }
    .field-value {
      font-size: 15px;
      color: #0f172a;
      line-height: 1.5;
    }
    .field-value-rich {
      background-color: #f8fafc;
      border-left: 3px solid #2563eb;
      padding: 16px;
      border-radius: 4px;
      font-size: 14px;
      color: #334155;
      line-height: 1.6;
      white-space: pre-wrap;
    }
    .footer {
      background-color: #f8fafc;
      padding: 24px 32px;
      text-align: center;
      border-top: 1px solid #e2e8f0;
    }
    .btn {
      display: inline-block;
      background-color: #2563eb;
      color: #ffffff !important;
      text-decoration: none;
      padding: 12px 28px;
      border-radius: 9999px;
      font-size: 14px;
      font-weight: 600;
      margin-top: 8px;
    }
    .footer-text {
      font-size: 11px;
      color: #94a3b8;
      margin-top: 16px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="header-tag">New Enquiry</div>
      <h1 class="header-title">One Vision</h1>
    </div>
    <div class="content">
      <div class="section-title">Contact Details</div>
      
      <div class="field-group">
        <div class="field-label">Name</div>
        <div class="field-value"><strong>${sanitize(trimmedName)}</strong></div>
      </div>
      
      <div class="field-group">
        <div class="field-label">Email</div>
        <div class="field-value">${sanitize(trimmedEmail)}</div>
      </div>
      
      <div class="field-group">
        <div class="field-label">Phone</div>
        <div class="field-value">${sanitize(trimmedPhone)}</div>
      </div>
      
      <div class="field-group">
        <div class="field-label">Website / Social Media</div>
        <div class="field-value">${trimmedWebsite ? sanitize(trimmedWebsite) : "Not provided"}</div>
      </div>

      <div class="section-title">Project Scope</div>
      
      <div class="field-group">
        <div class="field-label">Budget Range</div>
        <div class="field-value">${sanitize(trimmedBudget)}</div>
      </div>

      <div class="section-title">Message / Goal</div>
      <div class="field-value-rich">${sanitize(trimmedDetails)}</div>
      
      <div style="text-align: center; margin-top: 36px;">
        <a href="mailto:${encodeURIComponent(trimmedEmail)}?subject=Re:%20One%20Vision%20Enquiry" class="btn">Reply to Client</a>
      </div>
    </div>
    <div class="footer">
      <p style="margin: 0; font-size: 13px; color: #64748b; font-weight: 500;">ONE VISION DIGITAL AGENCY</p>
      <p class="footer-text">This is an automated enquiry from your website contact form.</p>
    </div>
  </div>
</body>
</html>
      `
        };
        const response = await fetch("https://api.brevo.com/v3/smtp/email", {
            method: "POST",
            headers: {
                "accept": "application/json",
                "content-type": "application/json",
                "api-key": BREVO_API_KEY
            },
            body: JSON.stringify(emailPayload)
        });
        if (!response.ok) {
            const errorText = await response.text();
            console.error(`Brevo SMTP API failed with status ${response.status}: ${errorText}`);
            return res.status(500).json({
                error: "Unable to send your enquiry right now. Please try again in a moment."
            });
        }
        // 6. Optional Brevo Contact Syncing - Non-blocking
        try {
            const nameParts = trimmedName.split(" ");
            const firstName = nameParts[0] || "";
            const lastName = nameParts.slice(1).join(" ") || "";
            const contactBody = {
                email: trimmedEmail,
                attributes: {
                    FIRSTNAME: firstName,
                    LASTNAME: lastName,
                    SMS: trimmedPhone
                },
                updateEnabled: true
            };
            if (process.env.BREVO_LIST_ID) {
                const listIdNum = parseInt(process.env.BREVO_LIST_ID, 10);
                if (!isNaN(listIdNum)) {
                    contactBody.listIds = [listIdNum];
                }
            }
            const contactResponse = await fetch("https://api.brevo.com/v3/contacts", {
                method: "POST",
                headers: {
                    "accept": "application/json",
                    "content-type": "application/json",
                    "api-key": BREVO_API_KEY
                },
                body: JSON.stringify(contactBody)
            });
            if (!contactResponse.ok) {
                const contactErrText = await contactResponse.text();
                console.warn(`Brevo contact registration returned non-2xx status ${contactResponse.status}: ${contactErrText}`);
            }
            else {
                console.log(`Successfully synced lead to Brevo list: ${trimmedEmail}`);
            }
        }
        catch (contactError) {
            // Do not block client success response if CRM creation fails
            console.error("Non-blocking error during Brevo contact creation:", contactError);
        }
        // Return successful outcome to client
        return res.status(200).json({
            success: true,
            message: "Enquiry received. Thank you for reaching out to One Vision. We'll get back to you shortly."
        });
    }
    catch (error) {
        console.error("Internal Server Error in contact handler:", error);
        return res.status(500).json({
            error: "Unable to send your enquiry right now. Please try again in a moment."
        });
    }
};
// Route both /contact and /api/contact endpoints for maximum configuration safety
app.post("/contact", handleContactEnquiry);
app.post("/api/contact", handleContactEnquiry);
// Export Express app as Cloud Function V2 HTTPS rewrite target
exports.api = (0, https_1.onRequest)({ cors: true }, app);
//# sourceMappingURL=index.js.map