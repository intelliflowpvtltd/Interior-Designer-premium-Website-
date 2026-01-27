'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const awards = [
  { year: '2025', title: 'Best Luxury Residential Design', org: 'India Design Awards' },
  { year: '2024', title: 'Excellence in Interior Architecture', org: 'Architectural Digest' },
  { year: '2024', title: 'Top Interior Designer - India', org: 'Elle Decor' },
  { year: '2023', title: 'Heritage Restoration Excellence', org: 'IIID Awards' },
];

const mediaFeatures = [
  { name: 'Architectural Digest', logo: 'AD' },
  { name: 'Elle Decor', logo: 'ED' },
  { name: 'Vogue Living', logo: 'VL' },
  { name: 'Forbes India', logo: 'FI' },
];

export default function Awards() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-32 bg-cream relative overflow-hidden" ref={ref}>
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        
        {/* Split Header - Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-28"
        >
          <div className="max-w-5xl">
            <div className="flex items-start gap-10">
              <motion.div 
                initial={{ scale: 0, rotate: -180 }}
                animate={isInView ? { scale: 1, rotate: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                className="flex-shrink-0"
              >
                <svg className="w-16 h-16 lg:w-20 lg:h-20 text-rose-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </motion.div>
              <div>
                <motion.span 
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-rose-gold text-xs font-semibold tracking-[0.3em] uppercase mb-6 block"
                >
                  Recognition
                </motion.span>
                <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-semibold text-deep-charcoal leading-[0.9] mb-8">
                  Awards &
                  <br />
                  <span className="text-rose-gold">Accolades</span>
                </h2>
                <p className="text-lg lg:text-xl text-charcoal leading-relaxed max-w-2xl">
                  Industry recognition that validates our commitment to excellence.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Complex Asymmetric Layout */}
        <div className="relative">
          
          {/* First Award - Large Hero Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
              <div className="lg:col-span-3 bg-deep-charcoal p-14 lg:p-20 xl:p-24 relative overflow-hidden group shadow-2xl hover:shadow-rose-gold/20 transition-all duration-700">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="text-[200px] font-display font-bold text-white/5 absolute -top-12 -right-12 leading-none transition-all duration-700 group-hover:text-white/15">
                  {awards[0].year}
                </div>
                <div className="relative z-10">
                  <div className="flex items-start gap-6 lg:gap-8 mb-10">
                    <svg className="w-12 h-12 lg:w-16 lg:h-16 text-rose-gold flex-shrink-0 transition-all duration-700 group-hover:scale-125 group-hover:rotate-12" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <div>
                      <h3 className="text-3xl lg:text-4xl font-display font-bold text-white mb-5 leading-tight group-hover:text-rose-gold transition-all duration-500">
                        {awards[0].title}
                      </h3>
                      <p className="text-rose-gold text-base lg:text-lg uppercase tracking-wider">{awards[0].org}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-2 bg-off-white p-12 lg:p-16 flex items-center justify-center relative overflow-hidden group shadow-xl">
                <div className="absolute inset-0 bg-rose-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="text-center relative z-10">
                  <div className="text-7xl lg:text-8xl font-display font-bold text-rose-gold mb-5 transition-all duration-500 group-hover:scale-125 drop-shadow-lg">{awards[0].year}</div>
                  <div className="w-24 h-[3px] bg-gradient-to-r from-transparent via-rose-gold to-transparent mx-auto" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Awards 2 & 3 - Diagonal Overlap */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="lg:mt-32"
            >
              <div className="relative bg-white p-10 lg:p-14 group shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-1">
                {/* Floating Year Badge */}
                <div className="absolute -top-10 -left-10 w-28 h-28 bg-rose-gold text-white flex items-center justify-center z-20 shadow-xl group-hover:shadow-2xl group-hover:scale-125 transition-all duration-500">
                  <span className="text-4xl font-display font-bold">{awards[1].year}</span>
                </div>
                <div className="absolute top-8 right-8 opacity-5 transition-all duration-500 group-hover:opacity-10">
                  <svg className="w-32 h-32 text-deep-charcoal" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <div className="pt-10">
                  <h3 className="text-2xl lg:text-3xl font-display font-semibold text-deep-charcoal mb-4 group-hover:text-rose-gold transition-all duration-500">
                    {awards[1].title}
                  </h3>
                  <p className="text-rose-gold text-sm uppercase tracking-wider">{awards[1].org}</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="lg:-mt-16"
            >
              <div className="relative bg-white p-10 lg:p-14 group shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-1">
                {/* Floating Year Badge */}
                <div className="absolute -top-10 -right-10 w-28 h-28 bg-rose-gold text-white flex items-center justify-center z-20 shadow-xl group-hover:shadow-2xl group-hover:scale-125 transition-all duration-500">
                  <span className="text-4xl font-display font-bold">{awards[2].year}</span>
                </div>
                <div className="absolute top-8 left-8 opacity-5 transition-all duration-500 group-hover:opacity-10">
                  <svg className="w-32 h-32 text-deep-charcoal" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <div className="pt-10">
                  <h3 className="text-2xl lg:text-3xl font-display font-semibold text-deep-charcoal mb-4 group-hover:text-rose-gold transition-all duration-500">
                    {awards[2].title}
                  </h3>
                  <p className="text-rose-gold text-sm uppercase tracking-wider">{awards[2].org}</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Fourth Award - Wide Banner */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-20"
          >
            <div className="bg-off-white p-12 lg:p-20 relative overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 group">
              <div className="absolute -right-20 top-0 bottom-0 w-64 bg-rose-gold/10 transform skew-x-[-12deg] transition-all duration-500 group-hover:bg-rose-gold/20" />
              <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
                <div className="flex items-center gap-8">
                  <div className="w-24 h-24 bg-rose-gold text-white flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110">
                    <span className="text-3xl font-display font-bold">{awards[3].year}</span>
                  </div>
                  <div>
                    <h3 className="text-3xl lg:text-4xl font-display font-semibold text-deep-charcoal mb-3 group-hover:text-rose-gold transition-all duration-500">
                      {awards[3].title}
                    </h3>
                    <p className="text-rose-gold text-sm uppercase tracking-wider">{awards[3].org}</p>
                  </div>
                </div>
                <svg className="w-16 h-16 lg:w-20 lg:h-20 text-rose-gold/30 transition-all duration-700 group-hover:text-rose-gold/60 group-hover:scale-125 group-hover:rotate-12" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>
          </motion.div>

          {/* Media Features - Scattered Layout */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="bg-deep-charcoal p-16 lg:p-24 relative overflow-hidden shadow-2xl hover:shadow-rose-gold/20 transition-all duration-700 group">
              <div className="absolute inset-0 bg-gradient-to-br from-rose-gold/5 to-transparent" />
              <div className="relative z-10 text-center">
                <p className="text-white/60 text-xs lg:text-sm uppercase tracking-[0.3em] mb-16">As Featured In</p>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
                  {mediaFeatures.map((media, index) => (
                    <motion.div
                      key={media.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                      className="group/media"
                    >
                      <div className="text-center">
                        <div className="w-24 h-24 mx-auto mb-5 bg-white/10 group-hover/media:bg-rose-gold transition-all duration-700 flex items-center justify-center shadow-lg group-hover/media:shadow-2xl group-hover/media:scale-125">
                          <span className="text-3xl font-display font-bold text-white">{media.logo}</span>
                        </div>
                        <p className="text-white/40 text-xs uppercase tracking-wider group-hover/media:text-white/90 transition-colors duration-300">
                          {media.name}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
