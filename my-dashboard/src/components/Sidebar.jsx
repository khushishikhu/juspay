// components/Sidebar.jsx
import React from "react";
import {
  LayoutDashboard,
  Briefcase,
  ShoppingCart,
  BookOpen,
  UserCircle2,
  Settings,
  Newspaper,
  Users,
  Bell,
} from "lucide-react";

export default function Sidebar() {
  return (
    // Add this to Sidebar.jsx root div
<aside className="w-64 h-full bg-white shadow-md p-4 hidden md:block dark:bg-gray-800">
      <h1 className="text-xl font-bold mb-6 dark:text-gray-300">ByeWind</h1>
      <nav className="text-gray-700 text-sm space-y-6">
        <div>
          <h2 className="text-xs font-semibold text-gray-500 uppercase mb-2 dark:text-gray-300">Favorites</h2>
          <ul className="space-y-1">
            <li className="flex items-center gap-2 pl-2 py-1 hover:bg-gray-100 rounded cursor-pointer dark:text-gray-300">
              <LayoutDashboard size={16} /> Overview
            </li>
            <li className="flex items-center gap-2 pl-2 py-1 hover:bg-gray-100 rounded cursor-pointer dark:text-gray-300">
              <Briefcase size={16} /> Projects
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-semibold text-gray-500 uppercase mb-2 dark:text-gray-300">Dashboards</h2>
          <ul className="space-y-1">
            <li className="flex items-center gap-2 pl-2 py-1 bg-gray-200 rounded cursor-pointer dark:text-gray-300">
              <LayoutDashboard size={16} /> Default
            </li>
            <li className="flex items-center gap-2 pl-2 py-1 hover:bg-gray-100 rounded cursor-pointer dark:text-gray-300">
              <ShoppingCart size={16} /> eCommerce
            </li>
            <li className="flex items-center gap-2 pl-2 py-1 hover:bg-gray-100 rounded cursor-pointer dark:text-gray-300">
              <Briefcase size={16} /> Projects
            </li>
            <li className="flex items-center gap-2 pl-2 py-1 hover:bg-gray-100 rounded cursor-pointer dark:text-gray-300">
              <BookOpen size={16} /> Online Courses
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-semibold text-gray-500 uppercase mb-2 dark:text-gray-300">Pages</h2>
          <ul className="space-y-1">
            <li className="flex items-center gap-2 pl-2 py-1 hover:bg-gray-100 rounded cursor-pointer dark:text-gray-300">
              <UserCircle2 size={16} /> User Profile
            </li>
            <li className="flex items-center gap-2 pl-2 py-1 hover:bg-gray-100 rounded cursor-pointer dark:text-gray-300">
              <Settings size={16} /> Account
            </li>
            <li className="flex items-center gap-2 pl-2 py-1 hover:bg-gray-100 rounded cursor-pointer dark:text-gray-300">
              <Users size={16} /> Corporate
            </li>
            <li className="flex items-center gap-2 pl-2 py-1 hover:bg-gray-100 rounded cursor-pointer dark:text-gray-300">
              <Newspaper size={16} /> Blog
            </li>
            <li className="flex items-center gap-2 pl-2 py-1 hover:bg-gray-100 rounded cursor-pointer dark:text-gray-300">
              <Users size={16} /> Social
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-semibold text-gray-500 uppercase mb-2 dark:text-gray-300">Notifications</h2>
          <ul className="space-y-1">
            <li className="flex items-center gap-2 pl-2 py-1 hover:bg-gray-100 rounded cursor-pointer dark:text-gray-300">
              <Bell size={16} /> Alerts
            </li>
          </ul>
        </div>
      </nav>
    </aside>
  );
}
