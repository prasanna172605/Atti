import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { MAXGROWTH_ASSETS } from '../data/maxgrowthImages';

export default function WebsiteFeature() {
  const highlights = [
    "Clean semantic markup optimized for lightning speed and SEO ranking",
    "Persuasive editorial layouts that retain high-value attention",
    "Frictionless mobile experience built for effortless conversions",
    "Tailored CMS integration giving you complete content autonomy"
  ];

  return (
    <section className="py-24 sm:py-32 bg-black relative border-b border-white/[0.08] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Pill indicator */}
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-sm bg-[#2563FF]" />
          <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
            Conversion Websites
          </span>
        </div>

        {/* Section Header with Serif Italic */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <h2 className="text-3xl sm:text-5xl font-normal text-white tracking-tight leading-[1.15] max-w-2xl">
            A Website Engineered to{' '}
            <span className="font-serif italic font-normal text-neutral-100">
              Win Your Market
            </span>
          </h2>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-neutral-300 transition-colors"
          >
            <span>Explore Custom Website Engineering</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Dominant Editorial Showcase with Reference Image Asset */}
        <div className="rounded-3xl border border-white/[0.08] bg-[#08080a] p-4 sm:p-6 md:p-8 mb-12">
          <div className="rounded-2xl overflow-hidden border border-white/[0.08] bg-black aspect-[16/9] relative group">
            <img
              src={MAXGROWTH_ASSETS.websiteFeature.banner}
              alt="High Performance Website Showcase"
              className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
          {highlights.map((item, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-[#2563FF] shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                {item}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
