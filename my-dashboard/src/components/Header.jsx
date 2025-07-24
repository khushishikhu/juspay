import React from "react";
import {
  Search,
  Bell,
  Sun,
  Moon,
  Settings,
  ChevronDown,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext"; // import theme context

export default function Header() {
  const { darkMode, toggleTheme } = useTheme(); // use theme hook

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-10">
      {/* Left Side: Logo and Breadcrumb */}
      <div className="flex items-center gap-4">
        <img
          src="/logo.svg"
          alt="Logo"
          className="w-8 h-8"
        />
        <div className="text-sm text-gray-500 dark:text-gray-300">
          <span className="text-gray-700 dark:text-white font-medium">Dashboards</span> / Default
        </div>
      </div>

      {/* Center: Search */}
      <div className="relative hidden md:block w-1/3">
        <input
          type="text"
          placeholder="Search"
          className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-md pl-10 pr-4 py-2 text-sm text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400 dark:text-gray-300" />
      </div>

      {/* Right Icons */}
      <div className="flex items-center gap-4">
        <button onClick={toggleTheme} className="text-gray-600 dark:text-gray-300">
          {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
        <Bell className="w-5 h-5 text-gray-600 dark:text-gray-300 cursor-pointer" />
        <Settings className="w-5 h-5 text-gray-600 dark:text-gray-300 cursor-pointer" />
        <div className="flex items-center gap-1">
          <img
            src="https://i.pravatar.cc/30"
            alt="User"
            className="rounded-full w-7 h-7"
          />
          <ChevronDown className="w-4 h-4 text-gray-600 dark:text-gray-300" />
        </div>
      </div>
    </header>
  );
}
