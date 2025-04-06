"use client";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import { FaLinkedin } from "react-icons/fa";

type props = {
	propimg: string;
};

export default function MainCard({ propimg }: props) {
	const [ishover, setIshover] = useState(false);

	return (
		<>
			<div className="container rounded-lg mt-4 ">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-2 ">
					{/* Card 1 with Glow Effect */}
					<div className="relative flex justify-center items-center">
						<a
							href="https://www.linkedin.com/in/didi-nurahman-6207aa1a4/?trk=opento_sprofile_details"
							target="_blank"
							rel="noopener noreferrer"
							className="block"
							onMouseEnter={() => setIshover(true)}
							onMouseLeave={() => setIshover(false)}>
							<Image
								className={`rounded-full w-[300px] h-[400px] transition-all duration-300 ${
									ishover ? "opacity-70" : ""
								}`}
								src={propimg} // Ganti dengan prop jika perlu
								alt="Profile Image"
								height={400}
								width={300}
							/>
							{ishover && (
								<div className="absolute inset-40 flex items-center justify-center  bg-opacity-50 rounded-full">
									<span className="text-white text-sm font-semibold px-3 py-1 rounded-lg">
										Go to LinkedIn
									</span>
									<span>
										<FaLinkedin className="text-white" />
									</span>
								</div>
							)}
						</a>
					</div>
					<div className="p-1 rounded-lg bg-gradient-to-r from-blue-500 via-blue-800 to-purple-500 transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,255,0,0.8)] hover:from-yellow-500 hover:via-amber-500 hover:to-red-500">
						<div className="bg-white p-8 h-full rounded-lg transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,255,0,0.8)]">
							<h1 className="text-2xl font-bold mb-4 text-gray-950">
								Hi, My name is Didinoer :)
							</h1>
							<p className="text-gray-950 font-bold text-justify">
								I am a Fullstack Developer, specializing in building efficient
								and innovative digital solutions. With experience in modern
								frameworks like React and Laravel, I develop high-performance
								web applications and optimize MySQL database management.
								<br />
								Additionally, I have a strong background in maintaining and
								managing mobile applications for both Android and iOS platforms.
								Passionate about system optimization and seamless integration, I
								am committed to delivering scalable and high-quality solutions.
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* disini efek section */}
		</>
	);
}
