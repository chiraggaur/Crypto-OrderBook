import OrderBook from "@/components/OrderBook";
import MainLayout from "@/layouts/MainLayout";
export default function Home() {
  return (
    <MainLayout>
      <div className="min-h-screen bg-gray-800 flex flex-col items-center justify-center p-4">
        <OrderBook />
      </div>
    </MainLayout>
  );
}
