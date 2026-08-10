import React, { useState } from 'react';
import { Send, Star } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', description: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple state handler for UI feedback
    setSubmitted(true);
    setFormData({ name: '', email: '', description: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="py-32 max-w-7xl mx-auto px-6 relative" id="contact">
      <div className="flex flex-col lg:flex-row gap-16 items-center bg-gray-50 rounded-[40px] p-8 md:p-16 shadow-lg border border-gray-100">
        {/* Left Side */}
        <div className="w-full lg:w-1/2 relative">
           <Star className="absolute -top-12 -left-8 w-24 h-24 fill-brand-blue text-brand-blue opacity-20" />
           <h2 className="font-sans font-black text-5xl md:text-7xl uppercase tracking-tighter mb-6 text-gray-900 leading-[0.9]">
             Let's build<br/><span className="text-brand-blue">together.</span>
           </h2>
           <p className="text-lg text-gray-600 font-medium max-w-md mb-8">
             Ready to scale your digital presence? Tell us about your idea and we'll help you bring it to life with precision and creativity.
           </p>
           <div className="hidden lg:block w-3/4 h-64 bg-gray-200 rounded-3xl overflow-hidden mt-8 shadow-inner">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600" alt="Collaboration" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
           </div>
        </div>

        {/* Right Side - Form */}
        <div className="w-full lg:w-1/2">
           <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100 relative overflow-hidden">
             {/* Decorative top strip */}
             <div className="absolute top-0 left-0 w-full h-2 bg-brand-blue"></div>

             {submitted ? (
               <div className="flex flex-col items-center justify-center py-20 text-center animate-in fade-in zoom-in duration-500">
                 <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                   <Send className="w-10 h-10 ml-2" />
                 </div>
                 <h3 className="text-3xl font-black tracking-tight text-gray-900 mb-4">Message Sent!</h3>
                 <p className="text-gray-600 font-medium">Thank you for reaching out. Our team will get back to you shortly.</p>
                 <button onClick={() => setSubmitted(false)} className="mt-8 text-brand-blue font-bold uppercase tracking-widest text-sm hover:underline">
                   Send another message
                 </button>
               </div>
             ) : (
               <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                 <h3 className="text-2xl font-black tracking-tight text-gray-900 mb-2">Drop us a line</h3>
                 
                 <div>
                   <label htmlFor="name" className="block text-sm font-bold uppercase tracking-widest text-gray-700 mb-2">Name</label>
                   <input 
                     type="text" 
                     id="name" 
                     name="name" 
                     value={formData.name}
                     onChange={handleChange}
                     required
                     className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all font-medium"
                     placeholder="Jane Doe"
                   />
                 </div>

                 <div>
                   <label htmlFor="email" className="block text-sm font-bold uppercase tracking-widest text-gray-700 mb-2">Email</label>
                   <input 
                     type="email" 
                     id="email" 
                     name="email" 
                     value={formData.email}
                     onChange={handleChange}
                     required
                     className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all font-medium"
                     placeholder="jane@example.com"
                   />
                 </div>

                 <div>
                   <label htmlFor="description" className="block text-sm font-bold uppercase tracking-widest text-gray-700 mb-2">Project Description</label>
                   <textarea 
                     id="description" 
                     name="description" 
                     value={formData.description}
                     onChange={handleChange}
                     required
                     rows={4}
                     className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all font-medium resize-none"
                     placeholder="Tell us about your project, goals, and timeline..."
                   />
                 </div>

                 <button 
                   type="submit"
                   className="mt-4 w-full bg-brand-blue text-white py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-blue-800 transition-colors shadow-lg shadow-brand-blue/30 flex items-center justify-center gap-2 group"
                 >
                   Submit Inquiry <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                 </button>
               </form>
             )}
           </div>
        </div>
      </div>
    </section>
  );
}
