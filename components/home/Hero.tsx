'use client';

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

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
    <section ref={containerRef} className="relative min-h-screen overflow-hidden bg-off-white">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 subtle-pattern" />

      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          {luxuryInteriors.map((interior, index) => (
            currentImage === index && (
              <motion.div
                key={interior.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
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

        {/* Clean Light Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-off-white via-off-white/95 to-off-white/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-off-white/50 via-transparent to-off-white" />
      </div>

      {/* Main Content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 min-h-screen flex flex-col justify-center px-4 sm:px-6 md:px-12 lg:px-24 pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-12 sm:pb-16"
      >
        <div className="max-w-[1400px] w-full mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-7">
              {/* Trust Badge with Social Proof */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-4 sm:mb-6"
              >
                <div className="inline-flex items-center gap-2 sm:gap-3 bg-rose-gold/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-rose-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-deep-charcoal text-xs sm:text-sm font-medium">
                    Trusted by 500+ Premium Clients Across India
                  </span>
                </div>
              </motion.div>

              {/* Main Headline - Psychological Trigger: Aspiration + Exclusivity */}
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.4 }}
                className="font-display mb-4 sm:mb-6"
              >
                <span
                  className="block text-deep-charcoal font-light leading-[1.15]"
                  style={{ fontSize: 'clamp(2rem, 6vw + 0.5rem, 4.5rem)' }}
                >
                  Transform Your Home Into a
                </span>
                <span
                  className="block font-semibold leading-[1.15] mt-1 sm:mt-2 text-rose-gold"
                  style={{ fontSize: 'clamp(2rem, 6vw + 0.5rem, 4.5rem)' }}
                >
                  Living Masterpiece
                </span>
              </motion.h1>

              {/* Value Proposition - Clear Benefits */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-charcoal text-base sm:text-lg md:text-xl max-w-xl leading-relaxed mb-6 sm:mb-8"
              >
                Award-winning interior design that enhances your lifestyle, increases property value,
                and creates spaces you'll love coming home to—every single day.
              </motion.p>

              {/* Trust Badges - Psychological Trigger: Authority + Credibility */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-8"
              >
                {trustBadges.map((badge, index) => (
                  <div key={index} className="flex items-center gap-2 text-xs sm:text-sm text-charcoal">
                    <span className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-rose-gold/20 flex items-center justify-center text-rose-gold text-xs font-bold">
                      {badge.icon}
                    </span>
                    <span>{badge.text}</span>
                  </div>
                ))}
              </motion.div>

              {/* CTA Buttons - Psychological Trigger: Urgency + Choice */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 1 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4"
              >
                <Link href="/contact" className="w-full sm:w-auto">
                  <button className="w-full group px-6 sm:px-8 py-3.5 sm:py-4 bg-rose-gold text-white font-medium text-sm tracking-wide uppercase hover:bg-rose-gold-dark transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-rose-gold/30 transform hover:-translate-y-0.5 min-h-[48px]">
                    <span className="flex items-center justify-center gap-2 sm:gap-3">
                      Get Free Consultation
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </button>
                </Link>
                <Link href="/portfolio" className="w-full sm:w-auto">
                  <button className="w-full group px-6 sm:px-8 py-3.5 sm:py-4 border-2 border-deep-charcoal/30 text-deep-charcoal font-medium text-sm tracking-wide uppercase hover:border-rose-gold hover:text-rose-gold transition-all duration-500 shadow-md hover:shadow-xl hover:shadow-rose-gold/20 transform hover:-translate-y-0.5 bg-white min-h-[48px]">
                    Explore Our Portfolio
                  </button>
                </Link>
              </motion.div>

              {/* Guarantee - Psychological Trigger: Risk Reversal */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={isLoaded ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="mt-6 text-sm text-warm-gray flex items-center gap-2"
              >
                <svg className="w-4 h-4 text-rose-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                No obligation consultation • 100% satisfaction guaranteed
              </motion.p>
            </div>

            {/* Right Column - Featured Project Card */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isLoaded ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 1, delay: 0.6 }}
                className="bg-white p-6 border border-soft-gray shadow-xl hover:shadow-2xl transition-all duration-500 group"
              >
                <p className="text-rose-gold text-xs uppercase tracking-[0.2em] mb-4 font-medium">
                  Featured Project
                </p>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImage}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="text-2xl font-display font-semibold text-deep-charcoal mb-2 group-hover:text-rose-gold transition-colors duration-500">
                      {luxuryInteriors[currentImage].title}
                    </h3>
                    <p className="text-warm-gray text-sm mb-4 flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      </svg>
                      {luxuryInteriors[currentImage].location} • {luxuryInteriors[currentImage].year}
                    </p>
                    <div className="grid grid-cols-2 gap-4 py-4 border-t border-soft-gray">
                      <div>
                        <div className="text-rose-gold text-xl font-display font-semibold">
                          {luxuryInteriors[currentImage].sqft}
                        </div>
                        <div className="text-warm-gray text-xs uppercase tracking-wider">Area</div>
                      </div>
                      <div>
                        <div className="text-rose-gold text-xl font-display font-semibold">
                          {luxuryInteriors[currentImage].style}
                        </div>
                        <div className="text-warm-gray text-xs uppercase tracking-wider">Style</div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Navigation Dots */}
                <div className="flex gap-2 mt-4">
                  {luxuryInteriors.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImage(index)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${currentImage === index
                        ? 'bg-rose-gold w-8'
                        : 'bg-soft-gray w-1.5 hover:bg-rose-gold-light'
                        }`}
                      aria-label={`View ${luxuryInteriors[index].title}`}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Stats Bar - Social Proof Numbers */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="mt-20"
          >
            <div className="bg-white/90 backdrop-blur-md border border-soft-gray p-8 shadow-2xl hover:shadow-rose-gold/10 transition-all duration-700">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 1.5 + index * 0.1 }}
                    className="text-center group/stat cursor-default"
                  >
                    <div className="text-3xl md:text-4xl font-display font-semibold text-rose-gold mb-2 group-hover/stat:scale-110 transition-all duration-500 drop-shadow-sm group-hover/stat:drop-shadow-lg">
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
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isLoaded ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="flex flex-col items-center gap-3 text-warm-gray hover:text-rose-gold transition-all duration-500 cursor-pointer group">
          <span className="text-[10px] uppercase tracking-[0.3em] group-hover:tracking-[0.4em] transition-all duration-300">Scroll to Explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
