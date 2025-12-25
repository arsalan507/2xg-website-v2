import NavigationRebrand from '@/components/rebrand/NavigationRebrand';
import FooterRebrand from '@/components/rebrand/FooterRebrand';
import CareersRebrand from '@/components/rebrand/CareersRebrand';

export const metadata = {
  title: "Careers - 2XG | Join India's Content-First Growth Agency",
  description: "Join 2XG and work on campaigns with 25M+ monthly views. Build content systems that turn views into customers for India's leading brands.",
  keywords: ["careers", "jobs", "content marketing jobs", "2XG careers", "remote work India"],
};

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-[#F6F7F5]">
      <NavigationRebrand />
      <CareersRebrand />
      <FooterRebrand />
    </main>
  );
}
