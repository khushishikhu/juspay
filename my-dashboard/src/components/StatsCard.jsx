// components/StatCards.jsx
import React from "react";

export default function StatCards() {
  const stats = [
    { label: "Customers", value: "3,781" },
    { label: "Orders", value: "1,219" },
    { label: "Revenue", value: "$695" },
    { label: "Growth", value: "30.1%" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="bg-whitedark:bg-gray-800 p-6 rounded-xl shadow-md"
        >
          <p className=" text-gray-500 dark:text-gray-400 text-sm">{stat.label}</p>
          <h2 className=" text-2xl font-bold text-gray-800 dark:text-white">{stat.value}</h2>
        </div>
      ))}
    </div>
  );
}
