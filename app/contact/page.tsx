'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

interface FormData {
  projectType: string;
  propertyStatus: string;
  location: string;
  timeline: string;
  squareFeet: string;
  budget: string;
  name: string;
  email: string;
  phone: string;
  message: string;
}

const offices = [
  {
    city: 'Mumbai',
    address: '3rd Floor, Linking Road, Bandra West, Mumbai 400050',
    phone: '+91 98765 43210',
    email: 'mumbai@luxeinteriors.com',
    hours: 'Mon-Sat: 10:00 AM - 7:00 PM',
  },
  {
    city: 'Bangalore',
    address: '12th Main Road, 100 Feet Road, Indiranagar, Bangalore 560038',
    phone: '+91 98765 43211',
    email: 'bangalore@luxeinteriors.com',
    hours: 'Mon-Sat: 10:00 AM - 7:00 PM',
  },
  {
    city: 'Delhi',
    address: 'Connaught Place, Central Delhi, New Delhi 110001',
    phone: '+91 98765 43212',
    email: 'delhi@luxeinteriors.com',
    hours: 'Mon-Sat: 10:00 AM - 7:00 PM',
  },
];

function ContactPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const { register, handleSubmit, formState: { errors }, watch } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    console.log('Form submitted:', data);
    setSubmitSuccess(true);
    setIsSubmitting(false);
  };

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 4));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  if (submitSuccess) {
    return (
      <div className="pt-32 pb-24 bg-off-white min-h-screen flex items-center justify-center">
        <Container>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="w-20 h-20 bg-rose-gold rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-3xl md:text-4xl font-display font-semibold text-deep-charcoal mb-4">
              Thank You for Reaching Out!
            </h1>
            <p className="text-lg text-charcoal mb-6">
              We&apos;ve received your consultation request. Our team will review your project details
              and contact you within 24 hours to schedule your consultation.
            </p>
            <p className="text-warm-gray mb-8">
              Check your email for confirmation and next steps.
            </p>
            <Button onClick={() => window.location.href = '/'} variant="primary">
              Return to Homepage
            </Button>
          </motion.div>
        </Container>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 bg-off-white min-h-screen">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-rose-gold" />
            <span className="text-rose-gold text-xs font-medium tracking-[0.3em] uppercase">
              Get In Touch
            </span>
            <div className="w-8 h-[1px] bg-rose-gold" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-deep-charcoal mb-6">
            Let&apos;s Create Something <span className="text-rose-gold">Beautiful</span>
          </h1>
          <p className="text-lg text-charcoal max-w-2xl mx-auto leading-relaxed">
            Schedule a consultation to discuss your vision and begin your transformation journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 border border-soft-gray"
            >
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  {[1, 2, 3, 4].map((step) => (
                    <div key={step} className="flex items-center flex-1">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-colors ${currentStep >= step ? 'bg-rose-gold text-white' : 'bg-soft-gray text-warm-gray'
                        }`}>
                        {step}
                      </div>
                      {step < 4 && (
                        <div className={`flex-1 h-0.5 mx-2 transition-colors ${currentStep > step ? 'bg-rose-gold' : 'bg-soft-gray'
                          }`} />
                      )}
                    </div>
                  ))}
                </div>
                <div className="flex justify-between text-xs text-warm-gray uppercase tracking-wider">
                  <span>Project</span>
                  <span>Details</span>
                  <span>Budget</span>
                  <span>Contact</span>
                </div>
              </div>

              <form onSubmit={handleSubmit(onSubmit)}>
                {currentStep === 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                  >
                    <div>
                      <label className="block text-xs font-semibold text-rose-gold mb-2 uppercase tracking-wider">
                        Project Type *
                      </label>
                      <select
                        {...register('projectType', { required: true })}
                        className="w-full px-4 py-3 border border-soft-gray focus:outline-none focus:border-rose-gold transition-colors"
                      >
                        <option value="">Select project type</option>
                        <option value="residential">Residential Interior Design</option>
                        <option value="commercial">Commercial Interior Design</option>
                        <option value="villa">Luxury Villa Design</option>
                        <option value="turnkey">Turnkey Solutions</option>
                        <option value="renovation">Renovation & Restoration</option>
                        <option value="consultation">Design Consultation</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-rose-gold mb-2 uppercase tracking-wider">
                        Property Status *
                      </label>
                      <select
                        {...register('propertyStatus', { required: true })}
                        className="w-full px-4 py-3 border border-soft-gray focus:outline-none focus:border-rose-gold transition-colors"
                      >
                        <option value="">Select status</option>
                        <option value="purchased">Recently Purchased</option>
                        <option value="construction">Under Construction</option>
                        <option value="existing">Existing Property</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-rose-gold mb-2 uppercase tracking-wider">
                        Location (City) *
                      </label>
                      <input
                        type="text"
                        {...register('location', { required: true })}
                        className="w-full px-4 py-3 border border-soft-gray focus:outline-none focus:border-rose-gold transition-colors"
                        placeholder="e.g., Mumbai, Bangalore, Delhi"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-rose-gold mb-2 uppercase tracking-wider">
                        Timeline *
                      </label>
                      <select
                        {...register('timeline', { required: true })}
                        className="w-full px-4 py-3 border border-soft-gray focus:outline-none focus:border-rose-gold transition-colors"
                      >
                        <option value="">Select timeline</option>
                        <option value="urgent">Urgent (Within 2 months)</option>
                        <option value="planned">Planned (2-6 months)</option>
                        <option value="exploring">Exploring (6+ months)</option>
                      </select>
                    </div>
                  </motion.div>
                )}

                {currentStep === 2 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                  >
                    <div>
                      <label className="block text-xs font-semibold text-rose-gold mb-2 uppercase tracking-wider">
                        Approximate Square Footage *
                      </label>
                      <select
                        {...register('squareFeet', { required: true })}
                        className="w-full px-4 py-3 border border-soft-gray focus:outline-none focus:border-rose-gold transition-colors"
                      >
                        <option value="">Select range</option>
                        <option value="<2000">Less than 2,000 sq ft</option>
                        <option value="2000-4000">2,000 - 4,000 sq ft</option>
                        <option value="4000-8000">4,000 - 8,000 sq ft</option>
                        <option value="8000+">8,000+ sq ft</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-rose-gold mb-2 uppercase tracking-wider">
                        Additional Details
                      </label>
                      <textarea
                        {...register('message')}
                        rows={6}
                        className="w-full px-4 py-3 border border-soft-gray focus:outline-none focus:border-rose-gold transition-colors"
                        placeholder="Tell us about your vision, must-have elements, style preferences, or any specific requirements..."
                      />
                    </div>
                  </motion.div>
                )}

                {currentStep === 3 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                  >
                    <div>
                      <label className="block text-xs font-semibold text-rose-gold mb-2 uppercase tracking-wider">
                        Investment Range *
                      </label>
                      <select
                        {...register('budget', { required: true })}
                        className="w-full px-4 py-3 border border-soft-gray focus:outline-none focus:border-rose-gold transition-colors"
                      >
                        <option value="">Select budget range</option>
                        <option value="25-50L">Selective Investment: ₹25-50 Lakhs</option>
                        <option value="50L-1Cr">Comprehensive: ₹50 Lakhs - 1 Crore</option>
                        <option value="1-2Cr">Premium: ₹1-2 Crores</option>
                        <option value="2Cr+">Bespoke Luxury: ₹2 Crores+</option>
                      </select>
                    </div>

                    <div className="bg-cream p-4 border border-soft-gray">
                      <p className="text-sm text-charcoal">
                        <strong className="text-deep-charcoal">Note:</strong> Investment ranges help us understand project scope
                        and ensure we align our recommendations with your expectations. Final budgets are
                        developed during the design development phase.
                      </p>
                    </div>
                  </motion.div>
                )}

                {currentStep === 4 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                  >
                    <div>
                      <label className="block text-xs font-semibold text-rose-gold mb-2 uppercase tracking-wider">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        {...register('name', { required: true })}
                        className="w-full px-4 py-3 border border-soft-gray focus:outline-none focus:border-rose-gold transition-colors"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-rose-gold mb-2 uppercase tracking-wider">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                        className="w-full px-4 py-3 border border-soft-gray focus:outline-none focus:border-rose-gold transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-rose-gold mb-2 uppercase tracking-wider">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        {...register('phone', { required: true })}
                        className="w-full px-4 py-3 border border-soft-gray focus:outline-none focus:border-rose-gold transition-colors"
                        placeholder="+91 98765 43210"
                      />
                    </div>

                    <div className="bg-cream p-4 border border-soft-gray">
                      <p className="text-sm text-charcoal">
                        By submitting this form, you agree to be contacted by Luxe Interiors regarding
                        your project inquiry. We respect your privacy and will never share your information.
                      </p>
                    </div>
                  </motion.div>
                )}

                <div className="flex justify-between mt-8 pt-6 border-t border-soft-gray">
                  {currentStep > 1 && (
                    <Button type="button" onClick={prevStep} variant="secondary">
                      Previous
                    </Button>
                  )}
                  {currentStep < 4 ? (
                    <Button type="button" onClick={nextStep} variant="primary" className="ml-auto">
                      Next Step
                    </Button>
                  ) : (
                    <Button type="submit" variant="primary" className="ml-auto" disabled={isSubmitting}>
                      {isSubmitting ? 'Submitting...' : 'Submit Consultation Request'}
                    </Button>
                  )}
                </div>
              </form>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="bg-cream p-6 border border-soft-gray">
              <h2 className="text-xl font-display font-semibold text-deep-charcoal mb-4">
                Why Schedule a Consultation?
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-rose-gold mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-charcoal">Discuss your vision and lifestyle needs</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-rose-gold mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-charcoal">Receive expert guidance and recommendations</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-rose-gold mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-charcoal">Understand our process and timeline</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-rose-gold mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-charcoal">Get preliminary budget guidance</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-rose-gold mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-charcoal">No obligation, completely complimentary</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 border border-soft-gray">
              <h3 className="text-lg font-semibold text-deep-charcoal mb-4">
                Prefer to Call?
              </h3>
              <p className="text-sm text-charcoal mb-4">
                Speak directly with our design consultants
              </p>
              <a
                href="tel:+919876543210"
                className="block w-full text-center px-4 py-3 bg-rose-gold text-white font-semibold hover:bg-rose-gold-dark transition-colors"
              >
                +91 98765 43210
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-deep-charcoal mb-8 text-center">
            Visit Our <span className="text-rose-gold">Studios</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office) => (
              <div key={office.city} className="bg-white p-6 border border-soft-gray hover:border-rose-gold/30 hover:shadow-soft transition-all duration-300">
                <h3 className="text-xl font-display font-semibold text-deep-charcoal mb-3">
                  {office.city}
                </h3>
                <div className="space-y-2 text-sm text-charcoal">
                  <p>{office.address}</p>
                  <p>
                    <a href={`tel:${office.phone}`} className="hover:text-rose-gold transition-colors">
                      {office.phone}
                    </a>
                  </p>
                  <p>
                    <a href={`mailto:${office.email}`} className="hover:text-rose-gold transition-colors">
                      {office.email}
                    </a>
                  </p>
                  <p className="text-xs text-warm-gray pt-2">{office.hours}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </div>
  );
}

export default ContactPage;
