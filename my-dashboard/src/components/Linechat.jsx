// components/LineChartCard.jsx
import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Mon", uv: 100 },
  { name: "Tue", uv: 200 },
  { name: "Wed", uv: 150 },
  { name: "Thu", uv: 300 },
  { name: "Fri", uv: 250 },
  { name: "Sat", uv: 400 },
  { name: "Sun", uv: 350 },
];

export default function LineChartCard() {
  return (
    <div className="bg-white p-4 rounded-xl shadow dark:bg-gray-800">
      <h3 className="text-lg font-semibold mb-4 dark:text-gray-100">Users</h3>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="uv" stroke="#4F46E5" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
