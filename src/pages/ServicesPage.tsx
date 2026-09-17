import React, { useState } from 'react';
import { ArrowRight, Star, CheckCircle2, ChevronDown, ChevronUp, Layers, Target, Compass, Sparkles, UserCheck, ShieldCheck } from 'lucide-react';
import { MAXGROWTH_ASSETS } from '../data/maxgrowthImages';
import SEOHead from '../components/SEOHead';
import ServicesShowcase from '../components/ServicesShowcase';
import HandsGetInTouch from '../components/HandsGetInTouch';

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Digital Marketing and Web Development Services",
  "provider": {
    "@type": "LocalBusiness",
    "name": "One Vision",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ariyalur",
      "addressRegion": "TN",
      "addressCountry": "IN"
    }
  },
  "areaServed": "Tamil Nadu",
  "description": "Comprehensive digital solutions including UI/UX design, SEO, social media marketing, and custom website creation."
};

export default function ServicesPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const coreQuestions = [
    {
      q: "What do you do?",
      desc: "Visitors expect immediate clarity about what your business does and who it helps within 5 seconds of landing."
    },
    {
      q: "Can you help me?",
      desc: "They want to know whether your specific solution is relevant to their exact operational pain point or ambition."
    },
    {
      q: "Why should I trust you?",
      desc: "Visitors look for social proof, editorial credibility, and proven past executions before they commit their attention."
    },
    {
      q: "Why choose you over others?",
      desc: "They need an undeniable, sharp reason to choose your company over cheaper alternatives and competitors."
    }
  ];

  const systemIncludes = [
    {
      title: "Research & Buyer Insights",
      desc: "Deep analysis of customer intent, competitor gaps, and conversion triggers before a single wireframe is drawn."
    },
    {
      title: "Strategic Positioning",
      desc: "Crystal-clear articulation of what you do and why ambitious buyers must choose your company."
    },
    {
      title: "Customer Journey Mapping",
      desc: "Guiding visitors naturally toward decision-making with confidence and zero navigational friction."
    },
    {
      title: "High-Fidelity Engineering",
      desc: "Sub-second loading times, flawless mobile responsiveness, and cinematic modern aesthetic."
    },
    {
      title: "Conversion Architecture",
      desc: "High-intent inquiry forms, frictionless CTAs, and automated qualification pipelines."
    },
    {
      title: "Growth Optimization",
      desc: "Iterative analytics tracking, A/B funnel testing, and continuous conversion rate improvements."
    }
  ];

  const breakdownPages = [
    {
      name: "Homepage",
      role: "Immediate Value & Core Direction",
      desc: "Clearly communicates what you do, who you help, and why high-value visitors should take immediate action."
    },
    {
      name: "Services & Systems Page",
      role: "Capability & Value Articulation",
      desc: "Demystifies your delivery, establishes authoritative depth, and converts active interest into qualified calls."
    },
    {
      name: "About & Perspective",
      role: "Reputation & Market Distinction",
      desc: "Showcases the ethos, senior talent, and foundational philosophy that makes your team exceptional."
    },
    {
      name: "Contact & Intake Funnel",
      role: "Frictionless Client Onboarding",
      desc: "Streamlined inquiry forms designed to capture project scope and route qualified clients directly to your calendar."
    }
  ];

  const comparisonPoints = [
    {
      agency: "Start with aesthetics before understanding business economics",
      oneVision: "Strategy, buyer psychology, and conversion economics before design"
    },
    {
      agency: "Use generic off-the-shelf templates and bloated theme builders",
      oneVision: "Custom-engineered modern codebases built for sub-second speeds"
    },
    {
      agency: "Focus on vanity traffic and ad impressions without lead tracking",
      oneVision: "End-to-end attribution connecting visitors directly to inquiries"
    },
    {
      agency: "Launch the website and disappear with zero accountability",
      oneVision: "Long-term partnership optimizing conversion rates as you scale"
    }
  ];

  const faqs = [
    {
      q: "What makes a conversion-engineered website different from a regular site?",
      a: "Most websites act as passive brochures that look decent but fail to guide visitors toward scheduling an inquiry. A conversion-engineered digital system is structured around buyer psychology, clear positioning, and targeted calls to action designed to turn visitors into paying clients."
    },
    {
      q: "How long does a complete digital system build take?",
      a: "A typical high-fidelity custom system takes between 3 to 6 weeks from discovery audit and architecture to complete production deployment and QA testing."
    },
    {
      q: "Do you build custom websites or use CMS templates?",
      a: "Every One Vision platform is built with custom code and bespoke UI architecture tailored specifically to your brand. We integrate flexible CMS workflows so your team retains complete autonomy over your content."
    },
    {
      q: "Can you help with our positioning and copywriting?",
      a: "Yes. In fact, messaging and positioning are the foundation of our work. Design without persuasive copywriting is just decorative expense."
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      <SEOHead 
        title="Digital Marketing, Web Design & SEO Services | One Vision"
        description="Explore our comprehensive digital solutions including UI/UX design, SEO, social media marketing, and bespoke website creation for local and global brands."
        canonicalUrl="/services"
        schema={serviceSchema}
      />
      {/* 1. SERVICES SHOWCASE / #Services EXACT MASTER EXPERIENCE */}
      <ServicesShowcase />

      {/* 2. THE 4 ESSENTIAL QUESTIONS (Why Websites Fail) */}
      <section className="py-24 sm:py-32 bg-black relative border-b border-white/[0.08]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-sm bg-[#2563FF]" />
            <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
              The Reality
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-normal text-white tracking-tight leading-[1.15] max-w-3xl mb-6">
            Why Most Business Websites Fail to Generate{' '}
            <span className="font-serif italic font-normal text-neutral-100">
              Leads &amp; Sales
            </span>
          </h2>

          <p className="text-base text-neutral-400 max-w-2xl leading-relaxed mb-14">
            Most businesses obsess over traffic. But traffic is useless if your website fails to convert. Within seconds, every visitor is subconsciously asking four questions:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/[0.08] border border-white/[0.08] rounded-2xl overflow-hidden bg-[#08080a]">
            {coreQuestions.map((q, idx) => (
              <div key={idx} className="p-8 flex flex-col justify-between h-full bg-[#08080a] hover:bg-[#0c0c0e] transition-colors">
                <div>
                  <div className="text-xs font-mono font-bold tracking-widest text-[#2563FF] uppercase mb-4">
                    QUESTION 0{idx + 1}
                  </div>
                  <h3 className="text-xl font-medium text-white mb-3 tracking-tight">
                    {q.q}
                  </h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    {q.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-between">
            <p className="text-sm sm:text-base text-neutral-300 font-normal">
              <span className="text-white font-medium">If those four answers aren't obvious in 10 seconds,</span> visitors bounce to your competitors.
            </p>
          </div>
        </div>
      </section>

      {/* 3. WHAT EVERY HIGH-CONVERTING SYSTEM INCLUDES */}
      <section className="py-24 sm:py-32 bg-black relative border-b border-white/[0.08]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-sm bg-[#2563FF]" />
            <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
              System Components
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-normal text-white tracking-tight leading-[1.15] max-w-2xl mb-16">
            What Every High-Converting System{' '}
            <span className="font-serif italic font-normal text-neutral-100">
              Includes
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {systemIncludes.map((item, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-[#08080a] border border-white/[0.08] hover:border-white/20 transition-all flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-[#2563FF] mb-6">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-medium text-white mb-2 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. DOMINANT WEBSITE BREAKDOWN SECTION */}
      <section className="py-24 sm:py-32 bg-black relative border-b border-white/[0.08]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-sm bg-[#2563FF]" />
            <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
              Architecture Breakdown
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-normal text-white tracking-tight leading-[1.15] max-w-2xl mb-6">
            Engineered Page by Page to Guide Visitors Toward{' '}
            <span className="font-serif italic font-normal text-neutral-100">
              Inquiry
            </span>
          </h2>

          <p className="text-base text-neutral-400 max-w-2xl leading-relaxed mb-14">
            Every screen, transition, and section is strategically crafted to move buyers smoothly from initial curiosity to decisive commitment.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {breakdownPages.map((page, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-[#08080a] border border-white/[0.08] flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono font-bold tracking-widest text-[#2563FF] uppercase mb-3">
                    0{idx + 1} // ARCHITECTURE
                  </div>
                  <h3 className="text-2xl font-medium text-white mb-2">
                    {page.name}
                  </h3>
                  <div className="text-xs font-medium text-neutral-300 mb-4 uppercase tracking-wider">
                    {page.role}
                  </div>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    {page.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Large Visual Asset from MaxGrowth */}
          <div className="mt-12 rounded-3xl border border-white/[0.08] bg-[#08080a] p-4 sm:p-6 md:p-8">
            <div className="rounded-2xl overflow-hidden border border-white/[0.08] bg-black aspect-[16/9] relative">
              <img
                src={MAXGROWTH_ASSETS.websiteFeature.banner}
                alt="Website Architecture Blueprint"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* 5. THE DIFFERENCE / COMPARISON */}
      <section className="py-24 sm:py-32 bg-black relative border-b border-white/[0.08]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-sm bg-[#2563FF]" />
            <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
              The Difference
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-normal text-white tracking-tight leading-[1.15] max-w-2xl mb-16">
            The Difference a Strategic Digital System{' '}
            <span className="font-serif italic font-normal text-neutral-100">
              Makes
            </span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#08080a] border border-white/[0.08]">
              <div className="text-xs font-mono font-bold tracking-widest text-neutral-400 uppercase mb-4">
                WHAT MOST AGENCIES DO
              </div>
              <div className="space-y-6">
                {comparisonPoints.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 pb-5 border-b border-white/[0.06] last:border-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-600 shrink-0 mt-2" />
                    <p className="text-sm text-neutral-400 leading-relaxed">{item.agency}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 sm:p-10 rounded-3xl bg-[#08080a] border border-[#2563FF]/30">
              <div className="text-xs font-mono font-bold tracking-widest text-[#2563FF] uppercase mb-4">
                WHAT THE ONE VISION DOES
              </div>
              <div className="space-y-6">
                {comparisonPoints.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 pb-5 border-b border-white/[0.06] last:border-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2563FF] shrink-0 mt-2" />
                    <p className="text-sm text-neutral-200 leading-relaxed">{item.oneVision}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SERVICES FAQ */}
      <section className="py-24 sm:py-32 bg-black relative border-b border-white/[0.08]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-sm bg-[#2563FF]" />
            <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
              Got Questions?
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-normal text-white tracking-tight leading-[1.15] text-center mb-16">
            Frequently Asked{' '}
            <span className="font-serif italic font-normal text-neutral-100">
              Questions
            </span>
          </h2>

          <div className="divide-y divide-white/[0.08] border-t border-b border-white/[0.08]">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div key={idx} className="py-6 transition-all duration-200">
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between text-left font-medium text-white text-base sm:text-lg hover:text-neutral-300 transition-colors gap-6"
                  >
                    <span className="tracking-tight">{faq.q}</span>
                    <div className="w-7 h-7 rounded-full border border-white/10 flex items-center justify-center shrink-0 text-neutral-400">
                      {isOpen ? '-' : '+'}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="pt-4 text-sm sm:text-base text-neutral-400 leading-relaxed max-w-3xl">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. FINAL INQUIRY BANNER */}
      <section className="py-24 sm:py-32 bg-black relative text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl sm:text-5xl font-normal text-white tracking-tight leading-[1.15] mb-6">
            Ready to Build a Website That Actually{' '}
            <span className="font-serif italic font-normal text-neutral-100">
              Generates Revenue?
            </span>
          </h2>
          <p className="text-base text-neutral-400 max-w-xl mx-auto mb-10 leading-relaxed">
            Book a strategy consultation. We'll examine your current positioning, identify your conversion bottlenecks, and provide an actionable blueprint.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black hover:bg-neutral-200 font-semibold text-sm tracking-tight transition-all shadow-lg active:scale-95"
          >
            <span>Book A Strategy Call</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Hands Get In Touch */}
      <HandsGetInTouch />

    </div>
  );
}
