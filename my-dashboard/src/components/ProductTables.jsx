// components/ProductsTable.jsx
import React from "react";

export default function ProductsTable() {
  const products = [
    {
      name: "ASOS Ridley High Waist",
      price: 79.49,
      quantity: 82,
    },
    {
      name: "Marco Lightweight Shirt",
      price: 128.5,
      quantity: 37,
    },
    {
      name: "Half Sleeve Shirt",
      price: 39.99,
      quantity: 64,
    },
    {
      name: "Lightweight Jacket",
      price: 20.0,
      quantity: 184,
    },
    {
      name: "Marco Shoes",
      price: 79.49,
      quantity: 64,
    },
  ];

  const calculateAmount = (price, qty) => (price * qty).toFixed(2);

  return (
    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow col-span-2">
      <h3 className="text-xl font-semibold mb-4 dark:text-white">Top Selling Products</h3>
      <table className="w-full text-sm text-left">
        <thead>
          <tr className="text-gray-500 dark:text-gray-400 border-b">
            <th className="pb-2">Name</th>
            <th className="pb-2">Price</th>
            <th className="pb-2">Quantity</th>
            <th className="pb-2">Amount</th>
          </tr>
        </thead>
        <tbody>
          {products.map(({ name, price, quantity }) => (
            <tr key={name} className="border-b dark:border-gray-700">
              <td className="py-3 text-gray-800 dark:text-gray-100">{name}</td>
              <td className="py-3 text-gray-700 dark:text-gray-200">${price.toFixed(2)}</td>
              <td className="py-3 text-gray-700 dark:text-gray-200">{quantity}</td>
              <td className="py-3 font-semibold text-gray-900 dark:text-white">
                ${calculateAmount(price, quantity)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
