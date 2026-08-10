import { Mail, Phone, Star } from 'lucide-react';

export default function About() {
  return (
    <section className="py-32 max-w-7xl mx-auto px-6">
      <div className="flex flex-col lg:flex-row gap-20 items-center">
        {/* Left Side: Astroid Shape Image */}
        <div className="w-full max-w-xs md:max-w-md lg:max-w-none lg:w-1/3 relative flex justify-center items-center aspect-square mx-auto">
          <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full text-brand-blue fill-current transform scale-125">
             <path d="M50 0 C50 50 100 50 100 50 C50 50 50 100 50 100 C50 50 0 50 0 50 C50 50 50 0 50 0 Z"/>
          </svg>
          
          <div className="relative z-10 w-3/4 h-3/4 bg-gray-200 overflow-hidden shadow-2xl rounded-2xl rotate-3">
             <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" alt="ATTI Team" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
          </div>
          
          {/* Circular Text */}
          <div className="absolute -inset-4 border border-gray-300 rounded-full animate-[spin_20s_linear_infinite]">
             <svg viewBox="0 0 100 100" className="w-full h-full text-gray-400 overflow-visible">
               <path id="curve" d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" fill="transparent" />
               <text width="500" className="text-[5.5px] tracking-[0.2em] font-semibold uppercase">
                 <textPath href="#curve" startOffset="0%">
                   Making Businesses Look Great Since Day One • Making Businesses Look Great Since Day One • 
                 </textPath>
               </text>
             </svg>
          </div>
        </div>

        {/* Right Side: Text */}
        <div className="w-full lg:w-2/3">
          <h2 className="font-sans font-black text-6xl md:text-8xl uppercase tracking-tighter mb-4">ABOUT US</h2>
          <h3 className="font-serif text-4xl text-brand-blue mb-2">ATTI — The Community</h3>
          <p className="text-lg font-bold text-gray-800 mb-8 uppercase tracking-widest flex items-center gap-2 flex-wrap">
            Technology <span className="text-brand-blue">✦</span> 
            Design <span className="text-brand-blue">✦</span> 
            Marketing
          </p>
          
          <div className="space-y-6 text-gray-700 leading-relaxed max-w-2xl text-lg font-medium">
            <p>
              ATTI is a student-led technology and creative community founded to help businesses, creators, students, and organizations build a stronger digital presence through technology, design, marketing, and innovation.
            </p>
            <p>
              We combine development and creative skills to provide practical digital solutions rather than treating each service separately.
            </p>
            <p>
              Instead of simply delivering a website or a design, we aim to help a client move from idea to digital presence, audience, and exponential growth.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Grid */}
      <div className="mt-32 grid grid-cols-1 lg:grid-cols-3 gap-16 border-t-4 border-brand-blue pt-12">
         <div>
            <h4 className="text-3xl font-bold text-brand-blue mb-8 tracking-tight">Contact</h4>
            <ul className="space-y-6 text-gray-900 font-bold text-lg">
               <li className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-blue rounded-xl flex items-center justify-center text-white shadow-lg shrink-0"><Phone size={24} /></div>
                  <span>+91 8760668866</span>
               </li>
               <li className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-blue rounded-xl flex items-center justify-center text-white shadow-lg shrink-0"><Mail size={24} /></div>
                  <span>attiofficial.in@gmail.com</span>
               </li>
            </ul>
         </div>

         <div className="lg:col-span-2">
            <h4 className="text-3xl font-bold text-brand-blue mb-8 tracking-tight">Who We Work With</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ul className="space-y-4 text-gray-900 font-bold text-lg">
                <li className="flex items-start gap-3"><Star className="w-6 h-6 fill-brand-blue text-brand-blue shrink-0" /> Local businesses and startups</li>
                <li className="flex items-start gap-3"><Star className="w-6 h-6 fill-brand-blue text-brand-blue shrink-0" /> Small and medium-sized businesses</li>
                <li className="flex items-start gap-3"><Star className="w-6 h-6 fill-brand-blue text-brand-blue shrink-0" /> Creators and professionals</li>
              </ul>
              <ul className="space-y-4 text-gray-900 font-bold text-lg">
                <li className="flex items-start gap-3"><Star className="w-6 h-6 fill-brand-blue text-brand-blue shrink-0" /> Students and educational institutions</li>
                <li className="flex items-start gap-3"><Star className="w-6 h-6 fill-brand-blue text-brand-blue shrink-0" /> Event and service-based businesses</li>
                <li className="flex items-start gap-3"><Star className="w-6 h-6 fill-brand-blue text-brand-blue shrink-0" /> Individuals building personal brands</li>
              </ul>
            </div>
         </div>
      </div>
    </section>
  )
}
