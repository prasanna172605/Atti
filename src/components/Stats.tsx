import React from 'react';
import { motion } from 'motion/react';

export default function Stats() {
  const stats = [
    { value: "6+", label: "Years Experience" },
    { value: "78+", label: "Businesses Worldwide" },
    { value: "4.9/5", label: "Client Satisfaction" },
    { value: "$10M+", label: "Client Revenue Generated" }
  ];

  return (
    <section id="stats" className="py-16 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x divide-slate-100">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col items-center justify-center text-center px-4"
            >
              <div className="text-4xl md:text-5xl font-extrabold text-indigo-600 mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base font-medium text-slate-500 uppercase tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
