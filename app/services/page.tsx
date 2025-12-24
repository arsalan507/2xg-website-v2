import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ServicesDetailed from '@/components/ServicesDetailed';

export const metadata = {
  title: "Our Services - 2XG | Content Marketing That Converts",
  description: "We build repeatable content engines that turn objections into education, attention into WhatsApp leads, and test rides into sales.",
  keywords: ["content marketing services", "social media marketing", "performance marketing", "funnel optimization", "2XG services"],
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-graphite-dark">
      <Navigation />
      <ServicesDetailed />
      <Footer />
    </main>
  );
}
