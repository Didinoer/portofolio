"use client";

import React from "react";

type BackgroundVideoLayoutProps = {
	children: React.ReactNode;
	videoSrc: string;
	height?: string;
};

export default function BackgroundVideoLayout({
	children,
	videoSrc,
	height,
}: BackgroundVideoLayoutProps) {
	return (
		<div className={`relative ${height} w-full overflow-hidden`}>
			{/* Video Background */}
			<video
				className="absolute top-0 left-0 w-full h-full object-cover z-0"
				autoPlay
				loop
				muted
				playsInline>
				<source src={videoSrc} type="video/mp4" />
				Your browser does not support the video tag.
			</video>

			{/* Overlay */}
			<div className="absolute inset-0  bg-opacity-10 z-10" />

			{/* Content */}
			<div className="relative z-20 flex items-center justify-center h-full text-white text-center p-4">
				{children}
			</div>
		</div>
	);
}
