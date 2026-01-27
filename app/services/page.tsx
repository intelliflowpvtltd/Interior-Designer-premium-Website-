'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

const services = [
  {
    title: 'Residential Interior Design',
    slug: 'residential',
    description: 'Complete home transformations that reflect your lifestyle and aspirations.',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2074&auto=format&fit=crop',
    features: [
      'Full home interior design',
      'Space planning and layout optimization',
      'Custom furniture design',
      'Material and finish selection',
      'Lighting design',
      'Art and accessory curation'
    ],
    investmentRange: '₹40L - ₹2Cr+',
  },
  {
    title: 'Commercial Interior Design',
    slug: 'commercial',
    description: 'Professional spaces that inspire productivity and impress clients.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop',
    features: [
      'Corporate office design',
      'Retail space planning',
      'Restaurant and hospitality',
      'Brand integration',
      'Technology infrastructure',
      'Sustainable workplace design'
    ],
    investmentRange: '₹60L - ₹5Cr+',
  },
  {
    title: 'Luxury Villa Design',
    slug: 'villas',
    description: 'Grand-scale residential projects with uncompromising attention to detail.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop',
    features: [
      'Architectural collaboration',
      'Landscape integration',
      'Smart home technology',
      'Custom millwork and joinery',
      'Heritage craftsmanship',
      'Outdoor living spaces'
    ],
    investmentRange: '₹1Cr - ₹10Cr+',
  },
  {
    title: 'Turnkey Solutions',
    slug: 'turnkey',
    description: 'Complete project management from concept to completion.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
    features: [
      'End-to-end project management',
      'Vendor coordination',
      'Quality control',
      'Timeline management',
      'Budget oversight',
      'Final styling and handover'
    ],
    investmentRange: 'Custom pricing',
  },
  {
    title: 'Renovation & Restoration',
    slug: 'renovation',
    description: 'Sensitive updates to existing spaces while preserving character.',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop',
    features: [
      'Heritage property restoration',
      'Modernization projects',
      'Structural assessment',
      'Adaptive reuse',
      'Phased renovations',
      'Minimal disruption approach'
    ],
    investmentRange: '₹30L - ₹3Cr+',
  },
  {
    title: 'Design Consultation',
    slug: 'consultation',
    description: 'Expert guidance for clients managing their own projects.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop',
    features: [
      'Initial concept development',
      'Material and finish guidance',
      'Vendor recommendations',
      'Design review sessions',
      'Problem-solving support',
      'Flexible engagement models'
    ],
    investmentRange: '₹2L - ₹15L',
  },
];

