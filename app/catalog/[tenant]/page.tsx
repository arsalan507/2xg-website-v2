import { getTenantFromParam } from '@/lib/tenants';
import NavigationRebrand from '@/components/rebrand/NavigationRebrand';
import FooterRebrand from '@/components/rebrand/FooterRebrand';
import CatalogHero from '@/components/BCHCatalog/CatalogHero';
import ProductGrid from '@/components/BCHCatalog/ProductGrid';
import CatalogFeatures from '@/components/BCHCatalog/CatalogFeatures';
import { ProductsProvider } from '@/contexts/ProductsContext';

export async function generateMetadata({ params }: { params: Promise<{ tenant: string }> }) {
  const { tenant: tenantId } = await params;
  const tenant = getTenantFromParam(tenantId);

  return {
    title: `${tenant?.name || 'BCH'} Catalog - Smart Product Catalog | 2XG`,
    description: `Browse ${tenant?.name || 'our'} products - Share on Instagram, WhatsApp, and manage your orders`,
  };
}

export default async function TenantCatalogPage({ params }: { params: Promise<{ tenant: string }> }) {
  const { tenant: tenantId } = await params;
  const tenant = getTenantFromParam(tenantId);

  if (!tenant) {
    return (
      <main className="min-h-screen bg-[#F6F7F5] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#1F1F1F] mb-4">Tenant Not Found</h1>
          <p className="text-[#5E5E5E]">The catalog you're looking for doesn't exist.</p>
        </div>
      </main>
    );
  }

  return (
    <ProductsProvider tenantId={tenant.id}>
      <main className="min-h-screen bg-[#F6F7F5]">
        <NavigationRebrand />
        <CatalogHero tenantName={tenant.name} tenantLogo={tenant.logo} />
        <ProductGrid />
        <CatalogFeatures />
        <FooterRebrand />
      </main>
    </ProductsProvider>
  );
}
