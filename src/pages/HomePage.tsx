import React from 'react';
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

export default function HomePage() {
  return (
    <>
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
