import { motion } from 'motion/react';

export default function Approach() {
  const steps = [
    { title: "Design it.", content: "Crafting beautiful, user-centric interfaces and robust brand identities.", rotation: "-rotate-3", pos: "md:top-10 md:left-4 lg:left-12", color: "text-blue-700" },
    { title: "Build it.", content: "Developing scalable, performant software and digital products.", rotation: "rotate-2", pos: "md:top-40 md:right-4 lg:right-12", color: "text-blue-700" },
    { title: "Market it.", content: "Driving growth through SEO, paid ads, and targeted social strategies.", rotation: "-rotate-1", pos: "md:bottom-40 md:left-4 lg:left-24", color: "text-blue-700" },
    { title: "Grow it.", content: "Iterating and scaling to build a lasting digital presence.", rotation: "rotate-3", pos: "md:bottom-10 md:right-4 lg:right-24", color: "text-blue-700" }
  ];

  return (
    <section className="relative min-h-[900px] bg-brand-blue overflow-hidden py-24">
      {/* Blueprint Grid Background */}
      <div className="absolute inset-0 opacity-[0.15]" style={{ 
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 1) 1px, transparent 1px)`,
        backgroundSize: '40px 40px' 
      }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full">
         <h2 className="text-center font-sans font-black text-[10vw] md:text-7xl text-white mb-24 uppercase tracking-tighter mix-blend-overlay">Our Approach</h2>
         
         <div className="relative flex flex-col md:block gap-12 md:gap-0 md:h-[750px] w-full max-w-5xl mx-auto mt-12 pb-12 md:pb-0">
            {/* SVG String connecting them */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none hidden md:block" viewBox="0 0 1000 750" preserveAspectRatio="xMidYMid slice">
               <path d="M 200 150 Q 500 250 800 250 T 300 500 T 750 650" fill="none" stroke="#dc2626" strokeWidth="4" strokeLinecap="round" strokeDasharray="8 8" className="drop-shadow-lg opacity-80" />
            </svg>

            {steps.map((step, i) => (
               <motion.div 
                 key={i}
                 whileHover={{ scale: 1.05, zIndex: 30 }}
                 className={`relative md:absolute ${step.pos} ${step.rotation} bg-white p-8 shadow-2xl w-full max-w-sm md:w-[350px] mx-auto md:mx-0 cursor-pointer rounded-sm`}
                 style={{
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 15px rgba(255,255,255,0.1)'
                 }}
               >
                  {/* Pin */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-red-600 rounded-full shadow-md border-b-2 border-red-800 z-10">
                     <div className="absolute top-1 left-1 w-2 h-2 bg-white/60 rounded-full"></div>
                  </div>
                  
                  {/* Tape */}
                  <div className="absolute -top-3 -left-4 w-16 h-6 bg-amber-100/90 -rotate-12 backdrop-blur-sm shadow-sm z-0"></div>

                  <h3 className="font-serif font-bold text-4xl text-brand-blue mb-4 text-center mt-2">{step.title}</h3>
                  <p className={`text-3xl font-hand leading-tight ${step.color} text-center`}>{step.content}</p>
               </motion.div>
            ))}
         </div>
      </div>
    </section>
  )
}
