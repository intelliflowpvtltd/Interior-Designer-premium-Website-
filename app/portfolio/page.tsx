'use client';

import { useState, useMemo, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { projects, categories, cities, styles, spaceTypes } from '@/lib/projectsData';

function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedCity, setSelectedCity] = useState('All');
  const [selectedStyle, setSelectedStyle] = useState('All');
  const [selectedSpaceType, setSelectedSpaceType] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filtersRef = useRef(null);
  const gridRef = useRef(null);
  const ctaRef = useRef(null);
  const filtersInView = useInView(filtersRef, { once: true, margin: '0px' });
  const gridInView = useInView(gridRef, { once: true, margin: '0px' });
  const ctaInView = useInView(ctaRef, { once: true, margin: '0px' });

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
      const matchesCity = selectedCity === 'All' || project.city === selectedCity;
      const matchesStyle = selectedStyle === 'All' || project.style.includes(selectedStyle);
      const matchesSpaceType = selectedSpaceType === 'All' || project.spaceType === selectedSpaceType;
      const matchesSearch = searchQuery === '' ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.location.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesCity && matchesStyle && matchesSpaceType && matchesSearch;
    });
  }, [selectedCategory, selectedCity, selectedStyle, selectedSpaceType, searchQuery]);

  const resetFilters = () => {
    setSelectedCategory('All');
    setSelectedCity('All');
    setSelectedStyle('All');
    setSelectedSpaceType('All');
    setSearchQuery('');
  };

  return (
    <div className="min-h-screen bg-off-white">
      {/* Dramatic Asymmetric Header with Split Layout */}
      <section className="pt-32 pb-24 bg-cream relative overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Content - 7 columns */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <span className="text-rose-gold text-xs font-bold uppercase tracking-[0.3em] mb-8 block">
                  Our Work
                </span>
                <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-semibold text-deep-charcoal leading-[0.9] mb-10">
                  Portfolio of
                  <br />
                  <span className="text-rose-gold">Excellence</span>
                </h1>
                <div className="w-24 h-[3px] bg-gradient-to-r from-rose-gold to-rose-gold/30 mb-8" />
                <p className="text-base lg:text-lg text-charcoal leading-relaxed max-w-xl mb-12">
                  Explore our collection of luxury transformations across India&apos;s most prestigious addresses. Each project tells a unique story of craftsmanship and refined elegance.
                </p>
                <div className="flex flex-wrap gap-6">
                  <div className="text-center">
                    <div className="text-4xl lg:text-5xl font-display font-bold text-rose-gold mb-2">{projects.length}+</div>
                    <p className="text-xs text-warm-gray uppercase tracking-wider">Projects</p>
                  </div>
                  <div className="w-[1px] bg-soft-gray" />
                  <div className="text-center">
                    <div className="text-4xl lg:text-5xl font-display font-bold text-rose-gold mb-2">12+</div>
                    <p className="text-xs text-warm-gray uppercase tracking-wider">Cities</p>
                  </div>
                  <div className="w-[1px] bg-soft-gray" />
                  <div className="text-center">
                    <div className="text-4xl lg:text-5xl font-display font-bold text-rose-gold mb-2">15+</div>
                    <p className="text-xs text-warm-gray uppercase tracking-wider">Years</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Stats Panel - 5 columns */}
            <div className="lg:col-span-5 relative">
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="bg-deep-charcoal p-10 lg:p-14 h-full flex flex-col justify-between relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-rose-gold/10 transition-all duration-700 group-hover:bg-rose-gold/20 group-hover:scale-110" />
                <div className="relative z-10">
                  <span className="text-rose-gold text-xs font-bold uppercase tracking-wider mb-6 block">Project Categories</span>
                  <div className="space-y-6">
                    <div className="flex items-center justify-between py-4 border-b border-white/10">
                      <span className="text-white font-medium">Residential</span>
                      <span className="text-rose-gold font-display text-2xl font-bold">{projects.filter(p => p.category === 'Residential').length}</span>
                    </div>
                    <div className="flex items-center justify-between py-4 border-b border-white/10">
                      <span className="text-white font-medium">Commercial</span>
                      <span className="text-rose-gold font-display text-2xl font-bold">{projects.filter(p => p.category === 'Commercial').length}</span>
                    </div>
                    <div className="flex items-center justify-between py-4 border-b border-white/10">
                      <span className="text-white font-medium">Hospitality</span>
                      <span className="text-rose-gold font-display text-2xl font-bold">{projects.filter(p => p.category === 'Hospitality').length}</span>
                    </div>
                    <div className="flex items-center justify-between py-4 border-b border-white/10">
                      <span className="text-white font-medium">All Projects</span>
                      <span className="text-rose-gold font-display text-2xl font-bold">{projects.length}</span>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-white/20">
                  <p className="text-white/70 text-sm leading-relaxed">From contemporary penthouses to heritage restorations, our portfolio showcases versatility and excellence.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Editorial Filter Panel */}
      <section ref={filtersRef} className="py-16 bg-off-white relative overflow-hidden">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={filtersInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-white shadow-xl hover:shadow-2xl transition-shadow duration-500 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-rose-gold via-rose-gold/50 to-transparent" />
              <div className="p-8 lg:p-12">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h2 className="text-2xl lg:text-3xl font-display font-semibold text-deep-charcoal mb-2">Explore Projects</h2>
                    <p className="text-sm text-warm-gray">Filter by your preferences to find the perfect inspiration</p>
                  </div>
                  <button
                    onClick={resetFilters}
                    className="px-6 py-3 bg-cream text-rose-gold hover:bg-rose-gold hover:text-white font-semibold text-sm uppercase tracking-wider transition-all duration-300"
                  >
                    Reset All
                  </button>
                </div>

                {/* Search Bar */}
                <div className="mb-8 relative group">
                  <input
                    type="text"
                    placeholder="Search by project name, location, or description..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-6 py-4 bg-off-white border-2 border-transparent focus:border-rose-gold focus:bg-white transition-all duration-300 text-deep-charcoal placeholder:text-warm-gray"
                  />
                  <svg className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-rose-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>

                {/* Filter Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  <div className="relative group">
                    <label className="block text-xs font-bold text-rose-gold mb-3 uppercase tracking-wider">
                      Category
                    </label>
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full px-5 py-3 bg-cream border-2 border-transparent hover:border-rose-gold focus:border-rose-gold focus:bg-white transition-all duration-300 appearance-none cursor-pointer"
                    >
                      {categories.map((cat) => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                    <svg className="absolute right-4 top-[42px] w-4 h-4 text-rose-gold pointer-events-none" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>

                  <div className="relative group">
                    <label className="block text-xs font-bold text-rose-gold mb-3 uppercase tracking-wider">
                      City
                    </label>
                    <select
                      value={selectedCity}
                      onChange={(e) => setSelectedCity(e.target.value)}
                      className="w-full px-5 py-3 bg-cream border-2 border-transparent hover:border-rose-gold focus:border-rose-gold focus:bg-white transition-all duration-300 appearance-none cursor-pointer"
                    >
                      {cities.map((city) => (
                        <option key={city} value={city}>{city}</option>
                      ))}
                    </select>
                    <svg className="absolute right-4 top-[42px] w-4 h-4 text-rose-gold pointer-events-none" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>

                  <div className="relative group">
                    <label className="block text-xs font-bold text-rose-gold mb-3 uppercase tracking-wider">
                      Design Style
                    </label>
                    <select
                      value={selectedStyle}
                      onChange={(e) => setSelectedStyle(e.target.value)}
                      className="w-full px-5 py-3 bg-cream border-2 border-transparent hover:border-rose-gold focus:border-rose-gold focus:bg-white transition-all duration-300 appearance-none cursor-pointer"
                    >
                      {styles.map((style) => (
                        <option key={style} value={style}>{style}</option>
                      ))}
                    </select>
                    <svg className="absolute right-4 top-[42px] w-4 h-4 text-rose-gold pointer-events-none" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>

                  <div className="relative group">
                    <label className="block text-xs font-bold text-rose-gold mb-3 uppercase tracking-wider">
                      Space Type
                    </label>
                    <select
                      value={selectedSpaceType}
                      onChange={(e) => setSelectedSpaceType(e.target.value)}
                      className="w-full px-5 py-3 bg-cream border-2 border-transparent hover:border-rose-gold focus:border-rose-gold focus:bg-white transition-all duration-300 appearance-none cursor-pointer"
                    >
                      {spaceTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                    <svg className="absolute right-4 top-[42px] w-4 h-4 text-rose-gold pointer-events-none" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>

                {/* Results Count */}
                <div className="flex items-center gap-4 pt-6 border-t-2 border-soft-gray">
                  <div className="flex-1">
                    <p className="text-sm text-warm-gray">
                      Displaying <span className="font-bold text-rose-gold text-lg">{filteredProjects.length}</span> <span className="text-deep-charcoal font-semibold">of {projects.length}</span> projects
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Varied Portfolio Grid - Masonry Style with Featured Projects */}
      <section ref={gridRef} className="py-24 bg-off-white">
        <Container>
          {filteredProjects.length === 0 ? (
            <div className="text-center py-24">
              <div className="inline-block p-12 bg-cream relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative z-10">
                  <svg className="w-16 h-16 text-rose-gold mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <p className="text-xl font-display font-semibold text-deep-charcoal mb-3">No Projects Found</p>
                  <p className="text-warm-gray max-w-md">No projects match your current filters. Try adjusting your search criteria or reset all filters.</p>
                </div>
              </div>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={gridInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => {
                const isFeatured = project.featured;
                const isLarge = index % 7 === 0;
                const isTall = index % 5 === 0 && !isLarge;

                return (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 40 }}
                    animate={gridInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: Math.min(index * 0.1, 1) }}
                    className={`${isLarge ? 'md:col-span-2 md:row-span-2' :
                        isTall ? 'md:row-span-2' :
                          ''
                      }`}
                  >
                    <Link href={`/portfolio/${project.slug}`}>
                      <div className="group cursor-pointer h-full bg-white shadow-lg hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                        {/* Image Container */}
                        <div className={`relative overflow-hidden ${isLarge ? 'h-[500px] md:h-full' :
                            isTall ? 'h-[600px]' :
                              'h-[400px]'
                          }`}>
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />

                          {/* Featured Badge */}
                          {isFeatured && (
                            <div className="absolute top-6 right-6 z-20">
                              <div className="bg-rose-gold text-white px-4 py-2 text-xs font-bold uppercase tracking-wider shadow-xl">
                                Featured
                              </div>
                            </div>
                          )}

                          {/* Gradient Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-deep-charcoal via-deep-charcoal/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                          {/* Hover Content Overlay */}
                          <div className="absolute inset-0 flex items-end p-8 lg:p-10">
                            <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                              <div className="flex items-center gap-3 mb-4">
                                <span className="text-rose-gold text-xs uppercase tracking-wider font-bold bg-deep-charcoal/50 backdrop-blur-sm px-3 py-1">
                                  {project.category}
                                </span>
                                <span className="text-white/60">•</span>
                                <span className="text-white/80 text-xs font-medium">
                                  {project.city}
                                </span>
                              </div>
                              <h3 className={`font-display font-bold text-white mb-3 group-hover:text-rose-gold transition-colors duration-300 ${isLarge ? 'text-3xl lg:text-4xl' :
                                  'text-xl lg:text-2xl'
                                }`}>
                                {project.title}
                              </h3>
                              <p className="text-white/90 text-sm mb-4 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                {project.description}
                              </p>
                              <div className="flex items-center gap-6 text-xs text-white/70">
                                <div className="flex items-center gap-2">
                                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                                  </svg>
                                  <span>{project.squareFeet.toLocaleString()} sq ft</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                  </svg>
                                  <span>{project.year}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Bottom Accent Bar */}
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-rose-gold to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </Container>
      </section>

      {/* Editorial CTA Section */}
      <section ref={ctaRef} className="py-32 bg-deep-charcoal relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-rose-gold to-transparent" />
        </div>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center relative z-10 max-w-4xl mx-auto"
          >
            <div className="w-24 h-[3px] bg-gradient-to-r from-transparent via-rose-gold to-transparent mx-auto mb-10" />
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-display font-bold text-white mb-8 leading-tight">
              Ready to Create Your
              <br />
              <span className="text-rose-gold">Dream Space?</span>
            </h2>
            <p className="text-base lg:text-lg text-white/80 leading-relaxed mb-12 max-w-2xl mx-auto">
              Let&apos;s discuss how we can transform your vision into a stunning reality. Schedule a complimentary consultation with our design experts today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/contact">
                <Button variant="primary" size="lg">
                  Start Your Project
                </Button>
              </Link>
              <Link href="/services">
                <button className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-deep-charcoal font-semibold transition-all duration-300">
                  Explore Services
                </button>
              </Link>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}

export default PortfolioPage;
