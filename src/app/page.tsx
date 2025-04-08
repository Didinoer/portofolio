import Navbar from "./component/SidebarNavbarCombo";
import MainCard from "./component/MainCard";
import WorkExperience from "./component/WorkExperience";
import Onscroll1 from "./component/animation/Onscroll1";
import Education from "./component/Education";
import BackgroundVideoLayout from "./component/BackgroundVideoLayout";

export default function Home() {
	return (
		<>
			<Navbar>
				{/* <div className="border-1 border-white w-[100%] mb-[50px] mt-[25px]"></div>
				<h1 className="text-center font-bold text-4xl  text-white">
					Hello World :)
				</h1>
				<div className="border-1 border-white w-[100%] mt-[50px]"></div> */}
				{/* <div className="w-full h-[800px]  flex justify-center items-center align-middle bg-amber-300"> */}
				<BackgroundVideoLayout
					videoSrc={"/video/bgvid1.mp4"}
					height="md:h-screen">
					<Onscroll1>
						<MainCard propimg={"/image/didi.png"} />
					</Onscroll1>
				</BackgroundVideoLayout>
				{/* </div> */}
				{/* <div className="border-1 border-white w-[100%] my-[200px]"></div> */}
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
			</Navbar>
		</>
	);
}
