import React from 'react';
import { motion } from 'motion/react';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16">
          
          <div>
            <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-3">Get in Touch</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
              Ready to scale your business?
            </h3>
            <p className="text-lg text-slate-600 mb-10 max-w-lg">
              Book a free discovery call today. We'll analyze your current strategy and show you exactly how we can help you acquire more customers.
            </p>

            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center flex-shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-1">Email Us</h4>
                  <a href="mailto:hello@theonevision.com" className="text-slate-600 hover:text-indigo-600 transition-colors">hello@theonevision.com</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center flex-shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-1">Call Us</h4>
                  <a href="tel:+1234567890" className="text-slate-600 hover:text-indigo-600 transition-colors">+1 (234) 567-890</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-1">Location</h4>
                  <p className="text-slate-600">Global Agency HQ<br />Operating Worldwide</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-50 p-8 rounded-3xl border border-slate-100"
          >
            <form className="flex flex-col gap-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="firstName" className="text-sm font-semibold text-slate-700">First Name</label>
                  <input type="text" id="firstName" className="px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent bg-white" placeholder="John" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="lastName" className="text-sm font-semibold text-slate-700">Last Name</label>
                  <input type="text" id="lastName" className="px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent bg-white" placeholder="Doe" />
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-semibold text-slate-700">Work Email</label>
                <input type="email" id="email" className="px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent bg-white" placeholder="john@company.com" />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="website" className="text-sm font-semibold text-slate-700">Website URL</label>
                <input type="url" id="website" className="px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent bg-white" placeholder="https://yourcompany.com" />
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-semibold text-slate-700">How can we help?</label>
                <textarea id="message" rows={4} className="px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent bg-white resize-none" placeholder="Tell us about your goals..."></textarea>
              </div>
              
              <button type="button" className="w-full py-4 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-colors mt-2">
                Get Your Proposal
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
