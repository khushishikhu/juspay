// components/RightPanel.jsx
import React from "react";
import { Bell, MessageSquare, Tag } from "lucide-react";

export default function RightPanel() {
  return (
    <aside className="w-64 h-full bg-white shadow-md p-4 hidden md:block dark:bg-gray-800">
      <div>
        <h2 className="text-xs font-semibold text-gray-500 uppercase mb-2 dark:text-gray-400">Notifications</h2>
        <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
          <li className="flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded cursor-pointer">
            <Bell className="text-gray-600 dark:text-gray-300" size={16} /> Orders
          </li>
          <li className="flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded cursor-pointer">
            <Tag className="text-gray-600 dark:text-gray-300" size={16} /> Campaigns
          </li>
          <li className="flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded cursor-pointer">
            <MessageSquare className="text-gray-600 dark:text-gray-300" size={16} /> Messages
          </li>
        </ul>
      </div>

      <div>
        <h2 className="text-xs font-semibold text-gray-500 uppercase mb-2">Contacts</h2>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gray-200 rounded-full" />
            <div>
              <p className="text-sm font-medium  dark:text-gray-300">Jorge Henry</p>
              <p className="text-xs text-gray-400">Online</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gray-200 rounded-full" />
            <div>
              <p className="text-sm font-medium  dark:text-gray-300">Emma Jones</p>
              <p className="text-xs text-gray-400">Offline</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
