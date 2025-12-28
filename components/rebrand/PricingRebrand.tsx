'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const pricingPlans = [
  {
    name: 'BASIC',
    price: '45,000',
    period: '/month',
    tagline: 'Best for: Market testing, messaging validation, and early lead flow',
    popular: false,
    color: '#6BBF59',
    platforms: ['Instagram Reels'],
    sections: [
      {
        title: 'Performance & Media',
        features: [
          'Basic brand kit setup with logo',
          'Page branding & highlights',
          'Relevant BIO setup',
          'Lead gen setup',
          'Test-ride lead generation + remarketing',
          'Core funnel tracking (leads, CPL, CTR)',
        ],
      },
      {
        title: 'Content Engine',
        features: [
          '15 short-form creatives/month (Reels + statics)',
          'Lead-magnet content (problem–solution–value)',
          'Feature explainer reels',
        ],
      },
      {
        title: 'Operations',
        features: [
          'Monthly performance report + insights',
        ],
      },
      {
        title: 'Expected Outcome',
        features: [
          'Initial brand awareness lift',
          '150–250 qualified leads/month',
          'Foundational remarketing audiences built',
        ],
      },
    ],
  },
  {
    name: 'PLUS',
    price: '1,50,000',
    period: '/month',
    tagline: 'Best for: Growth, consistency, and performance optimization',
    popular: true,
    color: '#FF6A1A',
    platforms: ['Instagram Reels', 'YouTube Shorts'],
    sections: [
      {
        title: 'Content Velocity',
        features: [
          '20–24 content pieces/month',
          'Reels, Shorts, carousels, statics',
          'Product-wise content split',
          'Early YouTube Shorts presence',
        ],
      },
      {
        title: 'Performance Marketing',
        features: [
          'Full-funnel setup: Awareness → Consideration → Lead',
          'Audience segmentation by product interest',
        ],
      },
      {
        title: 'Strategy & Optimization',
        features: [
          'Bi-weekly strategy calls',
          'Monthly optimization roadmap',
          'Conversion and CPL benchmarking',
        ],
      },
      {
        title: 'Expected Outcome',
        features: [
          '2–3× reach vs Basic plan',
          'Lower CPL over time due to creative learning',
          'Strong Instagram + Shorts momentum',
          'Predictable monthly lead flow',
        ],
      },
    ],
  },
  {
    name: 'PRO',
    price: '2,50,000',
    period: '/month',
    tagline: 'Best for: Category leadership, retailer dominance, and long-term moat',
    popular: false,
    color: '#6BBF59',
    platforms: ['Instagram Reels', 'YouTube Shorts', 'YouTube Long-form'],
    sections: [
      {
        title: 'Everything in Plus, PLUS:',
        features: [
          '₹30K add-on for 2 influencers (strongly recommended)',
        ],
      },
      {
        title: 'Retailer Blueprint (Key Differentiator)',
        features: [
          '"Blueprint to 2X Online Sales" toolkit',
          'Content scripts & reel ideas',
          'Phone-shoot guides',
          'Paid ad templates',
          'Centralized content editing + optimization',
          'Scale from 1 brand page → 20–50 local pages',
        ],
      },
      {
        title: 'Authority Content',
        features: [
          'Founder story / factory walkthrough (quarterly)',
          'Engineering & design storytelling',
          '3–6 long-form YouTube videos included',
        ],
      },
      {
        title: 'Expected Outcome',
        features: [
          'Strong YouTube presence',
          'Multi-city brand visibility',
          'Lower CAC through trust + distribution',
          'Retailer-driven organic amplification',
          'Clear category-leader perception',
        ],
      },
    ],
  },
];

