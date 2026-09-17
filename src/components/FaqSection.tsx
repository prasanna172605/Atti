import React, { useState } from 'react';
import { faqData } from '../data/siteData';
import { Plus, Minus } from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 sm:py-32 bg-black relative border-b border-white/[0.08]">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Pill indicator */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-sm bg-[#2563FF]" />
          <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
            Got Questions?
          </span>
        </div>

        {/* Section Header with Serif Italic */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-normal text-white tracking-tight leading-[1.15]">
            Frequently Asked{' '}
            <span className="font-serif italic font-normal text-neutral-100">
              Questions
            </span>
          </h2>
        </div>

        {/* Accordion List matching MaxGrowth border separator style */}
        <div className="divide-y divide-white/[0.08] border-t border-b border-white/[0.08]">
          {faqData.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="py-6 transition-all duration-200">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between text-left font-medium text-white text-base sm:text-lg hover:text-neutral-300 transition-colors gap-6"
                >
                  <span className="tracking-tight">{faq.q}</span>
                  <div className="w-7 h-7 rounded-full border border-white/10 flex items-center justify-center shrink-0 text-neutral-400">
                    {isOpen ? (
                      <Minus className="w-3.5 h-3.5 text-white" />
                    ) : (
                      <Plus className="w-3.5 h-3.5" />
                    )}
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
  );
}
