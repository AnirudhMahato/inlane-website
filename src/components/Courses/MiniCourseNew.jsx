import { Button } from '@mui/material';
import { Rocket } from 'lucide-react';
import React, { useState } from 'react'

const MiniCourseNew = () => { 
    const [expandedCourse, setExpandedCourse] = useState(null);

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
      bgColor: "bg-purple-200",
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
      bgColor: "bg-amber-300",
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
      bgColor: "bg-sky-200",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto mb-12 px-4 bg-white mt-12">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {miniCourses.map((course, index) => (
        <div
          key={index}
          className={`${course.bgColor} rounded-[2rem] p-6 relative`}
        >
            <div className='flex flex-row items-center justify-start gap-2'>
                <img src="/course/arrow.svg" className='w-12 h-12' alt="" />
                <h3 className="text-xl font-bold mb-0"> {course.title}</h3>
            </div>

          <div className="mb-6">
            <button
              onClick={() =>
                setExpandedCourse(expandedCourse === index ? null : index)
              }
              className="flex items-center gap-2 font-medium mb-3"
            >
              <span>What will we ace together?</span>
              <svg
                className={`w-4 h-4 transition-transform ${
                  expandedCourse === index ? "rotate-180" : ""
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

            <ul className="space-y-1">
              {course.points.map((point, idx) => (
                <li key={idx} className="text-sm">
                  • {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-4 absolute bottom-6">
            <div className="flex items-center gap-2">
              <img
                src="/course/timer.svg"
                alt="duration"
                className="w-5 h-5"
              />
              <span className="text-sm">Duration: {course.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <img
                src="/course/coin.svg"
                alt="price"
                className="w-5 h-5"
              />
              <span className="text-sm">Price: {course.price}</span>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Central Sign Up Button */}
    <div className="flex justify-center mt-8">
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
          padding: "10px 40px",
          fontSize: "1.125rem",
          "&:hover": {
            backgroundColor: "#00CE84",
          },
        }}
      >
        Sign Up
      </Button>
    </div>
  </div>
  )
}

export default MiniCourseNew