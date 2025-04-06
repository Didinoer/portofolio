"use client";
import React from "react";

import { FaLinkedinIn } from "react-icons/fa";
import Onscroll1 from "./animation/Onscroll1";
import { useState } from "react";
import Image from "next/image";

type props = {
	propimg: string;
};

export default function Education({ propimg }: props) {
	const [ishover, setIshover] = useState(false);

	return (
		<div className="container  rounded-lg my-4">
			<div className="grid grid-cols-1 md:grid-cols-1 gap-1">
				<div className="relative flex justify-center items-center">
					<a
						href="https://www.linkedin.com/company/merry-riana-group"
						target="_blank"
						rel="noopener noreferrer"
						className="block"
						onMouseEnter={() => setIshover(true)}
						onMouseLeave={() => setIshover(false)}>
						<Image
							className={` w-[200px] h-[200px] transition-all duration-300 ${
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
									<FaLinkedinIn className="text-white" />
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

				<div className="flex justify-center p-1 w-full rounded-lg ">
					<div className="bg-white w-[800px] flex flex-col text-center justify-center items-center p-8 h-full rounded-lg transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,255,0,0.8)]">
						<h1 className="text-xl font-bold mb-4 text-gray-950">
							<p className=" font-semibold mb-2">
								Universitas Bina Sarana Informatika
								<br />
								Bachelor’s Degree in Information Technology (GPA: 3.97)
								<br />
								📅 8th Semester
							</p>
						</h1>
						<Onscroll1>
							<div className="bg-indigo-500 shadow-lg rounded-lg p-6 hover:shadow-xl transition">
								<p className="text-white font-semibold">
									At Bina Sarana Informatika University, I am pursuing a degree
									in Information Technology, where I continuously refine my
									skills in software development, system analysis, and emerging
									technologies.
								</p>
							</div>
						</Onscroll1>
					</div>
				</div>
			</div>
		</div>
	);
}
