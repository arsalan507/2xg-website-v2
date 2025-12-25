import NavigationRebrand from '@/components/rebrand/NavigationRebrand';
import FooterRebrand from '@/components/rebrand/FooterRebrand';
import AboutRebrand from '@/components/rebrand/AboutRebrand';

export const metadata = {
  title: "About Us - 2XG | India's Content-First Growth Agency",
  description: "Learn about 2XG and how we build content systems that turn views into customers for India's leading brands.",
  keywords: ["about 2XG", "content agency", "growth marketing", "team"],
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#F6F7F5]">
      <NavigationRebrand />
      <AboutRebrand />
      <FooterRebrand />
    </main>
  );
}
