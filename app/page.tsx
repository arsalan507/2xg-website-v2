import NavigationRebrand from '@/components/rebrand/NavigationRebrand';
import HeroRebrand from '@/components/rebrand/HeroRebrand';
import YouTubeVideoRebrand from '@/components/rebrand/YouTubeVideoRebrand';
import BusinessSelectorRebrand from '@/components/rebrand/BusinessSelectorRebrand';
import VerticalsRebrand from '@/components/rebrand/VerticalsRebrand';
import FinalCTARebrand from '@/components/rebrand/FinalCTARebrand';
import FooterRebrand from '@/components/rebrand/FooterRebrand';

// ORIGINAL VERSION BACKED UP AT: page-original.tsx
// This is the new Cloud Dancer rebrand with calm, premium aesthetic

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F6F7F5]">
      <NavigationRebrand />
      <HeroRebrand />
      <YouTubeVideoRebrand />
      <BusinessSelectorRebrand />
      <VerticalsRebrand />
      <FinalCTARebrand />
      <FooterRebrand />
    </main>
  );
}
