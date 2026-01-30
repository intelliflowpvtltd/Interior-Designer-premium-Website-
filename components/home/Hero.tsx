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
    <section ref={containerRef} className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#FAF9F6] via-[#F8F6F3] to-[#FAF9F6]">
      {/* Elegant Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(183, 110, 121, 0.03) 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }} />
      </div>

      {/* Background Image with Sophisticated Overlay */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          {luxuryInteriors.map((interior, index) => (
            currentImage === index && (
              <motion.div
                key={interior.id}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <img
                  src={interior.image}
                  alt={interior.title}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            )
          ))}
        </AnimatePresence>

        {/* Premium Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF9F6] via-[#FAF9F6]/98 to-[#FAF9F6]/85" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF9F6]/60 via-transparent to-[#FAF9F6]/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF9F6] via-transparent to-transparent" />
      </div>

      {/* Main Content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 min-h-screen flex flex-col justify-center px-4 sm:px-6 md:px-12 lg:px-24 pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-16 sm:pb-20"
      >
        <div className="max-w-[1600px] w-full mx-auto">
          {/* Centered Premium Layout */}
          <div className="text-center max-w-5xl mx-auto">
            {/* Ornamental Top Divider */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, delay: 0.2 }}
              className="mb-6 sm:mb-8 flex justify-center"
            >
              <div className="flex items-center gap-4">
                <div className="h-[1px] w-12 sm:w-16 bg-gradient-to-r from-transparent via-rose-gold to-rose-gold" />
                <div className="w-2 h-2 rotate-45 border border-rose-gold" />
                <div className="h-[1px] w-12 sm:w-16 bg-gradient-to-l from-transparent via-rose-gold to-rose-gold" />
              </div>
            </motion.div>

            {/* Premium Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-6 sm:mb-8"
            >
              <div className="inline-flex items-center gap-3 border border-rose-gold/30 px-6 py-2.5 bg-white/60 backdrop-blur-sm">
                <svg className="w-5 h-5 text-rose-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-deep-charcoal text-sm font-medium tracking-wide">
                  Award-Winning Interior Design Studio
                </span>
              </div>
            </motion.div>

            {/* Premium Headline with Classic Typography */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.2, delay: 0.4 }}
              className="mb-6 sm:mb-8"
            >
              <h1 className="font-display mb-4">
                <span className="block text-[#6B7B8A] text-sm sm:text-base uppercase tracking-[0.3em] font-normal mb-3 sm:mb-4">
                  Elevate Your Space
                </span>
                <span
                  className="block text-deep-charcoal font-light leading-[1.1] tracking-tight"
                  style={{ fontSize: 'clamp(2.5rem, 7vw + 0.5rem, 5.5rem)' }}
                >
                  Timeless Elegance,
                </span>
                <span
                  className="block font-medium leading-[1.1] mt-2 sm:mt-3 bg-gradient-to-r from-rose-gold via-[#C97D87] to-rose-gold bg-clip-text text-transparent tracking-tight"
                  style={{ fontSize: 'clamp(2.5rem, 7vw + 0.5rem, 5.5rem)' }}
                >
                  Masterfully Crafted
                </span>
              </h1>
            </motion.div>

            {/* Ornamental Divider */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={isLoaded ? { opacity: 1, scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex justify-center mb-6 sm:mb-8"
            >
              <div className="flex items-center gap-3">
                <div className="h-[1px] w-8 bg-rose-gold/50" />
                <div className="w-1.5 h-1.5 rounded-full bg-rose-gold" />
                <div className="h-[1px] w-20 bg-rose-gold" />
                <div className="w-1.5 h-1.5 rounded-full bg-rose-gold" />
                <div className="h-[1px] w-8 bg-rose-gold/50" />
              </div>
            </motion.div>

            {/* Refined Value Proposition */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-[#2C3E50] text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed mb-8 sm:mb-10 font-light"
              style={{ fontFamily: '"Cormorant Garamond", serif' }}
            >
              Where refined aesthetics meet timeless sophistication.
              <span className="block mt-2 text-base sm:text-lg text-[#6B7B8A]">
                Curating bespoke interiors that transcend trends and elevate your everyday living experience.
              </span>
            </motion.p>

            {/* Elegant Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex flex-wrap justify-center gap-6 sm:gap-8 mb-10 sm:mb-12"
            >
              {trustBadges.map((badge, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 10 }}
                  animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  className="flex items-center gap-2.5 text-sm text-[#2C3E50] group cursor-default"
                >
                  <span className="w-6 h-6 border border-rose-gold flex items-center justify-center text-rose-gold text-xs font-semibold group-hover:bg-rose-gold group-hover:text-white transition-all duration-300">
                    {badge.icon}
                  </span>
                  <span className="group-hover:text-rose-gold transition-colors duration-300">{badge.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Premium CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center items-center"
            >
              <Link href="/contact">
                <button className="group relative px-10 sm:px-12 py-4 sm:py-5 bg-rose-gold text-white font-medium text-sm tracking-[0.15em] uppercase overflow-hidden transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-rose-gold/40 border border-rose-gold min-h-[56px] min-w-[240px]">
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    Schedule Consultation
                    <svg className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#A05A6B] to-rose-gold-dark opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </button>
              </Link>
              <Link href="/portfolio">
                <button className="group px-10 sm:px-12 py-4 sm:py-5 border-2 border-[#2C3E50]/20 text-[#2C3E50] font-medium text-sm tracking-[0.15em] uppercase hover:border-rose-gold hover:text-rose-gold transition-all duration-500 shadow-lg hover:shadow-xl hover:shadow-rose-gold/20 bg-white/80 backdrop-blur-sm min-h-[56px] min-w-[240px]">
                  View Our Portfolio
                </button>
              </Link>
            </motion.div>

            {/* Elegant Guarantee Statement */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isLoaded ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 1.3 }}
              className="mt-8 sm:mt-10"
            >
              <div className="inline-flex items-center gap-3 text-sm text-[#6B7B8A] border-t border-b border-soft-gray/50 py-3 px-6">
                <svg className="w-5 h-5 text-rose-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>Complimentary Consultation • Satisfaction Guaranteed</span>
              </div>
            </motion.div>
          </div>


          {/* Premium Stats Section with Ornamental Frame */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="mt-16 sm:mt-24 max-w-6xl mx-auto"
          >
            {/* Ornamental Top Border */}
            <div className="flex justify-center mb-8">
              <div className="flex items-center gap-4">
                <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-rose-gold" />
                <div className="w-2 h-2 rotate-45 border border-rose-gold" />
                <div className="text-[10px] text-rose-gold tracking-[0.3em] uppercase">Our Legacy</div>
                <div className="w-2 h-2 rotate-45 border border-rose-gold" />
                <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-rose-gold" />
              </div>
            </div>

            <div className="relative">
              {/* Corner Ornaments */}
              <div className="absolute -top-3 -left-3 w-6 h-6 border-l-2 border-t-2 border-rose-gold/40" />
              <div className="absolute -top-3 -right-3 w-6 h-6 border-r-2 border-t-2 border-rose-gold/40" />
              <div className="absolute -bottom-3 -left-3 w-6 h-6 border-l-2 border-b-2 border-rose-gold/40" />
              <div className="absolute -bottom-3 -right-3 w-6 h-6 border-r-2 border-b-2 border-rose-gold/40" />

              <div className="bg-white/95 backdrop-blur-xl border-2 border-soft-gray/50 p-10 sm:p-12 shadow-2xl">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 1.7 + index * 0.1 }}
                      className="text-center group/stat cursor-default relative"
                    >
                      {/* Vertical Divider (except last item) */}
                      {index < stats.length - 1 && (
                        <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-20 w-[1px] bg-gradient-to-b from-transparent via-soft-gray to-transparent" />
                      )}
                      
                      <div className="text-4xl md:text-5xl font-display font-light text-rose-gold mb-3 group-hover/stat:scale-105 transition-all duration-500">
                        {stat.value}
                      </div>
                      <div className="h-[1px] w-12 bg-rose-gold/30 mx-auto mb-3" />
                      <div className="text-deep-charcoal text-sm font-semibold mb-1 uppercase tracking-wider">
                        {stat.label}
                      </div>
                      <div className="text-warm-gray text-xs tracking-wide">
                        {stat.sublabel}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Elegant Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isLoaded ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="flex flex-col items-center gap-4 text-warm-gray hover:text-rose-gold transition-all duration-500 cursor-pointer group">
          <div className="flex items-center gap-3">
            <div className="h-[1px] w-8 bg-current opacity-50" />
            <span className="text-[9px] uppercase tracking-[0.4em] font-medium">Discover More</span>
            <div className="h-[1px] w-8 bg-current opacity-50" />
          </div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="border border-current rounded-full p-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
