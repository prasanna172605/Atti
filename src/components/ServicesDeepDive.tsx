import React from 'react';
import { Globe, Megaphone, MapPin, ArrowRight, Check } from 'lucide-react';

export default function ServicesDeepDive() {
  const verticals = [
    {
      icon: <Globe className="w-7 h-7 text-blue-400" />,
      badge: "WEBSITE DEVELOPMENT",
      headline: "A Website Built to Win Trust, Leads, and Sales",
      description: "Most websites look okay but leak leads every single hour. We engineer bespoke, lightning-fast web experiences focused strictly on persuasion, objection handling, and seamless booking flow.",
      features: [
        "Positioning that positions you as the clear market category leader",
        "Clear call-to-action architecture that guides users to enquire",
        "Mobile-first responsive UX with sub-second page load times",
        "Integrated appointment scheduling and CRM sync"
      ],
      gradient: "from-blue-600/20 via-transparent to-transparent"
    },
    {
      icon: <Megaphone className="w-7 h-7 text-indigo-400" />,
      badge: "GOOGLE ADS MANAGEMENT",
      headline: "Google Ads That Help Your Business Get Found By Ready Buyers",
      description: "Stop burning ad budget on tire-kickers. We target prospects searching with high buying intent right when they are ready to hire a solution, maximizing your return on ad spend.",
      features: [
        "Negative keyword filtering that eliminates 90%+ wasted ad spend",
        "High-converting dedicated landing pages matching exact query intent",
        "Full-funnel conversion tracking with clear revenue attribution",
        "Aggressive weekly A/B ad copy testing and bid optimization"
      ],
      gradient: "from-indigo-600/20 via-transparent to-transparent"
    },
    {
      icon: <MapPin className="w-7 h-7 text-purple-400" />,
      badge: "GOOGLE MAPS & LOCAL DOMINANCE",
      headline: "Google Maps Optimization That Brings Local Customers Every Day",
      description: "When high-value clients in your geographic market need immediate services, our local ranking strategies put your business at the top of the Google Local 3-Pack.",
      features: [
        "Optimized Google Business Profile for maximum local keyword rank",
        "Geo-targeted local citation building and high-authority links",
        "Automated 5-star review generation system to build social proof",
        "Direct inbound phone calls and directions from verified local leads"
      ],
      gradient: "from-purple-600/20 via-transparent to-transparent"
    }
  ];

  return (
    <section className="py-24 bg-[#050508] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-4">
            <span className="w-1.5 h-1.5 rounded-sm bg-blue-400" />
            <span>CORE VERTICALS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
            Specialized Pillars of The{' '}
            <span className="font-serif italic font-normal text-neutral-300">
              One Vision System
            </span>
          </h2>
          <p className="mt-4 text-neutral-400 text-base sm:text-lg">
            Three interconnected growth engines working harmoniously to scale your business.
          </p>
        </div>

        {/* 3 Full-Width Detailed Pillar Cards */}
        <div className="space-y-10">
          {verticals.map((item, idx) => (
            <div 
              key={idx}
              className={`rounded-3xl p-8 sm:p-12 bg-gradient-to-br ${item.gradient} bg-[#090a12] border border-white/[0.08] hover:border-blue-500/40 transition-all duration-300 relative overflow-hidden`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left Content */}
                <div className="lg:col-span-7">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center">
                      {item.icon}
                    </div>
                    <span className="text-xs uppercase tracking-widest text-blue-400 font-mono font-bold">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 leading-snug">
                    {item.headline}
                  </h3>

                  <p className="text-neutral-400 text-base leading-relaxed mb-8">
                    {item.description}
                  </p>

                  <a 
                    href="#contact"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-blue-400 transition-colors group"
                  >
                    <span>Deploy this pillar for your business</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-blue-400" />
                  </a>
                </div>

                {/* Right Checklist */}
                <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-black/40 border border-white/[0.06] backdrop-blur-md">
                  <div className="text-xs uppercase tracking-widest text-neutral-400 font-mono mb-4">
                    DELIVERABLES & CAPABILITIES
                  </div>
                  <ul className="space-y-3.5">
                    {item.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3 text-sm text-neutral-300">
                        <div className="w-5 h-5 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-blue-400" />
                        </div>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
