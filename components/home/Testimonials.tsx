'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Rajesh Mehta',
    role: 'Chairman & CEO',
    company: 'Mehta Industries',
    location: 'Mumbai',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
    quote: 'They transformed our penthouse into an absolute masterpiece. Every corner tells a story, every detail reflects our family\'s legacy.',
  },
  {
    id: 2,
    name: 'Priya Sharma',
    role: 'Founder',
    company: 'Sharma Ventures',
    location: 'Bangalore',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=200&auto=format&fit=crop',
    quote: 'From our first meeting to the final reveal, the experience was exceptional. They understood our vision perfectly.',
  },
  {
    id: 3,
    name: 'Vikram Singh',
    role: 'Managing Director',
    company: 'Crown Group',
    location: 'Delhi',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop',
    quote: 'None have matched this level of craftsmanship and attention to detail. Our ancestral home has been reborn with dignity.',
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-32 bg-off-white relative overflow-hidden" ref={ref}>
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        
        {/* Centered Header with Decorative Elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-28 relative"
        >
          <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-rose-gold/20 to-transparent -translate-y-1/2" />
          <div className="relative inline-block bg-off-white px-16">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-rose-gold text-xs font-semibold tracking-[0.3em] uppercase mb-8 block"
            >
              Testimonials
            </motion.span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-semibold text-deep-charcoal leading-tight mb-8">
              What Our
              <br />
              <span className="text-rose-gold">Clients Say</span>
            </h2>
            <p className="text-base lg:text-lg text-charcoal max-w-2xl mx-auto leading-relaxed">
              Trusted by discerning clients across India for their most treasured spaces.
            </p>
          </div>
        </motion.div>

        {/* Scattered Masonry Layout */}
        <div className="relative">
          
          {/* First Testimonial - Large Featured */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-16"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
              <div className="lg:col-span-2 bg-cream p-12 lg:p-20 xl:p-24 relative overflow-hidden group shadow-xl hover:shadow-2xl transition-all duration-700">
                <div className="text-[300px] font-serif text-rose-gold/5 absolute -top-20 -left-12 leading-none transition-all duration-700 group-hover:text-rose-gold/15">&ldquo;</div>
                <div className="relative z-10 max-w-3xl">
                  <blockquote className="text-2xl md:text-3xl lg:text-4xl font-display font-light text-deep-charcoal leading-tight mb-10 italic">
                    {testimonials[0].quote}
                  </blockquote>
                  <div className="flex items-center gap-1 mb-10">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-6 h-6 text-rose-gold" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <div className="flex items-center gap-5">
                    <div className="w-20 h-20 rounded-full overflow-hidden border-3 border-rose-gold shadow-lg group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110">
                      <img src={testimonials[0].image} alt={testimonials[0].name} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                    </div>
                    <div>
                      <h4 className="text-xl lg:text-2xl font-display font-semibold text-deep-charcoal">{testimonials[0].name}</h4>
                      <p className="text-warm-gray text-sm lg:text-base">{testimonials[0].role}</p>
                      <p className="text-rose-gold text-xs uppercase tracking-wider mt-1">{testimonials[0].location}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden lg:block relative overflow-hidden group">
                <div className="absolute inset-0 bg-deep-charcoal flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-rose-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="text-white text-9xl font-display font-bold opacity-10 group-hover:opacity-20 transition-opacity duration-500 relative z-10">5.0</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Second & Third Testimonials - Staggered Duo */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="lg:mt-24"
            >
              <div className="relative bg-white p-10 lg:p-14 group shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-1">
                {/* Floating Image */}
                <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-xl z-20 group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110">
                  <img src={testimonials[1].image} alt={testimonials[1].name} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                </div>
                
                <div className="text-8xl font-serif text-rose-gold/10 mb-6 transition-all duration-500 group-hover:text-rose-gold/30">&ldquo;</div>
                <blockquote className="text-lg lg:text-xl font-display font-light text-deep-charcoal leading-relaxed mb-8 italic">
                  {testimonials[1].quote}
                </blockquote>
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-rose-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div className="border-t-2 border-soft-gray pt-5">
                  <h4 className="text-xl font-display font-semibold text-deep-charcoal group-hover:text-rose-gold transition-all duration-500">{testimonials[1].name}</h4>
                  <p className="text-warm-gray text-sm lg:text-base">{testimonials[1].company}</p>
                  <p className="text-rose-gold text-xs uppercase tracking-wider mt-1">{testimonials[1].location}</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="lg:-mt-24"
            >
              <div className="relative bg-white p-10 lg:p-14 group shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-1">
                {/* Floating Image */}
                <div className="absolute -top-12 -left-12 w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-xl z-20 group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110">
                  <img src={testimonials[2].image} alt={testimonials[2].name} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                </div>
                
                <div className="text-8xl font-serif text-rose-gold/10 mb-6 transition-all duration-500 group-hover:text-rose-gold/30">&ldquo;</div>
                <blockquote className="text-lg lg:text-xl font-display font-light text-deep-charcoal leading-relaxed mb-8 italic">
                  {testimonials[2].quote}
                </blockquote>
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-rose-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div className="border-t-2 border-soft-gray pt-5">
                  <h4 className="text-xl font-display font-semibold text-deep-charcoal group-hover:text-rose-gold transition-all duration-500">{testimonials[2].name}</h4>
                  <p className="text-warm-gray text-sm lg:text-base">{testimonials[2].company}</p>
                  <p className="text-rose-gold text-xs uppercase tracking-wider mt-1">{testimonials[2].location}</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Stats Panel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <div className="bg-deep-charcoal p-16 lg:p-24 text-center relative overflow-hidden shadow-2xl hover:shadow-rose-gold/20 transition-all duration-700 group">
              <div className="absolute inset-0 bg-gradient-to-r from-rose-gold/5 via-transparent to-rose-gold/5" />
              <div className="relative z-10 max-w-5xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-14">
                  <div className="group/stat">
                    <div className="text-6xl lg:text-7xl font-display font-bold text-rose-gold mb-3 transition-all duration-500 group-hover/stat:scale-110 drop-shadow-lg">500+</div>
                    <div className="text-white/80 text-xs lg:text-sm uppercase tracking-wider">Happy Clients</div>
                  </div>
                  <div className="group/stat">
                    <div className="text-6xl lg:text-7xl font-display font-bold text-rose-gold mb-3 transition-all duration-500 group-hover/stat:scale-110 drop-shadow-lg">5.0</div>
                    <div className="text-white/80 text-xs lg:text-sm uppercase tracking-wider">Average Rating</div>
                  </div>
                  <div className="group/stat">
                    <div className="text-6xl lg:text-7xl font-display font-bold text-rose-gold mb-3 transition-all duration-500 group-hover/stat:scale-110 drop-shadow-lg">98%</div>
                    <div className="text-white/80 text-xs lg:text-sm uppercase tracking-wider">Client Retention</div>
                  </div>
                </div>
                <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-rose-gold to-transparent mx-auto mb-6" />
                <p className="text-white/70 text-sm lg:text-base italic max-w-2xl mx-auto">
                  &ldquo;Excellence is not just our standard—it's our promise&rdquo;
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
