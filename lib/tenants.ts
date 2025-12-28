// Multi-tenant configuration for BCH Catalog

export interface Tenant {
  id: string;
  name: string;
  subdomain: string;
  logo: string;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  contactEmail: string;
  contactPhone: string;
  address: string;
}

// Tenant configurations
export const tenants: Record<string, Tenant> = {
  'aoki': {
    id: 'aoki',
    name: 'AOKI',
    subdomain: 'aoki',
    logo: '/tenants/aoki/logo.png',
    primaryColor: '#6BBF59',
    secondaryColor: '#256B54',
    accentColor: '#FF6B35',
    contactEmail: 'contact@aoki.com',
    contactPhone: '+91 98765 43210',
    address: 'AOKI Store, Mumbai, India',
  },
  'emotarad': {
    id: 'emotarad',
    name: 'Emotarad',
    subdomain: 'emotarad',
    logo: '/tenants/emotarad/logo.png',
    primaryColor: '#1E40AF',
    secondaryColor: '#1E3A8A',
    accentColor: '#F59E0B',
    contactEmail: 'contact@emotarad.com',
    contactPhone: '+91 87654 32109',
    address: 'Emotarad Store, Delhi, India',
  },
  'hero': {
    id: 'hero',
    name: 'HERO',
    subdomain: 'hero',
    logo: '/tenants/hero/logo.png',
    primaryColor: '#DC2626',
    secondaryColor: '#B91C1C',
    accentColor: '#FBBF24',
    contactEmail: 'contact@hero.com',
    contactPhone: '+91 76543 21098',
    address: 'HERO Store, Bangalore, India',
  },
  // Add more tenants as needed
};

// Get tenant from subdomain
export function getTenantFromSubdomain(hostname: string): Tenant | null {
  // For local development
  if (hostname === 'localhost:3000' || hostname === 'localhost') {
    return tenants['aoki']; // Default tenant for local dev
  }

  // Extract subdomain from hostname
  // Example: aoki.catalog.2xg.in -> aoki
  const parts = hostname.split('.');

  if (parts.length >= 3) {
    const subdomain = parts[0];
    return tenants[subdomain] || null;
  }

  return null;
}

// Get tenant from URL parameter (fallback for testing)
export function getTenantFromParam(tenantId: string): Tenant | null {
  return tenants[tenantId] || null;
}

// Check if user has access to tenant dashboard
export function checkTenantAccess(tenantId: string, userEmail: string): boolean {
  // TODO: Implement proper authentication
  // For now, return true - you'll add proper auth later
  return true;
}
