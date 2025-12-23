import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import StatsBar from '@/components/StatsBar';
import CaseStudies from '@/components/CaseStudies';
import Services from '@/components/Services';
import CTASection from '@/components/CTASection';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <StatsBar />
      <CaseStudies />
      <Services />
      <CTASection />
      <Contact />
      <Footer />
    </main>
  );
}
