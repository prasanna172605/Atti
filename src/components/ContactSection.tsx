import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { MAXGROWTH_ASSETS } from '../data/maxgrowthImages';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Website Engineering',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 sm:py-36 bg-black relative border-b border-white/[0.08] overflow-hidden">
      
      {/* Huge Background Watermark: GET IN TOUCH */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none z-0">
        <span className="text-[12vw] font-bold text-white/[0.03] tracking-tighter uppercase whitespace-nowrap">
          GET IN TOUCH.
        </span>
      </div>

      {/* Two hands connecting background graphic */}
      <div className="absolute -bottom-10 right-0 w-[550px] h-[550px] opacity-25 pointer-events-none overflow-hidden hidden lg:block z-0">
        <img
          src={MAXGROWTH_ASSETS.contact.handsConnecting}
          alt="Hands Get In Touch"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-4xl sm:text-6xl font-normal text-white tracking-tight leading-[1.1]">
              Get in{' '}
              <span className="font-serif italic font-normal text-neutral-300">
                Touch
              </span>
            </h2>

            <p className="text-base text-neutral-400 leading-relaxed max-w-md font-light">
              Have a project in mind or want to explore how our growth systems can elevate your business? Fill in the details and we'll reach out within 24 hours.
            </p>

            {/* Direct Contact Info */}
            <div className="space-y-6 pt-6 border-t border-white/[0.08]">
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-neutral-500 mb-1">Direct Line / WhatsApp</div>
                <a href="tel:+918760668866" className="text-lg font-medium text-white hover:text-neutral-300 transition-colors">
                  +91 8760668866
                </a>
              </div>

              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-neutral-500 mb-1">Email Inquiries</div>
                <a href="mailto:onevision001.in@gmail.com" className="text-lg font-medium text-white hover:text-neutral-300 transition-colors">
                  onevision001.in@gmail.com
                </a>
              </div>

              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-neutral-500 mb-1">Location</div>
                <div className="text-sm text-neutral-300">
                  Ariyalur, Tamil Nadu, India
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Column matching MaxGrowth minimal dark inputs */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-12 rounded-[32px] bg-[#0b0c10]/90 border border-white/[0.08] shadow-2xl backdrop-blur-sm">
              {submitted ? (
                <div className="py-16 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-medium text-white">Message Sent</h3>
                  <p className="text-neutral-400 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out. We have received your parameters and will connect with you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 px-6 py-2.5 rounded-full bg-white text-black text-xs font-semibold tracking-wide"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider text-neutral-400 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full px-4 py-3.5 rounded-xl bg-black/60 border border-white/[0.08] text-white text-sm focus:outline-none focus:border-white/30 transition-colors placeholder:text-neutral-600"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-medium uppercase tracking-wider text-neutral-400 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="jane@company.com"
                        className="w-full px-4 py-3.5 rounded-xl bg-black/60 border border-white/[0.08] text-white text-sm focus:outline-none focus:border-white/30 transition-colors placeholder:text-neutral-600"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium uppercase tracking-wider text-neutral-400 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 8760668866"
                        className="w-full px-4 py-3.5 rounded-xl bg-black/60 border border-white/[0.08] text-white text-sm focus:outline-none focus:border-white/30 transition-colors placeholder:text-neutral-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider text-neutral-400 mb-2">
                      Service of Interest
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-black/60 border border-white/[0.08] text-white text-sm focus:outline-none focus:border-white/30 transition-colors"
                    >
                      <option value="Website Development">Website Development</option>
                      <option value="Google Ads">Google Ads Campaign</option>
                      <option value="Google Maps">Google Maps Optimization</option>
                      <option value="Full Growth System">Full Growth System</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider text-neutral-400 mb-2">
                      Message / Project Details
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe your goals, timeline, and current situation..."
                      className="w-full px-4 py-3.5 rounded-xl bg-black/60 border border-white/[0.08] text-white text-sm focus:outline-none focus:border-white/30 transition-colors placeholder:text-neutral-600 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-white hover:bg-neutral-200 text-black font-semibold text-sm tracking-tight transition-all shadow-md active:scale-95 flex items-center justify-center gap-2"
                  >
                    <span>Submit Inquiry</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
