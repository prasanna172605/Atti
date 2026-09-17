import React from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { projectsData } from '../data/siteData';

export default function PortfolioSection() {
  return (
    <section id="work" className="py-24 sm:py-32 bg-black relative border-b border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Pill indicator */}
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-sm bg-[#2563FF]" />
          <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
            Selected Work
          </span>
        </div>

        {/* Section Heading with Serif Italic */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <h2 className="text-3xl sm:text-5xl font-normal text-white tracking-tight leading-[1.15] max-w-2xl">
            Recent Projects Built for{' '}
            <span className="font-serif italic font-normal text-neutral-100">
              Impact
            </span>
          </h2>
          <a
            href="/work"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-neutral-300 transition-colors"
          >
            <span>View Full Archive</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Editorial Project Cards Grid */}
        <div className="space-y-16">
          {projectsData.map((project, idx) => (
            <div
              key={idx}
              className="rounded-3xl p-6 sm:p-10 bg-[#08080a] border border-white/[0.08] hover:border-white/20 transition-all grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center group"
            >
              {/* Left Mockup / Interactive Frame */}
              <div className="lg:col-span-7 rounded-2xl bg-black border border-white/[0.08] overflow-hidden aspect-[16/10] relative flex flex-col shadow-2xl">
                {/* Browser bar */}
                <div className="px-4 py-2.5 bg-[#0e0e11] border-b border-white/[0.06] flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-white/20" />
                    <span className="w-2 h-2 rounded-full bg-white/20" />
                    <span className="w-2 h-2 rounded-full bg-white/20" />
                  </div>
                  <span className="text-[11px] font-mono text-neutral-500 truncate max-w-xs">
                    {project.liveUrl || 'https://theonevision.com/project'}
                  </span>
                  <div className="w-4" />
                </div>

                {/* Viewport Frame */}
                <div className="flex-1 relative bg-black overflow-hidden">
                  {project.liveUrl ? (
                    <iframe
                      src={project.liveUrl}
                      className="w-full h-full border-none pointer-events-none opacity-85 group-hover:opacity-100 transition-opacity"
                      title={project.name}
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-[#0c0c0e]">
                      <div className="text-xl font-medium text-white mb-2">{project.name}</div>
                      <div className="text-xs text-[#2563FF] font-mono">{project.category}</div>
                    </div>
                  )}
                </div>
              </div>

              {/* Right Content Details */}
              <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6">
                <div>
                  <div className="text-xs font-mono font-bold tracking-widest text-[#2563FF] uppercase mb-3">
                    {project.category}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-medium text-white tracking-tight mb-4">
                    {project.name}
                  </h3>
                  <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                    {project.shortDesc}
                  </p>
                </div>

                {project.liveUrl && (
                  <div>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black hover:bg-neutral-200 text-xs font-semibold tracking-wide transition-all shadow-sm active:scale-95"
                    >
                      <span>Visit Live Platform</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
