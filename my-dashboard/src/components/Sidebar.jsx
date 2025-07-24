import React from "react";
import {
  ChevronDown,
  LayoutDashboard,
  Briefcase,
  ShoppingCart,
  BookOpen,
  User,
  Settings,
  Newspaper,
  Users,
  MessageSquare,
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-64 h-full bg-white shadow-md p-4 hidden md:block dark:bg-gray-800">
      {/* User Info */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-gray-300 rounded-full" />
        <div>
          <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">ByeWind</p>
        </div>
      </div>

      <nav className="text-sm text-gray-800 dark:text-gray-100">
        {/* Favorites */}
        <div className="mb-6">
          <div className="flex gap-4 mb-2 text-xs text-gray-400">
            <span className="font-semibold">Favorites</span>
            <span className="text-gray-300">Recently</span>
          </div>
          <ul className="space-y-1 pl-2 text-base">
            <li className="text-gray-900 dark:text-gray-100 list-disc ml-4">Overview</li>
            <li className="text-gray-900 dark:text-gray-100 list-disc ml-4">Projects</li>
          </ul>
        </div>

        {/* Dashboards */}
        <div className="mb-6">
          <h2 className="text-xs font-semibold text-gray-400 uppercase mb-2">Dashboards</h2>
          <ul className="space-y-1">
            <li className="flex items-center gap-2 bg-gray-100 p-2 rounded cursor-pointer">
              <LayoutDashboard size={16} /> Default
            </li>
            <li className="flex items-center justify-between hover:bg-gray-100 p-2 rounded cursor-pointer">
              <div className="flex items-center gap-2">
                <ShoppingCart size={16} /> eCommerce
              </div>
              <ChevronDown size={16} className="text-gray-400" />
            </li>
            <li className="flex items-center justify-between hover:bg-gray-100 p-2 rounded cursor-pointer">
              <div className="flex items-center gap-2">
                <Briefcase size={16} /> Projects
              </div>
              <ChevronDown size={16} className="text-gray-400" />
            </li>
            <li className="flex items-center justify-between hover:bg-gray-100 p-2 rounded cursor-pointer">
              <div className="flex items-center gap-2">
                <BookOpen size={16} /> Online Courses
              </div>
              <ChevronDown size={16} className="text-gray-400" />
            </li>
          </ul>
        </div>

        {/* Pages */}
        <div className="mb-6">
          <h2 className="text-xs font-semibold text-gray-400 uppercase mb-2">Pages</h2>
          <ul className="space-y-1">
            <li className="flex items-center justify-between hover:bg-gray-100 p-2 rounded cursor-pointer">
              <div className="flex items-center gap-2">
                <User size={16} /> User Profile
              </div>
              <ChevronDown size={16} className="text-gray-400" />
            </li>
            <ul className="ml-6 text-sm text-gray-700 dark:text-gray-300 space-y-1">
              <li className="hover:text-black cursor-pointer">Overview</li>
              <li className="hover:text-black cursor-pointer">Projects</li>
              <li className="hover:text-black cursor-pointer">Campaigns</li>
              <li className="hover:text-black cursor-pointer">Documents</li>
              <li className="hover:text-black cursor-pointer">Followers</li>
            </ul>
            <li className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded cursor-pointer">
              <Settings size={16} /> Account
            </li>
            <li className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded cursor-pointer">
              <Users size={16} /> Corporate
            </li>
            <li className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded cursor-pointer">
              <Newspaper size={16} /> Blog
            </li>
            <li className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded cursor-pointer">
              <MessageSquare size={16} /> Social
            </li>
          </ul>
        </div>
      </nav>
    </aside>
  );
}
