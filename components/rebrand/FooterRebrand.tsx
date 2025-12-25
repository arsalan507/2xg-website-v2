'use client';

export default function FooterRebrand() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#ECEDEB] border-t border-[#D6D8D4] py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl font-bold tracking-tight">
                <span className="text-[#2F7D63]">2X</span>
                <span className="text-[#1F1F1F]">G</span>
              </span>
            </div>
            <p className="text-[#5E5E5E] text-sm leading-relaxed">
              India's content-first growth agency for mobility & retail brands.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[#1F1F1F] font-semibold mb-4 text-sm uppercase tracking-wider">Services</h3>
            <ul className="space-y-3">
              <li><a href="/services" className="text-[#5E5E5E] hover:text-[#2F7D63] transition-colors text-sm">Content Systems</a></li>
              <li><a href="/services" className="text-[#5E5E5E] hover:text-[#2F7D63] transition-colors text-sm">Performance Amplification</a></li>
              <li><a href="/services" className="text-[#5E5E5E] hover:text-[#2F7D63] transition-colors text-sm">Funnel Optimization</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-[#1F1F1F] font-semibold mb-4 text-sm uppercase tracking-wider">Company</h3>
            <ul className="space-y-3">
              <li><a href="/about" className="text-[#5E5E5E] hover:text-[#2F7D63] transition-colors text-sm">About Us</a></li>
              <li><a href="/pricing" className="text-[#5E5E5E] hover:text-[#2F7D63] transition-colors text-sm">Pricing</a></li>
              <li><a href="/success-stories" className="text-[#5E5E5E] hover:text-[#2F7D63] transition-colors text-sm">Success Stories</a></li>
              <li><a href="/careers" className="text-[#5E5E5E] hover:text-[#2F7D63] transition-colors text-sm">Careers</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[#1F1F1F] font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h3>
            <ul className="space-y-3">
              <li><a href="mailto:contact@2xg.in" className="text-[#5E5E5E] hover:text-[#2F7D63] transition-colors text-sm">contact@2xg.in</a></li>
              <li><span className="text-[#5E5E5E] text-sm">Bengaluru, India</span></li>
              <li><a href="/contact" className="text-[#2F7D63] hover:text-[#256B54] transition-colors text-sm font-medium">Get In Touch →</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#D6D8D4] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[#5E5E5E] text-sm">
            © {currentYear} 2XG. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-[#5E5E5E] hover:text-[#2F7D63] transition-colors text-sm">Privacy</a>
            <a href="#" className="text-[#5E5E5E] hover:text-[#2F7D63] transition-colors text-sm">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
