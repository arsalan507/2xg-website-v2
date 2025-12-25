import NavigationRebrand from '@/components/rebrand/NavigationRebrand';
import FooterRebrand from '@/components/rebrand/FooterRebrand';
import ContactRebrand from '@/components/rebrand/ContactRebrand';

export const metadata = {
  title: "Contact Us - 2XG | Let's Talk Growth",
  description: "Ready to 2X your growth? Get in touch with 2XG to build content systems that convert views into customers.",
  keywords: ["contact", "get in touch", "content marketing", "2XG", "growth strategy"],
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#F6F7F5]">
      <NavigationRebrand />
      <ContactRebrand />
      <FooterRebrand />
    </main>
  );
}
