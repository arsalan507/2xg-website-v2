import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
// import StatsBar from '@/components/StatsBar'; // OLD VERSION - Replaced with interactive slider
import StatsSlider from '@/components/StatsSlider'; // NEW GRIFLAN-STYLE INTERACTIVE VERSION
// import CaseStudies from '@/components/CaseStudies'; // OLD VERSION - Hidden for review
// import CaseStudiesEnhanced from '@/components/CaseStudiesEnhanced'; // Moved to Success Stories page only
import YouTubeSuccessSlider from '@/components/YouTubeSuccessSlider'; // NEW YOUTUBE SUCCESS STORY SLIDER
import Services from '@/components/Services';
import CTASection from '@/components/CTASection';
// import Contact from '@/components/Contact'; // Moved to dedicated /contact page
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <StatsSlider />
      <YouTubeSuccessSlider />
      <Services />
      <CTASection />
      <Footer />
    </main>
  );
}
