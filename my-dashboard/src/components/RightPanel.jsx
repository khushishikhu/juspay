import React from "react";
import { Bug, UserPlus, Rss } from "lucide-react";

const notifications = [
  {
    icon: <Bug className="w-5 h-5 text-blue-500" />,
    title: "You have a bug that needs...",
    time: "Just now",
  },
  {
    icon: <UserPlus className="w-5 h-5 text-gray-500" />,
    title: "New user registered",
    time: "59 minutes ago",
  },
  {
    icon: <Bug className="w-5 h-5 text-blue-500" />,
    title: "You have a bug that needs...",
    time: "12 hours ago",
  },
  {
    icon: <Rss className="w-5 h-5 text-gray-500" />,
    title: "Andi Lane subscribed to you",
    time: "Today, 11:59 AM",
  },
];

const activities = [
  { name: "You have a bug that needs...", time: "Just now", avatar: "https://i.pravatar.cc/40?img=1" },
  { name: "Released a new version", time: "59 minutes ago", avatar: "https://i.pravatar.cc/40?img=2" },
  { name: "Submitted a bug", time: "12 hours ago", avatar: "https://i.pravatar.cc/40?img=3" },
  { name: "Modified A data in Page X", time: "Today, 11:59 AM", avatar: "https://i.pravatar.cc/40?img=4" },
  { name: "Deleted a page in Project X", time: "Feb 2, 2023", avatar: "https://i.pravatar.cc/40?img=5" },
];

const contacts = [
  { name: "Natali Craig", avatar: "https://i.pravatar.cc/40?img=6" },
  { name: "Drew Cano", avatar: "https://i.pravatar.cc/40?img=7" },
  { name: "Orlando Diggs", avatar: "https://i.pravatar.cc/40?img=8" },
  { name: "Andi Lane", avatar: "https://i.pravatar.cc/40?img=9" },
  { name: "Kate Morrison", avatar: "https://i.pravatar.cc/40?img=10" },
  { name: "Koray Okumus", avatar: "https://i.pravatar.cc/40?img=11" },
];


export default function RightPanel() {
  return (
    <aside className="w-72 h-full bg-white dark:bg-gray-900 p-5 border-l border-gray-200 dark:border-gray-800 overflow-y-auto">
      {/* Notifications */}
      <div className="mb-6">
        <h2 className="text-sm font-semibold text-gray-600 dark:text-gray-300 mb-3">Notifications</h2>
        <ul className="space-y-4">
          {notifications.map((note, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <div className="bg-blue-100 dark:bg-gray-700 p-2 rounded-full">
                {note.icon}
              </div>
              <div className="text-sm text-gray-800 dark:text-gray-200">
                <p className="truncate">{note.title}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{note.time}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Activities */}
      <div className="mb-6">
        <h2 className="text-sm font-semibold text-gray-600 dark:text-gray-300 mb-3">Activities</h2>
        <ul className="space-y-4">
          {activities.map((activity, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <img
                src={activity.avatar}
                alt={activity.name}
                className="w-8 h-8 rounded-full object-cover"
              />
              <div className="text-sm text-gray-800 dark:text-gray-200">
                <p className="truncate">{activity.name}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{activity.time}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Contacts */}
      <div>
        <h2 className="text-sm font-semibold text-gray-600 dark:text-gray-300 mb-3">Contacts</h2>
        <ul className="space-y-4">
          {contacts.map((contact, idx) => (
            <li key={idx} className="flex items-center gap-3">
              <img
                src={contact.avatar}
                alt={contact.name}
                className="w-8 h-8 rounded-full object-cover"
              />
              <p className="text-sm text-gray-800 dark:text-gray-200">{contact.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
