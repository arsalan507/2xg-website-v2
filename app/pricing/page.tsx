import NavigationRebrand from '@/components/rebrand/NavigationRebrand';
import FooterRebrand from '@/components/rebrand/FooterRebrand';
import PricingRebrand from '@/components/rebrand/PricingRebrand';

export const metadata = {
  title: "Pricing - 2XG | Simple, Transparent Growth Plans",
  description: "Choose the perfect growth plan for your business. From market testing to category leadership, we have a plan that fits your goals.",
  keywords: ["pricing", "plans", "growth marketing", "2XG", "content marketing packages"],
};

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#F6F7F5]">
      <NavigationRebrand />
      <PricingRebrand />
      <FooterRebrand />
    </main>
  );
}
