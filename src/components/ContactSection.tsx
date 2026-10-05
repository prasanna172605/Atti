import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ChevronDown } from 'lucide-react';
import { MAXGROWTH_ASSETS } from '../data/maxgrowthImages';
import { parsePhoneNumberWithError, CountryCode } from 'libphonenumber-js';

// Top countries with their dial codes and flags
const COUNTRIES: { code: CountryCode; name: string; dial: string; flag: string }[] = [
  { code: 'IN', name: 'India', dial: '+91', flag: '🇮🇳' },
  { code: 'US', name: 'United States', dial: '+1', flag: '🇺🇸' },
  { code: 'GB', name: 'United Kingdom', dial: '+44', flag: '🇬🇧' },
  { code: 'AU', name: 'Australia', dial: '+61', flag: '🇦🇺' },
  { code: 'CA', name: 'Canada', dial: '+1', flag: '🇨🇦' },
  { code: 'AE', name: 'UAE', dial: '+971', flag: '🇦🇪' },
  { code: 'SG', name: 'Singapore', dial: '+65', flag: '🇸🇬' },
  { code: 'MY', name: 'Malaysia', dial: '+60', flag: '🇲🇾' },
  { code: 'NZ', name: 'New Zealand', dial: '+64', flag: '🇳🇿' },
  { code: 'ZA', name: 'South Africa', dial: '+27', flag: '🇿🇦' },
  { code: 'NG', name: 'Nigeria', dial: '+234', flag: '🇳🇬' },
  { code: 'KE', name: 'Kenya', dial: '+254', flag: '🇰🇪' },
  { code: 'DE', name: 'Germany', dial: '+49', flag: '🇩🇪' },
  { code: 'FR', name: 'France', dial: '+33', flag: '🇫🇷' },
  { code: 'IT', name: 'Italy', dial: '+39', flag: '🇮🇹' },
  { code: 'ES', name: 'Spain', dial: '+34', flag: '🇪🇸' },
  { code: 'NL', name: 'Netherlands', dial: '+31', flag: '🇳🇱' },
  { code: 'BR', name: 'Brazil', dial: '+55', flag: '🇧🇷' },
  { code: 'MX', name: 'Mexico', dial: '+52', flag: '🇲🇽' },
  { code: 'PK', name: 'Pakistan', dial: '+92', flag: '🇵🇰' },
  { code: 'BD', name: 'Bangladesh', dial: '+880', flag: '🇧🇩' },
  { code: 'LK', name: 'Sri Lanka', dial: '+94', flag: '🇱🇰' },
  { code: 'JP', name: 'Japan', dial: '+81', flag: '🇯🇵' },
  { code: 'KR', name: 'South Korea', dial: '+82', flag: '🇰🇷' },
  { code: 'CN', name: 'China', dial: '+86', flag: '🇨🇳' },
  { code: 'PH', name: 'Philippines', dial: '+63', flag: '🇵🇭' },
  { code: 'ID', name: 'Indonesia', dial: '+62', flag: '🇮🇩' },
  { code: 'TH', name: 'Thailand', dial: '+66', flag: '🇹🇭' },
  { code: 'VN', name: 'Vietnam', dial: '+84', flag: '🇻🇳' },
  { code: 'SA', name: 'Saudi Arabia', dial: '+966', flag: '🇸🇦' },
  { code: 'QA', name: 'Qatar', dial: '+974', flag: '🇶🇦' },
  { code: 'KW', name: 'Kuwait', dial: '+965', flag: '🇰🇼' },
  { code: 'BH', name: 'Bahrain', dial: '+973', flag: '🇧🇭' },
  { code: 'OM', name: 'Oman', dial: '+968', flag: '🇴🇲' },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    countryCode: 'IN' as CountryCode,
    service: 'Website Development',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const selectedCountry = COUNTRIES.find(c => c.code === formData.countryCode) || COUNTRIES[0];

  const getFullPhone = () => {
    if (!formData.phoneNumber) return '';
    return `${selectedCountry.dial}${formData.phoneNumber.replace(/\D/g, '')}`;
  };

  const validatePhone = (): boolean => {
    if (!formData.phoneNumber) return true; // phone is optional
    try {
      const parsed = parsePhoneNumberWithError(getFullPhone(), formData.countryCode);
      return parsed.isValid();
    } catch {
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMessage(null);

    if (formData.phoneNumber && !validatePhone()) {
      setErrorMessage("Please enter a valid phone number for the selected country.");
      setSubmitting(false);
      return;
    }

    console.log("Submitting contact enquiry");
    console.log("Contact API URL:", import.meta.env.VITE_CONTACT_API_URL);

    try {
      const apiUrl = import.meta.env.VITE_CONTACT_API_URL;
      
      if (!apiUrl) {
         console.error("VITE_CONTACT_API_URL is missing!");
         throw new Error("Unable to send enquiry. API URL is not configured.");
      }

      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phoneNumber ? getFullPhone() : '',
        company: '',
        service: formData.service,
        budget: '',
        message: formData.message,
        website: ''
      };

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });
      
      console.log("Contact API response:", response.status);

      if (!response.ok) {
        throw new Error("Unable to send enquiry");
      }
      
      const result = await response.json();
      
      if (!result.success) {
        throw new Error("Unable to send enquiry");
      }

      setSubmitted(true);
    } catch (err: any) {
      console.error("Contact form error:", err);
      setErrorMessage("Something went wrong. Please try again in a moment.");
    } finally {
      setSubmitting(false);
    }
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
              Have a project in mind or want to explore how our digital solutions can elevate your business in Trichy, Ariyalur, or beyond? Fill in the details and we'll reach out within 24 hours.
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

          {/* Right Form Column */}
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
                    className="mt-6 px-6 py-2.5 rounded-full bg-white text-black text-xs font-semibold tracking-wide cursor-pointer"
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
                      {/* Custom dark-themed phone input with country selector */}
                      <div className="flex rounded-xl bg-black/60 border border-white/[0.08] focus-within:border-white/30 transition-colors overflow-hidden">
                        {/* Country code selector */}
                        <div className="relative flex-shrink-0">
                          <select
                            value={formData.countryCode}
                            onChange={(e) => setFormData({ ...formData, countryCode: e.target.value as CountryCode })}
                            className="appearance-none h-full pl-3 pr-7 py-3.5 bg-white/[0.05] border-r border-white/[0.08] text-white text-sm focus:outline-none cursor-pointer"
                            style={{ background: 'rgba(255,255,255,0.04)', color: 'white' }}
                          >
                            {COUNTRIES.map((c) => (
                              <option
                                key={c.code}
                                value={c.code}
                                style={{ backgroundColor: '#111', color: '#fff' }}
                              >
                                {c.flag} {c.dial}
                              </option>
                            ))}
                          </select>
                          <ChevronDown className="absolute right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 text-neutral-400 pointer-events-none" />
                        </div>
                        {/* Phone number input */}
                        <input
                          type="tel"
                          value={formData.phoneNumber}
                          onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                          placeholder="98765 43210"
                          className="flex-1 px-3 py-3.5 bg-transparent text-white text-sm focus:outline-none placeholder:text-neutral-600 min-w-0"
                        />
                      </div>
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
                      style={{ backgroundColor: '#0a0a0b', color: 'white' }}
                    >
                      <option value="Website Development" style={{ backgroundColor: '#111', color: '#fff' }}>Website Development</option>
                      <option value="Ads Campaign" style={{ backgroundColor: '#111', color: '#fff' }}>Ads Campaign</option>
                      <option value="Google Maps" style={{ backgroundColor: '#111', color: '#fff' }}>Google Maps Optimization</option>
                      <option value="Full Growth System" style={{ backgroundColor: '#111', color: '#fff' }}>Full Growth System</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider text-neutral-400 mb-2">
                      Message / Project Details *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe your goals, timeline, and current situation..."
                      className="w-full px-4 py-3.5 rounded-xl bg-black/60 border border-white/[0.08] text-white text-sm focus:outline-none focus:border-white/30 transition-colors placeholder:text-neutral-600 resize-none"
                    />
                  </div>

                  {errorMessage && (
                    <div className="p-4 rounded-xl bg-red-950/20 border border-red-900/40 text-red-400 text-xs text-center leading-relaxed font-mono">
                      {errorMessage}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-4 rounded-full bg-white hover:bg-neutral-200 disabled:bg-neutral-800 disabled:text-neutral-500 text-black font-semibold text-sm tracking-tight transition-all shadow-md active:scale-95 flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed"
                  >
                    <span>{submitting ? 'Sending...' : 'Submit Inquiry'}</span>
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
