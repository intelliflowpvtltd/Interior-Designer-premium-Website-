'use client';

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const luxuryInteriors = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2074&auto=format&fit=crop',
    title: 'The Oberoi Residence',
    location: 'Bangalore',
    sqft: '12,500 sq.ft',
    style: 'Contemporary Luxury',
    year: '2024'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop',
    title: 'Azure Sky Penthouse',
    location: 'Mumbai',
    sqft: '8,200 sq.ft',
    style: 'Modern Elegance',
    year: '2024'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop',
    title: 'Heritage Crown Villa',
    location: 'Delhi',
    sqft: '15,000 sq.ft',
    style: 'Neo-Classical',
    year: '2023'
  },
];

const stats = [
  { value: '500+', label: 'Luxury Projects', sublabel: 'Delivered' },
  { value: '₹200Cr+', label: 'Project Value', sublabel: 'Completed' },
  { value: '15+', label: 'Years Experience', sublabel: 'In Industry' },
  { value: '98%', label: 'Client Satisfaction', sublabel: 'Rate' },
];

const trustBadges = [
  { icon: '✓', text: 'Award-Winning Design Team' },
  { icon: '✓', text: 'End-to-End Project Management' },
  { icon: '✓', text: 'Premium Material Sourcing' },
];

function Hero() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Defer state update to avoid synchronous setState in effect
    setTimeout(() => setIsLoaded(true), 0);

    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % luxuryInteriors.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [luxuryInteriors.length]);

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen overflow-hidden bg-off-white pt-20 sm:pt-24 lg:pt-28">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 subtle-pattern" />

      {/* Split Screen Layout */}
      <div className="relative z-10 min-h-screen grid lg:grid-cols-2">
        {/* LEFT SIDE - Premium Content */}
        <motion.div
          style={{ opacity }}
          className="relative flex flex-col justify-center px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-24 lg:py-32 bg-gradient-to-br from-off-white via-cream to-off-white"
        >
          {/* Decorative Left Border */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-rose-gold to-transparent" />
          
          <div className="max-w-2xl">
            {/* Premium Badge */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isLoaded ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-3 border border-rose-gold/30 px-5 py-2 bg-white/60 backdrop-blur-sm">
                <div className="w-1.5 h-1.5 bg-rose-gold animate-pulse" />
                <span className="text-rose-gold text-xs font-medium tracking-[0.2em] uppercase">
                  Est. 2010 • Award-Winning Studio
                </span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isLoaded ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 0.4 }}
              className="mb-8"
            >
              <h1 className="font-display">
                <span className="block text-warm-gray text-sm uppercase tracking-[0.25em] font-light mb-4">
                  Elevate Your Space
                </span>
                <span className="block text-deep-charcoal font-light leading-[1.05] mb-3" style={{ fontSize: 'clamp(2.75rem, 6vw, 5rem)' }}>
                  Where Luxury
                </span>
                <span className="block text-deep-charcoal font-light leading-[1.05] mb-3" style={{ fontSize: 'clamp(2.75rem, 6vw, 5rem)' }}>
                  Meets
                </span>
                <span className="block font-semibold leading-[1.05] bg-gradient-to-r from-rose-gold via-rose-gold-dark to-rose-gold bg-clip-text text-transparent" style={{ fontSize: 'clamp(2.75rem, 6vw, 5rem)' }}>
                  Timeless Design
                </span>
              </h1>
            </motion.div>

            {/* Accent Line */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={isLoaded ? { opacity: 1, scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-8"
            >
              <div className="h-[2px] w-24 bg-gradient-to-r from-rose-gold to-rose-gold-dark" />
            </motion.div>

            {/* Value Proposition */}
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={isLoaded ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-charcoal text-lg md:text-xl leading-relaxed mb-10 max-w-xl font-light"
            >
              Transforming spaces into sophisticated sanctuaries where every detail
              reflects your refined taste and elevated lifestyle.
            </motion.p>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isLoaded ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="space-y-3 mb-12"
            >
              {trustBadges.map((badge, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, x: -20 }}
                  animate={isLoaded ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  className="flex items-center gap-3 text-sm text-deep-charcoal group cursor-default"
                >
                  <div className="w-5 h-5 border border-rose-gold/50 flex items-center justify-center group-hover:border-rose-gold transition-colors duration-300">
                    <div className="w-2 h-2 bg-rose-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <span className="group-hover:text-rose-gold transition-colors duration-300">{badge.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isLoaded ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/contact">
                <button className="group relative px-8 py-4 bg-rose-gold text-white font-semibold text-sm tracking-[0.1em] uppercase overflow-hidden transition-all duration-500 hover:bg-rose-gold-dark hover:shadow-2xl hover:shadow-rose-gold/30">
                  <span className="relative z-10 flex items-center gap-3">
                    Start Your Project
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </button>
              </Link>
              <Link href="/portfolio">
                <button className="group px-8 py-4 border border-deep-charcoal/20 text-deep-charcoal font-medium text-sm tracking-[0.1em] uppercase hover:border-rose-gold hover:bg-rose-gold/5 transition-all duration-500">
                  View Portfolio
                </button>
              </Link>
            </motion.div>

            {/* Guarantee */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isLoaded ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="mt-10 pt-8 border-t border-soft-gray"
            >
              <div className="flex items-center gap-3 text-xs text-warm-gray">
                <svg className="w-4 h-4 text-rose-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>Complimentary Consultation • White-Glove Service</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* RIGHT SIDE - Large Visual with Project Info */}
        <div className="relative hidden lg:block">
          <AnimatePresence mode="wait">
            {luxuryInteriors.map((interior, index) => (
              currentImage === index && (
                <motion.div
                  key={interior.id}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  {/* Main Image */}
                  <div className="absolute inset-0">
                    <img
                      src={interior.image}
                      alt={interior.title}
                      className="w-full h-full object-cover"
                    />
                    {/* Light Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-off-white/30 via-transparent to-off-white/40" />
                  </div>

                  {/* Floating Project Card - Bottom Right */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="absolute bottom-12 right-12 bg-white/95 backdrop-blur-xl border border-soft-gray shadow-2xl p-8 max-w-md"
                  >
                    <div className="mb-4">
                      <div className="text-rose-gold text-xs uppercase tracking-[0.2em] mb-3">Featured Project</div>
                      <h3 className="text-2xl font-display font-semibold text-deep-charcoal mb-2">{interior.title}</h3>
                      <p className="text-warm-gray text-sm flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        </svg>
                        {interior.location} • {interior.year}
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-6 pt-6 border-t border-soft-gray">
                      <div>
                        <div className="text-rose-gold text-xl font-display font-semibold mb-1">{interior.sqft}</div>
                        <div className="text-warm-gray text-xs uppercase tracking-wider">Total Area</div>
                      </div>
                      <div>
                        <div className="text-rose-gold text-xl font-display font-semibold mb-1">{interior.style}</div>
                        <div className="text-warm-gray text-xs uppercase tracking-wider">Design Style</div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )
            ))}
          </AnimatePresence>

          {/* Navigation Dots - Top Right */}
          <div className="absolute top-12 right-12 flex gap-2 z-10">
            {luxuryInteriors.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`h-1 rounded-full transition-all duration-300 ${
                  currentImage === index
                    ? 'bg-rose-gold w-12'
                    : 'bg-soft-gray w-1 hover:bg-rose-gold/50'
                }`}
                aria-label={`View ${luxuryInteriors[index].title}`}
              />
            ))}
          </div>

          {/* Decorative Right Border */}
          <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-rose-gold to-transparent opacity-60" />
        </div>
      </div>

      {/* Stats Bar - Bottom Overlay */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isLoaded ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 1.6 }}
        className="absolute bottom-0 left-0 right-0 z-20 bg-white/98 backdrop-blur-xl border-t border-soft-gray shadow-2xl"
      >
        <div className="max-w-[1800px] mx-auto px-8 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 1.8 + index * 0.1 }}
                className="text-center group cursor-default"
              >
                <div className="text-4xl font-display font-light text-rose-gold mb-2 group-hover:scale-105 transition-all duration-300">
                  {stat.value}
                </div>
                <div className="text-deep-charcoal text-sm font-medium mb-1">
                  {stat.label}
                </div>
                <div className="text-warm-gray text-xs">
                  {stat.sublabel}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

    </section>
  );
}

export default Hero;
