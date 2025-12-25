'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function PrivacyRebrand() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const sections = [
    {
      title: 'Information We Collect',
      content: [
        'We collect information you provide directly to us, such as when you fill out a contact form, request a quote, apply for a position, or communicate with us.',
        'Information collected may include: name, email address, phone number, company name, job title, and any other information you choose to provide.',
        'We also automatically collect certain information about your device when you use our website, including IP address, browser type, operating system, and usage data.',
      ],
    },
    {
      title: 'How We Use Your Information',
      content: [
        'To provide, maintain, and improve our services',
        'To respond to your inquiries and fulfill your requests',
        'To send you marketing communications (with your consent)',
        'To analyze usage patterns and optimize our website',
        'To comply with legal obligations and protect our rights',
      ],
    },
    {
      title: 'Information Sharing',
      content: [
        'We do not sell, trade, or rent your personal information to third parties.',
        'We may share your information with trusted service providers who assist us in operating our website and conducting our business, subject to confidentiality agreements.',
        'We may disclose information when required by law or to protect our rights and safety.',
      ],
    },
    {
      title: 'Data Security',
      content: [
        'We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.',
        'However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.',
      ],
    },
    {
      title: 'Your Rights',
      content: [
        'You have the right to access, update, or delete your personal information.',
        'You can opt-out of marketing communications at any time.',
        'You may request a copy of the personal information we hold about you.',
        'To exercise these rights, please contact us at privacy@2xg.in',
      ],
    },
    {
      title: 'Cookies',
      content: [
        'We use cookies and similar tracking technologies to track activity on our website and hold certain information.',
        'You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.',
        'However, if you do not accept cookies, you may not be able to use some portions of our website.',
      ],
    },
    {
      title: 'Changes to This Policy',
      content: [
        'We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.',
        'Changes are effective when posted on this page.',
      ],
    },
    {
      title: 'Contact Us',
      content: [
        'If you have any questions about this Privacy Policy, please contact us:',
        'Email: privacy@2xg.in',
        'Phone: +91 98765 43210',
      ],
    },
  ];

  return (
    <section ref={ref} className="relative min-h-screen py-32 bg-gradient-to-br from-[#F6F7F5] via-[#ECEDEB] to-[#F6F7F5] overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#2F7D63]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FF6A1A]/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-[#2F7D63]/10 text-[#2F7D63] rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
            Legal
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#1F1F1F] mb-6">
            Privacy <span className="text-[#2F7D63]">Policy</span>
          </h1>
          <p className="text-lg sm:text-xl text-[#5E5E5E] max-w-3xl mx-auto leading-relaxed">
            Last updated: December 25, 2025
          </p>
        </motion.div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white border-2 border-[#D6D8D4] rounded-2xl p-8 mb-8 shadow-lg"
        >
          <p className="text-[#5E5E5E] leading-relaxed text-lg">
            At 2XG, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. Please read this policy carefully.
          </p>
        </motion.div>

        {/* Sections */}
        {sections.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 * (index + 3) }}
            className="bg-white border-2 border-[#D6D8D4] rounded-2xl p-8 mb-6 shadow-lg hover:border-[#2F7D63] transition-all duration-300"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1F1F1F] mb-4">
              {section.title}
            </h2>
            <div className="space-y-3">
              {section.content.map((paragraph, pIndex) => (
                <p key={pIndex} className="text-[#5E5E5E] leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>
        ))}

        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="/"
            className="inline-flex items-center gap-2 text-[#5E5E5E] hover:text-[#2F7D63] transition-colors font-medium"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </a>
        </motion.div>
      </div>
    </section>
  );
}