export default function PricingRebrand() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [expandedSections, setExpandedSections] = useState<{[key: string]: boolean}>({});

  const toggleSection = (planName: string, sectionIndex: number) => {
    const key = `${planName}-${sectionIndex}`;
    setExpandedSections(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <section ref={ref} className="relative py-20 sm:py-32 bg-white overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#6BBF59]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FF6A1A]/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-[#6BBF59]/10 text-[#6BBF59] rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
            Simple, Transparent Pricing
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#1F1F1F] mb-6 leading-tight">
            Choose Your Growth Plan
          </h1>
          <p className="text-lg sm:text-xl text-[#5E5E5E] max-w-3xl mx-auto leading-relaxed">
            From market testing to category leadership, we have a plan designed for your business stage.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 z-10">
                  <span className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-full shadow-lg whitespace-nowrap">
                    <span>🔥</span>
                    Most Popular
                  </span>
                </div>
              )}

              <div
                className={`relative h-full bg-[#F6F7F5] rounded-2xl p-6 sm:p-8 transition-all duration-300 ${
                  plan.popular
                    ? 'border-4 border-[#FF6A1A] shadow-2xl lg:scale-105'
                    : 'border-2 border-[#D6D8D4] hover:border-[#6BBF59] shadow-lg hover:shadow-xl'
                }`}
              >
                {/* Plan Header */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <div
                      className="w-3 h-3 rounded-full flex-shrink-0"
                      style={{ backgroundColor: plan.color }}
                    />
                    <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#5E5E5E]">
                      {plan.name} Plan
                    </h3>
                  </div>
                  <div className="flex items-baseline gap-1.5 sm:gap-2 mb-3 flex-wrap">
                    <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1F1F1F]">₹{plan.price}</span>
                    <span className="text-base sm:text-lg text-[#5E5E5E] font-medium">{plan.period}</span>
                  </div>
                  <p className="text-[#5E5E5E] text-xs sm:text-sm leading-relaxed">{plan.tagline}</p>
                </div>

                {/* Platforms */}
                <div className="mb-6 pb-6 border-b border-[#D6D8D4]">
                  <p className="text-xs uppercase tracking-wider text-[#5E5E5E] font-semibold mb-3">
                    Platforms
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {plan.platforms.map((platform) => (
                      <span
                        key={platform}
                        className="px-3 py-1 bg-white border border-[#D6D8D4] rounded-full text-xs font-medium text-[#1F1F1F]"
                      >
                        {platform}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features - Collapsible Sections */}
                <div className="space-y-3 mb-8">
                  {plan.sections.map((section, sIdx) => {
                    const sectionKey = `${plan.name}-${sIdx}`;
                    const isExpanded = expandedSections[sectionKey];

                    return (
                      <div key={sIdx} className="border border-[#D6D8D4] rounded-lg overflow-hidden">
                        {/* Section Header - Clickable */}
                        <button
                          onClick={() => toggleSection(plan.name, sIdx)}
                          className="w-full flex items-center justify-between p-4 bg-white hover:bg-[#F6F7F5] transition-colors duration-200"
                        >
                          <h4 className="text-sm font-bold text-[#1F1F1F] uppercase tracking-wide">
                            {section.title}
                          </h4>
                          <motion.div
                            animate={{ rotate: isExpanded ? 45 : 0 }}
                            transition={{ duration: 0.3 }}
                            className="flex-shrink-0"
                          >
                            <svg
                              className="w-5 h-5 text-[#6BBF59]"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                              />
                            </svg>
                          </motion.div>
                        </button>

                        {/* Section Content - Expandable */}
                        <motion.div
                          initial={false}
                          animate={{
                            height: isExpanded ? 'auto' : 0,
                            opacity: isExpanded ? 1 : 0
                          }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <ul className="space-y-2 p-4 pt-0 bg-[#F6F7F5]/50">
                            {section.features.map((feature, fIdx) => (
                              <li key={fIdx} className="flex items-start gap-2">
                                <svg
                                  className="w-5 h-5 text-[#6BBF59] flex-shrink-0 mt-0.5"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                                <span className="text-sm text-[#1F1F1F] leading-relaxed">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      </div>
                    );
                  })}
                </div>

                {/* CTA Button */}
                <a
                  href="/contact"
                  className={`block w-full px-4 sm:px-6 py-3 sm:py-4 text-center font-bold text-base sm:text-lg rounded-xl transition-all duration-200 shadow-md hover:shadow-xl hover:-translate-y-1 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white'
                      : 'bg-[#6BBF59] hover:bg-[#5AA047] text-white'
                  }`}
                >
                  Get Started →
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center bg-gradient-to-br from-[#1F1F1F] to-[#6BBF59] rounded-2xl p-6 sm:p-8 lg:p-12 text-white"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
            Not Sure Which Plan Fits Your Business?
          </h2>
          <p className="text-base sm:text-lg text-white/80 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Book a free 15-minute strategy call and we'll help you choose the perfect plan for your goals.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-white text-[#1F1F1F] hover:bg-[#F6F7F5] font-bold text-base sm:text-lg rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            <span className="hidden sm:inline">Book Free Strategy Call</span>
            <span className="sm:hidden">Book Strategy Call</span>
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>

          {/* Trust Signals */}
          <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-white/70 text-xs sm:text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="whitespace-nowrap">No long-term contracts</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="whitespace-nowrap">Cancel anytime</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="whitespace-nowrap">100% transparent reporting</span>
            </div>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1F1F1F] text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                q: 'Can I upgrade or downgrade my plan?',
                a: 'Yes! You can change your plan anytime. Upgrades take effect immediately, and downgrades apply from the next billing cycle.',
              },
              {
                q: 'What if I need custom services?',
                a: 'We offer custom packages for unique requirements. Book a call with our team to discuss your specific needs.',
              },
              {
                q: 'Do you offer refunds?',
                a: "We offer a 30-day money-back guarantee if you're not satisfied with our service. No questions asked.",
              },
              {
                q: 'How long does it take to see results?',
                a: 'Most clients see initial results within 30-45 days. Significant growth typically happens after 3-6 months of consistent execution.',
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-[#F6F7F5] border border-[#D6D8D4] rounded-xl p-6 hover:border-[#6BBF59] transition-all duration-200"
              >
                <h3 className="text-lg font-bold text-[#1F1F1F] mb-3">{faq.q}</h3>
                <p className="text-[#5E5E5E] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
