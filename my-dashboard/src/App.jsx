// App.jsx
import React from "react";
import Sidebar from "./components/Sidebar";
import RightPanel from "./components/RightPanel";
import BarChartCard from "./components/Barchartcard";
import RevenueByLocation from "./components/RevenuebyLocation";
import StatCards from "./components/StatsCard";
import LineChartCard from "./components/Linechat";
import ProductsTable from "./components/ProductTables";
import Header from "./components/Header";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
       <div className="md:block hidden">
        <Sidebar />
      </div>
      <div className="flex-1 flex flex-col">
        <Header /> 
        <main className="flex-1 px-6 py-6 space-y-6 overflow-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCards />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <BarChartCard />
            <LineChartCard />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <ProductsTable />
            <RevenueByLocation />
          </div>
        </main>
      </div>
      <div className="hidden xl:block">
         <RightPanel/>
      </div>

    </div>
  );
}
