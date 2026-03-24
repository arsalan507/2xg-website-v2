'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import SmoothScroll from '@/components/prototype/SmoothScroll';
import MagneticButton from '@/components/prototype/MagneticButton';
import TextReveal from '@/components/prototype/TextReveal';
import AnimatedCounter from '@/components/prototype/AnimatedCounter';
import FadeIn from '@/components/prototype/FadeIn';
import { ArrowRight, Check, ChevronDown, MessageCircle, Shield, Zap, BarChart3, Users, TrendingUp } from 'lucide-react';

/* ─── Parallax Image Component ─── */
function ParallaxImage({ src, alt, className = '', objectPosition = 'center' }: { src: string; alt: string; className?: string; objectPosition?: string }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-5%', '5%']);
  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.img src={src} alt={alt} style={{ y, objectPosition }} className="w-full h-[115%] object-cover" loading="lazy" />
    </div>
  );
}

/* ─── Sticky Stat Component ─── */
function StickyStatLine({ number, suffix, label, color = 'text-white' }: { number: number; suffix: string; label: string; color?: string }) {
  return (
    <div className="flex items-baseline gap-3 sm:gap-4">
      <span className={`text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tighter font-display ${color}`}>
        <AnimatedCounter end={number} suffix={suffix} />
      </span>
      <span className="text-sm sm:text-base text-[#737373] max-w-[200px] leading-snug">{label}</span>
    </div>
  );
}

