import React from 'react';
import { X, Check } from 'lucide-react';
import { MAXGROWTH_ASSETS } from '../data/maxgrowthImages';

export default function ComparisonTable() {
  const mostAgencies = [
    "Sell individual marketing services",
    "Run ads without understanding the full customer journey",
    "Focus on clicks and traffic",
    "Create websites that look good but don't convert",
    "Treat each channel as a separate project",
    "Send reports without explaining what they mean",
    "Focus on activity instead of business outcomes",
    "Make the strategy harder to understand"
  ];

  const whatWeDo = [
    "Build one connected growth system",
    "Start with your business goals and ideal customers",
    "Focus on attracting the right opportunities",
    "Build websites around trust and conversion",
    "Connect your acquisition and conversion channels",
    "Use data to understand what is actually working",
    "Optimize the entire customer journey",
    "Build a system designed for sustainable growth"
  ];

  return (
    <section className="py-24 sm:py-32 bg-black relative border-b border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Heading matching screenshot */}
        <div className="mb-14">
          <h2 className="text-3xl sm:text-5xl font-normal text-white tracking-tight leading-[1.15]">
            The Difference{' '}
            <span className="font-serif italic font-normal text-neutral-300">
              The One Vision
            </span>
            <br />
            <span className="font-serif italic font-normal text-neutral-300">
              System
            </span>{' '}
            Makes
          </h2>
        </div>

        {/* 2-Column Comparison Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Column 1: What Most Agencies Do (NO IMAGE, pure dark surface with X icons) */}
          <div className="p-8 sm:p-12 rounded-[28px] bg-[#0c0c0e] border border-white/[0.08] flex flex-col justify-start">
            <h3 className="text-xl sm:text-2xl font-medium text-neutral-200 mb-8">
              What Most Agencies Do
            </h3>

            <div className="space-y-5">
              {mostAgencies.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <X className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" strokeWidth={2} />
                  <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-light">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: What We Do (With Mountain & Blue Glow background image) */}
          <div className="relative rounded-[28px] border border-white/[0.12] overflow-hidden flex flex-col justify-start p-8 sm:p-12 bg-black min-h-[460px]">
            {/* Background Mountain with Blue Glow Image */}
            <div className="absolute inset-0 z-0">
              <img
                src={MAXGROWTH_ASSETS.comparison.mostAgencies}
                alt="The One Vision System Background"
                className="w-full h-full object-cover object-center opacity-70"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/60" />
            </div>

            {/* Foreground Content */}
            <div className="relative z-10">
              <h3 className="text-xl sm:text-2xl font-medium text-white mb-8">
                What We Do
              </h3>

              <div className="space-y-5">
                {whatWeDo.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <Check className="w-4 h-4 text-white shrink-0 mt-0.5" strokeWidth={2.5} />
                    <p className="text-sm sm:text-base text-white leading-relaxed font-normal drop-shadow-sm">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
