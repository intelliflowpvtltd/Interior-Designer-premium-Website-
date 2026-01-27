'use client';

import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { projects } from '@/lib/projectsData';

function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = projects.find(p => p.slug === params.slug);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  if (!project) {
    notFound();
  }

  const relatedProjects = projects
    .filter(p => p.id !== project.id && (p.category === project.category || p.city === project.city))
    .slice(0, 3);

  return (
    <div className="pt-24 pb-24 bg-[#FFFFF0] min-h-screen">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Link href="/portfolio" className="inline-flex items-center text-[#36454F]/70 hover:text-[#D4AF37] transition-colors mb-6">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Portfolio
          </Link>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-[#D4AF37] text-white px-3 py-1 text-xs font-semibold uppercase tracking-wider">
                  {project.category}
                </span>
                {project.featured && (
                  <span className="bg-[#0A1628] text-white px-3 py-1 text-xs font-semibold uppercase tracking-wider">
                    Featured
                  </span>
                )}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-[#0A1628] mb-3">
                {project.title}
              </h1>
              <p className="text-xl text-[#36454F]/80">{project.location}, {project.city}</p>
            </div>
            <Button variant="secondary">Book Consultation</Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="relative aspect-[16/9] mb-6 rounded-sm overflow-hidden">
            <img
              src={project.images[selectedImageIndex]}
              alt={`${project.title} - Image ${selectedImageIndex + 1}`}
              className="w-full h-full object-cover"
            />
          </div>

          {project.images.length > 1 && (
            <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
              {project.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`aspect-square rounded-sm overflow-hidden border-2 transition-all ${selectedImageIndex === index
                    ? 'border-[#D4AF37] scale-95'
                    : 'border-transparent hover:border-[#E8E8E8]'
                    }`}
                >
                  <img src={image} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h2 className="text-3xl font-display font-semibold text-[#0A1628] mb-4">
                Project Overview
              </h2>
              <p className="text-lg text-[#36454F]/80 leading-relaxed">
                {project.description}
              </p>
            </div>

            {project.clientBrief && (
              <div className="bg-white p-6 rounded-sm border border-[#E8E8E8]">
                <h3 className="text-xl font-display font-semibold text-[#0A1628] mb-3">
                  Client Brief
                </h3>
                <p className="text-[#36454F]/80 leading-relaxed">
                  {project.clientBrief}
                </p>
              </div>
            )}

            {project.designApproach && (
              <div>
                <h3 className="text-2xl font-display font-semibold text-[#0A1628] mb-4">
                  Design Approach
                </h3>
                <p className="text-[#36454F]/80 leading-relaxed">
                  {project.designApproach}
                </p>
              </div>
            )}

            {project.keyFeatures && project.keyFeatures.length > 0 && (
              <div>
                <h3 className="text-2xl font-display font-semibold text-[#0A1628] mb-4">
                  Key Features
                </h3>
                <ul className="space-y-3">
                  {project.keyFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-[#D4AF37] mr-3 mt-1">✦</span>
                      <span className="text-[#36454F]/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.testimonial && (
              <div className="bg-[#0A1628] text-[#FFFFF0] p-8 rounded-sm">
                <blockquote className="text-xl font-light italic mb-4 leading-relaxed">
                  &ldquo;{project.testimonial.quote}&rdquo;
                </blockquote>
                <p className="text-[#D4AF37] font-semibold">
                  — {project.testimonial.client}
                </p>
              </div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="bg-white p-6 rounded-sm border border-[#E8E8E8] sticky top-32">
              <h3 className="text-xl font-display font-semibold text-[#0A1628] mb-6">
                Project Details
              </h3>
              <div className="space-y-4">
                <div className="pb-4 border-b border-[#E8E8E8]">
                  <p className="text-sm text-[#36454F]/60 mb-1 uppercase tracking-wider">Location</p>
                  <p className="text-[#0A1628] font-medium">{project.location}, {project.city}</p>
                </div>
                <div className="pb-4 border-b border-[#E8E8E8]">
                  <p className="text-sm text-[#36454F]/60 mb-1 uppercase tracking-wider">Year</p>
                  <p className="text-[#0A1628] font-medium">{project.year}</p>
                </div>
                <div className="pb-4 border-b border-[#E8E8E8]">
                  <p className="text-sm text-[#36454F]/60 mb-1 uppercase tracking-wider">Square Feet</p>
                  <p className="text-[#0A1628] font-medium">{project.squareFeet.toLocaleString()}</p>
                </div>
                <div className="pb-4 border-b border-[#E8E8E8]">
                  <p className="text-sm text-[#36454F]/60 mb-1 uppercase tracking-wider">Timeline</p>
                  <p className="text-[#0A1628] font-medium">{project.timeline}</p>
                </div>
                <div className="pb-4 border-b border-[#E8E8E8]">
                  <p className="text-sm text-[#36454F]/60 mb-1 uppercase tracking-wider">Style</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.style.map((s) => (
                      <span key={s} className="bg-[#FFFFF0] text-[#36454F] px-3 py-1 text-xs rounded-full">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm text-[#36454F]/60 mb-1 uppercase tracking-wider">Space Type</p>
                  <p className="text-[#0A1628] font-medium">{project.spaceType}</p>
                </div>
              </div>

              <div className="mt-8">
                <Button className="w-full" variant="primary">
                  Start Your Project
                </Button>
              </div>
            </div>
          </motion.div>
        </div>

        {relatedProjects.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="border-t border-[#E8E8E8] pt-16"
          >
            <h2 className="text-3xl font-display font-semibold text-[#0A1628] mb-8">
              Related Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProjects.map((related) => (
                <Link key={related.id} href={`/portfolio/${related.slug}`}>
                  <div className="group cursor-pointer">
                    <div className="relative aspect-[4/3] mb-4 rounded-sm overflow-hidden">
                      <img
                        src={related.image}
                        alt={related.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <h3 className="text-xl font-display font-semibold text-[#0A1628] mb-2 group-hover:text-[#D4AF37] transition-colors">
                      {related.title}
                    </h3>
                    <p className="text-[#36454F]/70 text-sm">{related.city}</p>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </Container>
    </div>
  );
}

export default ProjectDetailPage;
