// components/StatCards.jsx
import React from "react";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

const stats = [
  {
    label: "Customers",
    value: "3,781",
    change: "+11.01%",
    positive: true,
    bg: "bg-blue-100",
  },
  {
    label: "Orders",
    value: "1,219",
    change: "-0.03%",
    positive: false,
    bg: "bg-gray-100",
  },
  {
    label: "Revenue",
    value: "$695",
    change: "+15.03%",
    positive: true,
    bg: "bg-gray-100",
  },
  {
    label: "Growth",
    value: "30.1%",
    change: "+6.08%",
    positive: true,
    bg: "bg-blue-100",
  },
];

export default function StatCards() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className={`p-6 rounded-2xl ${stat.bg} flex flex-col justify-between`}
        >
          <p className="text-sm text-gray-600 font-medium">{stat.label}</p>
          <div className="flex items-end justify-between">
            <h2 className="text-3xl font-semibold text-gray-900">{stat.value}</h2>
            <div className="flex items-center gap-1 text-sm font-medium text-gray-700">
              <span className={stat.positive ? "text-green-600" : "text-red-500"}>
                {stat.change}
              </span>
              {stat.positive ? (
                <ArrowUpRight className="w-4 h-4 text-green-600" />
              ) : (
                <ArrowDownRight className="w-4 h-4 text-red-500" />
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
