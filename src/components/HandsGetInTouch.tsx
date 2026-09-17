import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MAXGROWTH_ASSETS } from '../data/maxgrowthImages';

/**
 * Reusable "Get In Touch" full-width hands image section.
 * Place between the contact form and the footer on every page.
 */
export default function HandsGetInTouch() {
  return (
    <section className="relative w-full overflow-hidden bg-black" style={{ minHeight: '340px' }}>
      {/* Two hands full-bleed background */}
      <img
        src={MAXGROWTH_ASSETS.contact.handsConnecting}
        alt="Get In Touch"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-90"
      />
      {/* Dark gradient overlay so text stays readable */}
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-black/60" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-20 sm:py-28">
        <p className="text-xs font-mono uppercase tracking-[0.3em] text-neutral-400 mb-4">
          READY TO GROW?
        </p>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-white tracking-tight mb-6">
          Get In Touch
        </h2>
        <p className="text-sm sm:text-base text-neutral-300 max-w-md font-light mb-8">
          Let's build something great together. Reach out and we'll get back to you within 24 hours.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white text-black hover:bg-neutral-200 text-xs font-mono font-bold uppercase tracking-wider transition-all active:scale-95 shadow-lg"
        >
          <span>Start A Conversation</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
