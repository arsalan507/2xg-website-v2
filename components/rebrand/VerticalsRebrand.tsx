'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

export default function VerticalsRebrand() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const verticals = [
    {
      title: 'Content Marketing 🎬',
      description: 'Viral-ready content that turns viewers into customers 🎯 From ideation to distribution 📢',
      image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&q=80',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Performance Marketing 📊',
      description: 'Data-driven campaigns that maximize ROI 💰 Every rupee tracked, optimized, and scaled 📈',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
    {
      title: 'Influencer Marketing 🤝',
      description: 'Strategic partnerships with creators who move markets 🌟 Authentic reach, real results ✨',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: 'Business Development 💼',
      description: 'Growth strategies that scale 🚀 From market entry to revenue acceleration 📊',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  return (
    <section ref={ref} className="relative py-20 sm:py-28 bg-[#ECEDEB]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[#2F7D63] font-semibold text-sm uppercase tracking-wider mb-4">
            ⚡ Our Services
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1F1F1F] mb-6 tracking-tight">
            Complete growth support for your business 🚀
          </h2>
          <p className="text-lg text-[#5E5E5E] max-w-3xl mx-auto leading-relaxed">
            From content to customers 🎯 we handle everything ✨
          </p>
        </motion.div>

        {/* Verticals Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {verticals.map((vertical, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <Link href="/services" className="block h-full">
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative bg-[#F6F7F5] border-2 border-[#D6D8D4] hover:border-[#2F7D63] rounded-2xl p-8 h-full cursor-pointer overflow-hidden"
                >
                {/* Background Image */}
                <div className="absolute inset-0 opacity-[0.35] group-hover:opacity-[0.6] transition-opacity duration-500">
                  <img
                    src={vertical.image}
                    alt={vertical.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#F6F7F5]/50 via-[#F6F7F5]/55 to-[#F6F7F5]/45" />
                <div className="absolute inset-0 bg-gradient-to-br from-[#2F7D63]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center justify-center w-16 h-16 bg-[#2F7D63]/10 text-[#2F7D63] rounded-xl mb-6 group-hover:bg-[#2F7D63] group-hover:text-white transition-all duration-300"
                  >
                    {vertical.icon}
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-[#1F1F1F] mb-3 group-hover:text-[#2F7D63] transition-colors duration-300">
                    {vertical.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#5E5E5E] leading-relaxed mb-6">
                    {vertical.description}
                  </p>

                  {/* Arrow indicator */}
                  <motion.div
                    className="flex items-center gap-2 text-[#2F7D63] font-semibold text-sm"
                    whileHover={{ x: 5 }}
                  >
                    <span>Learn More</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.div>
                </div>

                {/* Decorative corner element */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-[#2F7D63]/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-[#5E5E5E] text-base mb-6">
            Want to explore all our services? 🔍
          </p>
          <a
            href="/services"
            className="inline-flex items-center justify-center px-8 py-3 bg-white border-2 border-[#2F7D63] text-[#2F7D63] hover:bg-[#2F7D63] hover:text-white font-semibold text-base rounded-lg transition-all duration-200 shadow-sm hover:shadow-md"
          >
            View All Services 📋
          </a>
        </motion.div>
      </div>
    </section>
  );
}
