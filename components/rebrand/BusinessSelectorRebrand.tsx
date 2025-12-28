'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

export default function BusinessSelectorRebrand() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedBusiness, setSelectedBusiness] = useState('');
  const [showInsight, setShowInsight] = useState(false);

  const businesses = [
    {
      value: 'bridal-wear',
      label: 'Bridal Wear (Men & Women)',
      insight: 'For bridal wear, content isn\'t about fashion — it\'s about aspiration, trust, and family approval.'
    },
    {
      value: 'furniture',
      label: 'Furniture',
      insight: 'Furniture sales happen when buyers can visualize the product in their home — not just see it.'
    },
    {
      value: 'pet-shop',
      label: 'Pet Shop',
      insight: 'Pet owners buy emotionally. Content that shows care, trust, and love wins over discounts.'
    },
    {
      value: 'car-wash-detailing',
      label: 'Car Wash & Detailing',
      insight: 'Car owners don\'t want a service — they want visible transformation and peace of mind.'
    },
    {
      value: 'electronics-store',
      label: 'Electronics Store',
      insight: 'Electronics buyers research endlessly. Trust signals and demonstrations beat price wars.'
    },
    {
      value: 'dry-fruit-shop',
      label: 'Dry Fruit Shop',
      insight: 'Premium dry fruits sell on freshness, purity, and health benefits — not just pricing.'
    },
    {
      value: 'pharmacy',
      label: 'Pharmacy Giants',
      insight: 'Healthcare purchases require credibility, accessibility, and consistent visibility in local search.'
    },
    {
      value: 'mobile-sales',
      label: 'Mobile Sales Store',
      insight: 'Mobile buyers compare obsessively. Win by showing value, trust, and post-purchase support.'
    },
    {
      value: 'real-estate',
      label: 'Real Estate',
      insight: 'Real estate decisions take months. Stay visible, build trust, deliver qualified leads consistently.'
    },
    {
      value: 'car-bike-sales',
      label: 'Car & Bike Sales',
      insight: 'Vehicle sales are high-involvement. Content must educate, inspire, and build showroom footfall.'
    },
    {
      value: 'car-bike-service',
      label: 'Car & Bike Home Service',
      insight: 'Convenience beats price. Show reliability, speed, and professional execution to win bookings.'
    },
    {
      value: 'wedding-decor',
      label: 'Wedding Decor',
      insight: 'Wedding decor is visual trust. Your portfolio must show dream execution and flawless delivery.'
    },
    {
      value: 'ice-cream',
      label: 'Premium Ice Cream Brands',
      insight: 'Premium ice cream isn\'t food — it\'s an experience. Content must trigger indulgence and desire.'
    },
    {
      value: 'restaurant',
      label: 'Restaurants',
      insight: 'Peak sales depend on repeat visibility, not discounts. Reels outperform static food photos by 3–4x.'
    },
  ];

  const handleBusinessSelect = (value: string) => {
    setSelectedBusiness(value);
    setShowInsight(true);
  };

  const selectedBusinessData = businesses.find(b => b.value === selectedBusiness);

  return (
    <section ref={ref} className="relative py-20 sm:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1F1F1F] mb-4 tracking-tight">
            Choose Your Business.<br />
            We'll Show You the Growth Plan.
          </h2>
          <p className="text-lg text-[#5E5E5E] max-w-2xl mx-auto">
            Every business grows differently. Select yours to see how we do it.
          </p>
        </motion.div>

        {/* Business Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="relative">
            <select
              value={selectedBusiness}
              onChange={(e) => handleBusinessSelect(e.target.value)}
              className="w-full px-6 py-4 text-lg bg-[#F6F7F5] border-2 border-[#D6D8D4] hover:border-[#6BBF59] focus:border-[#6BBF59] rounded-xl text-[#1F1F1F] font-medium outline-none transition-all duration-200 cursor-pointer appearance-none"
            >
              <option value="">Select your business type...</option>
              {businesses.map((business) => (
                <option key={business.value} value={business.value}>
                  {business.label}
                </option>
              ))}
            </select>

            {/* Custom dropdown arrow */}
            <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg className="w-5 h-5 text-[#6BBF59]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          {/* Insight Display */}
          {showInsight && selectedBusinessData && (
            <motion.div
              initial={{ opacity: 0, y: 10, height: 0 }}
              animate={{ opacity: 1, y: 0, height: 'auto' }}
              transition={{ duration: 0.4 }}
              className="mt-6"
            >
              <div className="bg-[#6BBF59]/5 border-l-4 border-[#6BBF59] rounded-lg p-6">
                <p className="text-[#1F1F1F] text-base leading-relaxed font-medium italic">
                  "{selectedBusinessData.insight}"
                </p>
              </div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="mt-6 text-center"
              >
                <a
                  href={`/industries/${selectedBusiness}`}
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#6BBF59] text-white hover:bg-[#1F5D4A] font-semibold text-lg rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-1"
                >
                  See How We Scale This Business
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
