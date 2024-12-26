import React, { useState } from "react";
import { Button } from "@mui/material";
import { Rocket } from "lucide-react";

const MiniCourseNew = () => {
  // Initialize all courses as expanded
  const [expandedStates, setExpandedStates] = useState({
    0: true,
    1: true,
    2: true,
    3: true
  });

  const toggleExpand = (index) => {
    setExpandedStates(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const miniCourses = [
    {
      title: "City Driving",
      points: [
        "Bumper to bumper traffic",
        "Navigating flyovers, intersections and roundabouts",
        "Maintaining and changing lanes",
        "Evening driving",
      ],
      duration: "4 hours",
      price: "₹4000",
      bgColor: "bg-[#D1B3FF]",
    },
    {
      title: "Highway Driving",
      points: [
        "Highway entry/exit with maintaining speed limit",
        "Pitstops for tire pressure and gas check",
        "Maneuver - Changing lanes and U-turns",
        "Pass other cars safely",
      ],
      duration: "2 hours",
      price: "₹2000",
      bgColor: "bg-[#FFC229]",
    },
    {
      title: "Parking",
      points: [
        "Entry/exit parking spots",
        "Parallel parking",
        "Perpendicular parking",
        "On-road parking",
      ],
      duration: "2 hours",
      price: "₹2000",
      bgColor:"bg-[#6BECFF]",
    },
    {
      title: "Night Driving",
      points: [
        "Handling low visibility conditions",
        "Using high/low beam appropriately",
        "Night safety protocols",
        "Emergency night procedures",
      ],
      duration: "3 hours",
      price: "₹3000",
      bgColor: "bg-[#FF99F5]",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto mb-12 p-4 md:p-12 pt-8 md:pt-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        {miniCourses.map((course, index) => (
          <div
            key={index}
            className={`${course.bgColor} rounded-[1rem] md:rounded-[2rem] p-4 md:p-8 relative min-h-[280px] md:min-h-[300px] w-full`}
          >
            <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
              <img src="/course/arrow.svg" alt="arrow" className="w-6 md:w-auto" />
              <h2 className="text-xl md:text-3xl font-medium font-['glancyr']">{course.title}</h2>
            </div>

            <div className="mb-4 md:mb-6">
              <button
                onClick={() => toggleExpand(index)}
                className="flex items-center gap-2 font-medium mb-3 hover:text-gray-700 rounded-full border-2 border-black/20 px-3 md:px-4 py-1 md:py-2 text-sm md:text-base"
              >
                <span className="font-bold">What will we ace together?</span>
                <svg
                  className={`w-4 h-4 transition-transform ${
                    expandedStates[index] ? "rotate-180" : ""
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

              <div className={`transition-all duration-300 ${
                expandedStates[index] ? 'opacity-100 max-h-[500px]' : 'opacity-0 max-h-0'
              } overflow-hidden`}>
                <ul className="space-y-2 pl-4 ">
                  {course.points.map((point, idx) => (
                    <li key={idx} className="text-md font-semibold">
                      • {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 md:gap-6">
              <div className="flex items-center gap-2">
                <img
                  src="/course/timer.svg"
                  alt="duration"
                  className="w-8 h-8 md:w-12 md:h-12"
                />
                <span className="text-xs md:text-sm">Duration: <br /> <span className="font-bold">{course.duration}</span></span>
              </div>
              <div className="flex items-center gap-2">
                <img
                  src="/course/coin.svg"
                  alt="price"
                  className="w-8 h-8 md:w-12 md:h-12"
                />
                <span className="text-xs md:text-sm">Price: <br /> <span className="font-bold">{course.price}</span></span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8 md:mt-12">
        <Button
          variant="contained"
          component="a"
          href="https://forms.gle/Up128jny4nRz5DH59"
          startIcon={<Rocket />}
          sx={{
            backgroundColor: "#00CE84",
            color: "white",
            fontWeight: "bold",
            fontFamily: "Bricolage Grotesque",
            textTransform: "none",
            border: "2px solid white",
            borderRadius: "50px",
            padding: {
              xs: "8px 24px",
              md: "10px 40px",
            },
            fontSize: {
              xs: "1rem",
              md: "1.125rem",
            },
            "&:hover": {
              backgroundColor: "#00CE84",
            },
          }}
        >
          Sign Up
        </Button>
      </div>
    </div>
  );
};

export default MiniCourseNew;