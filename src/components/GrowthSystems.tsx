import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, CheckCircle2 } from 'lucide-react';
import { MAXGROWTH_ASSETS } from '../data/maxgrowthImages';

export default function GrowthSystems() {
  const [activeTab, setActiveTab] = useState(0);

  const systems = [
    {
      id: "compound",
      tag: "01 // FOUNDATION",
      title: "COMPOUND",
      subtitle: "Long-term Organic & Brand Authority",
      description: "Make Every Lead Work Harder. We build sustainable market positioning, strategic content engines, and organic SEO authority that compounds value week after week.",
      deliverables: [
        "Strategic Brand Architecture",
        "SEO & Discoverability Infrastructure",
        "High-Authority Content Engine",
        "Reputation & Review Ecosystem"
      ],
      image: MAXGROWTH_ASSETS.growthSystems.compound,
    },
    {
      id: "convert",
      tag: "02 // EXPERIENCE",
      title: "CONVERT",
      subtitle: "High-Performance Conversion Websites",
      description: "Turn Visitors Into Enquiries. We engineer bespoke websites with cinematic aesthetics, sub-second load speeds, persuasive copywriting, and frictionless inquiry pathways.",
      deliverables: [
        "Custom Digital Experience",
        "Conversion Rate Optimization (CRO)",
        "Interactive 3D / Web Touches",
        "Automated Lead Routing"
      ],
      image: MAXGROWTH_ASSETS.growthSystems.convert,
    },
    {
      id: "attract",
      tag: "03 // ACQUISITION",
      title: "ATTRACT",
      subtitle: "Predictable Paid Acquisition & Targeting",
      description: "Find The Right People. We orchestrate hyper-targeted search and social campaigns that intercept high-intent buyers exactly when they are ready to purchase.",
      deliverables: [
        "Google Search & Map Optimization",
        "Targeted Paid Traffic Funnels",
        "Real-Time Tracking & Attribution",
        "Continuous Margin Scaling"
      ],
      image: MAXGROWTH_ASSETS.growthSystems.attract,
    }
  ];

  const current = systems[activeTab];

  const handlePrev = () => {
    setActiveTab((prev) => (prev === 0 ? systems.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveTab((prev) => (prev === systems.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="growth-systems" className="py-24 sm:py-32 bg-black relative border-b border-white/[0.08] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">

        {/* ── Section Pill indicator matching MaxGrowth ── */}
        <div className="flex items-center gap-2 mb-6">
          <span className="w-2.5 h-2.5 rounded-sm bg-[#2563FF] flex-shrink-0" />
          <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
            How We Solve It
          </span>
        </div>

        {/* ── Section Header with Serif Italic ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div>
            <h2 className="text-3xl sm:text-5xl font-normal text-white tracking-tight leading-[1.15] max-w-2xl">
              The Growth{' '}
              <span className="font-serif italic font-normal text-white/70">
                Systems
              </span>{' '}
              We Deploy
            </h2>
            <p className="mt-3 text-sm sm:text-base text-neutral-400 max-w-xl font-light leading-relaxed">
              Three synchronized growth layers engineered to turn cold attention into consistent, qualified customer inquiries.
            </p>
          </div>

          {/* Tab Navigation Pill Group */}
          <div className="flex items-center gap-2 bg-[#0a0a0e] p-1.5 rounded-full border border-white/[0.08] self-start md:self-auto">
            {systems.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setActiveTab(idx)}
                className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                  activeTab === idx
                    ? 'bg-white text-black shadow-md'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {s.title}
              </button>
            ))}
          </div>
        </div>

        {/* ── Interactive Growth System Showcase Card ── */}
        <div className="rounded-3xl border border-white/[0.08] bg-[#07070a] p-8 md:p-12 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

            {/* Left Content Column */}
            <div className="lg:col-span-6 flex flex-col justify-between h-full space-y-6">
              <div>
                <div className="text-xs font-mono font-bold tracking-widest text-[#2563FF] uppercase mb-2">
                  {current.tag}
                </div>

                <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-white mb-2">
                  {current.title}
                </h3>

                <p className="text-sm text-neutral-300 font-medium mb-3">
                  {current.subtitle}
                </p>

                <p className="text-sm text-neutral-400 font-light leading-relaxed mb-6">
                  {current.description}
                </p>

                {/* Deliverables with blue check icons */}
                <div className="space-y-2.5 pt-2 border-t border-white/[0.06]">
                  <p className="text-xs font-mono uppercase tracking-wider text-neutral-500 mb-2">Key Deliverables:</p>
                  {current.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-neutral-300 font-light">
                      <CheckCircle2 className="w-4 h-4 text-[#2563FF] flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons & Prev/Next */}
              <div className="pt-4 flex items-center justify-between">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-black hover:bg-neutral-200 text-xs font-semibold tracking-tight transition-all active:scale-95 shadow-sm"
                >
                  <span>Explore {current.title}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    className="w-9 h-9 rounded-full border border-white/10 hover:border-white/30 flex items-center justify-center text-neutral-400 hover:text-white transition-colors cursor-pointer bg-white/[0.02]"
                    aria-label="Previous System"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="w-9 h-9 rounded-full border border-white/10 hover:border-white/30 flex items-center justify-center text-neutral-400 hover:text-white transition-colors cursor-pointer bg-white/[0.02]"
                    aria-label="Next System"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right Media / Visual Card */}
            <div className="lg:col-span-6 flex items-center justify-center">
              <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden border border-white/[0.08] bg-[#0c0c10] shadow-2xl relative group">
                <img
                  src={current.image}
                  alt={current.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-neutral-400 bg-black/50 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/10">
                  <span className="uppercase text-white font-semibold">{current.title} SYSTEM</span>
                  <span className="text-[#2563FF] font-semibold">{activeTab + 1}/03</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
