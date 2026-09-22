import React from 'react';
import { motion } from 'motion/react';

export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Discovery & Strategy",
      description: "We audit your current digital presence, understand your target audience, and formulate a custom blueprint for growth."
    },
    {
      number: "02",
      title: "Infrastructure & Design",
      description: "We build or optimize your landing pages and website to ensure they are engineered to convert traffic into inquiries."
    },
    {
      number: "03",
      title: "Traffic Generation",
      description: "We launch targeted campaigns across Google Ads, Meta, and LinkedIn to drive high-intent prospects to your funnel."
    },
    {
      number: "04",
      title: "Optimization & Scaling",
      description: "We continuously analyze data, run A/B tests, and refine the process to lower your acquisition cost and scale results."
    }
  ];

  return (
    <section id="process" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(#4f46e5_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-sm font-bold text-indigo-400 uppercase tracking-widest mb-3">Our Process</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">
              A proven system for predictable growth.
            </h3>
            <p className="text-lg text-slate-400 mb-8 max-w-lg">
              We don't guess. We follow a data-driven framework that has successfully scaled over 78+ businesses worldwide. Here is how we turn clicks into loyal clients.
            </p>
            <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-500 transition-colors">
              Start Your Growth Journey
            </a>
          </div>

          <div className="flex flex-col gap-8">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="flex gap-6 group"
              >
                <div className="flex-shrink-0 w-16 h-16 rounded-full border border-slate-700 bg-slate-800/50 flex items-center justify-center text-xl font-bold text-slate-300 group-hover:bg-indigo-600 group-hover:border-indigo-500 group-hover:text-white transition-all">
                  {step.number}
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-white">{step.title}</h4>
                  <p className="text-slate-400 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
