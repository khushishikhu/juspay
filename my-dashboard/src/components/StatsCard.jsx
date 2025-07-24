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
    <div className="grid grid-cols-4 gap-4 mb-6">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="bg-white p-4 rounded-xl shadow"
        >
          <p className="text-gray-500">{stat.label}</p>
          <h2 className="text-2xl font-bold">{stat.value}</h2>
        </div>
      ))}
    </div>
  );
}
