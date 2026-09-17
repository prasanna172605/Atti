import React, { useRef } from 'react';
import { MAXGROWTH_ASSETS } from '../data/maxgrowthImages';

const testimonials = [
  {
    company: "Sri Venkateswara Decoration Centre",
    person: "Founder & Proprietor",
    location: "Ariyalur, India",
    text: "The One Vision built our complete digital presence from scratch. The website showcases our decoration work with incredible clarity and professionalism. Our clients can now easily explore our portfolio and inquiries have more than doubled since launch.",
    initial: "S",
  },
  {
    company: "Jadmaa",
    person: "Founder",
    location: "Ariyalur, India",
    text: "Working with The One Vision was a smooth and professional experience from start to finish. They understood our brand vision and delivered a website that truly represents what Jadmaa stands for. The result has been better engagement from potential clients.",
    initial: "J",
  },
  {
    company: "Vajraa Fitness Arts",
    person: "Director",
    location: "Ariyalur, India",
    text: "We needed a website that communicated the power and discipline behind our fitness academy. The One Vision nailed every detail — the design, the speed, and the overall feel. Our online presence has never looked this professional.",
    initial: "V",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-28 sm:py-36 bg-black border-b border-white/[0.08] overflow-hidden">
      {/* Full Background: Two hands image */}
      <div className="absolute inset-0 z-0">
        <img
          src={MAXGROWTH_ASSETS.contact.handsConnecting}
          alt="Hands Background"
          className="w-full h-full object-cover object-center opacity-40 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="text-3xl sm:text-5xl font-normal text-white tracking-tight">
            Trusted By Growing Businesses
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg font-light">
            Businesses work with us because we focus on what matters:
          </p>
        </div>

        {/* Testimonial Cards — revealed as you scroll */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="group p-7 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm hover:border-white/20 hover:bg-white/[0.06] transition-all duration-300 flex flex-col justify-between"
              style={{
                animationDelay: `${idx * 0.15}s`,
              }}
            >
              {/* Quote mark */}
              <div>
                <div className="text-5xl font-serif text-white/10 leading-none mb-4 select-none">"</div>
                <p className="text-neutral-300 text-sm leading-relaxed font-light">
                  {t.text}
                </p>
              </div>

              {/* Brand info */}
              <div className="mt-8 pt-5 border-t border-white/[0.06] flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#2563FF]/20 border border-[#2563FF]/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold text-[#2563FF]">{t.initial}</span>
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-white">{t.company}</p>
                  <p className="text-[11px] text-neutral-500">{t.person} · {t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
