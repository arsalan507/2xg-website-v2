'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function AllVerticals() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const verticals = [
    {
      title: 'Content Marketing 🎬',
      description: 'Viral-ready content that turns viewers into customers 🎯 From ideation to distribution, we create content that drives real business results 📢',
      details: ['Short-form video content', 'Long-form content strategy', 'Content calendar planning', 'Multi-platform distribution'],
      image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&q=80',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Performance Marketing 📊',
      description: 'Data-driven campaigns that maximize ROI 💰 Every rupee tracked, optimized, and scaled for maximum impact 📈',
      details: ['Paid social advertising', 'Google Ads management', 'Campaign optimization', 'Analytics & reporting'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
    {
      title: 'Influencer Marketing 🤝',
      description: 'Strategic partnerships with creators who move markets 🌟 Authentic reach, real results, measurable impact ✨',
      details: ['Influencer identification', 'Campaign management', 'Content collaboration', 'Performance tracking'],
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: 'Business Development 💼',
      description: 'Growth strategies that scale 🚀 From market entry to revenue acceleration, we build sustainable growth engines 📊',
      details: ['Market strategy', 'Partnership development', 'Sales funnel optimization', 'Revenue growth planning'],
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Business Automation Support 🤖',
      description: 'Streamline operations and boost efficiency ⚡ Automate repetitive tasks and focus on growth 🎯',
      details: ['Workflow automation', 'CRM integration', 'Process optimization', 'Tool implementation'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      title: 'App Development 📱',
      description: 'Custom mobile solutions for your business 💡 From MVP to scale, we build apps that users love ❤️',
      details: ['iOS & Android apps', 'Cross-platform development', 'UI/UX design', 'App maintenance'],
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Business Development Consultation 💡',
      description: 'Expert guidance for sustainable growth 📈 Strategic insights that transform your business trajectory 🎯',
      details: ['Growth strategy', 'Market analysis', 'Competitive positioning', 'Action plans'],
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      title: 'Self-Made Influencer Program 🌟',
      description: 'Build your personal brand from scratch ✨ Transform into a recognized voice in your industry 🚀',
      details: ['Personal branding', 'Content strategy', 'Platform growth', 'Monetization guidance'],
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ),
    },
    {
      title: 'Theme Page Management 📸',
      description: 'Build and monetize viral theme pages 🔥 From growth to sponsorships, we handle it all 💰',
      details: ['Page strategy', 'Content curation', 'Audience growth', 'Monetization'],
      image: 'https://images.unsplash.com/photo-1611926653670-6c7e4b3e93e8?w=800&q=80',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Website Development 🌐',
      description: 'Beautiful, high-converting websites 💻 Built for speed, designed for results 🎯',
      details: ['Custom web development', 'E-commerce solutions', 'SEO optimization', 'Ongoing maintenance'],
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
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
          <span className="inline-block text-[#6BBF59] font-semibold text-sm uppercase tracking-wider mb-4">
            🎯 Complete Service Suite
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1F1F1F] mb-6 tracking-tight">
            10 Services. One Partner. Unlimited Growth 🚀
          </h2>
          <p className="text-lg text-[#5E5E5E] max-w-3xl mx-auto leading-relaxed">
            Choose individual services or let us handle your entire growth strategy ✨
          </p>
        </motion.div>

        {/* Verticals Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {verticals.map((vertical, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative"
            >
              <a href="/contact">
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative bg-[#F6F7F5] border-2 border-[#D6D8D4] hover:border-[#6BBF59] rounded-2xl p-8 h-full cursor-pointer overflow-hidden"
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
                <div className="absolute inset-0 bg-gradient-to-br from-[#6BBF59]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center justify-center w-16 h-16 bg-[#6BBF59]/10 text-[#6BBF59] rounded-xl mb-6 group-hover:bg-[#6BBF59] group-hover:text-white transition-all duration-300"
                  >
                    {vertical.icon}
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-[#1F1F1F] mb-3 group-hover:text-[#6BBF59] transition-colors duration-300">
                    {vertical.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#5E5E5E] leading-relaxed mb-6">
                    {vertical.description}
                  </p>

                  {/* Details List */}
                  <ul className="space-y-2 mb-6">
                    {vertical.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-[#5E5E5E]">
                        <svg className="w-4 h-4 text-[#6BBF59] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                        </svg>
                        {detail}
                      </li>
                    ))}
                  </ul>

                  {/* Learn More indicator */}
                  <motion.div
                    className="flex items-center gap-2 text-[#6BBF59] font-semibold text-sm"
                    whileHover={{ x: 5 }}
                  >
                    <span>Get Started</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.div>
                </div>

                {/* Decorative corner element */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-[#6BBF59]/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
