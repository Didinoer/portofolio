"use client";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import Onscroll1 from "./animation/Onscroll1";

type props = {
	propimg: string;
};

export default function WorkExperience({ propimg }: props) {
	const [ishover, setIshover] = useState(false);

	return (
		<>
			<div className="container rounded-lg mt-4 ">
				<div className="grid grid-cols-1 md:grid-cols-1 ">
					{/* Card 1 with Glow Effect */}
					<div className="relative flex justify-center items-center">
						<a
							href="https://www.linkedin.com/company/merry-riana-group"
							target="_blank"
							rel="noopener noreferrer"
							className="block"
							onMouseEnter={() => setIshover(true)}
							onMouseLeave={() => setIshover(false)}>
							<Image
								className={` w-[150px] h-[150px] transition-all duration-300 ${
									ishover ? "opacity-70" : ""
								}`}
								src={propimg} // Ganti dengan prop jika perlu
								alt="Profile Image"
								height={400}
								width={300}
							/>
							{ishover && (
								<div className="absolute inset-40 flex  items-center justify-center  bg-opacity-50 rounded-full">
									<span className="text-white text-sm font-semibold px-4  rounded-lg">
										Go to LinkedIn
									</span>
									<span>
										<FaLinkedin className="text-white" />
									</span>
								</div>
							)}
						</a>
					</div>
					<div className="relative w-full flex justify-center mt-[20px]">
						{/* Bulatan Atas */}
						<div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full"></div>

						{/* Garis */}
						<div className="w-[2px] h-[100px] bg-gradient-to-b from-blue-500 to-purple-500"></div>

						{/* Bulatan Bawah */}
						<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full"></div>
					</div>
					<div className="flex  justify-center p-1 w-full rounded-lg">
						<div className="bg-white w-[800px] flex flex-col text-center justify-center items-center p-8 h-full rounded-lg transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,255,0,0.8)]">
							<h1 className="text-2xl font-bold mb-4 text-gray-950">
								Programmer <br />
								(2024 - 2025)
							</h1>

							<div className="grid md:grid-cols-2 gap-6">
								<Onscroll1>
									<div className="bg-blue-500 shadow-lg rounded-lg p-6 hover:shadow-xl transition">
										<h2 className="text-xl font-bold flex items-center mb-3 text-white">
											<span className=" text-2xl mr-2">🌐</span> Website
											Maintenance
										</h2>
										<ul className="list-disc list-inside space-y-2 text-white font-semibold">
											<li>
												Manage and enhance sales websites using Laravel,
												CodeIgniter, and React.js.
											</li>
											<li>
												Oversee payment integrations and transaction dashboards.
											</li>
											<li>
												Optimize website performance for a seamless user
												experience.
											</li>
										</ul>
									</div>
								</Onscroll1>
								<Onscroll1>
									<div className="bg-green-500 shadow-lg rounded-lg p-6 hover:shadow-xl transition">
										<h2 className="text-xl font-bold flex items-center mb-3 text-white">
											<span className=" text-2xl mr-2">🎟️</span> Event
											Management Systems
										</h2>
										<ul className="list-disc list-inside space-y-2 text-white font-semibold">
											<li>
												Develop and maintain ticket sales, participant
												registration, and barcode scanning systems.
											</li>
											<li>
												Create and monitor dashboards for sales analytics.
											</li>
										</ul>
									</div>
								</Onscroll1>
								<Onscroll1>
									<div className="bg-purple-500 shadow-lg rounded-lg p-6 hover:shadow-xl transition">
										<h2 className="text-xl font-bold flex items-center mb-3 text-white">
											<span className="text-purple-500 text-2xl mr-2">📱</span>{" "}
											Mobile App Maintenance
										</h2>
										<ul className="list-disc list-inside space-y-2 text-white font-semibold">
											<li>
												Maintain and improve Android & iOS apps built with
												Ionic.
											</li>
											<li>
												Implement feature updates & optimize app performance.
											</li>
										</ul>
									</div>
								</Onscroll1>
								<Onscroll1>
									<div className="bg-yellow-500 shadow-lg rounded-lg p-6 hover:shadow-xl transition">
										<h2 className="text-xl font-bold flex items-center mb-3  text-white">
											<span className="text-yellow-500 text-2xl mr-2">🤝</span>{" "}
											Technical Collaboration
										</h2>
										<ul className="list-disc list-inside space-y-2 text-white font-semibold">
											<li>
												Work with cross-functional teams from planning to
												deployment.
											</li>
											<li>
												Troubleshoot and resolve system issues to maintain
												stability.
											</li>
										</ul>
									</div>
								</Onscroll1>
								<div className="col-span-1 md:col-span-2">
									<Onscroll1>
										<div className="bg-red-500 shadow-lg rounded-lg p-6 hover:shadow-xl transition">
											<h2 className="text-xl font-bold flex items-center mb-3 text-white">
												<span className="text-red-500 text-2xl mr-2">🛠️</span>
												Full Stack Development Expertise
											</h2>
											<ul className="list-disc list-inside space-y-2 text-white font-semibold">
												<li>
													Build robust backend systems using PHP, Laravel, dan
													CodeIgniter.
												</li>
												<li>
													Develop responsive UI dengan HTML, CSS, JS, dan
													React.js.
												</li>
											</ul>
										</div>
									</Onscroll1>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* disini efek section */}
		</>
	);
}