export default function PrototypePage() {
  const heroRef = useRef(null);
  const { scrollYProgress: heroScroll } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroOpacity = useTransform(heroScroll, [0, 0.7], [1, 0]);
  const heroScale = useTransform(heroScroll, [0, 0.7], [1, 0.96]);

  return (
    <SmoothScroll>
      <main className="bg-[#fafaf9] text-[#0a0a0a] selection:bg-[#22c55e]/20">

        {/* ═══════════ NAVBAR ═══════════ */}
        <nav className="fixed top-0 w-full z-50 bg-[#fafaf9]/60 backdrop-blur-2xl border-b border-black/[0.04]">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <div className="flex items-center justify-between h-14 sm:h-16">
              <a href="#" className="flex items-center gap-2.5">
                <div className="w-7 h-7 bg-[#1a1a1a] rounded-md flex items-center justify-center">
                  <span className="text-white font-bold text-[10px] tracking-wider">2XG</span>
                </div>
              </a>
              <div className="hidden md:flex items-center gap-8">
                {['Proof', 'Method', 'Pricing'].map((item) => (
                  <a key={item} href={`#${item.toLowerCase()}`} className="text-[13px] text-[#737373] hover:text-[#0a0a0a] transition-colors font-medium">{item}</a>
                ))}
              </div>
              <MagneticButton href="https://wa.me/919916516507?text=Hi%2C%20I%20want%20a%20free%20competitor%20audit" className="inline-flex items-center gap-2 px-4 py-2 bg-[#0a0a0a] hover:bg-[#1a1a1a] text-white text-[13px] font-medium rounded-lg transition-colors">
                Free Audit <ArrowRight size={14} />
              </MagneticButton>
            </div>
          </div>
        </nav>

        {/* ═══════════ HERO ═══════════ */}
        <motion.section ref={heroRef} style={{ opacity: heroOpacity, scale: heroScale }} className="relative min-h-[100svh] flex items-center pt-16 overflow-hidden">
          {/* Background: BCH store night photo with overlay */}
          <div className="absolute inset-0">
            <img src="/images/bch/store-night.webp" alt="Bharath Cycle Hub at night" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/95 via-[#0a0a0a]/80 to-[#0a0a0a]/60" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 py-20 sm:py-28 lg:py-36 w-full">
            <div className="max-w-3xl">
              {/* Badge */}
              <FadeIn delay={0.1}>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/[0.08] backdrop-blur-sm border border-white/[0.1] rounded-full mb-8">
                  <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22c55e] opacity-75" /><span className="relative inline-flex rounded-full h-2 w-2 bg-[#22c55e]" /></span>
                  <span className="text-[12px] font-medium text-white/80 tracking-wide">Deploying for 10 businesses this quarter</span>
                </div>
              </FadeIn>

              {/* Headline */}
              <TextReveal as="h1" className="text-[clamp(2.4rem,6vw,5rem)] font-bold leading-[1.05] tracking-[-0.03em] text-white" stagger={0.05}>
                One store.
              </TextReveal>
              <TextReveal as="h1" className="text-[clamp(2.4rem,6vw,5rem)] font-bold leading-[1.05] tracking-[-0.03em] text-[#22c55e]" delay={0.2} stagger={0.05}>
                ₹13.4 Crores a year.
              </TextReveal>
              <TextReveal as="h1" className="text-[clamp(2.4rem,6vw,5rem)] font-bold leading-[1.05] tracking-[-0.03em] text-white" delay={0.4} stagger={0.05}>
                Zero paid ads.
              </TextReveal>

              {/* Sub */}
              <FadeIn delay={0.6}>
                <p className="text-white/60 text-base sm:text-lg leading-relaxed max-w-[500px] mt-8 mb-10">
                  We built the content engine behind Bharath Cycle Hub — the single store that outperforms chains with 21 locations. Now we deploy it for businesses like yours.
                </p>
              </FadeIn>

              {/* CTA */}
              <FadeIn delay={0.75}>
                <div className="flex flex-col sm:flex-row gap-3">
                  <MagneticButton href="https://wa.me/919916516507?text=Hi%2C%20I%20want%20a%20free%20competitor%20audit" className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#22c55e] hover:bg-[#16a34a] text-white font-semibold text-[15px] rounded-xl transition-all duration-300 shadow-[0_0_30px_rgba(34,197,94,0.3)]">
                    <MessageCircle size={18} /> Get Your Free Competitor Audit
                  </MagneticButton>
                  <a href="#proof" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/[0.08] hover:bg-white/[0.12] text-white font-semibold text-[15px] rounded-xl border border-white/[0.1] backdrop-blur-sm transition-all">
                    See the proof <ChevronDown size={16} />
                  </a>
                </div>
              </FadeIn>

              {/* Trust pills */}
              <FadeIn delay={0.9}>
                <div className="flex flex-wrap gap-4 mt-10 text-[13px] text-white/50">
                  {['No contract', '30-day pilot', 'Full refund guarantee'].map((item) => (
                    <span key={item} className="flex items-center gap-1.5"><Check size={14} className="text-[#22c55e]" /> {item}</span>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>

          {/* Scroll hint */}
          <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10" animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
            <ChevronDown size={24} className="text-white/30" />
          </motion.div>
        </motion.section>

        {/* ═══════════ FULL-BLEED STAT BAR ═══════════ */}
        <section className="bg-[#0a0a0a] py-10 sm:py-14 border-y border-white/[0.04]">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-4 text-center">
              {[
                { end: 13.4, suffix: ' Cr', prefix: '₹', label: 'Revenue/Year' },
                { end: 392, suffix: 'K', prefix: '', label: 'Instagram Followers' },
                { end: 95, suffix: '%', prefix: '', label: 'From Content' },
                { end: 840, suffix: '+', prefix: '', label: 'Posts Created' },
              ].map((stat, i) => (
                <FadeIn key={i} delay={0.1 * i}>
                  <div>
                    <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                      {stat.prefix}<AnimatedCounter end={stat.end} decimals={stat.end % 1 !== 0 ? 1 : 0} suffix={stat.suffix} />
                    </div>
                    <div className="text-[12px] text-[#737373] mt-1 uppercase tracking-wider">{stat.label}</div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ THE PAIN ═══════════ */}
        <section className="py-20 sm:py-32 bg-[#fafaf9]">
          <div className="max-w-4xl mx-auto px-5 sm:px-8">
            <FadeIn>
              <p className="text-[#22c55e] text-[12px] font-semibold uppercase tracking-[0.15em] mb-5 text-center">The uncomfortable truth</p>
            </FadeIn>
            <TextReveal as="h2" className="text-[clamp(1.8rem,4.5vw,3.2rem)] font-bold leading-[1.1] tracking-[-0.02em] text-center">
              Your next customer is watching your competitor's reels. Silently. For weeks.
            </TextReveal>
            <FadeIn delay={0.3}>
              <p className="text-[#737373] text-base sm:text-lg text-center max-w-2xl mx-auto mt-6 mb-16 leading-relaxed">
                Then they walk into their store — not yours. For a ₹1 Crore/month business, that's ₹30 Lakhs bleeding out every single month.
              </p>
            </FadeIn>

            {/* Pain cards */}
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { val: '30%', label: 'Customers silently going to competitors who show up first' },
                { val: '₹30L', label: 'Monthly revenue a ₹1Cr business loses to online-first competitors' },
                { val: '90%', label: 'Buyers research brands online before visiting any store' },
              ].map((item, i) => (
                <FadeIn key={i} delay={0.1 * i}>
                  <div className="bg-white rounded-2xl p-6 sm:p-8 border border-black/[0.04] shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-shadow duration-300">
                    <div className="text-4xl sm:text-5xl font-bold text-red-500 tracking-tight mb-3">{item.val}</div>
                    <p className="text-[#737373] text-sm leading-relaxed">{item.label}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ FULL-WIDTH BCH STORE IMAGE (scroll-stopper) ═══════════ */}
        <section className="relative h-[60vh] sm:h-[70vh]">
          <ParallaxImage src="/images/bch/store-day.webp" alt="Bharath Cycle Hub — Yelahanka, Bangalore" className="absolute inset-0" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-14">
            <div className="max-w-7xl mx-auto">
              <FadeIn>
                <p className="text-white/50 text-[12px] uppercase tracking-[0.15em] mb-2">The store</p>
                <h3 className="text-white text-3xl sm:text-4xl font-bold tracking-tight">Bharath Cycle Hub</h3>
                <p className="text-white/60 text-sm mt-2">Yelahanka, Bangalore — Since 1987 — Single location, ₹13.4 Crores/year</p>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ═══════════ PROOF SECTION ═══════════ */}
        <section id="proof" className="py-20 sm:py-32 bg-[#0a0a0a] text-white">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <div className="text-center mb-16">
              <FadeIn><p className="text-[#22c55e] text-[12px] font-semibold uppercase tracking-[0.15em] mb-5">Proof, not promises</p></FadeIn>
              <TextReveal as="h2" className="text-[clamp(1.8rem,4.5vw,3.2rem)] font-bold leading-[1.1] tracking-[-0.02em] text-white">
                We didn't read this in a book. We did it ourselves.
              </TextReveal>
            </div>

            {/* Stats with scroll-stop feel — large numbers */}
            <div className="space-y-12 sm:space-y-16 max-w-4xl mx-auto">
              {[
                { number: 13.4, suffix: ' Cr/yr', label: 'Annual revenue from a single store in Yelahanka, Bangalore', color: 'text-[#22c55e]' },
                { number: 392, suffix: 'K', label: 'Instagram followers on the main BCH channel alone', color: 'text-white' },
                { number: 95, suffix: '%', label: 'Of all BCH customers found the store through content', color: 'text-[#22c55e]' },
                { number: 88, suffix: '%', label: 'Walk-in to purchase conversion rate at the store', color: 'text-white' },
              ].map((stat, i) => (
                <FadeIn key={i} delay={0.05 * i}>
                  <StickyStatLine number={stat.number} suffix={stat.suffix} label={stat.label} color={stat.color} />
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={0.3}>
              <div className="border-t border-white/[0.06] mt-16 pt-8 max-w-4xl mx-auto">
                <p className="text-[13px] text-[#525252]">Not a client. <span className="text-white font-medium">Our own store.</span> Public Instagram channels. Verifiable numbers. Real store you can visit.</p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ═══════════ CUSTOMER PHOTOS MARQUEE (scroll-stopper) ═══════════ */}
        <section className="py-16 sm:py-24 bg-[#fafaf9] overflow-hidden">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 mb-10">
            <FadeIn>
              <p className="text-[#22c55e] text-[12px] font-semibold uppercase tracking-[0.15em] mb-3">Real customers</p>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">88% of walk-ins buy on their first visit.</h3>
              <p className="text-[#737373] text-sm mt-2">Not stock photos. Real families. Real purchases. Every week.</p>
            </FadeIn>
          </div>

          {/* Infinite marquee */}
          <div className="relative">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-r from-[#fafaf9] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-l from-[#fafaf9] to-transparent z-10 pointer-events-none" />

            <div className="flex animate-[marquee_25s_linear_infinite] hover:[animation-play-state:paused]">
              {[
                { src: '/images/bch/customer-family.webp', caption: 'Family bought their first kids cycle' },
                { src: '/images/bch/customer-2.webp', caption: 'Teen got a Proadeo — "Never Give Up"' },
                { src: '/images/bch/customer-3.webp', caption: 'Dad surprised daughter with a Lady Bird' },
                { src: '/images/bch/customer-family.webp', caption: 'Family bought their first kids cycle' },
                { src: '/images/bch/customer-2.webp', caption: 'Teen got a Proadeo — "Never Give Up"' },
                { src: '/images/bch/customer-3.webp', caption: 'Dad surprised daughter with a Lady Bird' },
                { src: '/images/bch/customer-family.webp', caption: 'Family bought their first kids cycle' },
                { src: '/images/bch/customer-2.webp', caption: 'Teen got a Proadeo — "Never Give Up"' },
              ].map((item, i) => (
                <div key={i} className="shrink-0 w-[300px] sm:w-[380px] mx-3">
                  <div className="rounded-2xl overflow-hidden bg-white border border-black/[0.04] shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-shadow duration-300">
                    <div className="h-[280px] sm:h-[340px] overflow-hidden">
                      <img src={item.src} alt={item.caption} className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-4">
                      <p className="text-[13px] text-[#737373]">{item.caption}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <style jsx>{`
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
          `}</style>
        </section>

        {/* ═══════════ HOW IT WORKS ═══════════ */}
        <section id="method" className="py-20 sm:py-32 bg-[#fafaf9]">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <div className="text-center mb-16">
              <FadeIn><p className="text-[#22c55e] text-[12px] font-semibold uppercase tracking-[0.15em] mb-5">The system</p></FadeIn>
              <TextReveal as="h2" className="text-[clamp(1.8rem,4.5vw,3.2rem)] font-bold leading-[1.1] tracking-[-0.02em]">
                1 shoot. 37 pieces. 10 channels. Every week.
              </TextReveal>
              <FadeIn delay={0.3}><p className="text-[#737373] text-base sm:text-lg mt-5 max-w-xl mx-auto">Not a social media page manager. A content distribution machine.</p></FadeIn>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { step: '01', title: 'Discover', desc: 'Business deep-dive. Competitor audit. Audience mapped. Calendar built.', icon: BarChart3 },
                { step: '02', title: 'Build', desc: '10+ channels set up. Strategy deployed. First content live in 14 days.', icon: Zap },
                { step: '03', title: 'Scale', desc: '150+ pieces monthly. Each engineered for reach and conversion.', icon: TrendingUp },
                { step: '04', title: 'Optimize', desc: 'Weekly reports. Kill what fails. Double what works.', icon: Users },
              ].map((item, i) => (
                <FadeIn key={i} delay={0.1 * i}>
                  <div className="group bg-white hover:bg-[#f5f5f4] rounded-2xl p-6 sm:p-8 border border-black/[0.04] hover:border-[#22c55e]/20 transition-all duration-300 h-full">
                    <div className="w-10 h-10 bg-[#fafaf9] rounded-xl border border-black/[0.06] flex items-center justify-center mb-5 group-hover:border-[#22c55e]/30 transition-colors">
                      <item.icon size={18} className="text-[#22c55e]" />
                    </div>
                    <div className="text-[11px] text-[#a3a3a3] font-semibold uppercase tracking-wider mb-2">Step {item.step}</div>
                    <h3 className="font-bold text-lg tracking-tight mb-2">{item.title}</h3>
                    <p className="text-[#737373] text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ COMPARISON ═══════════ */}
        <section className="py-20 sm:py-32 bg-white">
          <div className="max-w-4xl mx-auto px-5 sm:px-8">
            <div className="text-center mb-12">
              <FadeIn><p className="text-[#22c55e] text-[12px] font-semibold uppercase tracking-[0.15em] mb-5">Why us</p></FadeIn>
              <TextReveal as="h2" className="text-[clamp(1.4rem,3.5vw,2.2rem)] font-bold leading-[1.2] tracking-[-0.02em]">
                Other agencies manage pages. We build growth engines.
              </TextReveal>
            </div>

            <FadeIn>
              <div className="bg-[#fafaf9] rounded-2xl border border-black/[0.04] overflow-hidden">
                <table className="w-full text-left">
                  <thead><tr className="border-b border-black/[0.04]">
                    <th className="p-4 sm:p-5 text-[13px] font-semibold text-[#737373]">What you get</th>
                    <th className="p-4 sm:p-5 text-[13px] font-semibold text-[#a3a3a3] text-center">Others</th>
                    <th className="p-4 sm:p-5 text-[13px] font-semibold text-[#22c55e] text-center">2XG</th>
                  </tr></thead>
                  <tbody className="text-sm">
                    {[
                      ['Channels', '1-2', '10+'],
                      ['Content/month', '8-10', '150+'],
                      ['Own proof', 'No', '₹13.4 Cr case study'],
                      ['Tools', 'Extra cost', '7 tools included'],
                      ['Risk', '6-month lock-in', '30-day pilot, refund guarantee'],
                    ].map(([f, o, t], i) => (
                      <tr key={i} className="border-b border-black/[0.03] last:border-0">
                        <td className="p-4 sm:p-5 font-medium">{f}</td>
                        <td className="p-4 sm:p-5 text-center text-[#a3a3a3]">{o}</td>
                        <td className="p-4 sm:p-5 text-center font-semibold">{t}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ═══════════ PRICING ═══════════ */}
        <section id="pricing" className="py-20 sm:py-32 bg-[#fafaf9]">
          <div className="max-w-xl mx-auto px-5 sm:px-8">
            <div className="text-center mb-10">
              <FadeIn><p className="text-[#22c55e] text-[12px] font-semibold uppercase tracking-[0.15em] mb-5">Start risk-free</p></FadeIn>
              <TextReveal as="h2" className="text-[clamp(1.8rem,4.5vw,3rem)] font-bold leading-[1.1] tracking-[-0.02em]">₹9,999 for 30 days.</TextReveal>
              <FadeIn delay={0.2}><p className="text-[#22c55e] text-lg font-semibold mt-2">Full refund if nothing moves.</p></FadeIn>
            </div>

            <FadeIn>
              <div className="relative bg-white rounded-3xl border-2 border-[#22c55e]/20 hover:border-[#22c55e]/40 transition-colors p-8 sm:p-10 shadow-[0_0_0_1px_rgba(0,0,0,0.02),0_4px_24px_rgba(0,0,0,0.04)]">
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2"><span className="px-5 py-1.5 bg-[#0a0a0a] text-white text-[11px] font-semibold rounded-full whitespace-nowrap">Limited to 10 partners</span></div>

                <div className="text-center mb-8 mt-2">
                  <div className="text-5xl sm:text-6xl font-bold tracking-tight">₹9,999</div>
                  <div className="text-[#737373] text-sm mt-1">One-time. 30 days. No contract.</div>
                </div>

                <div className="space-y-3 mb-8">
                  {['30 pieces of content — 1 per day', 'Full competitor + digital audit', 'Audience mapping — 3 segments', 'Content calendar — full month', 'Weekly performance reports', '7 software tools included'].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 text-[14px]">
                      <Check size={15} className="text-[#22c55e] mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-[#f0fdf4] rounded-xl p-5 border border-[#22c55e]/10 mb-8">
                  <div className="flex items-start gap-3">
                    <Shield size={18} className="text-[#22c55e] mt-0.5 shrink-0" />
                    <div>
                      <div className="font-semibold text-sm">The 2XG Guarantee</div>
                      <p className="text-[12px] text-[#737373] mt-0.5">No growth in 30 days? 100% refund. No questions.</p>
                    </div>
                  </div>
                </div>

                <MagneticButton href="https://wa.me/919916516507?text=Hi%2C%20I%20want%20to%20start%20the%20Rs%209999%20pilot" className="block w-full text-center px-8 py-4 bg-[#0a0a0a] hover:bg-[#1a1a1a] text-white font-semibold rounded-xl transition-all shadow-lg hover:shadow-xl">
                  Start My 30-Day Pilot
                </MagneticButton>
                <p className="text-center text-[12px] text-[#a3a3a3] mt-3">WhatsApp us. Response within 2 hours.</p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ═══════════ FAQ ═══════════ */}
        <section className="py-20 sm:py-28 bg-white">
          <div className="max-w-2xl mx-auto px-5 sm:px-8">
            <div className="text-center mb-12">
              <TextReveal as="h2" className="text-[clamp(1.4rem,3.5vw,2rem)] font-bold tracking-[-0.02em]">Before you ask</TextReveal>
            </div>
            <div className="space-y-3">
              {[
                { q: '"We tried social media. Didn\'t work."', a: 'You posted without a system. 8 posts a month on one page isn\'t a strategy. 150 pieces across 10 data-driven channels — that\'s a strategy.' },
                { q: '"₹9,999 sounds too cheap."', a: 'The pilot removes your risk. Full retainer is ₹1.5-2.5L/month. The pilot proves we\'re worth it first.' },
                { q: '"How are you different from a freelancer?"', a: 'A freelancer manages your page. We build a machine: 10+ channels, 150+ pieces/month, 7 tools, and live proof from our own ₹13.4 Cr store.' },
                { q: '"What industries?"', a: 'Offline businesses doing ₹30L+/month — retail, fitness, automotive, restaurants, healthcare. Great product but invisible online? That\'s us.' },
              ].map((item, i) => (
                <FadeIn key={i} delay={0.05 * i}>
                  <details className="group bg-[#fafaf9] rounded-xl border border-black/[0.04]">
                    <summary className="flex items-center justify-between cursor-pointer p-5 font-semibold text-[14px] hover:bg-[#f5f5f4] transition-colors rounded-xl">
                      {item.q}
                      <ChevronDown size={15} className="text-[#a3a3a3] transition-transform group-open:rotate-180 shrink-0 ml-4" />
                    </summary>
                    <div className="px-5 pb-5 text-[#737373] text-[13px] leading-relaxed">{item.a}</div>
                  </details>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ FINAL CTA ═══════════ */}
        <section className="relative py-20 sm:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <img src="/images/bch/store-night.webp" alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-[#0a0a0a]/85 backdrop-blur-sm" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 text-center">
            <TextReveal as="h2" className="text-[clamp(1.8rem,4.5vw,3.2rem)] font-bold leading-[1.1] tracking-[-0.02em] text-white">
              See what your competitor is doing online — free.
            </TextReveal>
            <FadeIn delay={0.3}>
              <p className="text-white/50 text-base sm:text-lg max-w-2xl mx-auto mt-6 mb-10">
                20 minutes. We show you their channels, their content, and what it's costing you. No obligation.
              </p>
            </FadeIn>
            <FadeIn delay={0.5}>
              <MagneticButton href="https://wa.me/919916516507?text=Hi%2C%20I%20want%20a%20free%20competitor%20audit" className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#22c55e] hover:bg-[#16a34a] text-white font-semibold text-lg rounded-xl transition-all shadow-[0_0_40px_rgba(34,197,94,0.3)]">
                <MessageCircle size={22} /> WhatsApp Us — Free Audit
              </MagneticButton>
            </FadeIn>
            <FadeIn delay={0.6}>
              <p className="text-white/30 text-[13px] mt-6">+91 99165 16507 — Response within 2 hours</p>
            </FadeIn>
          </div>
        </section>

        {/* ═══════════ FOOTER ═══════════ */}
        <footer className="py-8 bg-[#0a0a0a] border-t border-white/[0.04]">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] text-[#525252]">
            <div className="flex items-center gap-2"><div className="w-5 h-5 bg-[#22c55e] rounded flex items-center justify-center"><span className="text-white font-bold text-[8px]">2XG</span></div><span>Content that doubles revenue</span></div>
            <div className="flex items-center gap-5"><a href="/privacy" className="hover:text-[#a3a3a3]">Privacy</a><a href="/terms" className="hover:text-[#a3a3a3]">Terms</a><span>Bengaluru</span></div>
          </div>
        </footer>

        {/* ═══════════ FLOATING WHATSAPP ═══════════ */}
        <a href="https://wa.me/919916516507" target="_blank" rel="noopener noreferrer" className="fixed bottom-5 right-5 z-50 w-14 h-14 bg-[#25d366] hover:bg-[#20bd5a] rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.4)] transition-all">
          <MessageCircle size={26} className="text-white" fill="white" />
        </a>

      </main>
    </SmoothScroll>
  );
}
