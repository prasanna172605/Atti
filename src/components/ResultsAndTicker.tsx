import React, { useEffect, useRef, useState } from 'react';

interface CounterProps {
  end: number;
  suffix: string;
  duration?: number;
}

function AnimatedCounter({ end, suffix, duration = 2000 }: CounterProps) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, end, duration]);

  return (
    <div ref={ref} className="text-7xl sm:text-8xl font-normal tracking-tight text-white">
      {count}{suffix}
    </div>
  );
}

const brandLogos = [
  { name: "Jadmaa Varmakalai", src: "/brand trust us logos/Jadmaa.png" },
  { name: "Team Vajra Fitness Arts", src: "/brand trust us logos/vajra.png" },
  { name: "Sri Venkateswara Decoration Centre", src: "/brand trust us logos/srivenkateshwara.png" },
];

export default function ResultsAndTicker() {
  // Duplicate for smooth infinite marquee carousel
  const marqueeList = [...brandLogos, ...brandLogos, ...brandLogos, ...brandLogos];

  return (
    <section className="py-24 sm:py-32 bg-black relative border-b border-white/[0.08] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">

        {/* ── Indicator pill — exact MaxGrowth style ── */}
        <div className="flex items-center gap-2 mb-8">
          <span className="w-2.5 h-2.5 rounded-sm bg-[#2563FF] flex-shrink-0" />
          <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
            Indicator
          </span>
        </div>

        {/* ── Heading — exact MaxGrowth copy ── */}
        <h2 className="text-3xl sm:text-5xl font-normal text-white tracking-tight leading-[1.15] max-w-3xl mb-5">
          Results Driven{' '}
          <span className="font-serif italic font-normal text-neutral-300">By Strategy</span>
          {', '}Not Guesswork
        </h2>

        <p className="text-sm sm:text-base text-neutral-400 max-w-xl mb-16 leading-relaxed">
          Every part of your system is built to attract better fit leads, build trust faster, and make it easier for the right prospects to take action.
        </p>

        {/* ── 3 Big Animated Numbers — exact MaxGrowth layout ── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-6 mb-20 border-b border-white/[0.08] pb-16">
          <div>
            <AnimatedCounter end={90} suffix="%" />
            <p className="text-sm text-neutral-400 mt-2 font-normal">Client growth</p>
          </div>
          <div>
            <AnimatedCounter end={10} suffix="X" />
            <p className="text-sm text-neutral-400 mt-2 font-normal">More Conversion Opportunities</p>
          </div>
          <div>
            <AnimatedCounter end={100} suffix="%" />
            <p className="text-sm text-neutral-400 mt-2 font-normal">Bespoke Delivery</p>
          </div>
        </div>

        {/* ── THE BRANDS THAT TRUSTED US (Image-only marquee carousel, small height, no cards, no redirect) ── */}
        <div className="pt-4">
          <div className="text-center text-xs uppercase tracking-[0.3em] text-neutral-400 mb-12 font-mono font-medium">
            THE BRANDS THAT TRUSTED US
          </div>

          {/* Marquee Carousel with fade gradients on edges */}
          <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
            <div className="animate-marquee items-center gap-16 sm:gap-24 py-4">
              {marqueeList.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-center shrink-0 cursor-default select-none"
                >
                  <img
                    src={item.src}
                    alt={item.name}
                    className="h-10 sm:h-12 w-auto max-w-[140px] sm:max-w-[170px] object-contain opacity-75 hover:opacity-100 transition-opacity duration-300 filter contrast-125"
                    draggable={false}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
