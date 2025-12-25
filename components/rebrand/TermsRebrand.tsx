'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function TermsRebrand() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const sections = [
    {
      title: 'Acceptance of Terms',
      content: [
        'By accessing and using the 2XG website and services, you accept and agree to be bound by the terms and provisions of this agreement.',
        'If you do not agree to these Terms of Service, please do not use our website or services.',
      ],
    },
    {
      title: 'Use of Services',
      content: [
        'You agree to use our services only for lawful purposes and in accordance with these Terms.',
        'You are prohibited from using our services to transmit any unlawful, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, or otherwise objectionable material.',
        'You may not use our services in any manner that could damage, disable, overburden, or impair our servers or networks.',
      ],
    },
    {
      title: 'Intellectual Property',
      content: [
        'All content on this website, including text, graphics, logos, images, videos, and software, is the property of 2XG or its content suppliers and is protected by Indian and international copyright laws.',
        'You may not reproduce, distribute, modify, create derivative works of, publicly display, or exploit any content without our express written permission.',
        'Any content you submit to us becomes our property and may be used for business purposes without compensation to you.',
      ],
    },
    {
      title: 'Services and Deliverables',
      content: [
        'We will provide services as agreed in our service agreements or proposals.',
        'Timelines and deliverables are estimates and may vary based on project scope and client responsiveness.',
        'Client is responsible for providing timely feedback, assets, and approvals to ensure project completion.',
        'We reserve the right to showcase completed work in our portfolio unless otherwise agreed in writing.',
      ],
    },
    {
      title: 'Payment Terms',
      content: [
        'Payment terms will be outlined in individual service agreements.',
        'Invoices are due within 15 days of issuance unless otherwise specified.',
        'Late payments may incur interest charges of 1.5% per month or the maximum permitted by law.',
        'We reserve the right to suspend services for accounts with outstanding balances.',
      ],
    },
    {
      title: 'Confidentiality',
      content: [
        'Both parties agree to maintain the confidentiality of any proprietary or confidential information shared during the course of our business relationship.',
        'This obligation continues even after the termination of services.',
        'Confidential information does not include information that is publicly available or independently developed.',
      ],
    },
    {
      title: 'Limitation of Liability',
      content: [
        'To the fullest extent permitted by law, 2XG shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of our services.',
        'Our total liability for any claims arising from our services shall not exceed the amount paid by you for the specific service giving rise to the claim.',
        'We do not guarantee specific results from our services, including but not limited to views, engagement, or revenue.',
      ],
    },
    {
      title: 'Termination',
      content: [
        'Either party may terminate services with 30 days written notice.',
        'We reserve the right to terminate services immediately if you breach these Terms.',
        'Upon termination, you must pay for all services rendered up to the termination date.',
        'Termination does not affect any rights or obligations that accrued prior to termination.',
      ],
    },
    {
      title: 'Indemnification',
      content: [
        'You agree to indemnify and hold 2XG harmless from any claims, damages, losses, or expenses arising from your use of our services or violation of these Terms.',
        'This includes but is not limited to legal fees and costs.',
      ],
    },
    {
      title: 'Governing Law',
      content: [
        'These Terms shall be governed by and construed in accordance with the laws of India.',
        'Any disputes arising from these Terms or our services shall be subject to the exclusive jurisdiction of the courts in Bengaluru, Karnataka.',
      ],
    },
    {
      title: 'Changes to Terms',
      content: [
        'We reserve the right to modify these Terms at any time.',
        'Changes will be effective immediately upon posting on this page.',
        'Your continued use of our services after changes constitutes acceptance of the modified Terms.',
      ],
    },
    {
      title: 'Contact Information',
      content: [
        'If you have any questions about these Terms of Service, please contact us:',
        'Email: legal@2xg.in',
        'Phone: +91 98765 43210',
        'Address: Bengaluru, Karnataka, India',
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
            Terms of <span className="text-[#2F7D63]">Service</span>
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
            Welcome to 2XG. These Terms of Service ("Terms") govern your use of our website and services. By using our services, you agree to comply with and be bound by these Terms. Please review them carefully.
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
