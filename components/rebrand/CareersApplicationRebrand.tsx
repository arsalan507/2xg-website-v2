'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

export default function CareersApplicationRebrand() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    cv: null as File | null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, cv: e.target.files![0] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      console.log('Application submitted:', formData);
      setSubmitStatus('success');
      setIsSubmitting(false);

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({ name: '', email: '', phone: '', position: '', cv: null });
        setSubmitStatus('idle');
      }, 3000);
    }, 1500);
  };

  return (
    <section ref={ref} className="relative min-h-screen py-32 bg-gradient-to-br from-[#F6F7F5] via-[#ECEDEB] to-[#F6F7F5] overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#6BBF59]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FF6A1A]/5 rounded-full blur-3xl" />
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-[#0052FF]/5 rounded-full blur-3xl" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `
          linear-gradient(to right, #6BBF59 1px, transparent 1px),
          linear-gradient(to bottom, #6BBF59 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px'
      }} />

      {/* Subtle Diagonal Lines */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="diagonal-lines" patternUnits="userSpaceOnUse" width="100" height="100" patternTransform="rotate(45)">
              <line x1="0" y1="0" x2="0" y2="100" stroke="#6BBF59" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diagonal-lines)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-[#6BBF59]/10 text-[#6BBF59] rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
            Join Our Team
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#1F1F1F] mb-6">
            Apply for a <span className="text-[#6BBF59]">Position</span>
          </h1>
          <p className="text-lg sm:text-xl text-[#5E5E5E] max-w-2xl mx-auto leading-relaxed">
            Fill out the form below and we'll get back to you within 48 hours.
          </p>
        </motion.div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white border-2 border-[#D6D8D4] rounded-2xl p-8 sm:p-12 shadow-xl"
        >
          {submitStatus === 'success' ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <div className="w-20 h-20 bg-[#6BBF59] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#1F1F1F] mb-3">Application Submitted! 🎉</h3>
              <p className="text-[#5E5E5E]">
                We've received your application and will review it shortly. Check your email for confirmation.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-[#1F1F1F] mb-3">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 border-2 border-[#D6D8D4] rounded-xl focus:border-[#6BBF59] focus:ring-2 focus:ring-[#6BBF59]/20 focus:outline-none transition-all text-[#1F1F1F] bg-[#F6F7F5] hover:bg-white text-base"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-[#1F1F1F] mb-3">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 border-2 border-[#D6D8D4] rounded-xl focus:border-[#6BBF59] focus:ring-2 focus:ring-[#6BBF59]/20 focus:outline-none transition-all text-[#1F1F1F] bg-[#F6F7F5] hover:bg-white text-base"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-[#1F1F1F] mb-3">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 border-2 border-[#D6D8D4] rounded-xl focus:border-[#6BBF59] focus:ring-2 focus:ring-[#6BBF59]/20 focus:outline-none transition-all text-[#1F1F1F] bg-[#F6F7F5] hover:bg-white text-base"
                  placeholder="+91 98765 43210"
                />
              </div>

              {/* Position */}
              <div>
                <label htmlFor="position" className="block text-sm font-semibold text-[#1F1F1F] mb-3">
                  Position Applying For *
                </label>
                <select
                  id="position"
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 border-2 border-[#D6D8D4] rounded-xl focus:border-[#6BBF59] focus:ring-2 focus:ring-[#6BBF59]/20 focus:outline-none transition-all text-[#1F1F1F] bg-[#F6F7F5] hover:bg-white text-base appearance-none cursor-pointer"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236BBF59'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 1rem center',
                    backgroundSize: '1.5em 1.5em',
                    paddingRight: '3rem'
                  }}
                >
                  <option value="">Select a position</option>
                  <option value="Content Strategist">Content Strategist</option>
                  <option value="Video Editor">Video Editor</option>
                  <option value="Performance Marketing Manager">Performance Marketing Manager</option>
                  <option value="Social Media Manager">Social Media Manager</option>
                  <option value="Other">Other Position</option>
                </select>
              </div>

              {/* CV Upload */}
              <div>
                <label htmlFor="cv" className="block text-sm font-semibold text-[#1F1F1F] mb-3">
                  Upload CV/Resume *
                </label>
                <div className="relative">
                  <input
                    type="file"
                    id="cv"
                    name="cv"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                    required
                    className="w-full px-5 py-4 border-2 border-[#D6D8D4] rounded-xl focus:border-[#6BBF59] focus:ring-2 focus:ring-[#6BBF59]/20 focus:outline-none transition-all text-[#1F1F1F] bg-[#F6F7F5] hover:bg-white file:mr-4 file:py-2.5 file:px-5 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-[#6BBF59] file:text-white hover:file:bg-[#5AA047] file:cursor-pointer file:transition-colors"
                  />
                </div>
                <p className="mt-3 text-xs text-[#5E5E5E]">
                  Accepted formats: PDF, DOC, DOCX (Max 5MB)
                </p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-[#6BBF59] hover:bg-[#5AA047] disabled:bg-[#5E5E5E] text-white font-bold text-lg rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-1 disabled:hover:translate-y-0"
              >
                {isSubmitting ? 'Submitting Application...' : 'Submit Application →'}
              </button>
            </form>
          )}

          {/* Alternative Contact */}
          {submitStatus !== 'success' && (
            <div className="mt-8 pt-8 border-t border-[#D6D8D4]">
              <p className="text-center text-sm text-[#5E5E5E]">
                Prefer to email? Send your CV to{' '}
                <a href="mailto:careers@2xg.in" className="text-[#6BBF59] hover:underline font-semibold">
                  careers@2xg.in
                </a>
              </p>
            </div>
          )}
        </motion.div>

        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
          className="text-center mt-8"
        >
          <a
            href="/careers"
            className="inline-flex items-center gap-2 text-[#5E5E5E] hover:text-[#6BBF59] transition-colors font-medium"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Careers Page
          </a>
        </motion.div>
      </div>
    </section>
  );
}
