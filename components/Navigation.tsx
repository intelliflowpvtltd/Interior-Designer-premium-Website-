'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Container from './ui/Container';
import Button from './ui/Button';

const navItems = [
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Process', href: '/process' },
  { name: 'Journal', href: '/journal' },
  { name: 'Contact', href: '/contact' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-[#FAF9F6]/95 backdrop-blur-xl shadow-2xl border-b border-[#B76E79]/10' 
          : 'bg-gradient-to-b from-[#FAF9F6]/90 via-[#FAF9F6]/70 to-transparent backdrop-blur-md'
      }`}
    >
      <Container>
        <nav className="grid grid-cols-3 items-center h-24 py-4 gap-8">
          {/* Logo - Left */}
          <Link href="/" className="group flex items-center space-x-3 justify-self-start">
            <div className="w-12 h-12 bg-gradient-to-br from-[#B76E79] to-[#A05A6B] rounded-sm flex items-center justify-center shadow-lg shadow-[#B76E79]/20 group-hover:shadow-[#B76E79]/40 transition-all duration-300">
              <span className="text-[#FAF9F6] font-display font-bold text-xl">L</span>
            </div>
            <div>
              <div className="text-2xl font-display font-semibold text-[#2C3E50] tracking-tight group-hover:text-[#B76E79] transition-colors duration-300">
                Luxe Interiors
              </div>
              <div className="text-[10px] text-[#B76E79]/70 uppercase tracking-[0.2em] font-medium">
                Ultra Premium Design
              </div>
            </div>
          </Link>

          {/* Navigation Menu - Center */}
          <div className="hidden lg:flex items-center justify-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="group relative text-[#2C3E50] hover:text-[#B76E79] transition-all duration-300 text-sm font-medium tracking-wider uppercase text-[11px]"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-[#B76E79] to-[#A05A6B] group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* CTA Button - Right */}
          <div className="hidden lg:flex items-center justify-self-end">
            <Link href="/contact">
              <button className="px-6 py-3 bg-gradient-to-r from-[#B76E79] to-[#A05A6B] text-[#FAF9F6] font-semibold text-sm tracking-wide rounded-sm hover:shadow-lg hover:shadow-[#B76E79]/30 hover:scale-105 transition-all duration-300 uppercase">
                Book Consultation
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden justify-self-end text-[#2C3E50] p-3 hover:bg-[#B76E79]/10 rounded-sm transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>
      </Container>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#FAF9F6] border-t border-[#B76E79]/20"
          >
            <Container>
              <div className="py-8 space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block text-[#2C3E50] hover:text-[#B76E79] hover:bg-[#B76E79]/5 transition-all py-4 px-4 text-lg font-medium rounded-sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <button className="w-full mt-6 px-6 py-4 bg-gradient-to-r from-[#B76E79] to-[#A05A6B] text-[#FAF9F6] font-semibold text-sm tracking-wide rounded-sm uppercase">
                  Book Consultation
                </button>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
