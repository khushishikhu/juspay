// components/TotalSalesDonutChart.jsx
import React from "react";
import { PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "Direct", value: 300.56, color: "#000000" },
  { name: "Affiliate", value: 135.18, color: "#A7F3D0" },
  { name: "Sponsored", value: 154.02, color: "#C7D2FE" },
  { name: "E-mail", value: 48.96, color: "#BAE6FD" },
];

export default function TotalSalesDonutChart() {
  const total = data.reduce((sum, d) => sum + d.value, 0);
  const centerPercent = ((data[0].value / total) * 100).toFixed(1); // Direct

  return (
    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow flex flex-col items-center">
      <h3 className="text-xl font-semibold mb-4 dark:text-white self-start">Total Sales</h3>
      
      <PieChart width={160} height={160}>
        <Pie
          data={data}
          innerRadius={50}
          outerRadius={70}
          paddingAngle={2}
          dataKey="value"
          stroke="none"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <text
          x={80}
          y={85}
          textAnchor="middle"
          dominantBaseline="middle"
          className="text-gray-800 dark:text-white"
          style={{ fontSize: "14px", fontWeight: "bold" }}
        >
          {centerPercent}%
        </text>
      </PieChart>

      <div className="mt-6 w-full space-y-3 text-sm">
        {data.map((entry) => (
          <div key={entry.name} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span
                className="w-2 h-2 rounded-full inline-block"
                style={{ backgroundColor: entry.color }}
              />
              <span className="text-gray-700 dark:text-gray-200">{entry.name}</span>
            </div>
            <span className="text-gray-900 font-medium dark:text-white">
              ${entry.value.toFixed(2)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
