import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ScrollToTop from './components/ScrollToTop';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import WorkPage from './pages/WorkPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-[#070e24] text-[#F8FAFF] font-sans selection:bg-brand-blue selection:text-white relative overflow-x-hidden flex flex-col justify-between">
        <Navbar />
        <main className="grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/blog" element={<BlogPage />} />
            {/* Fallback to Home */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </BrowserRouter>
  );
}
