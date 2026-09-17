import React from 'react';

export default function TrustStrip() {
  const genuineStatements = [
    "WEBSITE DEVELOPMENT",
    "UI/UX DESIGN",
    "BRANDING SYSTEMS",
    "DIGITAL MARKETING",
    "SEARCH ENGINE OPTIMIZATION",
    "DOMAIN & CLOUD HOSTING",
    "CREATIVE & AI WORKFLOWS"
  ];

  return (
    <section className="py-8 bg-[#0B183D] border-t border-b border-white/[0.08] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-center">
          {genuineStatements.map((item, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <span className="text-xs sm:text-sm font-black tracking-widest uppercase font-mono text-white/90">
                {item}
              </span>
              {idx !== genuineStatements.length - 1 && (
                <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-[#2563FF]" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
