import NavigationRebrand from '@/components/rebrand/NavigationRebrand';
import FooterRebrand from '@/components/rebrand/FooterRebrand';
import PrivacyRebrand from '@/components/rebrand/PrivacyRebrand';

export const metadata = {
  title: "Privacy Policy - 2XG | Your Privacy Matters",
  description: "Read 2XG's privacy policy to learn how we collect, use, and protect your personal information.",
  keywords: ["privacy policy", "data protection", "2XG privacy", "information security"],
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#F6F7F5]">
      <NavigationRebrand />
      <PrivacyRebrand />
      <FooterRebrand />
    </main>
  );
}
