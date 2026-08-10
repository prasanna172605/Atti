import { motion } from 'motion/react';
import { Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f4f4f4] flex flex-col pt-4">
      {/* Header */}
      <header className="w-full px-4 md:px-6 py-2 max-w-7xl mx-auto flex items-center justify-between z-10 relative">
         <img src="/logo.png" alt="ATTI Community" className="h-10 w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 rounded-full object-cover shadow-sm bg-white" />
         <a href="#contact" className="inline-flex items-center justify-center px-4 md:px-6 py-2 md:py-2.5 bg-brand-blue text-white rounded-full font-bold uppercase tracking-widest text-xs hover:bg-blue-800 transition-colors">
            Get in touch
         </a>
      </header>

      {/* Top Ticker */}
      <div className="w-full flex whitespace-nowrap overflow-hidden text-gray-400 font-semibold text-sm md:text-base tracking-widest uppercase items-center border-y border-gray-300 py-4 mt-4 z-10 relative bg-white/50">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="flex items-center gap-8 px-4"
        >
          {Array(10).fill(['Technology', 'Design', 'Marketing', 'Innovation']).flat().map((text, i) => (
            <span key={i} className="flex items-center gap-8">
              <span>{text}</span>
              <Star className="w-3 h-3 fill-brand-blue text-brand-blue" />
            </span>
          ))}
        </motion.div>
      </div>

      <div className="flex-1 relative max-w-7xl mx-auto w-full px-6 flex flex-col justify-center mt-12 md:mt-0">
        <div className="relative z-10 w-full">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-[20vw] md:text-[14vw] leading-[0.8] text-brand-blue tracking-tighter"
          >
            Atti<br />
            <span className="flex items-center gap-2 md:gap-4 flex-wrap md:flex-nowrap mt-4 md:mt-0">
               <span className="text-[12vw] md:text-[10vw]">The Community</span>
               <span className="relative inline-block w-8 h-8 md:w-20 md:h-20 ml-2 md:ml-4 shrink-0 mt-2 md:mt-0">
                 <Star className="absolute top-0 left-0 w-full h-full fill-brand-blue text-brand-blue" />
               </span>
            </span>
          </motion.h1>
          
        </div>
      </div>

      {/* Right side floating shape */}
      <div className="absolute right-0 top-0 w-2/3 md:w-1/2 lg:w-1/3 h-full z-0 pointer-events-none flex justify-end">
         <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full text-white fill-current drop-shadow-2xl translate-x-1/4 md:translate-x-0">
            <path d="M100 0 C50 0, 50 50, 0 50 C50 50, 50 100, 100 100 Z" />
         </svg>
      </div>
    </section>
  )
}
