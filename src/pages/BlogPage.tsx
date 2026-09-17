import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import SEOHead from '../components/SEOHead';

export default function BlogPage() {
  const articles = [
    {
      slug: 'why-businesses-need-strategic-web-development-2026',
      title: 'Why Most Business Websites Fail to Generate Real Revenue in 2026',
      category: 'Web Strategy',
      readTime: '4 min read',
      date: 'Sept 2026',
      excerpt: 'Most websites are built as static brochureware that look pretty but leak high-intent leads every hour. Here is how modern conversion architecture solves this.'
    },
    {
      slug: 'how-to-rank-local-google-maps',
      title: 'Dominating Google Maps: How Local Businesses Capture Ready Inbound Clients',
      category: 'Local SEO',
      readTime: '5 min read',
      date: 'Aug 2026',
      excerpt: 'A practical breakdown of local citation networks, Google Business Profile signals, and automated review systems that drive consistent phone calls.'
    },
    {
      slug: 'ui-ux-design-systems-scale',
      title: 'Building Scalable UI/UX Design Systems for Growing Companies',
      category: 'UI/UX Design',
      readTime: '6 min read',
      date: 'July 2026',
      excerpt: 'How unified typography, component libraries, and modular design tokens eliminate technical debt and accelerate product velocity.'
    }
  ];

  return (
    <div className="pt-36 pb-24 sm:pt-44 sm:pb-32 bg-[#070e24]">
      <SEOHead 
        title="Insights & Strategy | One Vision Digital Solutions"
        description="Practical strategies on web development, conversion architecture, UI/UX design, and brand authority from the One Vision team in Ariyalur."
        canonicalUrl="/blog"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B183D] border border-[#2563FF]/30 text-[#E6F0FF] text-xs font-mono font-bold tracking-widest uppercase mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#2563FF]" />
          <span>INSIGHTS &amp; STRATEGY</span>
        </div>

        {/* Title */}
        <div className="max-w-4xl mb-16">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight leading-[1.08]">
            PERSPECTIVES ON{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563FF] to-blue-200 font-serif italic font-normal lowercase tracking-normal">
              digital growth
            </span>
          </h1>
          <p className="mt-6 text-neutral-300 text-base sm:text-lg leading-relaxed">
            Practical strategies on web development, conversion architecture, UI/UX design, and brand authority.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((art, idx) => (
            <article 
              key={idx}
              className="p-8 rounded-3xl bg-[#0B183D] border border-white/[0.08] hover:border-[#2563FF]/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-neutral-400 mb-6 pb-4 border-b border-white/[0.06]">
                  <span className="text-[#2563FF] font-bold uppercase">{art.category}</span>
                  <span>{art.readTime}</span>
                </div>

                <h2 className="text-xl font-bold text-white uppercase tracking-tight mb-4 group-hover:text-[#2563FF] transition-colors leading-snug">
                  {art.title}
                </h2>

                <p className="text-sm text-neutral-300 leading-relaxed mb-8">
                  {art.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                <span className="text-xs font-mono text-neutral-400">{art.date}</span>
                <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#2563FF] uppercase group-hover:translate-x-1 transition-transform">
                  READ ARTICLE <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
}
