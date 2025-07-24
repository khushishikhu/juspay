import React from "react";
import {
  Search,
  Bell,
  Sun,
  Moon,
  RotateCcw,
  Monitor,
  LayoutDashboard,
  Star,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function Header() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <header className="flex items-center justify-between px-6 py-3 bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-10">
      {/* Left: Breadcrumb */}
      <div className="flex items-center gap-4 min-w-[280px]">
        <LayoutDashboard className="w-5 h-5 text-gray-600 dark:text-gray-300" />
        <Star className="w-4 h-4 text-gray-600 dark:text-gray-300" />
        <span className="text-gray-400 text-sm">Dashboards</span>
        <span className="text-black dark:text-white text-sm font-medium">/ Default</span>
      </div>

      {/* Center: Search */}
      <div className="relative hidden md:flex w-1/3 items-center">
        <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400 dark:text-gray-300" />
        <input
          type="text"
          placeholder="Search"
          className="w-full bg-gray-100 dark:bg-gray-800 border-none rounded-md pl-10 pr-12 py-2 text-sm text-gray-900 dark:text-gray-100 placeholder:text-gray-400 focus:outline-none"
        />
        <kbd className="absolute right-2 text-xs text-gray-400 dark:text-gray-500">⌘/</kbd>
      </div>

      {/* Right: Icons */}
      <div className="flex items-center gap-4">
        <button onClick={toggleTheme} className="text-gray-600 dark:text-gray-300">
          {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
        <RotateCcw className="w-5 h-5 text-gray-600 dark:text-gray-300 cursor-pointer" />
        <Bell className="w-5 h-5 text-gray-600 dark:text-gray-300 cursor-pointer" />
        <Monitor className="w-5 h-5 text-gray-600 dark:text-gray-300 cursor-pointer" />
      </div>
    </header>
  );
}
