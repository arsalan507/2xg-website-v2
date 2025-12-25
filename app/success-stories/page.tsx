import SuccessStoriesHeroRebrand from '@/components/rebrand/success/SuccessStoriesHeroRebrand';
import MetricsShowcaseRebrand from '@/components/rebrand/success/MetricsShowcaseRebrand';
import PortfolioGallery from '@/components/success/PortfolioGallery';
import YouTubeSuccessSliderRebrand from '@/components/rebrand/YouTubeSuccessSliderRebrand';
import NavigationRebrand from '@/components/rebrand/NavigationRebrand';
import FooterRebrand from '@/components/rebrand/FooterRebrand';

export const metadata = {
  title: "Success Stories - 2XG | Proven Results for BCH",
  description: "See how 2XG built Bharath Cycle Hub into India's largest organic bicycle audience with 25M+ monthly views and 2M+ followers.",
  keywords: ["success stories", "case studies", "BCH", "Bharath Cycle Hub", "content marketing results", "social media growth"],
};

export default function SuccessStoriesPage() {
  return (
    <main className="min-h-screen bg-[#F6F7F5]">
      <NavigationRebrand />
      <SuccessStoriesHeroRebrand />
      <MetricsShowcaseRebrand />
      <YouTubeSuccessSliderRebrand />
      <PortfolioGallery />
      <FooterRebrand />
    </main>
  );
}
