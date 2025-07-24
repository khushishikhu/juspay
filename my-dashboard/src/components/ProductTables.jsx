// components/ProductsTable.jsx
import React from "react";

export default function ProductsTable() {
  const products = [
    { name: "Product A", price: "$99", stock: 25 },
    { name: "Product B", price: "$149", stock: 12 },
    { name: "Product C", price: "$79", stock: 30 },
  ];

  return (
    <div className="bg-white dark:bg-gray-800  p-4 rounded-xl shadow col-span-2">
      <h3 className="text-lg font-semibold mb-4 dark:text-gray-400">Top Products</h3>
      <table className="w-full text-left text-sm dark:text-gray-300">
        <thead className="text-gray-500 dark:text-gray-400">
          <tr className="border-t border-gray-200 dark:border-gray-700">
            <th className="pb-2">Product</th>
            <th className="pb-2">Price</th>
            <th className="pb-2">Stock</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.name} className="border-t">
              <td className="py-2">{product.name}</td>
              <td className="py-2">{product.price}</td>
              <td className="py-2">{product.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
