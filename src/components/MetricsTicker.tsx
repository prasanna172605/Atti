import React from 'react';
import { motion } from 'motion/react';
import { TrendingUp, Sparkles, Award } from 'lucide-react';

export default function MetricsTicker() {
  const brands = [
    'Tenciba', 'Acures Marine', 'Netco Groups', 'Seyon Designs',
    'ZynGreen Energy', 'Ista Global', 'Achieve Media', 'Organic Superfood',
    'Voxelleap Digital', 'Aavriyas Luxury', 'Dappers & Dame'
  ];

  return (
    <section id="results" className="py-20 bg-[#050508] relative overflow-hidden border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        
        {/* Top Tag */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-3">
            <span className="w-1.5 h-1.5 rounded-sm bg-blue-400" />
            <span>MEASURABLE IMPACT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Results Driven By{' '}
            <span className="font-serif italic font-normal text-blue-400">
              Strategy
            </span>
            , Not Guesswork
          </h2>
        </div>

        {/* 3 Large Stat Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
            <div className="flex justify-center mb-3 text-blue-400">
              <TrendingUp className="w-8 h-8" />
            </div>
            <div className="text-5xl sm:text-6xl font-extrabold text-white tracking-tight">
              90%
            </div>
            <div className="mt-2 text-sm sm:text-base font-semibold text-neutral-200">
              Average Client Growth
            </div>
            <p className="mt-1 text-xs text-neutral-400">
              Recorded within the first 90 days of engine deployment.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
            <div className="flex justify-center mb-3 text-emerald-400">
              <Sparkles className="w-8 h-8" />
            </div>
            <div className="text-5xl sm:text-6xl font-extrabold text-white tracking-tight">
              10X
            </div>
            <div className="mt-2 text-sm sm:text-base font-semibold text-neutral-200">
              More Conversion Opportunities
            </div>
            <p className="mt-1 text-xs text-neutral-400">
              Turning passive browser traffic into high-intent inbound inquiries.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
            <div className="flex justify-center mb-3 text-purple-400">
              <Award className="w-8 h-8" />
            </div>
            <div className="text-5xl sm:text-6xl font-extrabold text-white tracking-tight">
              78+
            </div>
            <div className="mt-2 text-sm sm:text-base font-semibold text-neutral-200">
              High-Growth Businesses
            </div>
            <p className="mt-1 text-xs text-neutral-400">
              Partnering long-term to dominate their local and national markets.
            </p>
          </div>
        </div>

      </div>

      {/* Infinite Logo Ticker */}
      <div className="relative py-6 bg-white/[0.015] border-t border-b border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-4 mb-4 text-center">
          <span className="text-xs uppercase tracking-widest text-neutral-500 font-mono">
            TRUSTED BY FORWARD-THINKING BRANDS & FOUNDERS
          </span>
        </div>

        <div className="flex whitespace-nowrap overflow-hidden py-3">
          <motion.div
            animate={{ x: [0, -1200] }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            className="flex items-center gap-12 sm:gap-16 px-4"
          >
            {[...brands, ...brands].map((brand, idx) => (
              <div 
                key={idx}
                className="flex items-center gap-3 text-neutral-400 font-semibold tracking-wider text-base sm:text-lg hover:text-white transition-colors cursor-default"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500/60" />
                <span className="font-display uppercase tracking-widest">{brand}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
