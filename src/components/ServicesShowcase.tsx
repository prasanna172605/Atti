import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { MAXGROWTH_ASSETS } from '../data/maxgrowthImages';

export default function ServicesShowcase() {
  // CORRECT image mapping (confirmed by visual inspection):
  // mapsTraffic (DO6)  = orange desert/mountain    → Website Development
  // conversionUi (h59) = red glowing arc on black  → Digital Advertising (Google Ads/Meta Ads)
  // leadSystem (py48)  = spaceship orbiting earth  → Google Maps
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      id: "website",
      name: "Website Development",
      heading: "A Website Built to Win Clients",
      description: "We build high-performance websites that communicate your value clearly, answer prospect questions within seconds, and make taking the next step effortless.",
      bgImage: MAXGROWTH_ASSETS.systemComponents.mapsTraffic,
      thumbnail: MAXGROWTH_ASSETS.systemComponents.mapsTraffic,
    },
    {
      id: "ads",
      name: "Digital Advertising",
      heading: "Digital Advertising That Gets You Found By Ready Buyers",
      description: "Targeted Google Ads and Meta Ads campaigns that connect your service with prospects already searching, turning ad spend into qualified leads.",
      bgImage: MAXGROWTH_ASSETS.systemComponents.conversionUi,
      thumbnail: MAXGROWTH_ASSETS.systemComponents.conversionUi,
    },
    {
      id: "maps",
      name: "Google Maps",
      heading: "Google Maps Optimization for Local Dominance",
      description: "Rank at the top of local search when high-intent prospects search for your services in your immediate market area.",
      bgImage: MAXGROWTH_ASSETS.systemComponents.leadSystem,
      thumbnail: MAXGROWTH_ASSETS.systemComponents.leadSystem,
    }
  ];

  const current = services[activeTab];

  return (
    <section id="Services" className="relative min-h-[90vh] md:min-h-screen bg-black text-white flex flex-col justify-between overflow-hidden">
      
      {/* Background Hero Image — no vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src={current.bgImage}
          alt={current.name}
          className="w-full h-full object-cover object-center transition-all duration-700"
        />
      </div>

      {/* Top spacing for fixed navbar */}
      <div className="h-28 md:h-36" />

      {/* Main Content Grid */}
      <div className="max-w-7xl w-full mx-auto px-6 sm:px-10 lg:px-14 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-end my-auto py-10">
        
        {/* Left: Heading & CTA */}
        <div className="lg:col-span-7 space-y-4">
          {/* Exactly matching MaxGrowth font size — ~28-32px, tight weight */}
          <h2 className="text-2xl sm:text-[28px] md:text-[32px] font-medium tracking-[-0.02em] text-white leading-[1.2] max-w-lg drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]">
            {current.heading}
          </h2>

          <div>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black hover:bg-neutral-200 text-[13px] font-semibold tracking-tight transition-all duration-200 shadow-md active:scale-95"
            >
              <span>Book A Free Strategy Call</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Right: Description */}
        <div className="lg:col-span-5 flex flex-col justify-end">
          <p className="text-[13px] sm:text-sm text-neutral-200 leading-relaxed font-normal max-w-sm drop-shadow-[0_2px_16px_rgba(0,0,0,0.9)]">
            {current.description}
          </p>
        </div>

      </div>

      {/* Bottom Controls: scroll hint + thumbnails */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 sm:px-10 lg:px-14 pb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Scroll Indicator */}
        <div className="text-[11px] font-mono text-neutral-300 flex items-center gap-1.5 tracking-widest uppercase drop-shadow">
          <span>Scroll to explore</span>
          <span>&darr;</span>
        </div>

        {/* Thumbnail Switcher */}
        <div className="flex items-center gap-2.5 bg-black/60 backdrop-blur-md p-1.5 rounded-2xl border border-white/10 shadow-2xl">
          {services.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => setActiveTab(idx)}
              className={`relative rounded-xl overflow-hidden w-20 sm:w-24 h-12 sm:h-14 transition-all duration-300 border cursor-pointer ${
                activeTab === idx
                  ? 'border-white ring-1 ring-white/40 scale-105'
                  : 'border-white/10 opacity-50 hover:opacity-90'
              }`}
            >
              <img
                src={s.thumbnail}
                alt={s.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/45 flex items-center justify-center p-1 text-center">
                <span className="text-[10px] font-semibold text-white tracking-tight leading-tight drop-shadow">
                  {s.name}
                </span>
              </div>
            </button>
          ))}
        </div>

      </div>

    </section>
  );
}
