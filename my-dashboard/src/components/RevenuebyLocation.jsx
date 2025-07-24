// components/RevenueByLocation.jsx
import React from "react";

const locations = [
  { city: "New York", revenue: 72000 },
  { city: "San Francisco", revenue: 39000 },
  { city: "Sydney", revenue: 25000 },
  { city: "Singapore", revenue: 61000 },
];

const maxRevenue = Math.max(...locations.map((l) => l.revenue));

export default function RevenueByLocation() {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow w-full">
      <h3 className="text-xl font-semibold mb-4 dark:text-white">Revenue by Location</h3>
      <img
        src="/world-map-light.png"
        alt="Map"
        className="w-full h-32 object-contain mb-4"
      />
      <ul className="space-y-4">
        {locations.map((loc) => (
          <li key={loc.city}>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-700 dark:text-gray-300">{loc.city}</span>
              <span className="font-semibold text-gray-800 dark:text-gray-100">
                {Math.round(loc.revenue / 1000)}K
              </span>
            </div>
            <div className="w-full bg-blue-100 h-2 rounded">
              <div
                className="bg-blue-400 h-2 rounded"
                style={{ width: `${(loc.revenue / maxRevenue) * 100}%` }}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
