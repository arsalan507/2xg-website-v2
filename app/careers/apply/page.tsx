import NavigationRebrand from '@/components/rebrand/NavigationRebrand';
import FooterRebrand from '@/components/rebrand/FooterRebrand';
import CareersApplicationRebrand from '@/components/rebrand/CareersApplicationRebrand';

export const metadata = {
  title: "Apply Now - 2XG Careers | Join Our Team",
  description: "Apply for a position at 2XG. Submit your application and join India's content-first growth agency.",
  keywords: ["apply", "job application", "2XG careers", "join 2XG", "submit resume"],
};

export default function CareersApplicationPage() {
  return (
    <main className="min-h-screen bg-[#F6F7F5]">
      <NavigationRebrand />
      <CareersApplicationRebrand />
      <FooterRebrand />
    </main>
  );
}
