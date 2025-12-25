import NavigationRebrand from '@/components/rebrand/NavigationRebrand';
import ServicesHero from '@/components/rebrand/ServicesHero';
import AllVerticals from '@/components/rebrand/AllVerticals';
import ServicesCTA from '@/components/rebrand/ServicesCTA';
import FooterRebrand from '@/components/rebrand/FooterRebrand';

export const metadata = {
  title: "Our Services - 2XG | Complete Growth Solutions",
  description: "From content to customers, we handle everything. Content marketing, performance marketing, influencer marketing, and business development.",
  keywords: ["content marketing services", "performance marketing", "influencer marketing", "business development", "2XG services"],
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#F6F7F5]">
      <NavigationRebrand />
      <ServicesHero />
      <AllVerticals />
      <ServicesCTA />
      <FooterRebrand />
    </main>
  );
}
