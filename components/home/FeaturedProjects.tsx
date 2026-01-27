'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Link from 'next/link';

const featuredProjects = [
  {
    id: 1,
    title: 'The Oberoi Residence',
    location: 'Bangalore',
    category: 'Ultra-Luxury Villa',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop',
    description: 'A 15,000 sq.ft masterpiece blending Mughal grandeur with contemporary minimalism',
    sqft: '15,000',
    duration: '18 months',
    value: '₹12 Cr',
  },
  {
    id: 2,
    title: 'Azure Sky Penthouse',
    location: 'Mumbai',
    category: 'Penthouse',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop',
    description: 'Panoramic luxury with curated art collection and bespoke Italian furnishings',
    sqft: '8,500',
    duration: '14 months',
    value: '₹8 Cr',
  },
  {
    id: 3,
    title: 'The Regal Chambers',
    location: 'Delhi',
    category: 'Executive Suite',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop',
    description: 'Where corporate prestige meets timeless sophistication for India\'s business elite',
    sqft: '6,200',
    duration: '10 months',
    value: '₹5 Cr',
  },
  {
    id: 4,
    title: 'Heritage Crown Estate',
    location: 'Chennai',
    category: 'Heritage Restoration',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
    description: 'Colonial heritage preserved, modern luxury infused—a seamless temporal dialogue',
    sqft: '22,000',
    duration: '24 months',
    value: '₹18 Cr',
  },
];

