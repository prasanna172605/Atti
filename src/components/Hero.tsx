import React from 'react';
import { motion } from 'motion/react';
import { MAXGROWTH_ASSETS } from '../data/maxgrowthImages';

export default function Hero() {
  // SVG Laurel Wreath Icons matching MaxGrowth exact visual proof strip
  const LaurelLeft = () => (
    <svg className="w-3.5 h-7 text-neutral-400 opacity-60" viewBox="0 0 12.641 31.273" fill="currentColor">
      <path d="M 2.938 0 C 2.833 1.287 3.362 3.929 6.311 4.202 C 6.438 1.954 4.566 0.38 2.938 0 Z M 6.367 29.832 C 5.467 30.79 3.11 32.236 0.874 30.36 C 2.483 28.726 4.959 28.953 6.367 29.832 Z M 0.256 29.616 C 1.431 28.991 3.431 27.112 2.027 24.603 C 0.003 25.739 -0.323 28.103 0.256 29.616 Z M 12.636 13.988 C 12.705 15.277 12.103 17.902 9.145 18.095 C 9.08 15.845 10.996 14.323 12.636 13.988 Z M 8.152 17.984 C 8.522 16.743 8.555 14.056 5.717 13.236 C 5.124 15.414 6.632 17.307 8.152 17.984 Z M 8.344 13.126 C 8.416 11.838 7.82 9.211 4.862 9.012 C 4.792 11.261 6.705 12.788 8.344 13.126 Z M 11.784 8.275 C 12.151 9.517 12.176 12.204 9.337 13.018 C 8.749 10.839 10.262 8.949 11.784 8.275 Z M 10.115 25.496 C 9.52 26.655 7.662 28.669 4.982 27.456 C 6.067 25.459 8.512 25.023 10.115 25.496 Z M 4.169 26.897 C 5.123 25.985 6.514 23.651 4.454 21.609 C 2.831 23.236 3.186 25.595 4.169 26.897 Z M 7.681 8.107 C 7.204 6.899 5.554 4.722 2.767 5.682 C 3.649 7.769 6.039 8.43 7.681 8.107 Z M 8.789 2.335 C 9.647 3.331 10.8 5.783 8.547 7.624 C 7.093 5.854 7.681 3.539 8.789 2.335 Z M 12.034 19.16 C 11.975 20.45 11.119 23.011 8.156 22.938 C 8.313 20.692 10.369 19.347 12.034 19.16 Z M 7.178 22.738 C 7.668 21.535 7.963 18.861 5.22 17.791 C 4.417 19.907 5.731 21.928 7.178 22.738 Z" />
    </svg>
  );

  const LaurelRight = () => (
    <svg className="w-3.5 h-7 text-neutral-400 opacity-60" viewBox="0 0 12.641 31.273" fill="currentColor">
      <path d="M 9.704 0 C 9.808 1.287 9.279 3.929 6.331 4.202 C 6.204 1.954 8.075 0.38 9.704 0 Z M 6.274 29.832 C 7.174 30.79 9.533 32.236 11.768 30.36 C 10.159 28.726 7.682 28.953 6.274 29.832 Z M 12.386 29.616 C 11.21 28.991 9.21 27.112 10.615 24.603 C 12.638 25.739 12.964 28.103 12.386 29.616 Z M 0.005 13.988 C -0.063 15.277 0.539 17.902 3.497 18.095 C 3.562 15.845 1.646 14.323 0.005 13.988 Z M 4.489 17.984 C 4.119 16.743 4.087 14.056 6.924 13.236 C 7.518 15.414 6.009 17.307 4.489 17.984 Z M 4.297 13.126 C 4.226 11.838 4.822 9.211 7.779 9.012 C 7.85 11.261 5.937 12.788 4.297 13.126 Z M 0.859 8.275 C 0.491 9.517 0.466 12.204 3.304 13.018 C 3.893 10.839 2.38 8.949 0.859 8.275 Z M 2.527 25.496 C 3.121 26.655 4.98 28.669 7.659 27.456 C 6.574 25.459 4.129 25.023 2.527 25.496 Z M 8.472 26.897 C 7.518 25.985 6.127 23.651 8.187 21.609 C 9.811 23.236 9.455 25.595 8.472 26.897 Z M 4.961 8.107 C 5.437 6.899 7.087 4.722 9.874 5.682 C 8.993 7.769 6.603 8.43 4.961 8.107 Z M 3.853 2.335 C 2.994 3.331 1.841 5.783 4.095 7.624 C 5.549 5.854 4.961 3.539 3.853 2.335 Z M 0.607 19.16 C 0.666 20.45 1.523 23.011 4.485 22.938 C 4.329 20.692 2.273 19.347 0.607 19.16 Z M 5.464 22.738 C 4.974 21.535 4.678 18.861 7.42 17.791 C 8.225 19.907 6.91 21.928 5.464 22.738 Z" />
    </svg>
  );

  return (
    <section className="relative min-h-[90vh] md:min-h-screen pt-40 pb-20 md:pt-48 md:pb-24 overflow-hidden bg-black text-white flex flex-col justify-between">
      
      {/* Background blue wave linear graphic from MaxGrowth */}
      <div className="absolute inset-x-0 bottom-0 top-1/4 pointer-events-none opacity-40">
        <img 
          src={MAXGROWTH_ASSETS.hero.backdrop} 
          alt="Hero backdrop" 
          className="w-full h-full object-cover object-bottom"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-black" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center flex flex-col items-center my-auto">
        
        {/* Main Headline with Serif Italic Emphasis matching MaxGrowth geometry */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-white leading-[1.08] max-w-4xl"
        >
          We Build Lead Generation
          <br />
          Systems for
          <br />
          <span className="font-serif italic font-normal text-neutral-300">
            Ambitious Businesses
          </span>
        </motion.h1>

        {/* Centered Supporting Paragraph */}
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-6 text-sm sm:text-base text-neutral-400 max-w-xl mx-auto font-normal leading-relaxed"
        >
          We build connected digital and acquisition systems that help ambitious businesses attract the right clients, turn attention into inquiries, and create predictable growth.
        </motion.p>

        {/* Primary CTA: Exact MaxGrowth dark rounded pill */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-8"
        >
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#121214] hover:bg-[#1f1f23] text-white border border-white/10 text-xs sm:text-sm font-medium transition-all active:scale-95 shadow-sm"
          >
            <span>Book a Free Strategy Call</span>
          </a>
        </motion.div>



      </div>

      <div className="h-6" />
    </section>
  );
}