function ServicesPage() {
  const service1Ref = useRef(null);
  const service2Ref = useRef(null);
  const service3Ref = useRef(null);
  const service4Ref = useRef(null);
  const service5Ref = useRef(null);
  const service6Ref = useRef(null);
  const ctaRef = useRef(null);

  const service1InView = useInView(service1Ref, { once: true, margin: '0px' });
  const service2InView = useInView(service2Ref, { once: true, margin: '0px' });
  const service3InView = useInView(service3Ref, { once: true, margin: '0px' });
  const service4InView = useInView(service4Ref, { once: true, margin: '0px' });
  const service5InView = useInView(service5Ref, { once: true, margin: '0px' });
  const service6InView = useInView(service6Ref, { once: true, margin: '0px' });
  const ctaInView = useInView(ctaRef, { once: true, margin: '0px' });

  return (
    <div className="min-h-screen">
      {/* Dramatic Hero with Vertical Text */}
      <section className="pt-32 pb-24 bg-off-white relative overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Main Content */}
            <div className="lg:col-span-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex items-start gap-12"
              >
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: 200 }}
                  transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                  className="w-[3px] bg-gradient-to-b from-rose-gold to-rose-gold/30 flex-shrink-0"
                />
                <div>
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-rose-gold text-xs font-semibold tracking-[0.3em] uppercase mb-10 block"
                  >
                    Our Services
                  </motion.span>
                  <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-semibold text-deep-charcoal leading-[0.9] mb-12">
                    Comprehensive
                    <br />
                    Design <span className="text-rose-gold">Solutions</span>
                  </h1>
                  <p className="text-lg lg:text-xl text-charcoal max-w-2xl leading-relaxed">
                    Tailored interior design services to transform your space into something extraordinary
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Vertical Text */}
            <div className="hidden lg:flex lg:col-span-2 items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-rose-gold/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-700" />
              <motion.div
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="transform rotate-90 relative z-10"
              >
                <p className="text-deep-charcoal text-2xl font-display font-semibold tracking-[0.5em] [writing-mode:vertical-lr] hover:text-rose-gold transition-colors duration-500">
                  SERVICES
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Service 1 - Residential: Large Hero with Overlapping Stats */}
      <section ref={service1Ref} className="py-32 bg-cream relative overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={service1InView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-8 relative h-[600px] overflow-hidden group shadow-xl hover:shadow-2xl transition-shadow duration-500"
            >
              <img
                src={services[0].image}
                alt={services[0].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-charcoal via-deep-charcoal/40 to-transparent group-hover:from-deep-charcoal/90 transition-all duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-12 lg:p-16 text-white">
                <div className="w-16 h-[3px] bg-rose-gold mb-6" />
                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-display font-bold mb-6 leading-tight group-hover:text-rose-gold transition-colors duration-300">
                  {services[0].title}
                </h2>
                <p className="text-base lg:text-lg opacity-95 leading-relaxed max-w-2xl">
                  {services[0].description}
                </p>
              </div>
            </motion.div>

            <div className="lg:col-span-4 flex items-end lg:-ml-24 relative z-10">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={service1InView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="bg-white p-12 lg:p-16 xl:p-20 w-full shadow-2xl hover:shadow-rose-gold/10 transition-shadow duration-500 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-rose-gold/5 transition-all duration-700 group-hover:bg-rose-gold/10 group-hover:scale-110" />
                <div className="relative z-10">
                  <span className="text-rose-gold text-xs font-bold uppercase tracking-wider mb-8 block">What's Included</span>
                  <ul className="space-y-4 mb-10">
                    {services[0].features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm lg:text-base text-charcoal">
                        <svg className="w-5 h-5 lg:w-6 lg:h-6 text-rose-gold mr-3 mt-0.5 flex-shrink-0 transition-transform duration-300 hover:scale-110" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="border-t-2 border-soft-gray pt-8">
                    <p className="text-xs text-warm-gray uppercase tracking-wider mb-3">Investment Range</p>
                    <p className="text-2xl lg:text-3xl font-display font-bold text-rose-gold mb-8">{services[0].investmentRange}</p>
                    <Link href="/contact">
                      <Button variant="primary" size="md">Get Started</Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Service 2 - Commercial: Diagonal Split with Floating Badge */}
      <section ref={service2Ref} className="py-32 bg-off-white relative overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={service2InView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="order-2 lg:order-1"
            >
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-28 h-28 bg-rose-gold text-white flex items-center justify-center shadow-xl z-20 group hover:shadow-2xl hover:scale-110 transition-all duration-300">
                  <span className="text-4xl font-display font-bold">02</span>
                </div>
                <div className="bg-cream p-12 lg:p-16 xl:p-20 relative overflow-hidden group hover:shadow-2xl transition-shadow duration-500">
                  <div className="absolute bottom-0 right-0 w-48 h-48 bg-rose-gold/5 transition-all duration-700 group-hover:bg-rose-gold/10 group-hover:scale-110" />
                  <div className="relative z-10">
                    <h2 className="text-4xl lg:text-5xl font-display font-semibold text-deep-charcoal mb-8 leading-tight group-hover:text-rose-gold transition-colors duration-300">
                      {services[1].title}
                    </h2>
                    <p className="text-base lg:text-lg text-charcoal leading-relaxed mb-10">
                      {services[1].description}
                    </p>
                    <div className="grid grid-cols-2 gap-5 mb-10">
                      {services[1].features.map((feature, idx) => (
                        <div key={idx} className="flex items-start text-sm text-charcoal">
                          <svg className="w-5 h-5 text-rose-gold mr-2 mt-0.5 flex-shrink-0 transition-transform duration-300 hover:scale-110" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-between pt-6 border-t-2 border-soft-gray">
                      <div>
                        <p className="text-xs text-warm-gray uppercase tracking-wider mb-3">Investment</p>
                        <p className="text-2xl lg:text-3xl font-display font-bold text-rose-gold">{services[1].investmentRange}</p>
                      </div>
                      <Link href="/contact">
                        <Button variant="primary" size="md">Learn More</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={service2InView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-1 lg:order-2 relative h-[550px] overflow-hidden group shadow-xl hover:shadow-2xl transition-shadow duration-500"
            >
              <img
                src={services[1].image}
                alt={services[1].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-deep-charcoal/30 to-transparent group-hover:from-deep-charcoal/40 transition-all duration-500" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service 3 - Luxury Villa: Dark Panel with Giant Watermark */}
      <section ref={service3Ref} className="py-32 bg-cream relative overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={service3InView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="grid grid-cols-1 lg:grid-cols-5 gap-0 shadow-2xl hover:shadow-rose-gold/10 transition-shadow duration-500"
          >
            <div className="lg:col-span-3 bg-deep-charcoal p-14 lg:p-24 xl:p-28 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-rose-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="text-[200px] font-display font-bold text-white/5 absolute -top-12 -right-12 leading-none transition-all duration-700 group-hover:text-white/10">03</div>
              <div className="relative z-10">
                <div className="w-20 h-[3px] bg-gradient-to-r from-rose-gold to-rose-gold/30 mb-8" />
                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-display font-bold text-white mb-8 leading-tight group-hover:text-rose-gold transition-colors duration-300">
                  {services[2].title}
                </h2>
                <p className="text-base lg:text-lg text-white/90 leading-relaxed mb-12">
                  {services[2].description}
                </p>
                <div className="grid grid-cols-2 gap-5 mb-12">
                  {services[2].features.map((feature, idx) => (
                    <div key={idx} className="flex items-start text-sm text-white/80">
                      <svg className="w-5 h-5 text-rose-gold mr-3 mt-0.5 flex-shrink-0 transition-transform duration-300 hover:scale-110" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </div>
                  ))}
                </div>
                <div className="border-t-2 border-white/20 pt-10 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-white/60 uppercase tracking-wider mb-3">Investment Range</p>
                    <p className="text-3xl lg:text-4xl font-display font-bold text-rose-gold">{services[2].investmentRange}</p>
                  </div>
                  <Link href="/contact">
                    <Button variant="primary" size="md">Explore</Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2 relative h-[500px] lg:h-auto overflow-hidden group">
              <img
                src={services[2].image}
                alt={services[2].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-deep-charcoal/20 group-hover:to-deep-charcoal/30 transition-all duration-500" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service 4 - Turnkey: Vertical Content with Image Grid */}
      <section ref={service4Ref} className="py-32 bg-off-white relative overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={service4InView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative h-[600px] overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-500 group"
            >
              <img
                src={services[3].image}
                alt={services[3].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-charcoal/60 to-transparent group-hover:from-deep-charcoal/70 transition-all duration-500" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-deep-charcoal to-transparent p-12">
                <span className="text-white text-8xl font-display font-bold opacity-20 transition-opacity duration-500 group-hover:opacity-30">04</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={service4InView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col justify-center"
            >
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-display font-semibold text-deep-charcoal mb-8 leading-tight hover:text-rose-gold transition-colors duration-300">
                {services[3].title}
              </h2>
              <p className="text-base lg:text-lg text-charcoal leading-relaxed mb-10">
                {services[3].description}
              </p>
              <ul className="space-y-5 mb-12">
                {services[3].features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-base text-charcoal">
                    <svg className="w-6 h-6 text-rose-gold mr-3 mt-1 flex-shrink-0 transition-transform duration-300 hover:scale-110" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="bg-cream p-10 inline-block shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-rose-gold/5 transition-all duration-700 group-hover:bg-rose-gold/10" />
                <div className="relative z-10">
                  <p className="text-xs text-warm-gray uppercase tracking-wider mb-3">Pricing</p>
                  <p className="text-2xl lg:text-3xl font-display font-bold text-rose-gold mb-6">{services[3].investmentRange}</p>
                  <Link href="/contact">
                    <Button variant="primary" size="md">Inquire Now</Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service 5 - Renovation: Asymmetric Reverse Overlap */}
      <section ref={service5Ref} className="py-32 bg-cream relative overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            <div className="lg:col-span-5 flex items-center lg:-mr-28 relative z-10 order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={service5InView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="bg-white p-12 lg:p-16 xl:p-20 w-full shadow-2xl hover:shadow-rose-gold/10 transition-shadow duration-500 relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 w-40 h-40 bg-rose-gold/5 transition-all duration-700 group-hover:bg-rose-gold/10 group-hover:scale-110" />
                <div className="relative z-10">
                  <span className="text-rose-gold text-7xl font-display font-bold mb-8 block">05</span>
                  <h2 className="text-3xl lg:text-4xl xl:text-5xl font-display font-semibold text-deep-charcoal mb-8 leading-tight group-hover:text-rose-gold transition-colors duration-300">
                    {services[4].title}
                  </h2>
                  <p className="text-base lg:text-lg text-charcoal leading-relaxed mb-10">
                    {services[4].description}
                  </p>
                  <div className="grid grid-cols-1 gap-4 mb-10">
                    {services[4].features.map((feature, idx) => (
                      <div key={idx} className="flex items-start text-sm text-charcoal">
                        <svg className="w-5 h-5 text-rose-gold mr-3 mt-0.5 flex-shrink-0 transition-transform duration-300 hover:scale-110" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-8 border-t-2 border-soft-gray">
                    <div>
                      <p className="text-xs text-warm-gray uppercase tracking-wider mb-3">Investment</p>
                      <p className="text-2xl lg:text-3xl font-display font-bold text-rose-gold">{services[4].investmentRange}</p>
                    </div>
                    <Link href="/contact">
                      <Button variant="primary" size="md">Discuss</Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={service5InView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="lg:col-span-7 relative h-[600px] overflow-hidden group order-1 lg:order-2 shadow-xl hover:shadow-2xl transition-shadow duration-500"
            >
              <img
                src={services[4].image}
                alt={services[4].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-deep-charcoal/40 group-hover:to-deep-charcoal/50 transition-all duration-500" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service 6 - Consultation: Minimal Centered Showcase */}
      <section ref={service6Ref} className="py-40 bg-off-white relative overflow-hidden">
        <div className="max-w-[1300px] mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={service6InView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-20"
          >
            <span className="text-rose-gold text-9xl font-display font-bold mb-10 block">06</span>
            <div className="w-24 h-[3px] bg-gradient-to-r from-transparent via-rose-gold to-transparent mx-auto mb-10" />
            <h2 className="text-5xl lg:text-6xl xl:text-7xl font-display font-semibold text-deep-charcoal mb-10 leading-tight hover:text-rose-gold transition-colors duration-300">
              {services[5].title}
            </h2>
            <p className="text-lg lg:text-xl text-charcoal leading-relaxed max-w-2xl mx-auto">
              {services[5].description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={service6InView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[450px] mb-16 overflow-hidden shadow-2xl hover:shadow-rose-gold/10 transition-shadow duration-500 group"
          >
            <img
              src={services[5].image}
              alt={services[5].title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep-charcoal/60 to-transparent group-hover:from-deep-charcoal/70 transition-all duration-500" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={service6InView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-16"
          >
            {services[5].features.map((feature, idx) => (
              <div key={idx} className="text-center p-8 bg-cream group hover:bg-white hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-rose-gold/5 transition-all duration-700 group-hover:bg-rose-gold/10" />
                <div className="relative z-10">
                  <svg className="w-10 h-10 text-rose-gold mx-auto mb-5 transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <p className="text-sm lg:text-base text-charcoal font-medium">{feature}</p>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={service6InView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center bg-cream p-14 shadow-lg hover:shadow-2xl transition-shadow duration-500 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-rose-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative z-10">
              <p className="text-xs text-warm-gray uppercase tracking-wider mb-4">Investment Range</p>
              <p className="text-4xl lg:text-5xl font-display font-bold text-rose-gold mb-8">{services[5].investmentRange}</p>
              <Link href="/contact">
                <Button variant="primary" size="lg">Schedule Consultation</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Bold Editorial with Diagonal Accent */}
      <section ref={ctaRef} className="py-40 bg-deep-charcoal relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-rose-gold/10 transform skew-x-[-12deg] translate-x-1/4 transition-all duration-700 hover:bg-rose-gold/15" />
        <div className="max-w-[1500px] mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"
          >
            <div>
              <span className="text-rose-gold text-xs font-bold uppercase tracking-wider mb-8 block">Get Started</span>
              <div className="w-20 h-[3px] bg-rose-gold mb-10" />
              <h2 className="text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-white mb-10 leading-tight">
                Not Sure Which
                <br />
                Service You <span className="text-rose-gold">Need?</span>
              </h2>
              <p className="text-base lg:text-lg text-white/85 leading-relaxed mb-12 max-w-xl">
                Schedule a complimentary consultation with our design experts to discuss your project and find the perfect solution tailored to your vision.
              </p>
              <Link href="/contact">
                <Button size="lg" variant="primary">
                  Book Free Consultation
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div className="bg-white/10 p-10 backdrop-blur-sm group hover:bg-white/15 hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative z-10">
                  <div className="text-5xl lg:text-6xl font-display font-bold text-rose-gold mb-3 transition-transform duration-300 group-hover:scale-110">500+</div>
                  <p className="text-white/70 text-xs uppercase tracking-wider">Projects Delivered</p>
                </div>
              </div>
              <div className="bg-white/10 p-10 backdrop-blur-sm mt-16 group hover:bg-white/15 hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative z-10">
                  <div className="text-5xl lg:text-6xl font-display font-bold text-rose-gold mb-3 transition-transform duration-300 group-hover:scale-110">20+</div>
                  <p className="text-white/70 text-xs uppercase tracking-wider">Years Experience</p>
                </div>
              </div>
              <div className="bg-white/10 p-10 backdrop-blur-sm -mt-16 group hover:bg-white/15 hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative z-10">
                  <div className="text-5xl lg:text-6xl font-display font-bold text-rose-gold mb-3 transition-transform duration-300 group-hover:scale-110">98%</div>
                  <p className="text-white/70 text-xs uppercase tracking-wider">Client Satisfaction</p>
                </div>
              </div>
              <div className="bg-white/10 p-10 backdrop-blur-sm group hover:bg-white/15 hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative z-10">
                  <div className="text-5xl lg:text-6xl font-display font-bold text-rose-gold mb-3 transition-transform duration-300 group-hover:scale-110">24/7</div>
                  <p className="text-white/70 text-xs uppercase tracking-wider">Project Support</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default ServicesPage;
