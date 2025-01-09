import React from "react";
import Navbar2 from "../Navbar";
import Footer from "../Footer";
import aboutUsData from "../../data/aboutUs";
import { Helmet } from 'react-helmet-async';

const AboutUs = () => {
  const teamMembers = aboutUsData.map((item) => item.title === "Team" ? item.members : []).flat();
  const weAtLane = aboutUsData.find((item) => item.title === "We at LANE");
  const founder = aboutUsData.find((item) => item.title === "Our Founder");
  return (
    <>
      <Helmet>
        <title>About InLane - India's Modern Driving School | Learn Safe Driving</title>
        <meta 
          name="description" 
          content="Meet the team behind InLane, India's modern driving school. Led by founder Samiksha, we're revolutionizing driver education with professional training and a mission for zero road fatalities."
        />
        <meta 
          name="keywords" 
          content="InLane driving school, driving lessons bangalore, learn driving bangalore, professional driving school, driving instructor near me, best driving school india, safe driving courses"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://inlane.in/about-us" />
        <meta property="og:title" content="About InLane - India's Modern Driving School" />
        <meta property="og:description" content="Meet the team behind InLane, India's modern driving school. Led by founder Samiksha, we're revolutionizing driver education with professional training." />
        <meta property="og:url" content="https://inlane.in/about-us" />
        <meta property="og:type" content="website" />
      </Helmet>
      <Navbar2
        backgroundColor="#d1b3ff"
        logo="/svg/Logo_white.svg"
        burgerMenu={"/svg/burger_menu_white.svg"}
      />
      <div className="min-h-screen bg-[#D1B3FF] font-grotesque font-normal bg-logoPurple">
        {/* Hero Section - Updated with clouds */}
        <div className="relative h-[70vh] flex items-center justify-center px-4">
          {/* Clouds background */}
          <img
            src="/svg/Clouds.svg"
            alt="clouds background"
            className="absolute inset-0 w-full h-full "
            style={{ zIndex: 0 }}
          />
          {/* Pipe image */}
          <img
            src="/png/about_us_pipe.png"
            alt="background pipe"
            className="absolute h-[71%] object-contain"
            style={{
              top: "50%",
              transform: "translateY(-30%)",
              zIndex: 1,
            }}
          />
          {/* Content */}
          <div className="relative z-10 max-w-3xl px-4">
            <div className="space-y-6 flex flex-col items-center">
              <div
                className="bg-[#00ce84] text-white text-3xl md:text-6xl font-bold py-2 md:py-3 px-4 md:px-8 inline-block shadow-lg w-fit"
                style={{ 
                  transform: "rotate(-2deg)",
                  clipPath: "polygon(10% 0, 100% 0, 100% 100%, 10% 100%, 0 50%)",
                  filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.25))"
                }}
              >
                EMPOWERING
              </div>
              <div
                className="bg-[#00ce84] text-white text-3xl md:text-6xl font-bold py-2 md:py-3 px-4 md:px-8 inline-block shadow-lg w-fit"
                style={{ 
                  transform: "rotate(1deg)",
                  clipPath: "polygon(0 0, 90% 0, 100% 50%, 90% 100%, 0 100%)",
                  filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.25))"
                }}
              >
                the Next Generation
              </div>
              <div
                className="bg-[#00ce84] text-white text-3xl md:text-6xl font-bold py-2 md:py-3 px-4 md:px-8 inline-block shadow-lg w-fit"
                style={{ 
                  transform: "rotate(-1deg)",
                  filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.25))"
                }}
              >
                of drivers <img src="/svg/rocket.png" alt="rocket" className="inline w-8 md:w-12 h-8 md:h-12" />
              </div>
            </div>
          </div>
        </div>

        {/* Content Container */}
        <div className="w-full font-grotesque ">
          <div className="bg-white rounded-t-3xl pt-8 shadow-lg w-full">
            {/* LANE Introduction */}
            <div className="mb-12 w-full md:w-1/2 px-4 md:px-0 m-auto flex flex-col items-center justify-around my-12">
              <div className="flex justify-start items-center gap-3 mb-4 w-full">
                <div>
                  <img
                    src="/svg/steering-wheel-icon.svg"
                    alt="steering wheel"
                    className="w-10 md:w-14 h-auto"
                  />
                </div>
                <h2 className="text-3xl md:text-5xl font-medium text-start flex justify-start items-center w-full font-grotesque">
                  We at LANE
                </h2>
              </div>
              <p className="text-lg mb-4">
                {weAtLane.description1}
              </p>
              <p className="text-lg">
                {weAtLane.description2}
              </p>
            </div>

            {/* Founder Section */}
            <div className="bg-[#D1B3FF] rounded-t-3xl p-4  md:p-8 md:pt-20 w-full bg-logoPurple">
              <div className="flex flex-col items-center gap-3 mb-4">
                <div className="flex flex-col md:flex-row justify-around items-start mb-12 w-full md:gap-12 md:w-[80%]">
                  <div className="w-full  px-4 md:px-0">
                    <h2 className="text-3xl md:text-[6.5rem] font-medium mb-8 mt-6">
                      Meet Samiksha!
                    </h2>
                    <h3 className="text-xl mb-4 font-semibold">The FOUNDER</h3>
                    <p className="text-lg mb-4">
                    {founder.description1}
                    </p>
                    <p className="text-lg">
                    {founder.description2}
                    </p>
                  </div>

                  <div className="rounded-2xl overflow-hidden shadow-md w-full md:w-[60%] mt-6 md:mt-0">
                    <div className="bg-[#B28FFF] p-3 rounded-2xl">
                      <div className="aspect-w-1 aspect-h-1 w-full rounded-xl overflow-hidden">
                        <img 
                          src={founder.image} 
                          alt="Founder"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Team Section */}
                <div className="bg-white rounded-3xl p-4 md:p-12 mb-12 w-full md:w-[80%]">
                  <h2 className="text-3xl md:text-5xl mb-8 m-auto w-full text-start">
                    And now, the{" "}
                    <span className=" font-bold">Pit Crew</span> that is
                    making it all possible! 👋🚗
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
                    {teamMembers.map((member, index) => (
                      <div key={index} className="rounded-2xl overflow-hidden shadow-md">
                        <div className="bg-[#D1B3FF] p-3 rounded-2xl">
                          <div className="aspect-w-1 aspect-h-1 w-full rounded-xl overflow-hidden">
                            <img
                              src={member.image}
                              alt={member.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                        <div className="p-4">
                          <h3 className="font-bold text-lg mb-1">
                            {member.name}
                          </h3>
                          <p className="text-gray-700 text-sm leading-snug">
                            {member.role}
                          </p>
                        </div>
                      </div>
                    ))}
                    {/* PS Message as 6th card */}
                    <div
                      className="rounded-[24px] p-4 md:p-6 "
                      style={{
                        background: "#D1B3FF",
                        position: "relative",
                      }}
                    >
                      <div className="flex flex-col gap-2">
                        <p className="text-[#1A1A1A] text-[15px] leading-[1.4] text-left">
                         <span className="font-bold"> P.S.</span> Big thanks to Shubham, Dheeraj and Shashank,
                          <br />
                          the awesome friends of Lane who keep everything
                          <br />
                          running smoothly! 🙌💥
                        </p>
                        <p className="text-[#1A1A1A] text-[15px] text-left">
                          We couldn't do it without you!
                        </p>
                      </div>
                      {/* Chat bubble tail */}
                      <div
                        style={{
                          position: "absolute",
                          bottom: "-20px",
                          right: "24px",
                          width: "20px",
                          height: "20px",
                          background: "#D1B3FF",
                          clipPath: "polygon(0 0, 100% 0, 100% 100%)",
                          transform: "rotate(0deg)",
                        }}
                      />
                    </div>
                  </div>
                  <div className="text-center mt-8">
                    <a 
                    target="_blank"
                    href="https://forms.gle/ffBN85PKWp7vQKzu6"
                    className="bg-[#01cb82] text-white px-4 md:px-6 py-2 rounded-full font-medium hover:bg-[#00b574]
                     transition-colors inline-flex items-center justify-center border-[3px] border-white shadow-lg" >
                      <img
                        src="/svg/puzzle_white.svg"
                        alt="puzzle icon"
                        className="w-8 md:w-12 h-8 md:h-12 mb-2 mr-[-0.5rem]"
                      />
                      <p className="text-base md:text-lg font-semibold ">Join Us</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
