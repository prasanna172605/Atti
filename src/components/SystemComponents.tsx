import React from 'react';
import { Target, Compass, MapPin, Layers, Filter, LineChart } from 'lucide-react';

export default function SystemComponents() {
  const components = [
    {
      icon: <Target className="w-6 h-6 text-blue-400" />,
      title: "Buyer Research",
      tag: "Foundation",
      description: "Deep dive into your high-value customer profile to uncover exact buying triggers, objections, and decision factors."
    },
    {
      icon: <Compass className="w-6 h-6 text-indigo-400" />,
      title: "Clear Positioning",
      tag: "Messaging",
      description: "Craft undeniable value propositions that separate you from price-cutting competitors and immediately command authority."
    },
    {
      icon: <MapPin className="w-6 h-6 text-purple-400" />,
      title: "Google Maps & Local SEO",
      tag: "Local Dominance",
      description: "Optimize high-intent local search visibility and geo-ranking signals so ready buyers find your services first."
    },
    {
      icon: <Layers className="w-6 h-6 text-sky-400" />,
      title: "Google & Search Ads",
      tag: "Paid Traffic",
      description: "Laser-targeted pay-per-click campaigns focused strictly on high-commercial search terms with positive unit economics."
    },
    {
      icon: <Filter className="w-6 h-6 text-teal-400" />,
      title: "Conversion Lead Capture",
      tag: "Frictionless Paths",
      description: "Strategic landing pages, booking forms, and trust architectures built to convert fleeting traffic into qualified phone calls."
    },
    {
      icon: <LineChart className="w-6 h-6 text-emerald-400" />,
      title: "Sales & Pipeline Growth",
      tag: "Scale",
      description: "Automated routing, instant follow-up workflows, and revenue reporting to close inquiries into lifelong recurring revenue."
    }
  ];

  return (
    <section id="services" className="py-24 bg-[#08090f] relative border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-4">
            <span className="w-1.5 h-1.5 rounded-sm bg-blue-400" />
            <span>THE ENGINE INGREDIENTS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
            What Goes Into Your Lead{' '}
            <span className="font-serif italic font-normal text-neutral-300">
              Generation System
            </span>
          </h2>
          <p className="mt-4 text-neutral-400 text-base sm:text-lg">
            Every component is interconnected to ensure no lead slips through the cracks.
          </p>
        </div>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {components.map((item, idx) => (
            <div 
              key={idx}
              className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-blue-500/40 hover:bg-white/[0.04] transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center group-hover:scale-105 transition-transform">
                    {item.icon}
                  </div>
                  <span className="text-xs uppercase tracking-wider text-neutral-500 font-mono px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.05]">
                    {item.tag}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/[0.04] flex items-center justify-between text-xs text-neutral-500">
                <span>COMPONENT 0{idx + 1}</span>
                <span className="text-blue-400 font-medium group-hover:translate-x-1 transition-transform">
                  Active Integration →
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
