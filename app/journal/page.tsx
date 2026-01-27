'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

const articles = [
  {
    id: 1,
    title: '2025 Interior Design Trends: Timeless Luxury Meets Modern Innovation',
    excerpt: 'Explore the emerging trends shaping luxury interiors in India, from sustainable materials to smart home integration.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop',
    category: 'Trends',
    date: 'January 15, 2026',
    readTime: '6 min read',
  },
  {
    id: 2,
    title: 'The Art of Curating Luxury: Material Selection in High-End Interiors',
    excerpt: 'Understanding how premium materials elevate spaces and create lasting value in luxury residential design.',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2074&auto=format&fit=crop',
    category: 'Design Tips',
    date: 'January 10, 2026',
    readTime: '8 min read',
  },
  {
    id: 3,
    title: 'Spotlight: Contemporary Villa in Bangalore',
    excerpt: 'A deep dive into our award-winning villa project that seamlessly blends traditional craftsmanship with modern aesthetics.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop',
    category: 'Project Spotlight',
    date: 'January 5, 2026',
    readTime: '10 min read',
  },
  {
    id: 4,
    title: 'Smart Homes: Integrating Technology Without Compromising Elegance',
    excerpt: 'How to incorporate cutting-edge home automation while maintaining sophisticated, timeless design.',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop',
    category: 'Technology',
    date: 'December 28, 2025',
    readTime: '7 min read',
  },
  {
    id: 5,
    title: 'Sustainable Luxury: The Future of High-End Interior Design',
    excerpt: 'Exploring eco-friendly materials and practices that don\'t compromise on luxury or aesthetics.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
    category: 'Sustainability',
    date: 'December 20, 2025',
    readTime: '9 min read',
  },
  {
    id: 6,
    title: 'Color Psychology in Luxury Interiors: Creating Emotional Resonance',
    excerpt: 'How strategic color selection influences mood, perception, and the overall experience of luxury spaces.',
    image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?q=80&w=2070&auto=format&fit=crop',
    category: 'Design Tips',
    date: 'December 15, 2025',
    readTime: '6 min read',
  },
];

const categories = ['All', 'Trends', 'Design Tips', 'Project Spotlight', 'Technology', 'Sustainability'];

function JournalPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const featuredRef = useRef(null);
  const gridRef = useRef(null);
  const newsletterRef = useRef(null);

  const featuredInView = useInView(featuredRef, { once: true, margin: '0px' });
  const gridInView = useInView(gridRef, { once: true, margin: '0px' });
  const newsletterInView = useInView(newsletterRef, { once: true, margin: '0px' });

  const filteredArticles = selectedCategory === 'All'
    ? articles
    : articles.filter(article => article.category === selectedCategory);

  return (
    <div className="min-h-screen bg-off-white">
      {/* Split Header with Featured Article Preview */}
      <section className="pt-32 pb-20 bg-deep-charcoal relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-rose-gold to-transparent" />
        </div>
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Content - 5 columns */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <span className="text-rose-gold text-xs font-bold uppercase tracking-[0.3em] mb-8 block">
                  Insights & Ideas
                </span>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-semibold text-white leading-[0.95] mb-10">
                  Design
                  <br />
                  <span className="text-rose-gold">Journal</span>
                </h1>
                <div className="w-24 h-[3px] bg-gradient-to-r from-rose-gold to-rose-gold/30 mb-8" />
                <p className="text-base lg:text-lg text-white/85 leading-relaxed mb-12">
                  Insights, inspiration, and expertise from our design studio. Explore trends, tips, and behind-the-scenes stories.
                </p>

                {/* Category Pills */}
                <div>
                  <h3 className="text-xs font-bold text-rose-gold mb-4 uppercase tracking-wider">Explore Topics</h3>
                  <div className="flex flex-wrap gap-3">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-5 py-2 text-sm font-semibold transition-all duration-300 ${selectedCategory === category
                          ? 'bg-rose-gold text-white shadow-lg'
                          : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                          }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Featured Preview - 7 columns */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative group cursor-pointer"
              >
                <div className="relative h-[500px] overflow-hidden shadow-2xl">
                  <img
                    src={articles[0].image}
                    alt={articles[0].title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-charcoal via-deep-charcoal/60 to-transparent" />
                  <div className="absolute top-6 right-6">
                    <span className="bg-rose-gold text-white px-4 py-2 text-xs font-bold uppercase tracking-wider shadow-xl">
                      Latest
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-10">
                    <div className="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-wider mb-4">
                      {articles[0].category}
                    </div>
                    <h2 className="text-2xl lg:text-3xl xl:text-4xl font-display font-bold text-white mb-4 leading-tight group-hover:text-rose-gold transition-colors duration-300">
                      {articles[0].title}
                    </h2>
                    <p className="text-white/90 text-sm lg:text-base mb-4 line-clamp-2">
                      {articles[0].excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-white/70">
                      <span>{articles[0].date}</span>
                      <span>•</span>
                      <span>{articles[0].readTime}</span>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-rose-gold to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Mixed Masonry Articles Grid */}
      <section ref={gridRef} className="py-32 bg-off-white">
        <Container>
          <motion.div
            initial={{ opacity: 0 }}
            animate={gridInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredArticles.slice(1).map((article, index) => {
              const isLarge = index % 5 === 0;
              const isWide = index % 7 === 1;

              return (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={gridInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: Math.min(index * 0.1, 0.8) }}
                  className={`${isLarge ? 'md:col-span-2 md:row-span-2' :
                    isWide ? 'md:col-span-2' :
                      ''
                    }`}
                >
                  <div className="group cursor-pointer h-full bg-white shadow-lg hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                    {/* Image Container */}
                    <div className={`relative overflow-hidden ${isLarge ? 'h-[600px]' :
                      isWide ? 'h-[400px]' :
                        'h-[350px]'
                      }`}>
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      {/* Category Badge */}
                      <div className="absolute top-6 left-6 z-20">
                        <div className="bg-white text-rose-gold px-4 py-2 text-xs font-bold uppercase tracking-wider shadow-lg">
                          {article.category}
                        </div>
                      </div>

                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-deep-charcoal/90 via-deep-charcoal/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

                      {/* Content Overlay */}
                      <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8">
                        <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                          <div className="flex items-center gap-3 mb-3 text-xs text-white/70">
                            <span>{article.date}</span>
                            <span>•</span>
                            <span>{article.readTime}</span>
                          </div>
                          <h3 className={`font-display font-bold text-white mb-3 group-hover:text-rose-gold transition-colors duration-300 leading-tight ${isLarge ? 'text-2xl lg:text-3xl' :
                            isWide ? 'text-xl lg:text-2xl' :
                              'text-lg lg:text-xl'
                            }`}>
                            {article.title}
                          </h3>
                          <p className="text-white/90 text-sm mb-4 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            {article.excerpt}
                          </p>
                          <div className="flex items-center gap-2 text-sm text-rose-gold font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <span>Read Article</span>
                            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Accent */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-rose-gold to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </Container>
      </section>

      {/* Newsletter Section - Image Overlay Background */}
      <section ref={newsletterRef} className="py-32 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop"
            alt="Newsletter"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-deep-charcoal/90" />
        </div>

        <Container>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={newsletterInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative z-10 max-w-4xl mx-auto"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="text-left">
                <div className="inline-block px-4 py-2 bg-rose-gold/20 backdrop-blur-sm border border-rose-gold/30 mb-6">
                  <span className="text-rose-gold text-xs font-bold uppercase tracking-wider">Stay Inspired</span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-6 leading-tight">
                  Subscribe to Our
                  <br />
                  <span className="text-rose-gold">Newsletter</span>
                </h2>
                <div className="w-20 h-[3px] bg-rose-gold mb-6" />
                <p className="text-base lg:text-lg text-white/85 leading-relaxed mb-8">
                  Receive monthly insights on design trends, project showcases, and exclusive tips from our design experts.
                </p>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-rose-gold/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-rose-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Monthly Design Insights</h3>
                    <p className="text-white/70 text-sm">Expert tips delivered to your inbox</p>
                  </div>
                </div>
              </div>

              {/* Right Form */}
              <div className="bg-white/10 backdrop-blur-md p-8 lg:p-10 border border-white/20 shadow-2xl">
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-rose-gold mb-2 uppercase tracking-wider">
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="w-full px-5 py-4 bg-white/10 border-2 border-white/20 focus:border-rose-gold text-white placeholder:text-white/50 transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-rose-gold mb-2 uppercase tracking-wider">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="w-full px-5 py-4 bg-white/10 border-2 border-white/20 focus:border-rose-gold text-white placeholder:text-white/50 transition-all duration-300"
                    />
                  </div>
                  <Button variant="primary" size="lg" className="w-full">
                    Subscribe Now
                  </Button>
                  <p className="text-xs text-white/60 text-center">
                    No spam. Unsubscribe anytime.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}

export default JournalPage;
