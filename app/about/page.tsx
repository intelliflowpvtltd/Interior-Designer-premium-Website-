'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Container from '@/components/ui/Container';

const teamMembers = [
  {
    name: 'Arjun Malhotra',
    role: 'Founder & Principal Designer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop',
    bio: '20+ years crafting luxury interiors across India. Arjun combines architectural precision with artistic vision.',
  },
  {
    name: 'Priya Desai',
    role: 'Creative Director',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop',
    bio: 'Specializes in contemporary residential design with deep appreciation for traditional craftsmanship.',
  },
  {
    name: 'Vikram Singh',
    role: 'Senior Designer - Commercial',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop',
    bio: 'Expert in large-scale commercial projects, bringing innovation to corporate and hospitality spaces.',
  },
  {
    name: 'Ananya Sharma',
    role: 'Design Consultant',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop',
    bio: 'Passionate about sustainable design and integrating technology into modern luxury living.',
  },
];

const awards = [
  { year: '2025', title: 'Best Luxury Residential Design', organization: 'India Design Awards' },
  { year: '2024', title: 'Excellence in Interior Architecture', organization: 'Architectural Digest India' },
  { year: '2024', title: 'Top Interior Designer - India', organization: 'Elle Decor' },
  { year: '2023', title: 'Innovation in Design', organization: 'Design Excellence Awards' },
  { year: '2023', title: 'Sustainable Design Leadership', organization: 'Green Building Council' },
];

