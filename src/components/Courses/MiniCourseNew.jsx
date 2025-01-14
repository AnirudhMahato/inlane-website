import React, { useState } from "react";
import { Button } from "@mui/material";

const MiniCourseNew = () => {
  // Initialize all courses as collapsed
  const [expandedStates, setExpandedStates] = useState({
    0: false,
    1: false,
    2: false,
    3: false
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-3xl mx-auto">
        {miniCourses.map((course, index) => (
          <div
            key={index}
            className={`${course.bgColor} rounded-[2rem] p-6 md:p-8 relative w-full`}
          >
            <div className="flex items-center gap-3 mb-6">
              <img src="/course/arrow.svg" alt="arrow" className="w-8 md:w-10" />
              <h2 className="text-2xl md:text-3xl font-bold font-['Bricolage Grotesque']">
                {course.title}
              </h2>
            </div>

            <div className="mb-6">
              <button
                onClick={() => toggleExpand(index)}
                className="flex items-center gap-2 font-bold mb-4 rounded-full border-[1px] border-black/20 px-4 py- text-lg"
              >
                <span>What will we ace together?</span>
                <svg
                  className={`w-5 h-5 transition-transform ${
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
                <ul className="space-y- pl-4">
                  {course.points.map((point, idx) => (
                    <li key={idx} className="text-md font-normal list-disc ms-2">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex items-center gap-8">
              <div className="flex items-center ">
                <img
                  src="/course/timer.svg"
                  alt="duration"
                  className="w-10 h-10 md:w-12 md:h-12"
                />
                <div className="">
                  <span className="text-lg font-semibold">Duration:</span>
                  <p className= " text-lg font-bold">{course.duration}</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <img
                  src="/course/coin.svg"
                  alt="price"
                  className="w-10 h-10 md:w-12 md:h-12"
                />
                <div>
                  <span className="text-lg font-semibold">Price:</span>
                  <p className="text-lg font-bold">{course.price}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-12">
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
  );
};

export default MiniCourseNew;