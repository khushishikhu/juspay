import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

// Layout Components
import Sidebar from "./components/Sidebar";
import RightPanel from "./components/RightPanel";
import Header from "./components/Header";

// Dashboard Widgets
import BarChartCard from "./components/Barchartcard";
import RevenueByLocation from "./components/RevenuebyLocation";
import StatCards from "./components/StatsCard";
import LineChartCard from "./components/Linechat";
import ProductsTable from "./components/ProductTables";
import ProjectionsBarChart from "./components/ProjectionBarchart";
import OrdersPage from "./components/OrderList";

function MainLayout() {
  const location = useLocation();
  const isOrdersPage = location.pathname === "/orders";

  return (
    <div className="flex h-screen w-screen overflow-hidden">
      {/* Sidebar */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* Main content and right panel */}
      <div className="flex flex-1 overflow-hidden">
        <div className="flex-1 flex flex-col dark:bg-gray-900 overflow-y-auto">
          <Header />
          
          <main className="flex-1 px-6 py-6 space-y-6">
<h4 className="text-xl font-bold">eCommerce</h4>
            <Routes>
              {/* Dashboard Route */}
              <Route
                path="/"
                element={
                  <>
                    {/* Stat Cards + Projections */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6 items-stretch">
                      <div className="md:col-span-2">
                        <StatCards />
                      </div>
                      <div className="md:col-span-2">
                        <ProjectionsBarChart />
                      </div>
                    </div>

                    {/* BarChart + Revenue */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      <BarChartCard />
                      <RevenueByLocation />
                    </div>

                    {/* Products + Line Chart */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <ProductsTable />
                      <LineChartCard />
                    </div>
                  </>
                }
              />

              {/* Orders List Route */}
              <Route path="/orders" element={<OrdersPage />} />
            </Routes>
          </main>
        </div>

        {/* Right Panel (hide on /orders) */}
        {!isOrdersPage && (
          <div className="hidden xl:block w-72 shrink-0 border-l border-gray-700">
            <RightPanel />
          </div>
        )}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
}
