import React, { useState, useEffect } from "react";
import Footer from "../Footer";
import FAQ from "./FAQ";
import Navbar from "../Navbar";
import { Button } from "@mui/material";
import { Rocket } from "lucide-react";
import MiniCourseNew from "./MiniCourseNew";
import { Helmet } from "react-helmet-async";

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
      title: "Get to know your car",
      sections: [
        "Get to know: Your car controls, the dashboard and the gearbox.",
        "Learn how to prepare before starting the car",
        "Start, Drive forward, and Stop the car",
      ],
    },
    {
      hour: 2,
      title: "Master the art of balancing the three pedals",
      sections: [
        "Understanding clutch, brake, and accelerator",
        "Practice pedal coordination",
        "Smooth transitions between pedals",
        "Basic control exercises",
      ],
    },
    {
      hour: 3,
      title: "The gearbox and steering control",
      sections: [
        "Understanding gear patterns",
        "When and how to change gears",
        "Basic steering techniques",
        "Coordination of gears with steering",
      ],
    },
    {
      hour: 4,
      title: "Conquer parking with confidence!",
      sections: [
        "Forward and reverse parking basics",
        "Parallel parking techniques",
        "Parking in tight spaces",
        "Spatial awareness practice",
      ],
    },
    {
      hour: 5,
      title: "Drive at consistent speed and hit the slopes",
      sections: [
        "Speed control techniques",
        "Uphill and downhill driving",
        "Managing gear changes on slopes",
        "Maintaining steady pace",
      ],
    },
    {
      hour: 6,
      title: "Navigating the main road with ease!",
      sections: [
        "Main road driving basics",
        "Traffic signal navigation",
        "Lane discipline",
        "Basic road rules and etiquette",
      ],
    },
    {
      hour: 7,
      title: "Conquer city driving with confidence!",
      sections: [
        "Navigating busy streets",
        "Handling intersections",
        "City traffic management",
        "Defensive driving basics",
      ],
    },
    {
      hour: 8,
      title: "You will start believing in your driving skills",
      sections: [
        "Building confidence in traffic",
        "Advanced maneuvers",
        "Independent driving practice",
        "Handling various road situations",
      ],
    },
    {
      hour: 9,
      title: "Getting comfortable with the flyovers!",
      sections: [
        "Flyover entry and exit techniques",
        "Merging with flyover traffic",
        "Managing speed on flyovers",
        "Safe lane changing on flyovers",
      ],
    },
    {
      hour: 10,
      title: "Final lap",
      sections: [
        "Comprehensive driving review",
        "Final assessment",
        "Test preparation tips",
        "Confidence building exercises",
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Driving Courses - Learn to Drive with InLane | Beginner to Advanced
        </title>
        <meta
          name="description"
          content="Join InLane's comprehensive driving courses. 10-hour beginner course, specialized training modules, and expert instruction. Learn driving with confidence in Bangalore."
        />
        <meta
          name="keywords"
          content="driving course bangalore, learn car driving, beginner driving course, driving lessons near me, driving school courses, car driving training, driving classes bangalore, best driving school"
        />
        {/* Essential meta tags */}
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://inlane.in/courses" />

        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content="Professional Driving Courses by InLane - From Basics to Mastery"
        />
        <meta
          property="og:description"
          content="Expert-led driving courses with structured learning modules. 10-hour beginner course, hands-on training, and comprehensive road safety education."
        />
        <meta property="og:url" content="https://inlane.in/courses" />
        <meta property="og:type" content="website" />
      </Helmet>

      <Navbar
        backgroundColor="#4ADE80"
        logo="./svg/Logo_white.svg"
        burgerMenu="./svg/burger_menu_white.svg"
      />
      <div className="min-h-screen bg-green-400 font-['glancyr'] p-12 bg-logoGreen">
        {/* Cars Row and Animation Container */}
        <div className="relative h-[300px] md:h-[500px] ">
          {/* Static cars row */}
          <div className="relative w-full pt-12">
            {/* Mobile view cars (3 cars) */}
            <div className="flex justify-center items-center gap-4 md:hidden">
              <img src="/svg/course_car.svg" alt="car" className="w-16" />
              <div className="w-16 min-w-[128px]" />{" "}
              {/* Space for yellow car */}
              <img src="/svg/course_car.svg" alt="car" className="w-16" />
            </div>

            {/* Desktop view cars (7 cars) */}
            <div className="hidden md:flex justify-center items-center gap-4">
              {Array.from({ length: 7 }, (_, i) =>
                i !== 3 ? (
                  <img
                    key={i}
                    src="/svg/course_car.svg"
                    alt="car"
                    className="w-auto"
                  />
                ) : (
                  <div key={i} className="w-auto min-w-[128px]" />
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
        <div className="max-w-5xl mx-auto mb-12 md:mt-60 bg-[#D9FF7A] rounded-[2rem] p-4 md:p-8 shadow-sm ">
          <div className="flex items-center gap-3 mb-6">
            <img
              src="/course/arrow.svg"
              alt="target"
              className="w-6 md:w-auto"
            />
            <h2 className="text-2xl md:text-3xl font-medium font-['glancyr']">
              Beginner Course
            </h2>
          </div>

          <div className="flex flex-col md:flex-row">
            {/* Left side - Course hours - full width on mobile, 70% on desktop */}
            <div className="w-full md:w-[70%] space-y-2 md:pr-8 mb-8 md:mb-0">
              {beginnerCourseHours.map((hour, index) => (
                <div key={index} className="relative">
                  <button
                    onClick={() => setExpandedHour(expandedHour === index ? null : index)}
                    className={`w-full flex items-center justify-between transition-colors rounded-[2rem] px-6 py-1 border border-black
                      ${expandedHour === index 
                        ? 'bg-white rounded-b-none border-b-0' 
                        : 'bg-[#D9FF7A]'
                      }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className="font-semibold text-xl">Hour {hour.hour}</span>
                      <span className="text-black/50">|</span>
                      <span className="font-semibold text-xl">{hour.title}</span>
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
                    <div className="bg-white rounded-b-[2rem] overflow-hidden border border-t-0 border-black">
                      {hour.sections.map((section, sectionIndex) => (
                        <div
                          key={sectionIndex}
                          className="px-6 py-2 text-lg font-medium border-b border-black/5 last:border-b-0"
                        >
                          {section}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right side - Course details - full width on mobile, 30% on desktop */}
            <div className="w-full md:w-[30%] space-y-6 flex flex-col justify-around items-start">
              <div className="flex items-center gap-3">
                <img src="/course/timer.svg" alt="duration" className="" />
                <div className="flex flex-col items-start text-2xl">
                  <span className=" text-2xl font-semibold ">
                    Duration:
                  </span>
                  <p className="text-2xl font-semibold">10 hours</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <img src="/course/coin.svg" alt="price" className="" />
                <div>
                  <span className="text-2xl font-semibold">
                    Price:
                  </span>
                  <p className="text-2xl font-semibold">₹10000</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <img src="/course/calculator.svg" alt="value" className="" />
                <div>
                  <span className="text-2xl font-semibold ">
                    Value Added
                  </span>
                  <p className="text-lg ">
                    We offer a vehicle for the Driver's License test day at an
                    additional cost.
                  </p>
                </div>
              </div>

              <div className="flex flex-row items-center justify-center gap-4 mt-8">
                <Button
                  variant="contained"
                  component="a"
                  href="https://forms.gle/Up128jny4nRz5DH59"
                  target="_blank"
                  rel="noopener noreferrer"
                  startIcon={<img src="/course/rocket.svg" alt="rocket" className="w-6 h-6" />}
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
                      xs: "8px 24px",
                      sm: "10px 20px",
                      md: "1px 25px",
                    },
                    fontFamily: "Bricolage Grotesque",
                    fontSize: {
                      xs: "1rem",
                      sm: "1.125rem",
                      md: "1.5rem",
                    },
                  }}
                >
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Mini Courses Section */}
      </div>
      <MiniCourseNew />

      <FAQ />
      <Footer />
    </>
  );
};

export default NewCoursePage;
