import React from 'react';
import SEOHead from '../components/SEOHead';
import Hero from '../components/Hero';
import ProblemSection from '../components/ProblemSection';
import GrowthSystems from '../components/GrowthSystems';
import ProcessSection from '../components/ProcessSection';
import ResultsAndTicker from '../components/ResultsAndTicker';
import ServicesShowcase from '../components/ServicesShowcase';
import ComparisonTable from '../components/ComparisonTable';
import WorkVideoBanner from '../components/WorkVideoBanner';
import Testimonials from '../components/Testimonials';
import ContactSection from '../components/ContactSection';
import HandsGetInTouch from '../components/HandsGetInTouch';

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "One Vision",
  "image": "https://onevision.web.app/logo.jpeg",
  "description": "One Vision is a premium digital solutions agency offering digital marketing, custom web development, content creation, and personal branding in Tamil Nadu.",
  "url": "https://onevision.web.app",
  "telephone": "+91 63820 63842",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Ariyalur",
    "addressLocality": "Ariyalur",
    "addressRegion": "TN",
    "postalCode": "621704",
    "addressCountry": "IN"
  },
  "priceRange": "$$",
  "sameAs": [
    "https://www.instagram.com/onevision.ds"
  ]
};

export default function HomePage() {
  return (
    <>
      <SEOHead 
        title="One Vision | Digital Marketing & Web Development Agency in Tamil Nadu"
        description="One Vision is a premium digital solutions agency offering digital marketing, custom web development, content creation, and personal branding in Tamil Nadu."
        canonicalUrl="/"
        schema={localBusinessSchema}
      />
      <Hero />
      <ProblemSection />
      <GrowthSystems />
      <ProcessSection />
      <ResultsAndTicker />
      <ServicesShowcase />
      <ComparisonTable />
      <WorkVideoBanner />
      <Testimonials />
      <ContactSection />
      <HandsGetInTouch />
    </>
  );
}
