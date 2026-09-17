import React, { useState } from 'react';
import { ArrowRight, Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';
import { MAXGROWTH_ASSETS } from '../data/maxgrowthImages';
import SEOHead from '../components/SEOHead';
import HandsGetInTouch from '../components/HandsGetInTouch';

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "One Vision",
  "image": "https://onevision.web.app/logo.jpeg",
  "description": "Ready to scale your business? Get in touch with One Vision in Ariyalur, Tamil Nadu for web development and digital marketing solutions.",
  "url": "https://onevision.web.app",
  "telephone": "+91 87606 68866",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Ariyalur",
    "addressLocality": "Ariyalur",
    "addressRegion": "TN",
    "postalCode": "621704",
    "addressCountry": "IN"
  }
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    website: '',
    budget: '$1,000 - $3,000',
    details: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-black text-white min-h-screen pt-36 pb-24 md:pt-48 md:pb-32 relative overflow-hidden">
      <SEOHead 
        title="Contact One Vision | Digital Marketing Agency in Ariyalur"
        description="Ready to scale your business? Get in touch with One Vision in Ariyalur, Tamil Nadu for web development and digital marketing solutions."
        canonicalUrl="/contact"
        schema={localBusinessSchema}
      />
      
      {/* Background Hands Reaching Out visual asset */}
      <div className="absolute top-20 right-0 w-1/2 h-[600px] opacity-15 pointer-events-none overflow-hidden hidden lg:block">
        <img
          src={MAXGROWTH_ASSETS.contact.handsConnecting}
          alt="Contact Visual Backdrop"
          className="w-full h-full object-contain object-right"
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Top Eyebrow Tag */}
        <div className="text-xs font-mono font-bold tracking-widest text-[#2563FF] uppercase mb-4">
          GET IN TOUCH.
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading & Office Info */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <h1 className="text-4xl sm:text-6xl font-normal tracking-tight text-white leading-[1.08] mb-4">
                Contact Us
              </h1>
              <div className="text-2xl sm:text-3xl font-serif italic text-neutral-300">
                Book a call now
              </div>
            </div>

            {/* Direct Office Details matching exact MaxGrowth arrangement */}
            <div className="space-y-8 pt-8 border-t border-white/[0.08]">
              
              {/* Office */}
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-neutral-500 mb-2">
                  Office
                </div>
                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-xs">
                  Ariyalur, Tamil Nadu, India
                </p>
              </div>

              {/* Direct Phone */}
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-neutral-500 mb-2">
                  Contact
                </div>
                <a
                  href="tel:+918760668866"
                  className="text-base sm:text-lg font-medium text-white hover:text-neutral-300 transition-colors block"
                >
                  +91 8760668866
                </a>
              </div>

              {/* Email */}
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-neutral-500 mb-2">
                  Email
                </div>
                <a
                  href="mailto:onevision001.in@gmail.com"
                  className="text-base sm:text-lg font-medium text-white hover:text-neutral-300 transition-colors block"
                >
                  onevision001.in@gmail.com
                </a>
              </div>

            </div>
          </div>

          {/* Right Column: Intake Form matching exact reference fields */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-12 rounded-3xl bg-[#08080a] border border-white/[0.08] shadow-2xl">
              {submitted ? (
                <div className="py-16 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[#2563FF]/20 border border-[#2563FF]/40 text-[#2563FF] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-medium text-white">Inquiry Received</h3>
                  <p className="text-neutral-400 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out to The One Vision. Our team has received your project parameters and will respond within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 px-6 py-2.5 rounded-full bg-white text-black text-xs font-semibold tracking-wide"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider text-neutral-400 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full px-4 py-3.5 rounded-xl bg-black border border-white/[0.08] text-white text-sm focus:outline-none focus:border-white/30 transition-colors placeholder:text-neutral-600"
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider text-neutral-400 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 87606 68866"
                      className="w-full px-4 py-3.5 rounded-xl bg-black border border-white/[0.08] text-white text-sm focus:outline-none focus:border-white/30 transition-colors placeholder:text-neutral-600"
                    />
                  </div>

                  {/* Website / Social Media Link */}
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider text-neutral-400 mb-2">
                      Website / Social Media Link
                    </label>
                    <input
                      type="text"
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      placeholder="https://yourbusiness.com"
                      className="w-full px-4 py-3.5 rounded-xl bg-black border border-white/[0.08] text-white text-sm focus:outline-none focus:border-white/30 transition-colors placeholder:text-neutral-600"
                    />
                  </div>

                  {/* Budget Range */}
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider text-neutral-400 mb-2">
                      What's Your Budget Range
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-black border border-white/[0.08] text-white text-sm focus:outline-none focus:border-white/30 transition-colors"
                    >
                      <option value="$1,000 - $3,000">$1,000 - $3,000</option>
                      <option value="$3,000 - $5,000">$3,000 - $5,000</option>
                      <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                      <option value="$10,000+">$10,000+</option>
                    </select>
                  </div>

                  {/* Tell us about your business and goal */}
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider text-neutral-400 mb-2">
                      Tell us about your business and goal:
                    </label>
                    <textarea
                      rows={4}
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      placeholder="Describe what services you offer and what objectives you want to achieve..."
                      className="w-full px-4 py-3.5 rounded-xl bg-black border border-white/[0.08] text-white text-sm focus:outline-none focus:border-white/30 transition-colors placeholder:text-neutral-600 resize-none"
                    />
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-white hover:bg-neutral-200 text-black font-semibold text-sm tracking-tight transition-all shadow-md active:scale-95 flex items-center justify-center gap-2"
                  >
                    <span>Submit</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                </form>
              )}
            </div>
          </div>

        </div>

      </div>

      <HandsGetInTouch />

    </div>
  );
}
