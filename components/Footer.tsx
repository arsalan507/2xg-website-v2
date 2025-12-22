'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-[#0052FF]/10 via-graphite-dark to-graphite-dark border-t-2 border-neon-green/30 overflow-hidden">
      {/* Accent Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#8CE63A]/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#0052FF]/5 to-transparent rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Column */}
          <div>
            <motion.div
              className="flex items-center space-x-2 mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-3xl font-montserrat font-black">
                <span className="text-neon-green">2X</span>
                <span className="text-deep-blue">G</span>
              </span>
            </motion.div>
            <p className="text-off-white/70 font-inter text-sm mb-4">
              Content That Doubles Growth
            </p>
            <p className="text-off-white/60 font-inter text-sm">
              Building systems for mobility & retail brands. From 25M+ views to predictable sales.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-off-white font-montserrat font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Case Studies', 'Services', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-off-white/70 hover:text-neon-green transition-colors duration-300 font-inter text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-off-white font-montserrat font-bold mb-4">Get In Touch</h3>
            <ul className="space-y-3">
              <li className="text-off-white/70 font-inter text-sm">
                <a href="mailto:contact@2xg.in" className="hover:text-neon-green transition-colors">
                  contact@2xg.in
                </a>
              </li>
              <li className="text-off-white/70 font-inter text-sm">
                <a href="https://2xg.in" className="hover:text-neon-green transition-colors">
                  2xg.in
                </a>
              </li>
              <li className="text-off-white/70 font-inter text-sm">
                Bengaluru, India
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t-2 border-[#0052FF]/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-off-white/60 font-inter text-sm text-center md:text-left">
            © {currentYear} 2XG. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <motion.a
              href="#"
              className="text-off-white/60 hover:text-neon-green transition-colors text-sm font-inter"
              whileHover={{ y: -2 }}
            >
              Privacy Policy
            </motion.a>
            <span className="text-off-white/30">•</span>
            <motion.a
              href="#"
              className="text-off-white/60 hover:text-neon-green transition-colors text-sm font-inter"
              whileHover={{ y: -2 }}
            >
              Terms of Service
            </motion.a>
          </div>
        </div>
      </div>

      {/* Gradient Line at Bottom */}
      <div className="h-2 bg-gradient-to-r from-[#0052FF] via-[#8CE63A] to-[#FF6A1A]" />
    </footer>
  );
}
