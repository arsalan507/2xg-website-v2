'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

export default function FinalCTARebrand() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({ name: '', phone: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [slotsLeft, setSlotsLeft] = useState(10);

  // Simulate slot countdown (decrease randomly every few seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setSlotsLeft((prev) => (prev > 3 ? prev - 1 : prev));
    }, 45000); // Decrease every 45 seconds

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Here you would normally send the form data to your backend
    // For now, we'll just simulate a submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      alert('Thank you! We\'ll contact you soon.');
      setFormData({ name: '', phone: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact-form" ref={ref} className="relative py-20 sm:py-28 bg-[#F6F7F5] overflow-hidden scroll-mt-20">
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #6BBF59 1px, transparent 0)`,
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-[#6BBF59] font-semibold text-sm uppercase tracking-wider mb-4">
            🚀 Ready to Get Started?
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1F1F1F] mb-6 tracking-tight">
            Turn Your Views Into Sales Today 💰
          </h2>
          <p className="text-lg text-[#5E5E5E] max-w-2xl mx-auto leading-relaxed mb-6">
            Leave your details 📝 and we'll reach out within 24 hours ⏰ with a custom growth strategy for your business 🎯
          </p>

          {/* Urgency Banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-red-500 to-orange-500 rounded-full shadow-lg"
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="text-2xl"
            >
              ⏰
            </motion.div>
            <div className="text-white font-bold text-lg">
              Only <span className="text-3xl font-black mx-1">{slotsLeft}</span> Slots Left for January 2025!
            </div>
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="text-2xl"
            >
              🔥
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white border-2 border-[#D6D8D4] rounded-2xl p-8 sm:p-12 shadow-lg"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-[#1F1F1F] mb-2">
                Your Name *
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 border-2 border-[#D6D8D4] rounded-lg focus:border-[#6BBF59] focus:outline-none transition-colors duration-200 text-[#1F1F1F] placeholder-[#5E5E5E]"
                placeholder="Enter your full name"
              />
            </div>

            {/* Phone Field */}
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-[#1F1F1F] mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 border-2 border-[#D6D8D4] rounded-lg focus:border-[#6BBF59] focus:outline-none transition-colors duration-200 text-[#1F1F1F] placeholder-[#5E5E5E]"
                placeholder="+91 98765 43210"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-10 py-4 bg-[#6BBF59] hover:bg-[#5AA047] text-white font-bold text-lg rounded-lg transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting... ⏳' : 'Get My Free Strategy Call 🎯'}
            </button>

            {/* Trust Message */}
            <p className="text-center text-sm text-[#5E5E5E] mt-4">
              🔒 Your information is 100% secure. We hate spam too 🛡️
            </p>
          </form>
        </motion.div>

        {/* Additional Trust Elements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-[#5E5E5E] text-sm mb-4 font-medium">
            Join 100+ brands growing with 2XG 🌟
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-[#6BBF59]">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              <span className="text-sm font-medium text-[#1F1F1F]">No Credit Card Required</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              <span className="text-sm font-medium text-[#1F1F1F]">24-Hour Response</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              <span className="text-sm font-medium text-[#1F1F1F]">Free Consultation</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
