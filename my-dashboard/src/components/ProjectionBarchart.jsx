// components/ProjectionsBarChart.jsx
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", actual: 18, projected: 22 },
  { name: "Feb", actual: 20, projected: 25 },
  { name: "Mar", actual: 18, projected: 21 },
  { name: "Apr", actual: 22, projected: 28 },
  { name: "May", actual: 15, projected: 19 },
  { name: "Jun", actual: 20, projected: 25 },
];

export default function ProjectionsBarChart() {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 rounded-xl">
  <h3 className="text-xl font-semibold mb-4 dark:text-white">
    Projections vs Actuals
  </h3>
  <ResponsiveContainer width="100%" height={220}>
    <BarChart data={data}>
      <XAxis dataKey="name" />
      <YAxis tickFormatter={(v) => `${v}M`} />
      <Tooltip formatter={(v) => `${v}M`} />
      
      {/* Bottom part of the stack — flat corners */}
      <Bar
        dataKey="actual"
        stackId="a"
        fill="#93c5fd"
        barSize={26}
        radius={0}
      />
      
      {/* Top part of the stack — rounded top corners only */}
      <Bar
        dataKey="projected"
        stackId="a"
        fill="#dbeafe"
        barSize={26}
        radius={[10, 10, 0, 0]}
      />
    </BarChart>
  </ResponsiveContainer>
</div>



  );
}
