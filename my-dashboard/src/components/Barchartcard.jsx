// components/BarChartCard.jsx
import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Mon", uv: 300 },
  { name: "Tue", uv: 450 },
  { name: "Wed", uv: 200 },
  { name: "Thu", uv: 278 },
  { name: "Fri", uv: 189 },
  { name: "Sat", uv: 239 },
  { name: "Sun", uv: 349 },
];

export default function BarChartCard() {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow col-span-2">
      <h3 className="text-lg font-semibold mb-4 dark:text-gray-100">Revenue</h3>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="uv" fill="#4F46E5" radius={[5, 5, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
