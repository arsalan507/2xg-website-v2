import NavigationRebrand from '@/components/rebrand/NavigationRebrand';
import FooterRebrand from '@/components/rebrand/FooterRebrand';
import CatalogHero from '@/components/BCHCatalog/CatalogHero';
import ProductGrid from '@/components/BCHCatalog/ProductGrid';
import CatalogFeatures from '@/components/BCHCatalog/CatalogFeatures';
import { ProductsProvider } from '@/contexts/ProductsContext';

export const metadata = {
  title: "BCH Catalog - Smart Product Catalog | 2XG",
  description: "Create beautiful product catalogs, share on Instagram, manage B2B and B2C orders - all in one place.",
};

export default function CatalogPage() {
  return (
    <ProductsProvider>
      <main className="min-h-screen bg-[#F6F7F5]">
        <NavigationRebrand />
        <CatalogHero tenantName="BCH" tenantLogo="/2xg-logo.gif" />
        <ProductGrid />
        <CatalogFeatures />
        <FooterRebrand />
      </main>
    </ProductsProvider>
  );
}
