import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import PortfolioGallery from './components/PortfolioGallery';
import Approach from './components/Approach';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="font-sans text-gray-900 bg-white selection:bg-brand-blue selection:text-white">
      <Hero />
      <About />
      <Services />
      <PortfolioGallery />
      <Approach />
      <Contact />
      <Footer />
    </div>
  );
}
