import { Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  const team = [
    {
      name: "Prasanna",
      role: "Founder",
      image: "/prasanna.jpg",
      linkedin: "https://www.linkedin.com/in/prasanna-iyappan-b728042a3/"
    },
    {
      name: "Hari Karthick",
      role: "Co-Founder",
      image: "/hari-karthick.webp",
      linkedin: "https://www.linkedin.com/in/harikarthick12/"
    },
    {
      name: "Selvakumaran",
      role: "Core Team",
      image: "/selva-kumaran.webp",
      linkedin: "https://www.linkedin.com/in/selvakumaran-dev/"
    },
    {
      name: "Siva",
      role: "Core Team",
      image: "/siva.webp",
      linkedin: "#"
    }
  ];

  return (
    <footer className="bg-brand-blue text-white overflow-hidden pt-32 relative flex flex-col items-center">
       <h2 className="font-sans font-black text-[8vw] md:text-[6vw] uppercase tracking-tighter mb-20 text-center leading-[0.9]">
         Team behind<br/>the screen
       </h2>

       {/* Team Grid */}
       <div className="w-full max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 mb-32 z-10 relative">
          {team.map((member, i) => (
             <div key={i} className="flex flex-col items-center group">
                <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white/20 mb-6 group-hover:border-white transition-colors duration-300">
                   <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold font-sans tracking-tight mb-1">{member.name}</h3>
                <p className="text-blue-300 font-medium mb-4 uppercase tracking-widest text-xs md:text-sm">{member.role}</p>
                <a href={member.linkedin} className="text-white/60 hover:text-white transition-colors">
                   <Linkedin className="w-5 h-5" />
                </a>
             </div>
          ))}
       </div>

       {/* Bottom Footer Area */}
       <div className="w-full bg-white text-gray-900 py-16 px-6 flex flex-col items-center relative z-10">
          <div className="flex flex-col lg:flex-row gap-8 items-center justify-between w-full max-w-7xl mt-8">
            <div className="text-4xl font-black tracking-tighter text-brand-blue">
               ATTI <span className="font-serif italic font-normal text-3xl ml-2">The Community</span>
            </div>
            <div className="flex gap-8 font-bold text-xl uppercase tracking-widest text-gray-400">
               <a href="https://www.instagram.com/atticommunity?igsh=MXM4OTZ4bjdsNHduaw==" target="_blank" rel="noopener noreferrer" className="hover:text-brand-blue transition-colors flex items-center gap-2">
                 <Instagram className="w-6 h-6" /> Instagram
               </a>
               <a href="https://www.linkedin.com/in/attiofficial-community-39998941b/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-blue transition-colors flex items-center gap-2">
                 <Linkedin className="w-6 h-6" /> LinkedIn
               </a>
            </div>
            <div className="text-gray-400 font-bold tracking-wide">© {new Date().getFullYear()} ATTI. All rights reserved.</div>
          </div>
       </div>
    </footer>
  )
}
