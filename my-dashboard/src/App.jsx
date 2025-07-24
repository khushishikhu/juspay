import React from "react";
import Sidebar from "./components/Sidebar";
import RightPanel from "./components/RightPanel";
import BarChartCard from "./components/Barchartcard";
import RevenueByLocation from "./components/RevenuebyLocation";
import StatCards from "./components/StatsCard";
import LineChartCard from "./components/Linechat";
import ProductsTable from "./components/ProductTables";
import Header from "./components/Header";
import ProjectionsBarChart from "./components/ProjectionBarchart";

export default function App() {
  return (
    <div className="flex h-screen w-screen overflow-hidden">
      {/* Sidebar */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* Main content and right panel in one row */}
      <div className="flex flex-1 overflow-hidden">
        {/* Main content */}
        <div className="flex-1 flex flex-col dark:bg-gray-900 overflow-y-auto">
          <Header />
          <main className="flex-1 px-6 py-6 space-y-6">
            {/* Stat Cards + Projections */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="md:col-span-2">
                <StatCards />
              </div>
              <div>
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
          </main>
        </div>

        {/* Right Panel */}
        <div className="hidden xl:block w-72 shrink-0 border-l border-gray-700">
          <RightPanel />
        </div>
      </div>
    </div>
  );
}