function AboutPage() {
  const storyRef = useRef(null);
  const philosophyRef = useRef(null);
  const teamRef = useRef(null);
  const awardsRef = useRef(null);

  const storyInView = useInView(storyRef, { once: true, margin: '0px' });
  const philosophyInView = useInView(philosophyRef, { once: true, margin: '0px' });
  const teamInView = useInView(teamRef, { once: true, margin: '0px' });
  const awardsInView = useInView(awardsRef, { once: true, margin: '0px' });

  return (
    <div className="min-h-screen">
      {/* Dramatic Split Hero */}
      <section className="pt-32 pb-20 bg-cream relative overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:pr-20 flex flex-col justify-center py-16 lg:py-24"
            >
              <div className="flex items-start gap-8 mb-10">
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
                    className="text-rose-gold text-xs font-semibold tracking-[0.3em] uppercase mb-8 block"
                  >
                    About Us
                  </motion.span>
                  <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-semibold text-deep-charcoal leading-[0.9] mb-8">
                    Your Vision,
                    <br />
                    Our <span className="text-rose-gold">Expertise</span>
                  </h1>
                  <p className="text-lg lg:text-xl text-charcoal leading-relaxed max-w-xl">
                    Crafting exceptional interior spaces that elevate daily life since 2005
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right - Stats Panel */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-deep-charcoal p-12 lg:p-16 flex items-center relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-rose-gold/5 to-transparent" />
              <div className="relative z-10 w-full">
                <div className="text-[180px] font-display font-bold text-white/5 absolute -top-12 -right-12 leading-none">20</div>
                <div className="relative z-10">
                  <div className="grid grid-cols-2 gap-8 mb-12">
                    <div>
                      <div className="text-5xl lg:text-6xl font-display font-bold text-rose-gold mb-2">500+</div>
                      <div className="text-white/80 text-sm uppercase tracking-wider">Projects</div>
                    </div>
                    <div>
                      <div className="text-5xl lg:text-6xl font-display font-bold text-rose-gold mb-2">20+</div>
                      <div className="text-white/80 text-sm uppercase tracking-wider">Years</div>
                    </div>
                  </div>
                  <div className="border-t border-white/20 pt-8">
                    <p className="text-white/70 text-sm italic leading-relaxed">
                      &ldquo;Transforming spaces, enriching lives—one exceptional project at a time.&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story - Asymmetric Overlapping Layout */}
      <section ref={storyRef} className="py-24 bg-off-white relative overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Large Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={storyInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 relative h-[600px] overflow-hidden group"
            >
              <img
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop"
                alt="Our studio"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-deep-charcoal/40" />
            </motion.div>

            {/* Overlapping Content Card */}
            <div className="lg:col-span-5 flex items-center lg:-ml-24 relative z-10">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={storyInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="bg-cream p-12 lg:p-16 w-full shadow-2xl relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-rose-gold/5 transition-all duration-700 group-hover:bg-rose-gold/10" />
                <div className="relative z-10">
                  <span className="text-rose-gold text-xs font-bold uppercase tracking-wider mb-4 block">Since 2005</span>
                  <h2 className="text-4xl lg:text-5xl font-display font-semibold text-deep-charcoal mb-8 leading-tight">
                    Our <span className="text-rose-gold">Story</span>
                  </h2>
                  <div className="space-y-5 text-base text-charcoal leading-relaxed">
                    <p>
                      Founded by Arjun Malhotra, Luxe Interiors emerged from a vision to
                      transform how India&apos;s discerning clientele experience luxury living.
                    </p>
                    <p>
                      Our journey has been defined by an unwavering commitment to excellence, a deep
                      respect for traditional Indian craftsmanship, and a progressive embrace of
                      contemporary design innovation.
                    </p>
                    <p>
                      We&apos;ve had the privilege of transforming over 500 luxury residences and
                      commercial spaces across India&apos;s major metropolitan cities.
                    </p>
                  </div>
                  <div className="mt-8 w-24 h-[3px] bg-gradient-to-r from-rose-gold to-rose-gold/30" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy - Diagonal Scattered Layout */}
      <section ref={philosophyRef} className="py-32 bg-cream relative overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={philosophyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <div className="max-w-3xl">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-semibold text-deep-charcoal leading-tight mb-8">
                Our Design <span className="text-rose-gold">Philosophy</span>
              </h2>
              <p className="text-lg lg:text-xl text-charcoal leading-relaxed">
                We believe exceptional interior design transcends aesthetic trends. It&apos;s about
                creating environments that enhance daily life, reflect personal narratives, and
                stand the test of time.
              </p>
            </div>
          </motion.div>

          {/* Scattered Cards */}
          <div className="relative">
            {/* Card 1 - Top Left */}
            <motion.div
              initial={{ opacity: 0, x: -40, y: 40 }}
              animate={philosophyInView ? { opacity: 1, x: 0, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mb-12 lg:mb-0 lg:absolute lg:top-0 lg:left-0 lg:w-[45%]"
            >
              <div className="bg-white p-10 lg:p-14 group hover:shadow-2xl transition-all duration-500 relative">
                <div className="absolute -top-8 -left-8 w-24 h-24 bg-rose-gold text-white flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-shadow duration-300">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="pt-8">
                  <h3 className="text-3xl lg:text-4xl font-display font-semibold text-deep-charcoal mb-5 group-hover:text-rose-gold transition-colors duration-300">
                    Timeless Design
                  </h3>
                  <p className="text-base lg:text-lg text-charcoal leading-relaxed">
                    Creating spaces that remain relevant and beautiful for decades, not just seasons. Our designs honor heritage while embracing innovation.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card 2 - Middle Right */}
            <motion.div
              initial={{ opacity: 0, x: 40, y: -40 }}
              animate={philosophyInView ? { opacity: 1, x: 0, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mb-12 lg:mb-0 lg:absolute lg:top-32 lg:right-0 lg:w-[45%]"
            >
              <div className="bg-white p-10 lg:p-14 group hover:shadow-2xl transition-all duration-500 relative">
                <div className="absolute -top-8 -right-8 w-24 h-24 bg-rose-gold text-white flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-shadow duration-300">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="pt-8">
                  <h3 className="text-3xl lg:text-4xl font-display font-semibold text-deep-charcoal mb-5 group-hover:text-rose-gold transition-colors duration-300">
                    Premium Quality
                  </h3>
                  <p className="text-base lg:text-lg text-charcoal leading-relaxed">
                    Finest materials and craftsmanship, working with master artisans and premium suppliers to ensure every detail exceeds expectations.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card 3 - Bottom Center */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={philosophyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="lg:absolute lg:bottom-0 lg:left-1/2 lg:-translate-x-1/2 lg:w-[50%] mt-12 lg:mt-0"
            >
              <div className="bg-deep-charcoal p-10 lg:p-14 group hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-24 h-24 bg-rose-gold text-white flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-shadow duration-300">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div className="pt-8 relative z-10">
                  <h3 className="text-3xl lg:text-4xl font-display font-semibold text-white mb-5 group-hover:text-rose-gold transition-colors duration-300">
                    Personalized
                  </h3>
                  <p className="text-base lg:text-lg text-white/90 leading-relaxed">
                    Deeply personal projects reflecting your unique story, values, and lifestyle. Every space becomes a true extension of who you are.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Spacer for absolute positioned cards on mobile */}
          <div className="hidden lg:block h-[600px]" />
        </div>
      </section>

      {/* Team - Scattered Masonry Layout */}
      <section ref={teamRef} className="py-32 bg-off-white relative overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          {/* Header - Left Aligned */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={teamInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-24 max-w-3xl"
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-semibold text-deep-charcoal leading-tight mb-8">
              Meet Our <span className="text-rose-gold">Team</span>
            </h2>
            <p className="text-lg lg:text-xl text-charcoal leading-relaxed">
              The talented individuals who bring your vision to life
            </p>
          </motion.div>

          {/* Masonry Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                animate={teamInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                className={index % 2 === 0 ? "lg:mt-0" : "lg:mt-24"}
              >
                <div className="group relative">
                  {/* Image */}
                  <div className="aspect-[4/5] mb-6 overflow-hidden relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-deep-charcoal/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Floating Number Badge */}
                    <div className="absolute -top-6 -right-6 w-16 h-16 bg-rose-gold text-white flex items-center justify-center font-display font-bold text-2xl shadow-xl">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="bg-white p-8 shadow-lg group-hover:shadow-2xl transition-shadow duration-500">
                    <h3 className="text-2xl lg:text-3xl font-display font-semibold text-deep-charcoal mb-2 group-hover:text-rose-gold transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-rose-gold text-sm font-bold uppercase tracking-wider mb-4">{member.role}</p>
                    <p className="text-charcoal text-base leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards - Trophy Showcase Layout */}
      <section ref={awardsRef} className="py-32 bg-cream relative overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          {/* Header - Centered */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={awardsInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-24 text-center relative"
          >
            <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-rose-gold/20 to-transparent -translate-y-1/2" />
            <div className="relative inline-block bg-cream px-16">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-semibold text-deep-charcoal leading-tight mb-6">
                Awards & <span className="text-rose-gold">Recognition</span>
              </h2>
              <p className="text-lg lg:text-xl text-charcoal max-w-2xl mx-auto leading-relaxed">
                Industry acknowledgment of the excellence our clients experience
              </p>
            </div>
          </motion.div>

          {/* Awards Grid - Asymmetric */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* First Award - Large Featured */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={awardsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-2 lg:row-span-2"
            >
              <div className="bg-deep-charcoal p-12 lg:p-16 h-full flex flex-col justify-between relative overflow-hidden group shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="text-[200px] font-display font-bold text-white/5 absolute -bottom-12 -right-12 leading-none">
                  {awards[0].year}
                </div>
                <div className="relative z-10">
                  <div className="flex items-start gap-6 mb-8">
                    <svg className="w-16 h-16 text-rose-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <div>
                      <h3 className="text-4xl lg:text-5xl font-display font-bold text-white mb-4 leading-tight group-hover:text-rose-gold transition-colors duration-300">
                        {awards[0].title}
                      </h3>
                      <p className="text-rose-gold text-lg uppercase tracking-wider">{awards[0].organization}</p>
                    </div>
                  </div>
                  <div className="text-7xl lg:text-8xl font-display font-bold text-rose-gold">{awards[0].year}</div>
                </div>
              </div>
            </motion.div>

            {/* Remaining Awards - Stacked */}
            {awards.slice(1).map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 40 }}
                animate={awardsInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.3 + index * 0.1 }}
                className="relative"
              >
                <div className="bg-white p-8 lg:p-10 h-full group hover:shadow-2xl transition-all duration-500 relative">
                  <div className="absolute -top-6 -right-6 w-20 h-20 bg-rose-gold text-white flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-shadow duration-300">
                    <span className="text-2xl font-display font-bold">{award.year}</span>
                  </div>
                  <div className="pt-4">
                    <h3 className="text-xl lg:text-2xl font-display font-semibold text-deep-charcoal mb-3 group-hover:text-rose-gold transition-colors duration-300 leading-tight">
                      {award.title}
                    </h3>
                    <p className="text-rose-gold text-sm uppercase tracking-wider">{award.organization}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