export default function FeaturedProjects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section className="py-24 bg-cream relative" ref={ref}>
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        {/* Asymmetric Header - Left Aligned */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-24 max-w-5xl"
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-rose-gold text-xs font-semibold tracking-[0.3em] uppercase mb-6 block"
          >
            Our Work
          </motion.span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-semibold text-deep-charcoal leading-[0.9] mb-10">
            Featured
            <br />
            <span className="text-rose-gold">Projects</span>
          </h2>
          <div className="flex items-start gap-12">
            <motion.div 
              initial={{ height: 0 }}
              animate={isInView ? { height: 128 } : {}}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              className="w-[3px] bg-gradient-to-b from-rose-gold to-rose-gold/30 flex-shrink-0"
            />
            <p className="text-lg lg:text-xl text-charcoal leading-relaxed pt-2 max-w-2xl">
              Explore our portfolio of luxury transformations across India's most prestigious addresses.
            </p>
          </div>
        </motion.div>

        {/* Custom Magazine Layout */}
        <div className="relative">
          {/* Project 1 - Large Hero */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <Link href={`/portfolio/${featuredProjects[0].id}`}>
              <div className="group relative h-[550px] lg:h-[600px] overflow-hidden shadow-2xl hover:shadow-rose-gold/20 transition-all duration-700 hover:-translate-y-1">
                <img
                  src={featuredProjects[0].image}
                  alt={featuredProjects[0].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-charcoal via-deep-charcoal/50 to-transparent group-hover:from-deep-charcoal/95 transition-all duration-700" />
                
                <div className="absolute top-8 left-8">
                  <div className="bg-white px-4 py-2 mb-4 shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-105">
                    <span className="text-rose-gold text-xs font-bold uppercase tracking-wider">{featuredProjects[0].category}</span>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-10 lg:p-14 text-white">
                  <div className="max-w-4xl">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-12 h-[3px] bg-rose-gold" />
                      <span className="text-xs lg:text-sm uppercase tracking-widest font-semibold">{featuredProjects[0].location}</span>
                    </div>
                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-5 leading-tight group-hover:text-rose-gold transition-all duration-700 drop-shadow-lg">
                      {featuredProjects[0].title}
                    </h3>
                    <p className="text-base lg:text-lg mb-8 max-w-2xl opacity-95 leading-relaxed">{featuredProjects[0].description}</p>
                    <div className="flex flex-wrap gap-6 lg:gap-8 text-sm">
                      <div><span className="text-rose-gold font-bold text-xl lg:text-2xl">{featuredProjects[0].sqft}</span> <span className="opacity-80 ml-1">Sq Ft</span></div>
                      <div><span className="text-rose-gold font-bold text-xl lg:text-2xl">{featuredProjects[0].value}</span></div>
                      <div className="flex items-center"><span className="opacity-80">{featuredProjects[0].duration}</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Project 2 & 3 - Side by Side Diagonal */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="lg:mt-16"
            >
              <Link href={`/portfolio/${featuredProjects[1].id}`}>
                <div className="group relative bg-white overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-2">
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={featuredProjects[1].image}
                      alt={featuredProjects[1].title}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-deep-charcoal/20 group-hover:bg-deep-charcoal/40 transition-all duration-700" />
                  </div>
                  <div className="p-10 relative">
                    <div className="absolute -top-8 right-8 bg-rose-gold text-white px-6 py-3 shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110">
                      <div className="text-2xl font-display font-bold">{featuredProjects[1].value}</div>
                    </div>
                    <span className="text-rose-gold text-xs font-bold uppercase tracking-wider mb-4 block">{featuredProjects[1].category}</span>
                    <h3 className="text-2xl lg:text-3xl font-display font-semibold text-deep-charcoal mb-4 group-hover:text-rose-gold transition-all duration-500">
                      {featuredProjects[1].title}
                    </h3>
                    <p className="text-sm lg:text-base text-charcoal mb-5 leading-relaxed">{featuredProjects[1].description}</p>
                    <div className="flex items-center justify-between pt-5 border-t-2 border-soft-gray">
                      <span className="text-warm-gray text-xs uppercase tracking-wider">{featuredProjects[1].location}</span>
                      <span className="text-rose-gold text-sm font-bold">{featuredProjects[1].sqft} SF</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="lg:-mt-16"
            >
              <Link href={`/portfolio/${featuredProjects[2].id}`}>
                <div className="group relative bg-white overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-2">
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={featuredProjects[2].image}
                      alt={featuredProjects[2].title}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-deep-charcoal/20 group-hover:bg-deep-charcoal/40 transition-all duration-700" />
                  </div>
                  <div className="p-10 relative">
                    <div className="absolute -top-8 right-8 bg-rose-gold text-white px-6 py-3 shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110">
                      <div className="text-2xl font-display font-bold">{featuredProjects[2].value}</div>
                    </div>
                    <span className="text-rose-gold text-xs font-bold uppercase tracking-wider mb-4 block">{featuredProjects[2].category}</span>
                    <h3 className="text-2xl lg:text-3xl font-display font-semibold text-deep-charcoal mb-4 group-hover:text-rose-gold transition-all duration-500">
                      {featuredProjects[2].title}
                    </h3>
                    <p className="text-sm lg:text-base text-charcoal mb-5 leading-relaxed">{featuredProjects[2].description}</p>
                    <div className="flex items-center justify-between pt-5 border-t-2 border-soft-gray">
                      <span className="text-warm-gray text-xs uppercase tracking-wider">{featuredProjects[2].location}</span>
                      <span className="text-rose-gold text-sm font-bold">{featuredProjects[2].sqft} SF</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>

          {/* Project 4 - Wide Feature with Offset Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link href={`/portfolio/${featuredProjects[3].id}`}>
              <div className="group relative shadow-2xl hover:shadow-rose-gold/20 transition-all duration-700 hover:-translate-y-1">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                  <div className="lg:col-span-3 relative h-96 overflow-hidden">
                    <img
                      src={featuredProjects[3].image}
                      alt={featuredProjects[3].title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-deep-charcoal/60 to-transparent group-hover:from-deep-charcoal/80 transition-all duration-700" />
                  </div>
                  <div className="lg:col-span-2 bg-deep-charcoal text-white p-10 lg:p-14 flex flex-col justify-center relative overflow-hidden shadow-xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-rose-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="relative z-10">
                    <span className="text-rose-gold text-xs font-bold uppercase tracking-wider mb-5 block">{featuredProjects[3].category}</span>
                    <h3 className="text-3xl lg:text-4xl font-display font-bold mb-5 leading-tight group-hover:text-rose-gold transition-all duration-500">
                      {featuredProjects[3].title}
                    </h3>
                    <p className="text-sm lg:text-base opacity-95 mb-8 leading-relaxed">{featuredProjects[3].description}</p>
                    <div className="space-y-4 mb-8">
                      <div className="flex justify-between items-center border-b border-white/20 pb-3">
                        <span className="text-xs uppercase tracking-wider opacity-70 font-medium">Location</span>
                        <span className="font-semibold text-sm">{featuredProjects[3].location}</span>
                      </div>
                      <div className="flex justify-between items-center border-b border-white/20 pb-3">
                        <span className="text-xs uppercase tracking-wider opacity-70 font-medium">Area</span>
                        <span className="font-semibold text-sm">{featuredProjects[3].sqft} Sq Ft</span>
                      </div>
                      <div className="flex justify-between items-center border-b border-white/20 pb-3">
                        <span className="text-xs uppercase tracking-wider opacity-70 font-medium">Investment</span>
                        <span className="font-semibold text-rose-gold text-sm">{featuredProjects[3].value}</span>
                      </div>
                    </div>
                    <div className="text-rose-gold flex items-center gap-3 font-semibold text-sm group-hover:gap-5 transition-all duration-500">
                      <span>Explore Project</span>
                      <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-24 relative"
        >
          <div className="bg-off-white p-14 lg:p-24 relative overflow-hidden shadow-2xl hover:shadow-rose-gold/10 transition-all duration-700 group">
            <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-rose-gold/5" />
            <div className="relative z-10 max-w-3xl">
              <div className="text-[120px] lg:text-[180px] font-display font-bold text-rose-gold/10 leading-none mb-10 group-hover:text-rose-gold/15 transition-all duration-700">500+</div>
              <h3 className="text-3xl lg:text-4xl xl:text-5xl font-display font-semibold text-deep-charcoal mb-8 leading-tight">
                Luxury Transformations
                <br />
                Across India
              </h3>
              <p className="text-base lg:text-lg text-charcoal mb-10 max-w-xl leading-relaxed">
                From heritage villas to modern penthouses, explore our complete portfolio of exceptional design projects.
              </p>
              <Link href="/portfolio">
                <button className="group/btn bg-rose-gold text-white px-10 py-5 text-xs lg:text-sm font-bold uppercase tracking-widest hover:bg-deep-charcoal transition-all duration-700 flex items-center gap-4 shadow-xl hover:shadow-2xl hover:shadow-rose-gold/30 transform hover:-translate-y-1">
                  View Complete Portfolio
                  <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
