// components/RevenueChart.jsx
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { name: "Jan", current: 12, previous: 5 },
  { name: "Feb", current: 9, previous: 15 },
  { name: "Mar", current: 10, previous: 18 },
  { name: "Apr", current: 15, previous: 14 },
  { name: "May", current: 20, previous: 19 },
  { name: "Jun", current: 21, previous: 25 },
];

export default function RevenueChart() {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow col-span-2">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold dark:text-white">Revenue</h3>
        <div className="flex gap-4 text-sm text-gray-600 dark:text-gray-300">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-black" />
            Current Week <span className="font-semibold ml-1">$58,211</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-blue-300" />
            Previous Week <span className="font-semibold ml-1">$68,768</span>
          </div>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={220}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" />
          <YAxis tickFormatter={(v) => `${v}M`} />
          <Tooltip formatter={(value) => `${value}M`} />
          <Line
            type="monotone"
            dataKey="current"
            stroke="#000"
            strokeWidth={3}
            dot={false}
            activeDot={{ r: 6 }}
          />
          <Line
            type="monotone"
            dataKey="previous"
            stroke="#93c5fd"
            strokeWidth={3}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
