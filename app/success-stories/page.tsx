import SuccessStoriesHero from '@/components/success/SuccessStoriesHero';
import MetricsShowcase from '@/components/success/MetricsShowcase';
import PortfolioGallery from '@/components/success/PortfolioGallery';
import YouTubeSuccessSlider from '@/components/YouTubeSuccessSlider';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata = {
  title: "Success Stories - 2XG | Proven Results for BCH",
  description: "See how 2XG built Bharath Cycle Hub into India's largest organic bicycle audience with 25M+ monthly views and 2M+ followers.",
  keywords: ["success stories", "case studies", "BCH", "Bharath Cycle Hub", "content marketing results", "social media growth"],
};

export default function SuccessStoriesPage() {
  return (
    <main className="min-h-screen bg-graphite-dark">
      <Navigation />
      <SuccessStoriesHero />
      <MetricsShowcase />
      <YouTubeSuccessSlider />
      <PortfolioGallery />
      <Footer />
    </main>
  );
}
