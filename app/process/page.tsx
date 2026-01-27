'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import Link from 'next/link';

const processSteps = [
  {
    number: '01',
    title: 'Discovery & Conceptualization',
    duration: '2-3 weeks',
    description: 'We begin by understanding your vision, lifestyle, and aspirations through in-depth consultations.',
    activities: [
      'Initial consultation and site visit',
      'Lifestyle and functional needs assessment',
      'Budget and timeline discussion',
      'Vision board development',
      'Preliminary concepts presentation',
    ],
    deliverables: [
      'Conceptual design direction',
      'Mood boards and inspiration',
      'Preliminary space planning',
      'Project proposal and timeline',
    ],
  },
  {
    number: '02',
    title: 'Design Development',
    duration: '4-6 weeks',
    description: 'Detailed design refinement with 3D visualizations, material selection, and comprehensive planning.',
    activities: [
      'Detailed floor plans and elevations',
      '3D renderings and walkthroughs',
      'Material, finish, and color selection',
      'Custom furniture design',
      'Lighting design and specification',
      'Client review and refinement sessions',
    ],
    deliverables: [
      'Complete design documentation',
      'Photorealistic 3D visualizations',
      'Material and finish boards',
      'Furniture and fixture specifications',
      'Detailed project budget',
    ],
  },
  {
    number: '03',
    title: 'Execution & Project Management',
    duration: '3-12 months',
    description: 'Seamless implementation with rigorous quality control and transparent communication.',
    activities: [
      'Vendor and contractor coordination',
      'Material procurement',
      'Site supervision and quality control',
      'Progress documentation',
      'Regular client updates',
      'Issue resolution and adaptations',
    ],
    deliverables: [
      'Weekly progress reports',
      'Quality inspection documentation',
      'Change order management',
      'Payment milestone tracking',
    ],
  },
  {
    number: '04',
    title: 'Handover & Aftercare',
    duration: '1-2 weeks',
    description: 'Final styling, comprehensive walkthrough, and ongoing support for your completed space.',
    activities: [
      'Final installation and styling',
      'Detailed walkthrough and orientation',
      'Documentation handover',
      'Maintenance guidance',
      'Warranty coordination',
    ],
    deliverables: [
      'Complete project documentation',
      'Maintenance manuals',
      'Warranty information',
      'Professional photography',
      '6-month follow-up consultation',
    ],
  },
];

const faqs = [
  {
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary based on scope and complexity. A luxury apartment typically takes 6-8 months from concept to completion, while a large villa may require 12-18 months. We provide detailed timelines during our initial consultation.',
  },
  {
    question: 'What is your investment range?',
    answer: 'Our projects typically start at ₹40 lakhs for residential interiors and scale based on scope, finishes, and custom elements. Commercial projects start at ₹60 lakhs. We provide transparent budgeting during the design development phase.',
  },
  {
    question: 'Do you work outside major metro cities?',
    answer: 'Yes, we undertake projects across India. For locations outside our office cities (Mumbai, Bangalore, Delhi), we factor travel and accommodation into the project scope while maintaining the same level of service and oversight.',
  },
  {
    question: 'Can I use my own contractors?',
    answer: 'While we typically work with our trusted network of craftsmen and contractors to ensure quality, we can coordinate with your preferred vendors. This is discussed during project planning to ensure smooth execution.',
  },
];

function ProcessPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const step1Ref = useRef(null);
  const step2Ref = useRef(null);
  const step3Ref = useRef(null);
  const step4Ref = useRef(null);
  const faqRef = useRef(null);
  const ctaRef = useRef(null);

  const step1InView = useInView(step1Ref, { once: true, margin: '0px' });
  const step2InView = useInView(step2Ref, { once: true, margin: '0px' });
  const step3InView = useInView(step3Ref, { once: true, margin: '0px' });
  const step4InView = useInView(step4Ref, { once: true, margin: '0px' });
  const faqInView = useInView(faqRef, { once: true, margin: '0px' });
  const ctaInView = useInView(ctaRef, { once: true, margin: '0px' });

  return (
    <div className="min-h-screen bg-off-white">
      {/* Dramatic Header with Horizontal Timeline */}
      <section className="pt-32 pb-24 bg-cream relative overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-20"
          >
            <span className="text-rose-gold text-xs font-bold uppercase tracking-[0.3em] mb-8 block">
              How We Work
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-semibold text-deep-charcoal leading-[0.95] mb-10">
              Our Design
              <br />
              <span className="text-rose-gold">Process</span>
            </h1>
            <div className="w-24 h-[3px] bg-gradient-to-r from-transparent via-rose-gold to-transparent mx-auto mb-10" />
            <p className="text-base lg:text-lg text-charcoal max-w-2xl mx-auto leading-relaxed">
              A seamless journey from vision to reality, crafted with transparency and excellence at every step
            </p>
          </motion.div>

          {/* Horizontal Timeline */}
          <div className="hidden lg:block">
            <div className="relative">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.2, delay: 0.5 }}
                className="absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-rose-gold via-rose-gold to-rose-gold/30 origin-left"
              />
              <div className="grid grid-cols-4 gap-8 relative z-10">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 + index * 0.15 }}
                    className="text-center"
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-rose-gold text-white rounded-full mb-4 shadow-lg">
                      <span className="text-xl font-display font-bold">{step.number}</span>
                    </div>
                    <h3 className="text-sm font-display font-semibold text-deep-charcoal mb-2 leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-xs text-warm-gray">{step.duration}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step 1: Large Hero Image Left + Overlapping Card Right */}
      <section ref={step1Ref} className="py-32 bg-off-white relative overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={step1InView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 relative h-[600px] overflow-hidden shadow-2xl group"
            >
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop"
                alt="Discovery"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-charcoal via-deep-charcoal/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-12">
                <span className="inline-block px-4 py-2 bg-rose-gold text-white text-xs font-bold uppercase tracking-wider mb-4">
                  {processSteps[0].duration}
                </span>
                <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-4">
                  {processSteps[0].title}
                </h2>
              </div>
            </motion.div>

            <div className="lg:col-span-5 flex items-center lg:-ml-20 relative z-10">
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={step1InView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="bg-cream p-10 lg:p-14 w-full shadow-2xl relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-rose-gold/10 transition-all duration-700 group-hover:bg-rose-gold/20 group-hover:scale-110" />
                <div className="relative z-10">
                  <div className="text-9xl font-display font-bold text-rose-gold/10 absolute -top-6 -left-6">01</div>
                  <div className="relative z-10">
                    <p className="text-base text-charcoal leading-relaxed mb-8">
                      {processSteps[0].description}
                    </p>
                    <div className="mb-8">
                      <h3 className="text-xs font-bold text-rose-gold mb-4 uppercase tracking-wider">Key Activities</h3>
                      <ul className="space-y-3">
                        {processSteps[0].activities.map((activity, idx) => (
                          <li key={idx} className="flex items-start text-sm text-charcoal">
                            <svg className="w-5 h-5 text-rose-gold mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {activity}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-6 border-t-2 border-soft-gray">
                      <h3 className="text-xs font-bold text-rose-gold mb-3 uppercase tracking-wider">Deliverables</h3>
                      <div className="flex flex-wrap gap-2">
                        {processSteps[0].deliverables.map((deliverable, idx) => (
                          <span key={idx} className="px-3 py-1 bg-white text-xs text-charcoal border border-soft-gray">
                            {deliverable}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

      {/* Step 2: Diagonal Split with Floating Badge */}
      <section ref={step2Ref} className="py-32 bg-cream relative overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={step2InView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1 relative"
            >
              <div className="absolute -top-12 -left-12 w-32 h-32 bg-rose-gold text-white flex items-center justify-center shadow-2xl z-20">
                <span className="text-5xl font-display font-bold">02</span>
              </div>
              <div className="bg-white p-12 lg:p-16 shadow-xl hover:shadow-2xl transition-shadow duration-500 relative overflow-hidden group">
                <div className="absolute bottom-0 right-0 w-48 h-48 bg-rose-gold/5 transition-all duration-700 group-hover:bg-rose-gold/10 group-hover:scale-110" />
                <div className="relative z-10">
                  <h2 className="text-4xl lg:text-5xl font-display font-semibold text-deep-charcoal mb-4 leading-tight">
                    {processSteps[1].title}
                  </h2>
                  <div className="inline-block px-4 py-2 bg-cream text-rose-gold text-xs font-bold uppercase tracking-wider mb-6">
                    {processSteps[1].duration}
                  </div>
                  <p className="text-base text-charcoal leading-relaxed mb-10">
                    {processSteps[1].description}
                  </p>
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-xs font-bold text-rose-gold mb-4 uppercase tracking-wider flex items-center gap-2">
                        <div className="w-6 h-[2px] bg-rose-gold" />
                        What We Do
                      </h3>
                      <div className="grid grid-cols-1 gap-3">
                        {processSteps[1].activities.map((activity, idx) => (
                          <div key={idx} className="flex items-start text-sm text-charcoal">
                            <span className="text-rose-gold font-bold mr-3">•</span>
                            {activity}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-rose-gold mb-4 uppercase tracking-wider flex items-center gap-2">
                        <div className="w-6 h-[2px] bg-rose-gold" />
                        Deliverables
                      </h3>
                      <div className="grid grid-cols-2 gap-3">
                        {processSteps[1].deliverables.map((deliverable, idx) => (
                          <div key={idx} className="flex items-start text-xs text-charcoal bg-cream p-3">
                            <svg className="w-4 h-4 text-rose-gold mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {deliverable}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={step2InView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-1 lg:order-2 relative h-[550px] overflow-hidden shadow-xl group"
            >
              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop"
                alt="Design Development"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-deep-charcoal/30" />
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Step 3: Dark Panel with Giant Watermark */}
      <section ref={step3Ref} className="py-32 bg-off-white relative overflow-hidden">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={step3InView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="bg-deep-charcoal p-14 lg:p-20 xl:p-24 relative overflow-hidden shadow-2xl group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-rose-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="text-[250px] font-display font-bold text-white/5 absolute -top-16 -right-16 leading-none">03</div>

            <div className="relative z-10 max-w-6xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div>
                  <div className="inline-block px-5 py-2 bg-rose-gold text-white text-xs font-bold uppercase tracking-wider mb-6">
                    {processSteps[2].duration}
                  </div>
                  <h2 className="text-4xl lg:text-5xl xl:text-6xl font-display font-bold text-white mb-8 leading-tight">
                    {processSteps[2].title}
                  </h2>
                  <div className="w-20 h-[3px] bg-gradient-to-r from-rose-gold to-rose-gold/30 mb-8" />
                  <p className="text-base lg:text-lg text-white/90 leading-relaxed mb-12">
                    {processSteps[2].description}
                  </p>
                  <div>
                    <h3 className="text-xs font-bold text-rose-gold mb-6 uppercase tracking-wider">Our Commitment</h3>
                    <ul className="space-y-4">
                      {processSteps[2].activities.map((activity, idx) => (
                        <li key={idx} className="flex items-start text-sm text-white/85">
                          <svg className="w-5 h-5 text-rose-gold mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex flex-col justify-end">
                  <div className="bg-white/10 backdrop-blur-sm p-8 border border-white/20">
                    <h3 className="text-xs font-bold text-rose-gold mb-6 uppercase tracking-wider">Progress Tracking</h3>
                    <div className="space-y-4">
                      {processSteps[2].deliverables.map((deliverable, idx) => (
                        <div key={idx} className="flex items-start text-sm text-white">
                          <div className="w-2 h-2 bg-rose-gold mt-1.5 mr-3 flex-shrink-0" />
                          {deliverable}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Step 4: Centered Showcase with Radial Stats */}
      <section ref={step4Ref} className="py-32 bg-cream relative overflow-hidden">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={step4InView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto text-center"
          >
            <div className="inline-flex items-center justify-center w-24 h-24 bg-rose-gold text-white rounded-full mb-8 shadow-2xl">
              <span className="text-4xl font-display font-bold">04</span>
            </div>
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-display font-semibold text-deep-charcoal mb-6 leading-tight">
              {processSteps[3].title}
            </h2>
            <div className="inline-block px-5 py-2 bg-white text-rose-gold text-xs font-bold uppercase tracking-wider mb-8">
              {processSteps[3].duration}
            </div>
            <p className="text-base lg:text-lg text-charcoal leading-relaxed max-w-2xl mx-auto mb-16">
              {processSteps[3].description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
              <div className="bg-white p-10 shadow-lg hover:shadow-2xl transition-shadow duration-500 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-rose-gold/5 transition-all duration-700 group-hover:bg-rose-gold/10" />
                <div className="relative z-10">
                  <h3 className="text-xs font-bold text-rose-gold mb-6 uppercase tracking-wider">Final Steps</h3>
                  <ul className="space-y-4 text-left">
                    {processSteps[3].activities.map((activity, idx) => (
                      <li key={idx} className="flex items-start text-sm text-charcoal">
                        <svg className="w-5 h-5 text-rose-gold mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-white p-10 shadow-lg hover:shadow-2xl transition-shadow duration-500 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-24 h-24 bg-rose-gold/5 transition-all duration-700 group-hover:bg-rose-gold/10" />
                <div className="relative z-10">
                  <h3 className="text-xs font-bold text-rose-gold mb-6 uppercase tracking-wider">Your Package</h3>
                  <ul className="space-y-4 text-left">
                    {processSteps[3].deliverables.map((deliverable, idx) => (
                      <li key={idx} className="flex items-start text-sm text-charcoal">
                        <div className="w-2 h-2 bg-rose-gold mt-2 mr-3 flex-shrink-0" />
                        {deliverable}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* FAQ Section - Accordion Style */}
      <section ref={faqRef} className="py-32 bg-off-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={faqInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-display font-semibold text-deep-charcoal mb-6">
                Frequently Asked <span className="text-rose-gold">Questions</span>
              </h2>
              <div className="w-24 h-[3px] bg-gradient-to-r from-transparent via-rose-gold to-transparent mx-auto mb-8" />
              <p className="text-base text-charcoal max-w-2xl mx-auto">
                Common questions about our process and services
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={faqInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-8 py-6 flex items-center justify-between text-left group"
                  >
                    <h3 className="text-base lg:text-lg font-semibold text-deep-charcoal group-hover:text-rose-gold transition-colors duration-300 pr-4">
                      {faq.question}
                    </h3>
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-cream flex items-center justify-center transition-all duration-300 ${openFaq === index ? 'bg-rose-gold' : 'group-hover:bg-rose-gold/20'
                      }`}>
                      <svg
                        className={`w-5 h-5 transition-all duration-300 ${openFaq === index ? 'text-white rotate-180' : 'text-rose-gold'
                          }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-500 ${openFaq === index ? 'max-h-96' : 'max-h-0'
                      }`}
                  >
                    <div className="px-8 pb-6 pt-2">
                      <div className="w-12 h-[2px] bg-rose-gold mb-4" />
                      <p className="text-sm lg:text-base text-charcoal leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* CTA Section - Split Layout */}
      <section ref={ctaRef} className="py-32 bg-deep-charcoal relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-rose-gold to-transparent" />
        </div>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={ctaInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <div className="w-20 h-[3px] bg-rose-gold mb-8" />
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-display font-bold text-white mb-8 leading-tight">
                Ready to Begin Your
                <br />
                <span className="text-rose-gold">Transformation?</span>
              </h2>
              <p className="text-base lg:text-lg text-white/85 leading-relaxed mb-10 max-w-xl">
                Schedule a consultation to discuss your project and experience our seamless design process firsthand.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" variant="primary">
                    Schedule Consultation
                  </Button>
                </Link>
                <Link href="/portfolio">
                  <button className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-deep-charcoal font-semibold transition-all duration-300">
                    View Portfolio
                  </button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={ctaInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="bg-white/10 backdrop-blur-sm p-8 hover:bg-white/15 transition-all duration-500 group">
                <div className="text-5xl font-display font-bold text-rose-gold mb-3 transition-transform duration-300 group-hover:scale-110">
                  {processSteps.length}
                </div>
                <p className="text-white/70 text-xs uppercase tracking-wider">Step Process</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-8 mt-12 hover:bg-white/15 transition-all duration-500 group">
                <div className="text-5xl font-display font-bold text-rose-gold mb-3 transition-transform duration-300 group-hover:scale-110">100%</div>
                <p className="text-white/70 text-xs uppercase tracking-wider">Transparency</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-8 -mt-12 hover:bg-white/15 transition-all duration-500 group">
                <div className="text-5xl font-display font-bold text-rose-gold mb-3 transition-transform duration-300 group-hover:scale-110">24/7</div>
                <p className="text-white/70 text-xs uppercase tracking-wider">Support</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-8 hover:bg-white/15 transition-all duration-500 group">
                <div className="text-5xl font-display font-bold text-rose-gold mb-3 transition-transform duration-300 group-hover:scale-110">6mo</div>
                <p className="text-white/70 text-xs uppercase tracking-wider">Aftercare</p>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>
    </div>
  );
}

export default ProcessPage;
