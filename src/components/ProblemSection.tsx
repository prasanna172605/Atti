import React from 'react';
import { Target, Users, Megaphone, MousePointerClick } from 'lucide-react';

export default function ProblemSection() {
  const problems = [
    {
      icon: Megaphone,
      title: "You run ads, but the leads aren't right",
      desc: "Ad spend produces unqualified inquiries looking for bargain prices or services you don't offer, burning your marketing budget with low ROI."
    },
    {
      icon: Users,
      title: "You get visitors but very few enquiries",
      desc: "Prospects land on your website, glance around for 10 seconds, and bounce without contacting you because your site doesn't compel action."
    },
    {
      icon: Target,
      title: "You get attention, but not enough interest",
      desc: "Your business has exceptional capability, but your digital positioning sounds just like every competitor, forcing clients to judge you solely on price."
    },
    {
      icon: MousePointerClick,
      title: "You get clicks, but not enough enquiries",
      desc: "Attention gets lost in friction-heavy contact forms and vague value propositions that fail to guide ready buyers to book or call."
    }
  ];

  return (
    <section className="py-24 sm:py-32 bg-black relative border-b border-white/[0.08] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">

        {/* ── Section Pill indicator matching MaxGrowth ── */}
        <div className="flex items-center gap-2 mb-6">
          <span className="w-2.5 h-2.5 rounded-sm bg-[#2563FF] flex-shrink-0" />
          <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
            The Real Problem
          </span>
        </div>

        {/* ── Heading with Serif Italic Emphasis ── */}
        <h2 className="text-3xl sm:text-5xl font-normal text-white tracking-tight leading-[1.15] max-w-3xl mb-5">
          Why{' '}
          <span className="font-serif italic font-normal text-white/70">
            Most Businesses
          </span>{' '}
          Never Get Steady Leads
        </h2>

        {/* ── Subtitle ── */}
        <p className="text-sm sm:text-base text-neutral-400 max-w-2xl leading-relaxed mb-16 font-light">
          Most businesses struggle with inconsistent leads not because they don't work hard, but because their marketing channels operate in silos instead of one unified growth engine.
        </p>

        {/* ── 4-column diagnostic grid with circular icon containers ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-white/[0.08] rounded-2xl overflow-hidden bg-[#070709] divide-y lg:divide-y-0 lg:divide-x divide-white/[0.08]">
          {problems.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="p-8 flex flex-col justify-between hover:bg-[#0c0c10] transition-colors duration-200"
              >
                <div>
                  {/* Circular icon container like MaxGrowth */}
                  <div className="w-12 h-12 rounded-full bg-[#101014] border border-white/10 flex items-center justify-center text-white mb-6">
                    <Icon className="w-5 h-5 text-white/90" strokeWidth={1.75} />
                  </div>
                  <h3 className="text-base font-semibold text-white mb-3 tracking-tight leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-sm text-neutral-400 leading-relaxed font-light">
                    {p.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Takeaway Banner ── */}
        <div className="mt-8 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#0c0c12] via-[#09090c] to-[#0c0c12] border border-white/[0.08] text-center">
          <p className="text-base sm:text-lg text-neutral-200 font-light">
            <span className="text-white font-medium">Traffic was never the problem.</span>{' '}
            Turning attention into customers is.
          </p>
          <p className="text-xs sm:text-sm text-neutral-500 mt-2 font-light">
            When your positioning, website, local presence, and ads all reinforce each other, visitors become qualified inquiries effortlessly.
          </p>
        </div>

      </div>
    </section>
  );
}
