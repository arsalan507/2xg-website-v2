import DashboardLayout from '@/components/BCHCatalog/Dashboard/DashboardLayout';
import OrdersManager from '@/components/BCHCatalog/Dashboard/OrdersManager';

export const metadata = {
  title: "Orders - BCH Catalog Dashboard | 2XG",
  description: "Manage customer orders and track order status",
};

export default function OrdersPage() {
  return (
    <DashboardLayout>
      <OrdersManager />
    </DashboardLayout>
  );
}
