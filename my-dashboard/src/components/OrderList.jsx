import React from "react";
import { Search, CalendarDays, MoreHorizontal } from "lucide-react";

const orders = [
    {
        id: "#CM9801",
        user: "Natali Craig",
        project: "Landing Page",
        address: "Meadow Lane Oakland",
        date: "Just now",
        status: "In Progress",
        statusColor: "text-blue-500",
        avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
        id: "#CM9802",
        user: "Kate Morrison",
        project: "CRM Admin pages",
        address: "Larry San Francisco",
        date: "A minute ago",
        status: "Complete",
        statusColor: "text-green-400",
        avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
        id: "#CM9803",
        user: "Drew Cano",
        project: "Client Project",
        address: "Bagwell Avenue Ocala",
        date: "1 hour ago",
        status: "Pending",
        statusColor: "text-sky-400",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
        id: "#CM9804",
        user: "Orlando Diggs",
        project: "Admin Dashboard",
        address: "Washburn Baton Rouge",
        date: "Yesterday",
        status: "Approved",
        statusColor: "text-yellow-500",
        avatar: "https://randomuser.me/api/portraits/men/43.jpg",
    },
    {
        id: "#CM9805",
        user: "Andi Lane",
        project: "App Landing Page",
        address: "Nest Lane Olivette",
        date: "Feb 2, 2023",
        status: "Rejected",
        statusColor: "text-gray-400",
        avatar: "https://randomuser.me/api/portraits/women/30.jpg",
    },
    // Duplicate rows as per screenshot
    {
        id: "#CM9801",
        user: "Natali Craig",
        project: "Landing Page",
        address: "Meadow Lane Oakland",
        date: "Just now",
        status: "In Progress",
        statusColor: "text-blue-500",
        avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
        id: "#CM9802",
        user: "Kate Morrison",
        project: "CRM Admin pages",
        address: "Larry San Francisco",
        date: "A minute ago",
        status: "Complete",
        statusColor: "text-green-400",
        avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
        id: "#CM9803",
        user: "Drew Cano",
        project: "Client Project",
        address: "Bagwell Avenue Ocala",
        date: "1 hour ago",
        status: "Pending",
        statusColor: "text-sky-400",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
        id: "#CM9804",
        user: "Orlando Diggs",
        project: "Admin Dashboard",
        address: "Washburn Baton Rouge",
        date: "Yesterday",
        status: "Approved",
        statusColor: "text-yellow-500",
        avatar: "https://randomuser.me/api/portraits/men/43.jpg",
    },
    {
        id: "#CM9805",
        user: "Andi Lane",
        project: "App Landing Page",
        address: "Nest Lane Olivette",
        date: "Feb 2, 2023",
        status: "Rejected",
        statusColor: "text-gray-400",
        avatar: "https://randomuser.me/api/portraits/women/30.jpg",
    },
];

export default function OrdersPage() {
    return (
        <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Order List</h2>

            <div className="bg-white dark:bg-gray-900 rounded-xl  dark:border-gray-700">
                {/* Header Controls */}
                <div className="flex items-center justify-between p-4 border-b bg-gray-100 dark:bg-gray-800">
                    <div className="flex items-center gap-2">
                        <button className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 text-xl">+</button>
                        <button className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800">⇅</button>
                    </div>
                    <div className="relative">
                        <Search className="absolute left-2 top-2.5 w-4 h-4 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search"
                            className="pl-8 pr-4 py-1.5 rounded bg-gray-100 dark:bg-gray-800 text-sm"
                        />
                    </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="min-w-full text-sm text-left">
                        <thead className=" text-gray-500 dark:text-gray-400 uppercase tracking-wide text-xs">
                            <tr>
                                <th className="p-4">
                                    <input type="checkbox" className="accent-gray-500" />
                                </th>
                                <th className="p-4">Order ID</th>
                                <th className="p-4">User</th>
                                <th className="p-4">Project</th>
                                <th className="p-4">Address</th>
                                <th className="p-4">Date</th>
                                <th className="p-4">Status</th>
                                <th className="p-4"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order, index) => (
                                <tr
                                    key={`${order.id}-${index}`}
                                    className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
                                >
                                    <td className="p-4">
                                        <input type="checkbox" className="accent-gray-500" />
                                    </td>
                                    <td className="p-4 font-medium text-gray-900 dark:text-white">{order.id}</td>
                                    <td className="p-4 flex items-center gap-2">
                                        <img src={order.avatar} alt={order.user} className="w-6 h-6 rounded-full" />
                                        <span className="text-gray-800 dark:text-white">{order.user}</span>
                                    </td>
                                    <td className="p-4 text-gray-700 dark:text-gray-300">{order.project}</td>
                                    <td className="p-4 text-gray-700 dark:text-gray-300">{order.address}</td>
                                    <td className="p-4 flex items-center gap-1 text-gray-700 dark:text-gray-300">
                                        <CalendarDays className="w-4 h-4" />
                                        {order.date}
                                    </td>
                                    <td className="p-4">
                                        <span className={`font-medium ${order.statusColor}`}>{order.status}</span>
                                    </td>
                                    <td className="p-4 text-right">
                                        {index === 4 || index === 9 ? <MoreHorizontal className="w-4 h-4 text-gray-400" /> : null}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="flex items-center justify-end p-4 gap-2 text-sm">
                    <button className="w-8 h-8 flex items-center justify-center rounded bg-white hover:bg-gray-100 dark:hover:bg-gray-800">
                        &lt;
                    </button>
                    {[1, 2, 3, 4, 5].map((n) => (
                        <button
                            key={n}
                            className={`w-8 h-8 flex items-center justify-center rounded ${n === 1
                                    ? "bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
                                    : "bg-white hover:bg-gray-100 dark:hover:bg-gray-800"
                                }`}
                        >
                            {n}
                        </button>
                    ))}
                    <button className="w-8 h-8 flex items-center justify-center rounded bg-white hover:bg-gray-100 dark:hover:bg-gray-800">
                        &gt;
                    </button>
                </div>

            </div>
        </div>
    );
}
