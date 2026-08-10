import { ExternalLink } from 'lucide-react';

export default function PortfolioGallery() {
  return (
    <section className="bg-brand-blue text-white overflow-hidden py-32 relative">
       {/* SVG Definitions for Clip Path */}
       <svg width="0" height="0" className="absolute">
         <defs>
           <clipPath id="star-cutout" clipPathUnits="objectBoundingBox">
              <path d="M0.5,0 C0.5,0.5 1,0.5 1,0.5 C0.5,0.5 0.5,1 0.5,1 C0.5,0.5 0,0.5 0,0.5 C0.5,0.5 0.5,0 0.5,0 Z" />
           </clipPath>
         </defs>
       </svg>

       <div className="max-w-7xl mx-auto px-6 relative z-10 w-full flex flex-col items-center">
          <h2 className="font-sans font-black text-6xl md:text-8xl leading-tight uppercase tracking-tighter mb-16 text-center">
             Our projects
          </h2>

          <div className="w-full bg-white rounded-3xl p-6 md:p-12 shadow-2xl text-gray-900 flex flex-col lg:flex-row gap-12 items-center">
             <div className="w-full lg:w-1/2">
                <div className="bg-gray-100 rounded-xl overflow-hidden border border-gray-200 aspect-square md:aspect-[4/3] shadow-inner relative group">
                   <iframe 
                     src="https://srivenkateswara-decoration-centre.web.app/" 
                     className="absolute top-0 left-0 w-[400%] h-[400%] origin-top-left scale-[0.25] md:w-[200%] md:h-[200%] md:scale-[0.5] pointer-events-none"
                     title="Sri Venkateswara Decoration Centre"
                   />
                   <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors pointer-events-none"></div>
                </div>
             </div>
             
             <div className="w-full lg:w-1/2 flex flex-col items-start">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-blue/10 text-brand-blue rounded-full text-sm font-bold uppercase tracking-wider mb-6">
                   Web Development
                </div>
                <h3 className="text-3xl md:text-5xl font-black tracking-tight mb-4 text-brand-blue">
                   Sri Venkateswara Decoration Centre
                </h3>
                <p className="text-gray-600 text-lg mb-8 font-medium leading-relaxed">
                   A complete digital presence and portfolio website crafted to showcase decoration services with high visual fidelity, seamless user experience, and modern web standards.
                </p>
                <a 
                   href="https://srivenkateswara-decoration-centre.web.app/"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="inline-flex items-center gap-2 bg-brand-blue text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-800 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-brand-blue/30"
                >
                   Visit Website <ExternalLink className="w-5 h-5" />
                </a>
             </div>
          </div>
       </div>
    </section>
  )
}
