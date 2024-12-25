import React, { useState, useEffect } from "react";
import Footer from "../Footer";
import FAQ from "./FAQ";
import Navbar from "../Navbar";
import { Button } from "@mui/material";
import { Rocket } from "lucide-react";
import MiniCourseNew from "./MiniCourseNew";

const NewCoursePage = () => {
  const [expandedHour, setExpandedHour] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const calculateCarPosition = () => {
    const maxScroll = 300;
    const maxMove = 200;
    const movement = Math.min((scrollPosition / maxScroll) * maxMove, maxMove);
    return movement;
  };

  const beginnerCourseHours = [
    {
      hour: 1,
      title: "Introduction to Vehicle Controls",
      details: "Get familiar with car controls, adjusting seats and mirrors, basic safety checks, and understanding dashboard indicators.",
    },
    {
      hour: 2,
      title: "Starting & Basic Vehicle Control",
      details: "Learn proper starting procedure, clutch control, moving off safely, and basic steering techniques in empty areas.",
    },
    {
      hour: 3,
      title: "Gear Changes & Speed Control",
      details: "Master smooth gear transitions, understanding gear selection, speed control, and basic braking techniques.",
    },
    {
      hour: 4,
      title: "Turning & Steering Techniques",
      details: "Practice different turning methods, three-point turns, steering control, and position on road.",
    },
    {
      hour: 5,
      title: "Basic Maneuvers",
      details: "Introduction to reverse parking, parallel parking basics, and turning in tight spaces.",
    },
    {
      hour: 6,
      title: "Traffic Rules & Road Signs",
      details: "Understanding traffic signals, road signs, right of way rules, and basic traffic regulations.",
    },
    {
      hour: 7,
      title: "Residential Area Driving",
      details: "Practice driving in quiet residential areas, dealing with pedestrians, and speed management.",
    },
    {
      hour: 8,
      title: "Light Traffic Navigation",
      details: "Experience driving in light traffic conditions, lane discipline, and basic intersection handling.",
    },
    {
      hour: 9,
      title: "Advanced Maneuvers",
      details: "Advanced parking techniques, emergency stops, and handling different road conditions.",
    },
    {
      hour: 10,
      title: "Final Assessment & Mock Test",
      details: "Complete driving assessment, mock driving test, and final preparation for license test.",
    },
  ];

 

  return (
    <>
      <Navbar
        backgroundColor="#4ADE80"
        logo="./svg/Logo_white.svg"
        burgerMenu="./svg/burger_menu_white.svg"
      />
      <div className="min-h-screen bg-green-400 font-['glancyr'] p-12">
        {/* Cars Row and Animation Container */}
        <div className="relative h-[500px]">
          {/* Static cars row */}
          <div className="relative w-full pt-12">
            <div className="flex justify-center items-center gap-4">
              {Array.from({ length: 7 }, (_, i) =>
                i !== 3 ? (
                  <img
                    key={i}
                    src="/svg/course_car.svg"
                    alt="car"
                    className="w-16 md:w-auto"
                  />
                ) : (
                  <div key={i} className="w-16 md:w-auto" />
                )
              )}
            </div>

            {/* Animated yellow car */}
            <div
              className="absolute top-12 left-1/2 transform -translate-x-1/2"
              style={{ zIndex: 20 }}
            >
              <img
                src="/svg/course_car_yellow.svg"
                alt="car"
                className="w-16 md:w-auto"
                style={{
                  transform: `translateY(${calculateCarPosition()}px)`,
                  transition: "transform 0.1s ease-out",
                }}
              />
            </div>
          </div>

          {/* Let's Get You Driving image */}
          <div
            className="absolute w-full top-[200px] md:top-[400px]"
            style={{
              // top: "400px",
              zIndex: 10,
            }}
          >
            <img
              src="/course/letgetyoudriving.svg"
              alt="car"
              className="mx-auto w-1/2 md:w-auto "
            />
          </div>
        </div>

        {/* Main Title */}
        {/* <div className="text-center mb-8">
        <h1 className="inline-block bg-yellow-300 px-4 py-2 text-2xl font-bold">
          Let's Get
        </h1>
        <h1 className="inline-block bg-yellow-300 px-4 py-2 text-2xl font-bold ml-1">
          You Driving!
        </h1>
      </div> */}

        {/* <div className="flex justify-center">
        <img src="/course/letgetyoudriving.svg" alt="car" className="" />
      </div> */}

        {/* Beginner Course Section */}
        <div className="max-w-5xl mx-auto mb-12 mt-60 bg-[#D9FF7A] rounded-[2rem] p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <img src="/course/arrow.svg" alt="target" className="" />
            <h2 className="text-3xl font-medium font-['glancyr']">Beginner Course</h2>
          </div>

          <div className="flex">
            {/* Left side - Course hours - 70% width */}
            <div className="w-[70%] space-y-2 pr-8">
              {beginnerCourseHours.map((hour, index) => (
                <div key={index} className="relative">
                  <button
                    onClick={() => setExpandedHour(expandedHour === index ? null : index)}
                    className="w-full flex items-center justify-between bg-white/50 rounded-full px-6 py-2 hover:bg-white/60 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <span className="font-semibold min-w-[4.5rem] font-['glancyr']">Hour {hour.hour}</span>
                      <span className="text-gray-700 border-l border-gray-400 pl-4 font-['glancyr']">
                        {hour.title}
                      </span>
                    </div>
                    <svg
                      className={`w-5 h-5 transition-transform ${
                        expandedHour === index ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {expandedHour === index && (
                    <div className="mt-2 ml-[4.5rem] pl-8 pr-4 py-3 bg-white/30 rounded-lg">
                      <p className="text-gray-700 font-['glancyr']">{hour.details}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right side - Course details - 30% width */}
            <div className="w-[30%] space-y-6">
              <div className="flex items-center gap-3">
                <img src="/course/timer.svg" alt="duration" className="" />
                <div>
                  <span className="text-lg font-semibold font-['glancyr']">Duration:</span>
                  <p className="font-['glancyr']">10 hours</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <img src="/course/coin.svg" alt="price" className="" />
                <div>
                  <span className="text-lg font-semibold font-['glancyr']">Price:</span>
                  <p className="font-['glancyr']">₹10000</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <img src="/course/calculator.svg" alt="value" className="" />
                <div>
                  <span className="text-lg font-semibold block font-['glancyr']">Value Added</span>
                  <p className="text-sm font-['glancyr']">
                    We offer a vehicle for the Driver's License test day at an additional cost.
                  </p>
                </div>
              </div>

              <div className="flex flex-row items-center justify-center gap-6 mt-18">
              <Button
                variant="contained"
                // component={Link}
                // to="/https://forms.gle/Up128jny4nRz5DH59"
                component="a"
                href="https://forms.gle/Up128jny4nRz5DH59"
                startIcon={<Rocket color="white" />}
                sx={{
                  backgroundColor: "#00CE84",
                  color: "white",
                  fontWeight: "bold",
                  fontFamily: "Bricolage Grotesque",
                  textDecoration: "none",
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: "#00CE84",
                  },
                  border: "2px solid white",
                  borderRadius: "50px",
                  padding: {
                    sm: "10px 20px",
                    md: "6px 68px",
                  },
                  fontSize: { xs: "0.8rem", sm: "1rem", md: "24px" },
                  whiteSpace: "nowrap",
                  boxShadow: "2px 4px 4px rgba(0, 0, 0, 0.35)",
                }}
              >
                Sign Up
              </Button>
              {/* <img
                src="/svg/down_arrow.svg"
                alt="down arrow"
                className="w-8 h-8 md:w-auto md:h-auto"
              /> */}
            </div>
            </div>
          </div>
        </div>

        {/* Mini Courses Section */}

      </div>
      <MiniCourseNew/>
        <FAQ />
      <Footer />
    </>
  );
};

export default NewCoursePage;
