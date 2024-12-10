import React from "react";
import Navbar2 from "../Navbar";
import Footer from "../Footer";

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Asish Behara",
      role: "Our tech wizard, keeping the engine running with his code! 🧙",
      image: "/png/in_lane_team1.png",
    },
    {
      name: "Adi Koushik Reddy",
      role: 'The guy growing our reach faster than you can say "viral"! 📈',
      image: "/png/in_lane_team2.png",
    },
    {
      name: "Diwakar Reddy",
      role: "Master of the pit stop, making sure everything runs smoothly! 🔧✨",
      image: "/png/in_lane_team3.png",
    },
    {
      name: "Srishti",
      role: "The creative genius painting the track with all the design magic you see! 🎨✨",
      image: "/png/in_lane_team4.png",
    },
    {
      name: "Arpit, Chirag, Chinmay (ProFam)",
      role: "Our content pit crew, making social media cooler than the fastest lap! 📱😎",
      image: "/png/in_lane_team5.png",
    },
  ];

  return (
    <>
      <Navbar2
        backgroundColor="#d1b3ff"
        logo="/svg/Logo_white.svg"
        burgerMenu={"/svg/burger_menu_white.svg"}
      />
      <div className="min-h-screen bg-[#D1B3FF] font-grotesque font-normal">
        {/* Hero Section - Updated with clouds */}
        <div className="relative h-[70vh] flex items-center justify-center">
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
                className="bg-[#00ce84] text-white text-6xl font-bold py-3 px-8 rounded-xl inline-block shadow-lg w-fit"
                style={{ transform: "rotate(-2deg)" }}
              >
                EMPOWERING
              </div>
              <div
                className="bg-[#00ce84] text-white text-6xl font-bold py-3 px-8 rounded-xl inline-block shadow-lg w-fit"
                style={{ transform: "rotate(1deg)" }}
              >
                the Next Generation
              </div>
              <div
                className="bg-[#00ce84] text-white text-6xl font-bold py-3 px-8 rounded-xl inline-block shadow-lg w-fit"
                style={{ transform: "rotate(-1deg)" }}
              >
                of drivers 🚀
              </div>
            </div>
          </div>
        </div>

        {/* Content Container */}
        <div className="w-full">
          <div className="bg-white rounded-t-3xl pt-8 shadow-lg w-full">
            {/* LANE Introduction */}
            <div className="mb-12 w-1/2 m-auto flex flex-col items-center justify-around my-12">
              <div className="flex justify-start items-center gap-3 mb-4 w-full">
                <div className="">
                  <img
                    src="/svg/steering-wheel-icon.svg"
                    alt="steering wheel"
                    className="w-14 h-auto"
                  />
                </div>
                <h2 className="text-5xl font-bold text-start flex justify-start items-center w-full">
                  We at LANE
                </h2>
              </div>
              <p className="text-lg mb-4">
                Believe driving should be fun, not stressful 🚗 It's not rocket
                science, and trust us—it's way easier when you're taught the
                right way. We're on a mission to turn learners into confident,
                responsible drivers who actually enjoy being behind the wheel!
                😊
              </p>
              <p className="text-lg">
                Plus, we're working on some seriously cool tech that tracks your
                driving style while you learn! Think of it as your driving buddy
                that entertains you, helps you level up and avoid accidents.
                ⚡🚗
              </p>
            </div>

            {/* Founder Section */}
            <div className="bg-[#D1B3FF] rounded-t-3xl p-8  w-full ">
              <div className="flex flex-col items-center gap-3 mb-4"></div>

              <div className="flex flex-col items-center gap-3 mb-4">
                <div className="flex  justify-around items-start mb-12 w-2/3">
                  <div className="w-[60%]">
                    <h2 className="text-5xl font-semibold mb-1">
                      Meet Samiksha!
                    </h2>
                    <h3 className="text-xl mb-4 font-semibold">The FOUNDER</h3>
                    <p className="text-lg mb-4">
                      Who's totally obsessed with her car (seriously, it's her
                      happy place! 🚗), she believes driving schools have been
                      stuck in the past for far too long 😴... It's time for a
                      mission to change the game!
                    </p>
                    <p className="text-lg">
                      She wants you to make smart, informed decisions about
                      anything automotive 🚗... Whether it's learning to drive,
                      buying your first car, or just being a better driver! She
                      gets that you don't want the boring experience your
                      parents had. It's time for something fresh, fun and so
                      much cooler! ✨
                    </p>
                  </div>

                  <div className="bg-[#B28FFF] p-2 h-[400px] rounded-t-xl w-[30%]">
                    {/* <img src="/svg/Clouds.svg" alt="cloud" className="w-8 h-8" /> */}
                  </div>
                </div>
                {/* Team Section */}
                <div className="bg-white rounded-3xl p-8 mb-12 w-2/3 ">
                  <h2 className="text-5xl  mb-8 m-auto w-full text-start">
                    And now, the{" "}
                    <span className=" font-bold">Pit Crew</span> that is
                    making it all possible! 👋🚗
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {teamMembers.map((member, index) => (
                      <div key={index} className="rounded-2xl overflow-hidden">
                        <div className="aspect-w-1 aspect-h-1 w-full">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
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
                      className="rounded-[24px] p-6"
                      style={{
                        background: "#F3EBFF",
                        position: "relative",
                      }}
                    >
                      <div className="flex flex-col gap-2">
                        <p className="text-[#1A1A1A] text-[15px] leading-[1.4] text-left">
                          P.S. Big thanks to Shubham and Shashank,
                          <br />
                          the awesome friends of Lane who keep everything
                          <br />
                          running smoothly! 🔧✨
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
                          background: "#F3EBFF",
                          clipPath: "polygon(0 0, 100% 0, 100% 100%)",
                          transform: "rotate(-45deg)",
                        }}
                      />
                    </div>
                  </div>
                  <div className="text-center mt-8">
                    <a 
                    target="_blank"
                    href="https://docs.google.com/forms/d/e/1FAIpQLSdRBJkX1Z2n0HFZAmHeiYOMOKIQSRJL7sXuY_iSZB59haCDcA/viewform"
                    className="bg-[#01cb82] text-white px-6  rounded-full font-medium hover:bg-[#00b574]
                     transition-colors inline-flex items-center justify-center border-[3px] border-white shadow-lg" >
                      <img
                        src="/svg/puzzle_white.svg"
                        alt="puzzle icon"
                        className="w-12 h-12 mb-2 mr-[-0.5rem]"
                      />
                      <p className="text-lg font-semibold ">Join Us</p>
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
