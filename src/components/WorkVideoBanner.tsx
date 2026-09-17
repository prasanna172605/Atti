import React from 'react';
import { Link } from 'react-router-dom';
import { MAXGROWTH_ASSETS } from '../data/maxgrowthImages';

export default function WorkVideoBanner() {
  return (
    <section className="relative w-full h-[65vh] sm:h-[80vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-black border-b border-white/[0.08]">
      {/* Background Video looping */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        src={MAXGROWTH_ASSETS.comparison.whatWeDoVideo}
      />

      {/* Dark overlay to give contrast */}
      <div className="absolute inset-0 bg-black/40 z-[1]" />

      {/* Centered Floating Card */}
      <div className="relative z-10 mx-auto px-6">
        <div className="bg-[#0b0c10]/80 backdrop-blur-md border border-white/[0.12] rounded-[32px] px-8 sm:px-16 py-12 sm:py-16 text-center max-w-xl shadow-2xl flex flex-col items-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-white tracking-tight mb-8">
            The{' '}
            <span className="font-serif italic font-normal text-neutral-300">
              Work
            </span>{' '}
            Behind The Results
          </h2>

          <Link
            to="/work"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white text-black font-medium text-sm sm:text-base hover:bg-neutral-200 transition-all shadow-lg active:scale-95"
          >
            Our Works
          </Link>
        </div>
      </div>
    </section>
  );
}
