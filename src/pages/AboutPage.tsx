import React from 'react';
import { ArrowRight, CheckCircle2, Phone, Mail, Instagram } from 'lucide-react';
import HandsGetInTouch from '../components/HandsGetInTouch';

export default function AboutPage() {
  const whyChooseUs = [
    {
      num: "01",
      title: "We Integrate Technology, Design & Marketing",
      desc: "Rather than treating development, branding, and marketing as separate silos, we build an interconnected digital system engineered to generate real business momentum."
    },
    {
      num: "02",
      title: "End-to-End Delivery: From Idea to Scale",
      desc: "We take your vision from initial wireframes and brand positioning through to production web deployment, search visibility, and client acquisition."
    },
    {
      num: "03",
      title: "Bespoke Engineering, No Bloated Templates",
      desc: "Every digital platform is custom-built for sub-second speeds, flawless mobile responsiveness, and high conversion authority."
    },
    {
      num: "04",
      title: "Focus on Direct Inquiries & Measurable Impact",
      desc: "We reject vanity clicks and empty metrics. Every section and call-to-action is structured around turning visitor attention into qualified customer inquiries."
    },
    {
      num: "05",
      title: "Collaborative, Direct Communication",
      desc: "We work with a select cohort of businesses at a time, providing clear roadmaps, proactive updates, and direct founder-level access."
    }
  ];

  const corePillars = [
    {
      title: "Technology & Engineering",
      desc: "Custom web development, fast modern frameworks, reliable cloud hosting, and smooth interactions engineered to win trust instantly."
    },
    {
      title: "Design & Brand Identity",
      desc: "Distinctive visual systems, intuitive UI/UX, and editorial typography that command attention and elevate brand authority."
    },
    {
      title: "Marketing & Acquisition",
      desc: "High-intent search engine visibility, Google optimization, and conversion-focused architectures that systematically capture ready buyers."
    }
  ];

  const founders = [
    {
      name: "Prasanna",
      role: "Founder",
      img: "/prasanna.jpg",
      bio: "Visionary behind The One Vision. Prasanna leads the strategic direction, client relationships, and overall product experience — ensuring every project delivers real business results."
    },
    {
      name: "Hari Karthick",
      role: "Co-Founder",
      img: "/hari-karthick.webp",
      bio: "Co-architect of The One Vision's systems. Hari drives the technical and design infrastructure — building the digital foundations that power client growth."
    }
  ];

  return (
    <div className="bg-[#000000] text-white min-h-screen selection:bg-white selection:text-black">

      {/* ── 1. HERO with teal/blue ambient glow (matching MaxGrowth about page) ── */}
      <section className="relative min-h-[90vh] flex flex-col justify-between overflow-hidden">

        {/* Teal glow background — exact MaxGrowth about page aesthetic */}
        <div className="absolute inset-0 z-0">
          {/* Dark base */}
          <div className="absolute inset-0 bg-[#000000]" />
          {/* Teal glow — bright like MaxGrowth about page */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[130%] h-[65%]"
            style={{
              background: 'radial-gradient(ellipse 85% 65% at 50% 100%, rgba(0,230,200,0.45) 0%, rgba(0,160,220,0.25) 35%, rgba(0,100,200,0.08) 60%, transparent 80%)',
            }}
          />
          {/* Secondary blue glow */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[40%]"
            style={{
              background: 'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(20,210,180,0.35) 0%, transparent 70%)',
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 pt-36 sm:pt-48 pb-16 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full flex-1 flex flex-col justify-center">

          {/* Main headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight leading-[1.08] text-white max-w-4xl">
            Building Digital Systems<br className="hidden sm:inline" />
            {' '}For{' '}
            <span className="font-serif italic font-normal">Ambitious Businesses</span>
          </h1>

          <p className="mt-8 text-base sm:text-lg text-neutral-400 max-w-2xl leading-relaxed font-light">
            Born from ATTI — The Community, The One Vision unites technology, design, and marketing into unified digital platforms that build credibility, capture attention, and drive long-term business growth.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black hover:bg-neutral-200 text-xs font-mono font-bold uppercase tracking-wider transition-all"
            >
              <span>Get started</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">
              Technology ✦ Design ✦ Marketing
            </span>
          </div>
        </div>

        {/* Bottom info bar — like MaxGrowth */}
        <div className="relative z-10 border-t border-white/[0.06] px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-neutral-500 uppercase tracking-widest">
          <span>Est. 2024</span>
          <span>Scroll to explore ↓</span>
          <span>We live in the details</span>
        </div>
      </section>

      {/* ── 2. STATS BAR ── */}
      <section className="border-y border-white/[0.08] bg-white/[0.01] py-12 px-6 sm:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="text-3xl sm:text-5xl font-light text-white tracking-tight">3+</div>
            <div className="text-xs font-mono text-neutral-400 uppercase tracking-widest mt-2">Projects Completed</div>
          </div>
          <div>
            <div className="text-3xl sm:text-5xl font-light text-white tracking-tight">100%</div>
            <div className="text-xs font-mono text-neutral-400 uppercase tracking-widest mt-2">Bespoke Engineering</div>
          </div>
          <div>
            <div className="text-3xl sm:text-5xl font-light text-white tracking-tight">1</div>
            <div className="text-xs font-mono text-neutral-400 uppercase tracking-widest mt-2">Unified Partner</div>
          </div>
          <div>
            <div className="text-3xl sm:text-5xl font-light text-white tracking-tight">0</div>
            <div className="text-xs font-mono text-neutral-400 uppercase tracking-widest mt-2">Template Bloat</div>
          </div>
        </div>
      </section>

      {/* ── 3. FOUNDER / ORIGIN STORY ── */}
      <section className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left: Heading & Origin Story */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#2563FF] block mb-3">
                OUR EVOLUTION
              </span>
              <h2 className="text-3xl sm:text-5xl font-light text-white tracking-tight leading-tight">
                From ATTI Collective<br />
                <span className="font-serif italic">To The One Vision</span>
              </h2>
            </div>

            <p className="text-white text-lg sm:text-xl font-light leading-relaxed">
              ATTI was originally founded as a student-led technology and creative collective to help businesses, creators, and organizations build a powerful digital presence through technology, design, and marketing.
            </p>

            <p className="text-neutral-300 text-base leading-relaxed font-light">
              As our clients' ambitions expanded, we saw the fundamental problem most growing businesses face: they hire one freelancer for a logo, another for development, and an agency for marketing. The result is a fragmented digital presence that fails to inspire trust or generate consistent customer inquiries.
            </p>

            <p className="text-neutral-300 text-base leading-relaxed font-light">
              To solve this, we rebranded and evolved into <strong>The One Vision</strong>: a single, unified digital partner where engineering precision, distinct visual branding, and customer acquisition work together in harmony.
            </p>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] space-y-3">
              <div className="text-xs font-mono uppercase tracking-widest text-[#2563FF]">
                The Three Pillars of The One Vision
              </div>
              <ul className="space-y-2.5 text-sm text-neutral-300">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563FF]" />
                  <strong>Technology</strong>: Fast, scalable, bespoke web platforms engineered for zero friction.
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563FF]" />
                  <strong>Design</strong>: Modern typography, high visual fidelity, and human-centric UI/UX.
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563FF]" />
                  <strong>Marketing</strong>: High-intent search discovery and conversion paths that turn visitors into paying clients.
                </li>
              </ul>
            </div>
          </div>

          {/* Right: Founders Stacked Vertically with Large Photos */}
          <div className="lg:col-span-6 space-y-8">
            <div className="mb-2">
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block">
                LEADERSHIP & ARCHITECTURE
              </span>
              <h3 className="text-2xl font-light text-white tracking-tight mt-1">
                The Minds Driving The Vision
              </h3>
            </div>

            {/* Founder 1: Prasanna */}
            <div className="rounded-3xl overflow-hidden border border-white/10 bg-[#08080c] hover:border-white/20 transition-all duration-300 flex flex-col sm:flex-row gap-6 p-6 sm:p-7 items-center sm:items-start">
              <div className="w-44 sm:w-48 h-56 sm:h-64 flex-shrink-0 rounded-2xl overflow-hidden border border-white/10 shadow-lg bg-[#111]">
                <img
                  src="/prasanna.jpg"
                  alt="Prasanna — Founder"
                  className="w-full h-full object-cover object-top filter grayscale contrast-115 hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="flex-1 text-center sm:text-left space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2563FF]/10 border border-[#2563FF]/30 text-xs font-mono font-bold text-[#2563FF] uppercase tracking-wider">
                  Founder
                </div>
                <h4 className="text-2xl font-semibold text-white tracking-tight">Prasanna</h4>
                <p className="text-sm text-neutral-400 leading-relaxed font-light">
                  Visionary behind The One Vision. Prasanna leads the strategic direction, client partnerships, and overall product experience — ensuring every project delivers real business results and sustainable authority.
                </p>
                <p className="text-xs font-mono text-neutral-500 pt-1">
                  Strategy • Client Growth • Brand Direction
                </p>
              </div>
            </div>

            {/* Founder 2: Hari Karthick */}
            <div className="rounded-3xl overflow-hidden border border-white/10 bg-[#08080c] hover:border-white/20 transition-all duration-300 flex flex-col sm:flex-row gap-6 p-6 sm:p-7 items-center sm:items-start">
              <div className="w-44 sm:w-48 h-56 sm:h-64 flex-shrink-0 rounded-2xl overflow-hidden border border-white/10 shadow-lg bg-[#111]">
                <img
                  src="/hari-karthick.webp"
                  alt="Hari Karthick — Co-Founder"
                  className="w-full h-full object-cover object-top filter grayscale contrast-115 hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="flex-1 text-center sm:text-left space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] border border-white/[0.12] text-xs font-mono font-bold text-white uppercase tracking-wider">
                  Co-Founder
                </div>
                <h4 className="text-2xl font-semibold text-white tracking-tight">Hari Karthick</h4>
                <p className="text-sm text-neutral-400 leading-relaxed font-light">
                  Co-architect of The One Vision's systems. Hari drives the technical and design infrastructure — building the digital platforms, performance architectures, and experiences that power client acquisition.
                </p>
                <p className="text-xs font-mono text-neutral-500 pt-1">
                  Technology • Design Systems • Web Architecture
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 3.5 INSTAGRAM SHOWCASE SECTION ── */}
      <section className="py-20 border-t border-white/[0.08] bg-[#040406] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            
            {/* Left Copy & CTA */}
            <div className="max-w-xl space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-indigo-500/10 border border-purple-500/30 text-xs font-mono uppercase tracking-widest text-purple-400">
                <Instagram className="w-3.5 h-3.5 text-pink-400" />
                <span>@theonevision.in</span>
              </div>

              <h3 className="text-3xl sm:text-5xl font-light text-white tracking-tight leading-tight">
                Follow The Journey<br />
                <span className="font-serif italic font-normal text-neutral-300">Behind The Scenes</span>
              </h3>

              <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
                Stay updated with our latest design breakdowns, technology architectures, and growth insights. Watch how we transform ideas into impactful digital systems.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <a
                  href="https://www.instagram.com/theonevision.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white font-semibold text-sm hover:opacity-95 transition-all shadow-[0_4px_24px_rgba(253,29,29,0.3)] active:scale-95 cursor-pointer"
                >
                  <Instagram className="w-4 h-4" />
                  <span>Follow the Journey</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <span className="text-xs font-mono text-neutral-500">
                  Instagram • Daily Updates
                </span>
              </div>
            </div>

            {/* Right: Instagram Profile Screenshot Card */}
            <div className="w-full max-w-md">
              <div className="rounded-3xl border border-white/10 bg-[#08080a] p-3 shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative group overflow-hidden">
                <div className="rounded-2xl overflow-hidden border border-white/[0.08] bg-black">
                  <img
                    src="/insta_ss.jpeg"
                    alt="The One Vision Instagram @theonevision.in"
                    className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
                <div className="p-3 text-center">
                  <p className="text-xs font-mono text-neutral-400">@theonevision.in ✦ Official Instagram</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 4. WHY CLIENTS CHOOSE US ── */}
      <section className="py-24 border-t border-white/[0.08] bg-[#030303]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-[#2563FF] block mb-3">
              THE STANDARD
            </span>
            <h2 className="text-3xl sm:text-5xl font-light text-white tracking-tight">
              Why Businesses Choose<br />
              <span className="font-serif italic">The One Vision</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-white/20 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-mono text-neutral-500 uppercase tracking-widest mb-6">
                    [ PRINCIPLE // {item.num} ]
                  </div>
                  <h3 className="text-lg font-normal text-white mb-3">{item.title}</h3>
                  <p className="text-sm text-neutral-400 leading-relaxed font-light">{item.desc}</p>
                </div>
                <div className="mt-8 pt-4 border-t border-white/[0.04] flex items-center justify-between">
                  <span className="text-[11px] font-mono text-neutral-500 uppercase tracking-widest">Built to Win</span>
                  <CheckCircle2 className="w-4 h-4 text-white/40" />
                </div>
              </div>
            ))}

            {/* CTA Card */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-[#0c0c0c] to-[#040404] border border-white/[0.12] flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#2563FF] block mb-4">
                  DIRECT COLLABORATION
                </span>
                <h3 className="text-2xl font-light text-white mb-3">
                  Ready to architect your digital presence?
                </h3>
                <p className="text-sm text-neutral-400 font-light leading-relaxed">
                  Connect directly with our team to explore how we can bring your digital vision to life.
                </p>
              </div>
              <a
                href="/contact"
                className="mt-8 inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-white text-black hover:bg-neutral-200 text-xs font-mono font-bold uppercase tracking-wider transition-all"
              >
                <span>Book Strategy Call</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. THREE CORE DISCIPLINES ── */}
      <section className="py-24 sm:py-32 px-6 sm:px-8 max-w-7xl mx-auto border-t border-white/[0.08]">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#2563FF] block mb-3">
            INTERCONNECTED CAPABILITIES
          </span>
          <h2 className="text-3xl sm:text-5xl font-light text-white tracking-tight">
            Technology ✦ Design ✦ Marketing<br />
            <span className="font-serif italic">Working As One</span>
          </h2>
          <p className="mt-4 text-sm text-neutral-400 font-light">
            Real momentum occurs when code performance, brand elevation, and customer acquisition operate in sync.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {corePillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-white/20 transition-all"
            >
              <div className="text-3xl font-light text-white/30 font-mono mb-6">0{idx + 1}</div>
              <h3 className="text-xl font-normal text-white mb-4">{pillar.title}</h3>
              <p className="text-sm text-neutral-400 leading-relaxed font-light">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 6. DIRECT CONTACT BANNER ── */}
      <section className="py-16 px-6 sm:px-8 max-w-7xl mx-auto">
        <div className="rounded-3xl border border-white/[0.08] bg-[#050505] p-8 sm:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#2563FF] block mb-2">
              DIRECT ACCESS
            </span>
            <h3 className="text-2xl sm:text-3xl font-light text-white tracking-tight">
              Reach out directly to our team
            </h3>
            <p className="mt-3 text-sm text-neutral-400 font-light leading-relaxed">
              Have questions about your project scope or timeline? Message us directly on WhatsApp or email us.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-6 text-xs font-mono text-neutral-300">
              <span className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#2563FF]" />
                +91 8760668866
              </span>
              <span className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#2563FF]" />
                onevision001.in@gmail.com
              </span>
            </div>
          </div>
          <a
            href="https://wa.me/918760668866"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 hover:bg-white hover:text-black text-xs font-mono uppercase tracking-widest text-white transition-all whitespace-nowrap"
          >
            <span>Message on WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* ── 7. HANDS GET IN TOUCH ── */}
      <HandsGetInTouch />

    </div>
  );
}
