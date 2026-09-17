import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import HandsGetInTouch from '../components/HandsGetInTouch';

interface Project {
  id: string;
  title: string;
  location: string;
  link?: string;
  previewSrc: string; // iframe src or image src
  isIframe?: boolean;
}

export default function WorkPage() {
  // Section 1: Selected Works
  const selectedWorks: Project[] = [
    {
      id: "sv-decoration",
      title: "SRI VENKATESWARA DECORATION CENTRE",
      location: "///ARIYALUR, INDIA",
      link: "https://srivenkateswara-decoration-centre.web.app/",
      previewSrc: "/projects/srivenkateswara.png",
      isIframe: false,
    },
    {
      id: "jadmaa",
      title: "JADMAA",
      location: "///ARIYALUR, INDIA",
      link: "https://jadmaa.com",
      previewSrc: "/projects/jadmaa.png",
      isIframe: false,
    },
  ];

  // Section 2: Some More Works
  const moreWorks: Project[] = [
    {
      id: "vajraa",
      title: "VAJRAA FITNESS ARTS",
      location: "///ARIYALUR, INDIA",
      link: "https://www.vajrafitnessarts.com/",
      previewSrc: "/projects/vajraa.png",
      isIframe: false,
    },
  ];

  const renderCard = (proj: Project) => {
    const inner = (
      <div className="group cursor-pointer">
        {/* Image / Preview Container — exact MaxGrowth card style */}
        <div className="relative overflow-hidden rounded-2xl bg-[#0a0a0a] border border-white/[0.06]">
          <div className="aspect-[16/10] overflow-hidden">
            <img
              src={proj.previewSrc}
              alt={proj.title}
              className="w-full h-full object-cover object-top transition-all duration-700 group-hover:scale-[1.04] group-hover:blur-[2px] group-hover:brightness-75"
              loading="lazy"
            />
          </div>
        </div>

        {/* Text Below Card — title bold uppercase, then ///location muted */}
        <div className="mt-4 px-1">
          <p className="text-[15px] font-semibold text-white uppercase tracking-tight leading-snug">
            {proj.title}
          </p>
          <p className="text-[13px] text-neutral-400 mt-0.5 uppercase tracking-wide font-normal">
            {proj.location}
          </p>
        </div>
      </div>
    );

    if (proj.link) {
      return (
        <a
          key={proj.id}
          href={proj.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          {inner}
        </a>
      );
    }
    return <div key={proj.id}>{inner}</div>;
  };

  return (
    <div className="bg-[#000000] text-white min-h-screen">

      {/* HERO — exact MaxGrowth: small triangle badge, "Selected Works" dual font, centered subtitle */}
      <section className="pt-36 pb-12 sm:pt-44 sm:pb-16 px-6 sm:px-8 lg:px-10 max-w-7xl mx-auto text-center">
        {/* Triangle badge */}
        <div className="w-9 h-9 rounded-lg border border-white/15 bg-white/[0.02] flex items-center justify-center mx-auto mb-7 text-neutral-400">
          <span className="text-sm font-mono leading-none">&#9651;</span>
        </div>

        {/* "Selected Works" — exact MaxGrowth dual font */}
        <h1 className="text-5xl sm:text-6xl font-normal tracking-[-0.03em] leading-[1em] text-center">
          <span className="text-white font-sans" style={{ fontFamily: "'Host Grotesk', sans-serif" }}>Selected </span>
          <span className="text-neutral-400/60 font-serif italic" style={{ fontFamily: "'Playfair Display', serif" }}>Works</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-5 text-sm sm:text-[15px] text-neutral-400 max-w-lg mx-auto font-normal leading-relaxed">
          Discover the websites we've built, blending design, functionality, and performance to help our clients grow.
        </p>
      </section>

      {/* SELECTED WORKS — 2-column grid, full-bleed cards like MaxGrowth */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-[1280px] mx-auto pb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
          {selectedWorks.map(renderCard)}
        </div>
      </section>

      {/* SOME MORE WORK'S — exact letter-spaced divider from MaxGrowth */}
      <section className="px-6 max-w-7xl mx-auto">
        <div className="text-center py-16 sm:py-20">
          <h2
            className="text-neutral-400 text-xs sm:text-sm font-normal uppercase"
            style={{ letterSpacing: '0.4em', fontFamily: "'Host Grotesk', sans-serif" }}
          >
            SOME MORE WORK'S
          </h2>
        </div>
      </section>

      {/* MORE WORKS GRID */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-[1280px] mx-auto pb-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
          {moreWorks.map(renderCard)}

          {/* Next Client Slot — plain, no border-dashed, just subtle placeholder */}
          <Link to="/contact" className="group block cursor-pointer">
            <div className="relative overflow-hidden rounded-2xl bg-[#0a0a0a] border border-white/[0.06] aspect-[16/10] flex flex-col items-center justify-center text-center p-8 hover:border-white/20 transition-colors duration-300">
              <div className="w-10 h-10 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-white mb-4 group-hover:scale-110 group-hover:border-white/50 transition-all">
                <span className="text-lg leading-none">+</span>
              </div>
              <h4 className="text-base font-medium text-white tracking-tight">Your Brand Here</h4>
              <p className="text-xs text-neutral-500 max-w-xs mt-2 font-normal">
                Ready to transform your business with a high-performance digital presence?
              </p>
            </div>
            <div className="mt-4 px-1">
              <p className="text-[15px] font-semibold text-white uppercase tracking-tight leading-snug">
                NEXT CLIENT SPOTLIGHT
              </p>
              <p className="text-[13px] text-neutral-400 mt-0.5 uppercase tracking-wide font-normal">
                ///NOW ACCEPTING PROJECTS
              </p>
            </div>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 max-w-7xl mx-auto border-t border-white/[0.08]">
        <div className="p-10 sm:p-16 rounded-3xl bg-gradient-to-b from-[#0a0a0c] to-[#000000] border border-white/[0.12] text-center max-w-4xl mx-auto">
          <span className="text-xs font-mono uppercase tracking-widest text-[#2563FF] block mb-4">
            NEXT STEP
          </span>
          <h2 className="text-3xl sm:text-5xl font-light text-white tracking-tight mb-6">
            Have a project in mind?<br />
            <span className="font-serif italic text-neutral-300">Let's build your digital presence.</span>
          </h2>
          <p className="text-neutral-400 text-sm max-w-xl mx-auto mb-10 font-light">
            We partner with businesses, founders, and creators who want professional design, dependable systems, and real growth.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black hover:bg-neutral-200 text-xs font-mono font-bold uppercase tracking-wider transition-all active:scale-95"
          >
            <span>Start A Project</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <HandsGetInTouch />

    </div>
  );
}
