import Navbar from "./component/SidebarNavbarCombo";
import MainCard from "./component/MainCard";
import WorkExperience from "./component/WorkExperience";
import Onscroll1 from "./component/animation/Onscroll1";
import Education from "./component/Education";
import BackgroundVideoLayout from "./component/BackgroundVideoLayout";
import Image from "next/image";

export default function Home() {
	return (
		<>
			<Navbar>
				<BackgroundVideoLayout
					videoSrc={"/video/bgvid1.mp4"}
					height="md:h-screen">
					<Onscroll1>
						<MainCard propimg={"/image/didi.png"} />
					</Onscroll1>
				</BackgroundVideoLayout>
				<div className="border-1 border-white w-[100%] mb-[50px]"></div>
				<h1 className="text-center font-bold text-4xl  text-white">
					My Work experience
				</h1>
				<div className="border-1 border-white w-[100%]  mt-[50px]"></div>
				<BackgroundVideoLayout
					videoSrc={"/video/bgvid1.mp4"}
					height="md:h-[1200px]">
					<Onscroll1>
						<WorkExperience propimg={"/image/mrg2.png"} />
					</Onscroll1>
				</BackgroundVideoLayout>
				<div className="border-1 border-white w-[100%] mb-[50px] "></div>
				<h1 className="text-center font-bold text-4xl  text-white">
					My Education
				</h1>
				<div className="border-1 border-white w-[100%]  mt-[50px]"></div>
				<BackgroundVideoLayout
					videoSrc={"/video/bgvid1.mp4"}
					height="md:h-screen">
					<Onscroll1>
						<Education propimg="/image/ubsi.png" />
					</Onscroll1>
				</BackgroundVideoLayout>
				<div className="border-1 border-white w-[100%] mb-[50px] "></div>
				<h1 className="text-center font-bold text-4xl  text-white">
					My Project Experience
				</h1>
				<div className="border-1 border-white w-[100%]  mt-[50px]"></div>
				<BackgroundVideoLayout videoSrc={"/video/bgvid1.mp4"} height="md:h-fit">
					<Onscroll1>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-2 justify-center items-center">
							<div className="w-full h-fit  flex justify-center items-center">
								<div className="flex flex-col text-center justify-center font-semibold text-xl">
									<h1>Merry Riana Education Company Profile</h1>
									<br />
									<Image
										className=" justify-center items-center w-fit h-fit"
										src="/image/mre.png"
										alt="Profile Image"
										height={600}
										width={600}
									/>
								</div>
								<div className="flex flex-col text-center justify-center m-4"></div>
							</div>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-2 justify-center items-center">
							<div className="flex flex-col text-center justify-center m-4"></div>
							<div className="w-full h-fit  flex justify-center items-center">
								<div className="flex flex-col text-center justify-center font-semibold text-xl">
									<h1>InspiraFest LandingPage + Dashboard</h1>
									<br />
									<Image
										className=" justify-center items-center w-fit h-fit"
										src="/image/if.png"
										alt="Profile Image"
										height={600}
										width={600}
									/>
								</div>
							</div>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-2 justify-center items-center">
							<div className="w-full h-fit  flex justify-center items-center m-4">
								<div className="flex flex-col text-center justify-center font-semibold text-xl">
									<h1>Residential Administration</h1>
									<br />
									<Image
										className=" justify-center items-center w-fit h-fit"
										src="/image/resident.png"
										alt="Profile Image"
										height={600}
										width={600}
									/>
								</div>
								<div className="flex flex-col text-center justify-center m-4"></div>
							</div>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-2 justify-center items-center">
							<div className="flex flex-col text-center justify-center m-4"></div>
							<div className="w-full h-fit  flex justify-center items-center">
								<div className="flex flex-col text-center justify-center font-semibold text-xl">
									<h1>Item Purchase Request System</h1>
									<br />
									<Image
										className=" justify-center items-center w-fit h-fit"
										src="/image/pengajuan.png"
										alt="Profile Image"
										height={600}
										width={600}
									/>
								</div>
							</div>
						</div>
					</Onscroll1>
				</BackgroundVideoLayout>
			</Navbar>
		</>
	);
}
