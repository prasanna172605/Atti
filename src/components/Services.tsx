import React from 'react';
import { servicesData } from '../data/siteData';
import { ArrowUpRight } from 'lucide-react';

export default function Services() {
  return (
    <section id="system" className="py-24 sm:py-32 bg-[#070e24] relative border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B183D] border border-[#2563FF]/30 text-[#E6F0FF] text-xs font-mono font-bold tracking-widest uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563FF]" />
              <span>THE ECOSYSTEM</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-tight">
              THE ONE VISION{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563FF] to-blue-200 font-serif italic font-normal lowercase tracking-normal">
                digital system
              </span>
            </h2>
          </div>
          <p className="text-neutral-300 max-w-md text-base leading-relaxed">
            Eight interconnected digital capabilities designed to build, launch, and scale modern businesses with unmistakable authority.
          </p>
        </div>

        {/* 8 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((s, idx) => (
            <div 
              key={idx}
              className="p-8 rounded-3xl bg-[#0B183D] border border-white/[0.08] hover:border-[#2563FF]/50 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(37,99,255,0.15)] relative overflow-hidden"
            >
              {/* Subtle top indicator */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-[#2563FF] transition-colors" />

              <div>
                {/* Large Number */}
                <div className="text-4xl sm:text-5xl font-mono font-black text-[#2563FF]/40 group-hover:text-[#2563FF] transition-colors mb-6 select-none">
                  {s.number}
                </div>

                <h3 className="text-xl font-black text-white tracking-tight uppercase mb-3">
                  {s.title}
                </h3>

                <p className="text-sm text-neutral-300 leading-relaxed mb-6 font-normal">
                  {s.shortDesc}
                </p>
              </div>

              <div>
                {/* Deliverables tags */}
                <div className="space-y-1.5 pt-4 border-t border-white/[0.06] mb-6">
                  {s.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="text-xs text-neutral-400 flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-[#2563FF]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <a 
                  href="#contact" 
                  className="inline-flex items-center gap-2 text-xs font-bold font-mono tracking-widest text-[#2563FF] group-hover:text-white uppercase transition-colors"
                >
                  <span>INQUIRE CAPABILITY</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
