import DashboardLayout from '@/components/BCHCatalog/Dashboard/DashboardLayout';
import CustomersManager from '@/components/BCHCatalog/Dashboard/CustomersManager';

export const metadata = {
  title: "Customers - BCH Catalog Dashboard | 2XG",
  description: "Manage customer data and view customer insights",
};

export default function CustomersPage() {
  return (
    <DashboardLayout>
      <CustomersManager />
    </DashboardLayout>
  );
}
