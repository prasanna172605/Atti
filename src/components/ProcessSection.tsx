import React from 'react';
import { Search, Target, Map, BarChart2, Users, TrendingUp } from 'lucide-react';

const workflowSteps = [
  {
    num: "01",
    title: "Growth Audit",
    highlight: "Find What's Holding Growth Back.",
    desc: "We look at how your business attracts attention, builds trust, converts visitors, and follows up with opportunities. Then we identify where the biggest gaps are.",
  },
  {
    num: "02",
    title: "System Blueprint",
    highlight: "Map Out Your Growth System.",
    desc: "No generic advice. We design a specific growth system that connects your positioning, website, local presence, and ads into one cohesive engine.",
  },
  {
    num: "03",
    title: "Build & Launch",
    highlight: "Build the System Around Your Business.",
    desc: "We create the high-converting assets, optimize your local presence, set up targeted campaigns, and test everything before turning the engine on.",
  },
  {
    num: "04",
    title: "Optimize & Scale",
    highlight: "Improve What Works. Fix What Doesn't.",
    desc: "We monitor conversion bottlenecks, fine-tune messaging, optimize ad spend, and compound your inquiries month over month.",
  },
];

const systemComponents = [
  {
    icon: Search,
    title: "Buyer Research",
    desc: "Know Who You're Trying to Reach. We learn what your ideal customers care about, what makes them choose, and what stops them from taking action.",
  },
  {
    icon: Target,
    title: "Clear Positioning",
    desc: "Why They Should Choose You. We help your business communicate its value clearly, so the right one understands what you do and why it matters.",
  },
  {
    icon: Map,
    title: "Google Maps",
    desc: "Get Found by Local Buyers. Help nearby prospects discover your business when they're ready to take action and turn local searches into qualified enquiries.",
  },
  {
    icon: BarChart2,
    title: "Ads",
    desc: "Reach the Right People. Put your business in front of people actively looking for what you offer and turn high intent searches into qualified enquiries.",
  },
  {
    icon: Users,
    title: "Lead Capture",
    desc: "Make It Easy to Become a Lead. We remove unnecessary friction from the journey and create clear paths for qualified prospects to enquire.",
  },
  {
    icon: TrendingUp,
    title: "Sales Growth",
    desc: "Turn Leads Into Customers. Turn more enquiries into real business by improving the journey from lead to close and creating a smoother sales process.",
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-24 sm:py-32 bg-black relative border-b border-white/[0.08] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">

        {/* ── PART 1: How Your Lead Generation System Works ── */}
        <div className="mb-24">
          {/* Indicator pill */}
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2.5 h-2.5 rounded-sm bg-[#2563FF] flex-shrink-0" />
            <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
              How We Work
            </span>
          </div>

          {/* Heading */}
          <div className="mb-14 max-w-2xl">
            <h2 className="text-3xl sm:text-5xl font-normal text-white tracking-tight leading-[1.15]">
              How Your{' '}
              <span className="font-serif italic font-normal text-white/70">
                Lead Generation System
              </span>{' '}
              Works
            </h2>
            <p className="mt-4 text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
              Instead of isolated tactics, we build a cohesive lead generation engine designed to attract, qualify, and convert your ideal clients consistently.
            </p>
          </div>

          {/* 4-card roadmap with 50px watermark numbers */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {workflowSteps.map((step) => (
              <div
                key={step.num}
                className="p-7 rounded-2xl bg-[#08080b] border border-white/[0.08] hover:border-white/20 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                <div>
                  {/* Big 50px watermark number matching MaxGrowth style */}
                  <div className="text-[46px] font-medium text-white/20 leading-none mb-6 font-sans group-hover:text-white/30 transition-colors">
                    {step.num}
                  </div>
                  {/* Step Title */}
                  <h3 className="text-lg font-medium text-white mb-3 tracking-tight">
                    {step.title}
                  </h3>
                  {/* Description with highlight */}
                  <p className="text-sm text-neutral-400 leading-relaxed font-light">
                    <span className="text-neutral-200 font-normal">{step.highlight}</span>{' '}
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── PART 2: What Goes Into Your Lead Generation System ── */}
        <div>
          <div className="mb-12 max-w-2xl">
            <h3 className="text-2xl sm:text-4xl font-normal text-white tracking-tight leading-[1.15]">
              What Goes Into{' '}
              <span className="font-serif italic font-normal text-white/70">
                Your Lead Generation
              </span>{' '}
              System
            </h3>
            <p className="mt-3 text-sm text-neutral-400 font-light leading-relaxed">
              Every component connects directly into the next, ensuring no prospect falls through the cracks from discovery to final deal.
            </p>
          </div>

          {/* 6-card grid with micro-interactions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {systemComponents.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-7 rounded-2xl bg-[#08080b] border border-white/[0.07] hover:border-white/20 hover:bg-[#0c0c10] transition-all duration-300 group flex flex-col justify-between"
                >
                  <div>
                    {/* Icon */}
                    <div className="w-11 h-11 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center mb-6 group-hover:border-[#2563FF]/40 group-hover:bg-[#2563FF]/10 transition-all duration-300">
                      <Icon
                        className="w-5 h-5 text-neutral-400 group-hover:text-[#2563FF] transition-colors"
                        strokeWidth={1.75}
                      />
                    </div>
                    {/* Title */}
                    <h4 className="text-base font-semibold text-white mb-2 tracking-tight">
                      {item.title}
                    </h4>
                    {/* Description */}
                    <p className="text-sm text-neutral-400 leading-relaxed font-light group-hover:text-neutral-300 transition-colors">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
