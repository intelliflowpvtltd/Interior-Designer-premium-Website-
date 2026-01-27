'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 bg-cream" ref={ref}>
      <div className="max-w-[1000px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="bg-white p-10 md:p-16 border border-soft-gray text-center shadow-xl hover:shadow-2xl transition-all duration-700 group"
        >
          {/* Section Label */}
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-rose-gold" />
            <span className="text-rose-gold text-xs font-medium tracking-[0.3em] uppercase">
              Get Started
            </span>
            <div className="w-8 h-[1px] bg-rose-gold" />
          </div>

          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-deep-charcoal mb-6 group-hover:text-rose-gold transition-colors duration-500">
            Ready to Transform <span className="text-rose-gold">Your Space?</span>
          </h2>

          {/* Description */}
          <p className="text-charcoal text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Schedule a consultation with our design experts and begin your journey 
            to a space that truly reflects your vision.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="group/btn px-8 py-4 bg-rose-gold text-white font-medium text-sm tracking-wide uppercase hover:bg-rose-gold-dark transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-rose-gold/30 transform hover:-translate-y-1">
                <span className="flex items-center justify-center gap-3">
                  Book Consultation
                  <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
            </Link>
            <Link href="/process">
              <button className="group/btn px-8 py-4 border-2 border-deep-charcoal/30 text-deep-charcoal font-medium text-sm tracking-wide uppercase hover:border-rose-gold hover:text-rose-gold transition-all duration-500 shadow-md hover:shadow-xl hover:shadow-rose-gold/20 transform hover:-translate-y-1 bg-white">
                View Our Process
              </button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 pt-10 border-t border-soft-gray"
          >
            <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
              <div className="text-center">
                <div className="text-rose-gold text-2xl font-display font-semibold group-hover:scale-110 transition-transform duration-500">500+</div>
                <div className="text-warm-gray text-xs uppercase tracking-wider mt-1">Projects</div>
              </div>
              <div className="w-[1px] h-10 bg-soft-gray hidden sm:block" />
              <div className="text-center">
                <div className="text-rose-gold text-2xl font-display font-semibold group-hover:scale-110 transition-transform duration-500">15+</div>
                <div className="text-warm-gray text-xs uppercase tracking-wider mt-1">Years</div>
              </div>
              <div className="w-[1px] h-10 bg-soft-gray hidden sm:block" />
              <div className="text-center">
                <div className="text-rose-gold text-2xl font-display font-semibold group-hover:scale-110 transition-transform duration-500">100%</div>
                <div className="text-warm-gray text-xs uppercase tracking-wider mt-1">Satisfaction</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
