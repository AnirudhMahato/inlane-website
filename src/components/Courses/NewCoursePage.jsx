import React, { useState } from 'react'
import Footer from '../Footer';
import FAQ from './FAQ';
import Navbar from '../Navbar';

const NewCoursePage = () => {
  const [expandedHour, setExpandedHour] = useState(null);
  const [expandedCourse, setExpandedCourse] = useState(null);

  const beginnerCourseHours = Array.from({ length: 10 }, (_, i) => ({
    hour: i + 1,
    title: "Get to know your car",
    details: "Additional information about this hour will be shown here"
  }));

  const miniCourses = [
    {
      title: "City Driving",
      points: [
        "Bumper to bumper traffic",
        "Navigating flyovers, intersections and roundabouts",
        "Maintaining and changing lanes",
        "Evening driving"
      ],
      duration: "4 hours",
      price: "₹4000",
      bgColor: "bg-purple-200"
    },
    {
      title: "Highway Driving",
      points: [
        "Highway entry/exit with maintaining speed limit",
        "Pitstops for tire pressure and gas check",
        "Maneuver - Changing lanes and U-turns",
        "Pass other cars safely"
      ],
      duration: "2 hours",
      price: "₹2000",
      bgColor: "bg-amber-300"
    },
    {
      title: "Parking",
      points: [
        "Entry/exit parking spots",
        "Parallel parking",
        "Perpendicular parking",
        "On-road parking"
      ],
      duration: "2 hours",
      price: "₹2000",
      bgColor: "bg-sky-200"
    }
  ];

  return (
    <>
    
      <Navbar backgroundColor='#4ADE80' logo='./svg/Logo_white.svg' burgerMenu='./svg/burger_menu_white.svg' />
    <div className="min-h-screen bg-green-400">
      
      {/* Cars Row */}
      <div className="flex justify-center gap-2 py-6">
        {Array.from({ length: 7 }, (_, i) => (
          <img 
            key={i} 
            src={i === 3 ? "/svg/course_car_yellow.svg" : "/svg/course_car.svg"} 
            alt="car" 
            // className="w-16 h-16"
          />
        ))}
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

      <div className="flex justify-center">
        <img src="/course/letgetyoudriving.svg" alt="car" className="" />
      </div>


      {/* Beginner Course Section */}
      <div className="max-w-3xl mx-auto mb-12 bg-[#e5ff9f] rounded-[2rem] p-8">
        <div className="flex items-center gap-3 mb-6">
          <img src="/target-icon.svg" alt="target" className="w-8 h-8" />
          <h2 className="text-3xl font-bold">Beginner Course</h2>
        </div>

        <div className="space-y-3">
          {beginnerCourseHours.map((hour, index) => (
            <div key={index} className="relative">
              <button
                onClick={() => setExpandedHour(expandedHour === index ? null : index)}
                className="w-full flex items-center justify-between bg-white/50 rounded-full px-6 py-3 hover:bg-white/60 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <span className="font-semibold">Hour {hour.hour}</span>
                  <span className="text-gray-700">{hour.title}</span>
                </div>
                <svg
                  className={`w-5 h-5 transition-transform ${expandedHour === index ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {expandedHour === index && (
                <div className="bg-white/30 mt-2 p-4 rounded-2xl">
                  {hour.details}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <img src="/hourglass-icon.svg" alt="duration" className="w-6 h-6" />
            <span className="text-lg">Duration: 10 hours</span>
          </div>
          <div className="flex items-center gap-3">
            <img src="/rupee-icon.svg" alt="price" className="w-6 h-6" />
            <span className="text-lg">Price: ₹10000</span>
          </div>
          <div className="flex items-center gap-3">
            <img src="/value-added-icon.svg" alt="value" className="w-6 h-6" />
            <div>
              <span className="text-lg font-semibold">Value Added</span>
              <p className="text-sm">We offer a vehicle for the Driver's License test day at an additional cost.</p>
            </div>
          </div>
          <button className="self-end bg-green-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-600 transition-colors">
            Sign Up
          </button>
        </div>
      </div>

      {/* Mini Courses Section */}
      <div className="max-w-3xl mx-auto mb-12">
        <h2 className="inline-block bg-yellow-300 px-6 py-2 rounded-full text-2xl font-bold mb-8">
          Mini Courses
        </h2>

        <div className="grid grid-cols-3 gap-6">
          {miniCourses.map((course, index) => (
            <div key={index} className={`${course.bgColor} rounded-[2rem] p-6`}>
              <div className="flex items-center gap-3 mb-4">
                <img src="/target-icon.svg" alt="target" className="w-6 h-6" />
                <h3 className="text-xl font-bold">{course.title}</h3>
              </div>
              
              <div className="mb-4">
                <button
                  onClick={() => setExpandedCourse(expandedCourse === index ? null : index)}
                  className="flex items-center gap-2 bg-white/50 rounded-full px-4 py-2 hover:bg-white/60 transition-colors"
                >
                  <span>What will we ace together?</span>
                  <svg
                    className={`w-4 h-4 transition-transform ${expandedCourse === index ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {expandedCourse === index && (
                  <ul className="mt-3 space-y-2 pl-4">
                    {course.points.map((point, idx) => (
                      <li key={idx} className="text-sm">{point}</li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="flex justify-between items-center mt-auto">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <img src="/hourglass-icon.svg" alt="duration" className="w-5 h-5" />
                    <span>Duration: {course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <img src="/rupee-icon.svg" alt="price" className="w-5 h-5" />
                    <span>Price: {course.price}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center pb-12">
        <button className="bg-green-500 text-white px-12 py-3 rounded-lg flex items-center gap-2">
          Sign Up
        </button>
      </div>

      <FAQ />

    </div>
      <Footer />

    </>
  );
}

export default NewCoursePage