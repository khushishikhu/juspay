// components/RevenueByLocation.jsx
import React from "react";

export default function RevenueByLocation() {
  const locations = [
    { city: "Delhi", revenue: "$300" },
    { city: "Mumbai", revenue: "$200" },
    { city: "Bangalore", revenue: "$150" },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow">
      <h3 className="text-lg font-semibold mb-4 dark:text-gray-400">Revenue by Location</h3>
      <ul>
        {locations.map((loc) => (
          <li key={loc.city} className="flex justify-between py-2 border-t dark:text-gray-400">
            <span>{loc.city}</span>
            <span>{loc.revenue}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
