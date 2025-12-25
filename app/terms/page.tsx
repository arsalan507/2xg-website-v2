import NavigationRebrand from '@/components/rebrand/NavigationRebrand';
import FooterRebrand from '@/components/rebrand/FooterRebrand';
import TermsRebrand from '@/components/rebrand/TermsRebrand';

export const metadata = {
  title: "Terms of Service - 2XG | Legal Terms & Conditions",
  description: "Read 2XG's terms of service to understand the rules and regulations governing the use of our website and services.",
  keywords: ["terms of service", "legal terms", "2XG terms", "terms and conditions"],
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#F6F7F5]">
      <NavigationRebrand />
      <TermsRebrand />
      <FooterRebrand />
    </main>
  );
}
