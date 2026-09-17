import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import OvLogo from './OvLogo';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const diff = currentY - lastScrollY.current;

      // Show/hide based on scroll direction
      if (currentY < 40) {
        // Near top — always visible and not hidden
        setHidden(false);
        setScrolled(false);
      } else if (diff > 6) {
        // Scrolling down — hide navbar
        setHidden(true);
        setScrolled(true);
      } else if (diff < -6) {
        // Scrolling up — reveal navbar
        setHidden(false);
        setScrolled(true);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Smooth scroll to #Services section
  const handleServicesClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (location.pathname === '/') {
      const el = document.getElementById('Services') || document.getElementById('services');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', '/#Services');
      }
    } else {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById('Services') || document.getElementById('services');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
          window.history.pushState(null, '', '/#Services');
        }
      }, 200);
    }
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'Services', isServices: true },
    { label: 'About', href: '/about' },
    { label: 'Portfolio', href: '/work' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* ── Apple Liquid Glass blur effect at the top of screen ── */}
      <div
        className={`fixed top-0 left-0 right-0 h-20 pointer-events-none z-40 transition-opacity duration-500 ${
          scrolled ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          backdropFilter: 'blur(24px) saturate(180%)',
          WebkitBackdropFilter: 'blur(24px) saturate(180%)',
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 40%, rgba(0,0,0,0) 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 40%, rgba(0,0,0,0) 100%)',
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, transparent 100%)',
        }}
      />

      {/* ── Navbar: completely transparent container, slides up when hidden ── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent py-5 ${
          hidden ? '-translate-y-full opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">

          {/* Brand Logo — redirects to homepage and scrolls to top */}
          <a
            href="/"
            onClick={handleLogoClick}
            className="flex items-center hover:opacity-85 transition-opacity bg-transparent border-none p-0 cursor-pointer"
            aria-label="The One Vision Home"
          >
            <OvLogo showText={true} />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-9 text-[15px] font-medium tracking-tight text-neutral-300">
            {navLinks.map((link) => {
              if (link.isServices) {
                return (
                  <button
                    key={link.label}
                    onClick={handleServicesClick}
                    className="hover:text-white transition-colors duration-200 cursor-pointer text-left bg-transparent p-0 border-none font-medium text-[15px] text-neutral-300"
                  >
                    {link.label}
                  </button>
                );
              }
              return (
                <Link
                  key={link.label}
                  to={link.href!}
                  className={`hover:text-white transition-colors duration-200 ${
                    location.pathname === link.href ? 'text-white font-semibold' : ''
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden sm:flex items-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-white text-black hover:bg-neutral-200 text-sm font-semibold tracking-tight transition-all duration-200 shadow-sm active:scale-95"
            >
              Book Strategy Call
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-neutral-300 hover:text-white bg-black/40 backdrop-blur-md transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 space-y-4 mx-4 mt-2 rounded-2xl">
            {navLinks.map((link) => {
              if (link.isServices) {
                return (
                  <button
                    key={link.label}
                    onClick={handleServicesClick}
                    className="block w-full text-left text-base font-medium text-neutral-300 hover:text-white transition-colors bg-transparent border-none p-0 cursor-pointer"
                  >
                    {link.label}
                  </button>
                );
              }
              return (
                <Link
                  key={link.label}
                  to={link.href!}
                  className="block text-base font-medium text-neutral-300 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-4 border-t border-white/10">
              <Link
                to="/contact"
                className="block w-full text-center py-3 rounded-full bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-colors"
              >
                Book Strategy Call
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
