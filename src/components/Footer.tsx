import React from 'react';
import { Link } from 'react-router-dom';
import OvLogo from './OvLogo';

export default function Footer() {
  return (
    <footer className="bg-[#000000] text-neutral-400 py-16 sm:py-20 border-t border-white/[0.08] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-2 md:grid-cols-12 gap-10 pb-16 border-b border-white/[0.08]">
          
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-5 space-y-4">
            <Link to="/" className="inline-block hover:opacity-90 transition-opacity">
              <OvLogo showText={true} />
            </Link>

            <p className="text-sm text-neutral-400 max-w-sm leading-relaxed font-light">
              We build high-converting websites, Google Ads, and lead generation systems for ambitious businesses.
            </p>

            <div className="pt-2 text-xs font-mono text-neutral-500">
              /// HIGH-INTENT ACQUISITION SYSTEMS
            </div>
          </div>

          {/* Column 1: Pages */}
          <div className="col-span-1 md:col-span-2 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white">
              Pages
            </h4>
            <ul className="space-y-2.5 text-sm font-light">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><a href="/#Services" className="hover:text-white transition-colors">Service</a></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link to="/work" className="hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 2: Legal / Service */}
          <div className="col-span-1 md:col-span-2 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white">
              Service
            </h4>
            <ul className="space-y-2.5 text-sm font-light">
              <li><Link to="/contact" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><a href="/#Services" className="hover:text-white transition-colors">Digital Advertising</a></li>
              <li><a href="/#Services" className="hover:text-white transition-colors">Websites</a></li>
            </ul>
          </div>

          {/* Column 3: Socials & Contact */}
          <div className="col-span-2 md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white">
              Socials
            </h4>
            <ul className="space-y-2.5 text-sm font-light">
              <li>
                <a href="https://www.instagram.com/theonevision.in/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  YouTube
                </a>
              </li>
              <li>
                <a href="https://wa.me/918760668866" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  WhatsApp
                </a>
              </li>
              <li className="pt-2 text-xs font-mono text-neutral-400">
                onevision001.in@gmail.com
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar matching MaxGrowth */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500">
          <div>
            © 2026 The One Vision. All Rights Reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Website Built by Us ❤️</span>
            <Link to="/contact" className="text-neutral-400 hover:text-white transition-colors">
              Book Strategy Call
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
