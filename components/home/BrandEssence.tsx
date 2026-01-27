'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const essencePoints = [
  {
    number: '01',
    title: 'Heritage Craftsmanship',
    description: 'We partner with master craftsmen to create bespoke elements that embody timeless elegance and refined artistry.',
    highlight: '15+ Years',
    subtext: 'Of Excellence',
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M24 4L4 14v20l20 10 20-10V14L24 4z" />
        <path d="M24 24v20M4 14l20 10 20-10" />
        <circle cx="24" cy="24" r="6" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Bespoke Design',
    description: 'Every residence tells a unique story. We craft personalized spaces that become extensions of your identity.',
    highlight: '100%',
    subtext: 'Customized',
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M8 44V20L24 4l16 16v24H8z" />
        <path d="M18 44V32h12v12" />
        <path d="M24 4v8M16 20h16M20 28h8" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Transformative Spaces',
    description: 'We create environments that transcend aesthetics—spaces that elevate daily life into refined experiences.',
    highlight: '500+',
    subtext: 'Homes Crafted',
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="24" cy="24" r="20" />
        <path d="M24 8v8M24 32v8M8 24h8M32 24h8" />
        <circle cx="24" cy="24" r="8" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Uncompromising Quality',
    description: 'Every detail is meticulously curated. We accept nothing less than perfection in materials and execution.',
    highlight: 'A++',
    subtext: 'Premium Grade',
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M24 4l6 12 13 2-9 9 2 13-12-6-12 6 2-13-9-9 13-2 6-12z" />
      </svg>
    ),
  },
];

