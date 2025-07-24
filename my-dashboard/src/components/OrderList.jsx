import React from "react";
import { Search, CalendarDays } from "lucide-react";

const orders = [
  {
    id: "#CM9801",
    user: "Natali Craig",
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    date: "Just now",
    status: "In Progress",
    statusColor: "text-blue-500",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  // Add rest of the data similarly...
];

export default function OrdersPage() {
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Order List</h2>

      <div className="bg-white dark:bg-gray-900 rounded-xl shadow border border-gray-200 dark:border-gray-700">
        {/* Header Controls */}
        <div className="flex items-center justify-between p-4 border-b dark:border-gray-700">
          <div className="flex items-center gap-2">
            <button className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800">+</button>
            <button className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800">⇅</button>
          </div>
          <div className="relative">
            <Search className="absolute left-2 top-2.5 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="pl-8 pr-4 py-1.5 rounded bg-gray-100 dark:bg-gray-800 text-sm"
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400 uppercase tracking-wide text-xs">
              <tr>
                <th className="p-4">Order ID</th>
                <th className="p-4">User</th>
                <th className="p-4">Project</th>
                <th className="p-4">Address</th>
                <th className="p-4">Date</th>
                <th className="p-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-b dark:border-gray-700">
                  <td className="p-4 font-medium text-gray-900 dark:text-white">{order.id}</td>
                  <td className="p-4 flex items-center gap-2">
                    <img
                      src={order.avatar}
                      alt={order.user}
                      className="w-6 h-6 rounded-full"
                    />
                    <span className="text-gray-800 dark:text-white">{order.user}</span>
                  </td>
                  <td className="p-4 text-gray-700 dark:text-gray-300">{order.project}</td>
                  <td className="p-4 text-gray-700 dark:text-gray-300">{order.address}</td>
                  <td className="p-4 flex items-center gap-1 text-gray-700 dark:text-gray-300">
                    <CalendarDays className="w-4 h-4" />
                    {order.date}
                  </td>
                  <td className="p-4">
                    <span className={`font-medium ${order.statusColor}`}>
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center p-4 gap-2 text-sm">
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              key={n}
              className={`w-8 h-8 rounded-full ${
                n === 1 ? "bg-black text-white" : "text-gray-500"
              }`}
            >
              {n}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
