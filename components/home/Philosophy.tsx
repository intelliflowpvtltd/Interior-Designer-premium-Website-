'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const philosophyPillars = [
  {
    number: '01',
    title: 'Listen Deeply',
    description: 'Understanding your vision, lifestyle, and aspirations forms the foundation of every project we create.',
  },
  {
    number: '02',
    title: 'Design Thoughtfully',
    description: 'Every element is curated with intention—balancing heritage craftsmanship with contemporary innovation.',
  },
  {
    number: '03',
    title: 'Execute Flawlessly',
    description: 'From premium materials to master artisans, we deliver nothing less than perfection.',
  },
];

export default function Philosophy() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-32 bg-off-white relative overflow-hidden" ref={ref}>
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        
        {/* Dramatic Header - Right Aligned */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-end mb-24"
        >
          <div className="max-w-4xl text-right">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-rose-gold text-xs font-semibold tracking-[0.3em] uppercase mb-8 block"
            >
              Our Philosophy
            </motion.span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-semibold text-deep-charcoal leading-[0.9] mb-10">
              Where
              <br />
              <span className="text-rose-gold">Artistry</span>
              <br />
              Meets Purpose
            </h2>
            <div className="flex items-center justify-end gap-12">
              <p className="text-lg lg:text-xl text-charcoal leading-relaxed max-w-xl">
                We believe that exceptional interior design transcends trends—creating environments that enhance daily life.
              </p>
              <motion.div 
                initial={{ height: 0 }}
                animate={isInView ? { height: 128 } : {}}
                transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                className="w-[3px] bg-gradient-to-b from-rose-gold to-rose-gold/30 flex-shrink-0"
              />
            </div>
          </div>
        </motion.div>

        {/* Complex Staggered Layout */}
        <div className="relative">
          
          {/* First Pillar - Large Image Left with Overlapping Text */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-24"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              {/* Image */}
              <div className="lg:col-span-6 relative h-[500px] overflow-hidden group shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop"
                  alt="Design philosophy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-deep-charcoal/40 group-hover:to-deep-charcoal/60 transition-all duration-700" />
              </div>
              
              {/* Overlapping Content Card */}
              <div className="lg:col-span-6 flex items-center lg:-ml-24 relative z-10">
                <div className="bg-deep-charcoal text-white p-12 lg:p-16 xl:p-20 w-full shadow-2xl hover:shadow-rose-gold/20 transition-all duration-700 hover:-translate-y-2 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-rose-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="text-[120px] font-display font-bold text-rose-gold/10 absolute top-0 right-8 leading-none transition-all duration-700 group-hover:text-rose-gold/20">
                    {philosophyPillars[0].number}
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-4xl lg:text-5xl font-display font-bold mb-6 group-hover:text-rose-gold transition-all duration-500">
                      {philosophyPillars[0].title}
                    </h3>
                    <p className="text-lg lg:text-xl opacity-95 leading-relaxed">
                      {philosophyPillars[0].description}
                    </p>
                    <div className="mt-10 w-24 h-[3px] bg-gradient-to-r from-rose-gold to-rose-gold/30" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Second & Third Pillars - Diagonal Split Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="lg:-mt-32"
            >
              <div className="relative group">
                {/* Floating Number */}
                <div className="absolute -top-12 -left-12 bg-rose-gold text-white w-32 h-32 flex items-center justify-center z-20 shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110">
                  <span className="text-6xl font-display font-bold">{philosophyPillars[1].number}</span>
                </div>
                
                <div className="bg-cream p-12 lg:p-14 pt-20 relative overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-1">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-rose-gold/5 transition-all duration-700 group-hover:bg-rose-gold/15 group-hover:scale-110" />
                  <h3 className="text-3xl lg:text-4xl font-display font-semibold text-deep-charcoal mb-6 group-hover:text-rose-gold transition-all duration-500">
                    {philosophyPillars[1].title}
                  </h3>
                  <p className="text-base lg:text-lg text-charcoal leading-relaxed">
                    {philosophyPillars[1].description}
                  </p>
                  
                  {/* Quote Mark */}
                  <div className="mt-10 text-8xl font-serif text-rose-gold/20 leading-none transition-all duration-500 group-hover:text-rose-gold/30">&ldquo;</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="lg:mt-32"
            >
              <div className="relative group">
                {/* Floating Number */}
                <div className="absolute -top-12 -right-12 bg-rose-gold text-white w-32 h-32 flex items-center justify-center z-20 shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110">
                  <span className="text-6xl font-display font-bold">{philosophyPillars[2].number}</span>
                </div>
                
                <div className="bg-cream p-12 lg:p-14 pt-20 relative overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-1">
                  <div className="absolute top-0 left-0 w-40 h-40 bg-rose-gold/5 transition-all duration-700 group-hover:bg-rose-gold/15 group-hover:scale-110" />
                  <h3 className="text-3xl lg:text-4xl font-display font-semibold text-deep-charcoal mb-6 group-hover:text-rose-gold transition-all duration-500">
                    {philosophyPillars[2].title}
                  </h3>
                  <p className="text-base lg:text-lg text-charcoal leading-relaxed">
                    {philosophyPillars[2].description}
                  </p>
                  
                  {/* Quote Mark */}
                  <div className="mt-10 text-8xl font-serif text-rose-gold/20 leading-none transition-all duration-500 group-hover:text-rose-gold/30">&ldquo;</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom CTA Panel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <div className="bg-deep-charcoal relative overflow-hidden shadow-2xl hover:shadow-rose-gold/20 transition-all duration-700 group">
              <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-rose-gold/10" />
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="p-14 lg:p-24 relative z-10">
                  <div className="text-[180px] font-display font-bold text-white/5 absolute -top-12 -left-8 leading-none transition-all duration-700 group-hover:text-white/10">
                    →
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-3xl lg:text-4xl xl:text-5xl font-display font-semibold text-white mb-8 leading-tight">
                      Ready to Transform
                      <br />
                      Your Space?
                    </h3>
                    <p className="text-base lg:text-lg text-white/85 mb-10 max-w-md leading-relaxed">
                      Discover how our design philosophy translates into exceptional, personalized interiors.
                    </p>
                    <a href="/process" className="group/btn inline-flex items-center gap-4 bg-rose-gold text-white px-10 py-5 text-xs lg:text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-deep-charcoal transition-all duration-700 shadow-xl hover:shadow-2xl hover:shadow-rose-gold/30 transform hover:-translate-y-1">
                      <span>Explore Our Process</span>
                      <svg className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="hidden lg:flex items-center justify-center p-12 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-rose-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="transform rotate-90 relative z-10">
                    <p className="text-white text-2xl lg:text-3xl font-display font-semibold tracking-[0.5em] [writing-mode:vertical-lr] group-hover:text-rose-gold transition-colors duration-500">
                      PHILOSOPHY
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