export default function BrandEssence() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-32 bg-cream relative overflow-hidden" ref={ref}>
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        {/* Magazine-Style Header */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-28"
        >
          <div className="flex items-start gap-12 lg:gap-16">
            <div className="flex-shrink-0">
              <motion.div 
                initial={{ height: 0 }}
                animate={isInView ? { height: 160 } : {}}
                transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                className="w-[3px] bg-gradient-to-b from-rose-gold to-rose-gold/30"
              />
            </div>
            <div>
              <motion.span 
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-rose-gold text-xs font-semibold tracking-[0.3em] uppercase mb-8 block"
              >
                Why Choose Us
              </motion.span>
              <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-semibold text-deep-charcoal leading-[0.9] mb-2">
                The Art of
                <br />
                <span className="text-rose-gold">Exceptional</span>
                <br />
                Living
              </h2>
            </div>
          </div>
        </motion.div>

        {/* Complex Magazine Layout */}
        <div className="relative">
          {/* Hero Card - Full Width with Offset Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16 relative"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              {/* Empty Space for Visual Balance */}
              <div className="hidden lg:block lg:col-span-1" />
              
              {/* Main Content */}
              <div className="lg:col-span-8 bg-off-white p-10 lg:p-16 xl:p-20 relative overflow-hidden group shadow-lg hover:shadow-2xl transition-all duration-700">
                <div className="absolute -top-8 -left-8 w-32 h-32 bg-rose-gold/10 transition-all duration-700 group-hover:scale-125 group-hover:bg-rose-gold/20 group-hover:rotate-45" />
                <div className="relative">
                  <div className="text-[140px] font-display font-bold text-rose-gold/5 absolute -top-16 -left-8 leading-none transition-all duration-700 group-hover:text-rose-gold/10">
                    {essencePoints[0].number}
                  </div>
                  <div className="relative z-10">
                    <div className="flex items-start gap-6 lg:gap-8 mb-6">
                      <div className="text-rose-gold flex-shrink-0 transition-transform duration-500 group-hover:scale-110">
                        {essencePoints[0].icon}
                      </div>
                      <div>
                        <h3 className="text-3xl lg:text-4xl font-display font-semibold text-deep-charcoal mb-5 transition-colors duration-300 group-hover:text-rose-gold">
                          {essencePoints[0].title}
                        </h3>
                        <p className="text-base lg:text-lg text-charcoal leading-relaxed">
                          {essencePoints[0].description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Stats Badge */}
              <div className="lg:col-span-4 flex items-center justify-center lg:justify-start lg:-ml-16">
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="bg-deep-charcoal text-white p-12 lg:p-14 lg:mt-16 shadow-2xl hover:shadow-rose-gold/20 transition-all duration-700 hover:-translate-y-2"
                >
                  <div className="text-center">
                    <div className="text-6xl lg:text-7xl font-display font-bold text-rose-gold mb-3">{essencePoints[0].highlight}</div>
                    <div className="text-xs uppercase tracking-[0.2em] opacity-70">{essencePoints[0].subtext}</div>
                    <div className="w-20 h-[3px] bg-gradient-to-r from-transparent via-rose-gold to-transparent mx-auto mt-5" />
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Diagonal Duo - Overlapping Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="lg:mt-24"
            >
              <div className="relative bg-white p-10 lg:p-12 group shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-1">
                <div className="absolute -top-6 -right-6 bg-rose-gold text-white px-8 py-4 shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110">
                  <div className="text-3xl font-display font-bold">{essencePoints[1].highlight}</div>
                  <div className="text-xs uppercase tracking-wider opacity-90">{essencePoints[1].subtext}</div>
                </div>
                <div className="text-rose-gold mb-6 transition-all duration-700 group-hover:scale-125 group-hover:rotate-12">
                  {essencePoints[1].icon}
                </div>
                <span className="text-rose-gold text-xs font-bold uppercase tracking-wider mb-4 block opacity-70">{essencePoints[1].number}</span>
                <h3 className="text-2xl lg:text-3xl font-display font-semibold text-deep-charcoal mb-5 group-hover:text-rose-gold transition-all duration-500">
                  {essencePoints[1].title}
                </h3>
                <p className="text-charcoal leading-relaxed text-sm lg:text-base">
                  {essencePoints[1].description}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="lg:-mt-24"
            >
              <div className="relative bg-white p-10 lg:p-12 group shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-1">
                <div className="absolute -top-6 -right-6 bg-rose-gold text-white px-8 py-4 shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110">
                  <div className="text-3xl font-display font-bold">{essencePoints[2].highlight}</div>
                  <div className="text-xs uppercase tracking-wider opacity-90">{essencePoints[2].subtext}</div>
                </div>
                <div className="text-rose-gold mb-6 transition-all duration-700 group-hover:scale-125 group-hover:rotate-12">
                  {essencePoints[2].icon}
                </div>
                <span className="text-rose-gold text-xs font-bold uppercase tracking-wider mb-4 block opacity-70">{essencePoints[2].number}</span>
                <h3 className="text-2xl lg:text-3xl font-display font-semibold text-deep-charcoal mb-5 group-hover:text-rose-gold transition-all duration-500">
                  {essencePoints[2].title}
                </h3>
                <p className="text-charcoal leading-relaxed text-sm lg:text-base">
                  {essencePoints[2].description}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Wide Feature with Split Panel */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="relative">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                {/* Content Panel */}
                <div className="lg:col-span-2 bg-off-white p-12 lg:p-16 xl:p-20 relative overflow-hidden group shadow-lg hover:shadow-2xl transition-all duration-700">
                  <div className="absolute bottom-0 right-0 w-64 h-64 border-[80px] border-rose-gold/5 transition-all duration-700 group-hover:border-rose-gold/10" />
                  <div className="relative z-10 max-w-2xl">
                    <div className="flex items-start gap-6 lg:gap-8">
                      <div className="text-rose-gold flex-shrink-0 transition-transform duration-500 group-hover:scale-110">
                        {essencePoints[3].icon}
                      </div>
                      <div>
                        <span className="text-rose-gold text-xs font-bold uppercase tracking-wider mb-4 block opacity-70">{essencePoints[3].number}</span>
                        <h3 className="text-3xl lg:text-4xl font-display font-semibold text-deep-charcoal mb-5 transition-colors duration-300 group-hover:text-rose-gold">
                          {essencePoints[3].title}
                        </h3>
                        <p className="text-base lg:text-lg text-charcoal leading-relaxed mb-8">
                          {essencePoints[3].description}
                        </p>
                        
                        {/* Stats Display */}
                        <div className="inline-flex items-center gap-4 bg-white px-8 py-5 border-l-4 border-rose-gold shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                          <div>
                            <div className="text-4xl font-display font-bold text-rose-gold">{essencePoints[3].highlight}</div>
                            <div className="text-xs text-warm-gray uppercase tracking-wider mt-1">{essencePoints[3].subtext}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Vertical Text Panel */}
                <div className="bg-deep-charcoal flex items-center justify-center p-12 relative overflow-hidden group shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-rose-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="transform lg:rotate-180 lg:[writing-mode:vertical-lr] relative z-10">
                    <p className="text-white text-xl lg:text-2xl font-display font-semibold tracking-[0.3em] group-hover:text-rose-gold transition-colors duration-500">
                      EXCELLENCE IN EVERY DETAIL
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
