import { Monitor, PenTool, TrendingUp, UserCheck, Video, Star } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: "Web & Software",
      icon: <Monitor className="w-12 h-12" />,
      items: ["Business websites & landing pages", "Custom web applications", "Dashboards & analytics", "API & backend development"]
    },
    {
      title: "UI/UX & Design",
      icon: <PenTool className="w-12 h-12" />,
      items: ["Website & Mobile UI/UX", "Branding & visual identity", "Social media creatives", "Figma-based prototypes"]
    },
    {
      title: "Digital Marketing",
      icon: <TrendingUp className="w-12 h-12" />,
      items: ["Social media management", "Meta advertising & SEO", "Lead-generation campaigns", "Online brand growth"]
    },
    {
      title: "Personal Branding",
      icon: <UserCheck className="w-12 h-12" />,
      items: ["Personal portfolios", "LinkedIn/Instagram positioning", "Content strategy", "SEO and discoverability"]
    },
    {
      title: "Photo / Video Editing",
      icon: <Video className="w-12 h-12" />,
      items: ["Social media reels & shorts", "YouTube video editing", "Product photography editing", "Color grading & retouching"]
    }
  ];

  return (
    <section className="py-24 max-w-7xl mx-auto px-6 border-t-2 border-gray-100">
      <h4 className="text-4xl md:text-5xl font-black text-brand-blue mb-16 uppercase tracking-tighter text-center">What We Do</h4>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
         {services.map((s, i) => (
            <div key={i} className="group relative bg-white border border-gray-200 rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden h-[320px] flex flex-col justify-center">
              {/* Default State */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 transition-opacity duration-300 group-hover:opacity-0 bg-white z-10">
                 <div className="text-brand-blue mb-6">
                    {s.icon}
                 </div>
                 <h5 className="text-2xl font-black text-gray-900 tracking-tight text-center">
                    {s.title}
                 </h5>
              </div>

              {/* Hover State - Details */}
              <div className="absolute inset-0 bg-brand-blue text-white p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex flex-col">
                 <h5 className="text-xl font-black mb-6 tracking-tight flex items-center gap-2">
                    <Star className="w-5 h-5 fill-current" /> {s.title}
                 </h5>
                 <ul className="space-y-3 font-medium flex-1 overflow-y-auto">
                    {s.items.map((item, j) => (
                       <li key={j} className="flex items-start gap-2 text-sm md:text-base">
                          <span className="text-white mt-1">✦</span>
                          {item}
                       </li>
                    ))}
                 </ul>
              </div>
            </div>
         ))}
      </div>
    </section>
  )
}
