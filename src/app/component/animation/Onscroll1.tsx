"use client";
import { useRef } from "react";
import { useInView } from "framer-motion";
// import "../css/Onscroll1.css";

type children = {
	children: React.ReactNode;
};

export default function Onscroll1({ children }: children) {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<div ref={ref}>
			<div
				style={{
					transform: isInView ? "none" : "translateX(-200px)",
					opacity: isInView ? 1 : 0,
					transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
					// display: "flex",
					overflow: "hidden",
					width: "100%",
				}}>
				{children}
			</div>
		</div>
	);
}
