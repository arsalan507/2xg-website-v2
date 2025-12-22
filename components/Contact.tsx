'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Button from './ui/Button';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Add your form submission logic here
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Thank you! We will get back to you soon.');
      setFormState({ name: '', email: '', company: '', message: '' });
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="relative py-20 sm:py-32 bg-graphite-dark overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-green to-transparent" />
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #8CE63A 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Info */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              className="text-neon-green font-montserrat font-semibold text-sm sm:text-base mb-4 tracking-wider uppercase"
            >
              Let's Talk Growth
            </motion.p>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-montserrat font-black text-off-white mb-6">
              Ready to <span className="gradient-text">2X</span> Your Growth?
            </h2>

            <p className="text-lg text-off-white/80 font-inter leading-relaxed mb-8">
              Whether you're launching a new product or scaling an existing brand, we build content systems that convert views into customers.
            </p>

            {/* Contact Info Cards */}
            <div className="space-y-4 mb-8">
              {[
                {
                  icon: '📧',
                  label: 'Email',
                  value: 'contact@2xg.in',
                  link: 'mailto:contact@2xg.in',
                },
                {
                  icon: '🌐',
                  label: 'Website',
                  value: '2xg.in',
                  link: 'https://2xg.in',
                },
                {
                  icon: '📍',
                  label: 'Location',
                  value: 'Bengaluru, India',
                  link: null,
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                  className="flex items-center gap-4 bg-graphite rounded-lg p-4 border border-deep-blue/20 hover:border-neon-green/50 transition-colors duration-300"
                >
                  <span className="text-3xl">{item.icon}</span>
                  <div>
                    <div className="text-xs text-off-white/60 font-inter mb-1">
                      {item.label}
                    </div>
                    {item.link ? (
                      <a
                        href={item.link}
                        className="text-off-white font-inter hover:text-neon-green transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div className="text-off-white font-inter">{item.value}</div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="bg-gradient-to-r from-deep-blue/20 to-neon-green/20 rounded-lg p-6 border border-neon-green/30"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-deep-blue to-neon-green border-2 border-graphite-dark"
                    />
                  ))}
                </div>
                <div className="text-2xl font-impact text-neon-green">2M+</div>
              </div>
              <p className="text-sm text-off-white/80 font-inter">
                Trusted by India's leading mobility and retail brands
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="relative bg-gradient-to-br from-graphite via-graphite to-graphite-dark rounded-2xl p-8 sm:p-10 border-4 border-[#8CE63A]/50 shadow-2xl shadow-[#8CE63A]/20 hover:border-[#8CE63A]/70 transition-all duration-500 ring-2 ring-[#8CE63A]/20">
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-neon-green/10 to-transparent rounded-bl-full" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-deep-blue/10 to-transparent rounded-tr-full" />

              <div className="relative z-10 space-y-6">
                {/* Form Title */}
                <div className="mb-8">
                  <h3 className="text-2xl sm:text-3xl font-montserrat font-bold text-off-white mb-2">
                    Get in Touch
                  </h3>
                  <p className="text-off-white/70 font-inter text-sm">
                    Fill out the form below and we'll get back to you within 24 hours
                  </p>
                </div>

                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-off-white font-montserrat font-semibold mb-3 text-sm">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-white border-2 border-[#0052FF]/60 focus:border-[#8CE63A] focus:bg-white focus:shadow-lg focus:shadow-[#8CE63A]/20 rounded-lg px-5 py-4 text-[#111111] font-inter outline-none transition-all duration-300 placeholder:text-[#111111]/40 hover:border-[#0052FF]/80"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-off-white font-montserrat font-semibold mb-3 text-sm">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white border-2 border-[#0052FF]/60 focus:border-[#8CE63A] focus:bg-white focus:shadow-lg focus:shadow-[#8CE63A]/20 rounded-lg px-5 py-4 text-[#111111] font-inter outline-none transition-all duration-300 placeholder:text-[#111111]/40 hover:border-[#0052FF]/80"
                    placeholder="john@company.com"
                  />
                </div>

                {/* Company */}
                <div>
                  <label htmlFor="company" className="block text-off-white font-montserrat font-semibold mb-3 text-sm">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formState.company}
                    onChange={handleChange}
                    className="w-full bg-white border-2 border-[#0052FF]/60 focus:border-[#8CE63A] focus:bg-white focus:shadow-lg focus:shadow-[#8CE63A]/20 rounded-lg px-5 py-4 text-[#111111] font-inter outline-none transition-all duration-300 placeholder:text-[#111111]/40 hover:border-[#0052FF]/80"
                    placeholder="Your Company"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-off-white font-montserrat font-semibold mb-3 text-sm">
                    Tell us about your project *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-white border-2 border-[#0052FF]/60 focus:border-[#8CE63A] focus:bg-white focus:shadow-lg focus:shadow-[#8CE63A]/20 rounded-lg px-5 py-4 text-[#111111] font-inter outline-none transition-all duration-300 resize-none placeholder:text-[#111111]/40 hover:border-[#0052FF]/80"
                    placeholder="Tell us about your goals, target audience, and how we can help..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full font-montserrat font-black uppercase tracking-wider transition-all duration-300 text-center px-10 py-5 text-lg sm:text-xl md:text-2xl bg-[#8CE63A] text-[#111111] hover:brightness-110 shadow-2xl shadow-[#8CE63A]/60 hover:shadow-[#8CE63A]/80 border-4 border-[#8CE63A] rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </span>
                  ) : 'Send Message'}
                </button>

                <p className="text-xs text-off-white/50 font-inter text-center pt-2">
                  🔒 Your information is secure and will never be shared
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
