"use client";

import { useState, type ReactNode } from "react";

type SidebarNavbarLayoutProps = {
	children: ReactNode;
};

export default function SidebarNavbarCombo({
	children,
}: SidebarNavbarLayoutProps) {
	const [sidebarOpen, setSidebarOpen] = useState(false);

	const toggleSidebar = () => {
		setSidebarOpen(!sidebarOpen);
	};

	return (
		<div className="flex h-full bg-indigo-100 transition-all duration-300">
			{/* Sidebar */}
			<div
				className={`fixed top-0 left-0 h-full w-64 bg-red-400 text-white p-6 z-40 transition-transform duration-300 ${
					sidebarOpen ? "translate-x-0" : "-translate-x-full"
				}`}>
				<h2 className="text-2xl font-bold mb-6">Didi Noer</h2>
				<nav className="flex flex-col space-y-4">
					<a href="#" className="hover:bg-gray-700 rounded px-3 py-2">
						Home
					</a>
					<a href="#" className="hover:bg-gray-700 rounded px-3 py-2">
						Blog
					</a>
					<a href="#" className="hover:bg-gray-700 rounded px-3 py-2">
						Contact
					</a>
				</nav>
			</div>

			{/* Content Area (navbar + page content) */}
			<div
				className={`flex-1 flex flex-col transition-all duration-300 ${
					sidebarOpen ? "ml-64" : "ml-0"
				}`}>
				{/* Navbar */}
				<div className="bg-slate-700 shadow-md px-4 py-4 flex items-center justify-between h-md-[200px]">
					<div className="flex items-center space-x-4">
						{/* Toggle Sidebar Button */}
						<button
							onClick={toggleSidebar}
							className="w-8 h-8 bg-red-400 rounded flex items-center justify-center text-white font-bold hover:bg-red-500 transition">
							≡
						</button>
					</div>
					{/* <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
						<span className="hover:text-blue-600 cursor-pointer">Home</span>
						<span className="hover:text-blue-600 cursor-pointer">Blog</span>
					</div> */}
				</div>

				{/* Main Page Content */}
				{/* Main Page Content */}
				{/* <div className="p-6 bg-gradient-to-r from-blue-500 via-blue-800 to-purple-500 min-h-screen w-full transition-all duration-300">
					{children}
				</div> */}
				<div
					className={`transition-all h-full duration-300  bg-gradient-to-r from-blue-500 via-blue-800 to-purple-500 ${
						sidebarOpen
							? "hidden md:block bg-gradient-to-r from-blue-500 via-blue-800 to-purple-500"
							: "block"
					}`}>
					{children}
				</div>
			</div>
		</div>
	);
}
