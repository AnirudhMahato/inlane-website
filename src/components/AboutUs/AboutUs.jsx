import React from "react";

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Aaksh Mishra",
      role: "Our tech wizard keeping the engine running with his code!",
      image: "/team/aakash.jpg",
    },
    {
      name: "Jay Narendra Reddy",
      role: "The guy proving that magic exists when you can see it!",
      image: "/team/jay.jpg",
    },
    {
      name: "Devansh Reddy",
      role: "Master of the pit stop, making sure everything runs smooth! 🔧",
      image: "/team/devansh.jpg",
    },
    {
      name: "Srishti",
      role: "The creative genius painting the track with all the design magic you see ✨",
      image: "/team/srishti.jpg",
    },
    {
      name: "Arpit, Chirag, Chinmay (Profam)",
      role: "Our internal pit crew, making sure business runs at its fastest too! 😎",
      image: "/team/operations.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-[#D1B3FF] font-grotesque font-normal">
      {/* Hero Section */}
      <div className="relative py-16 text-center ">
        <img src="/svg/Clouds.svg" alt="cloud" className="absolute w-full" />
        {/* <img src="/svg/Clouds.svg" alt="cloud" className="absolute top-4 right-8 w-16" /> */}
        <div className="max-w-2xl mx-auto px-4">
          <div className="space-y-2">
            <div className="bg-emerald-400 text-white text-5xl font-bold py-2 px-6 rounded-lg inline-block transform -rotate-2">
              EMPOWERING
            </div>
            <div className="bg-emerald-400 text-white text-5xl font-bold py-2 px-6 rounded-lg inline-block transform rotate-1">
              the Next Generation
            </div>
            <div className="bg-emerald-400 text-white text-5xl font-bold py-2 px-6 rounded-lg inline-block transform -rotate-1">
              of drivers 🚀
            </div>
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="w-full  mt-[20rem]">
        <div className="bg-white rounded-3xl py-8 shadow-lg w-full">
          {/* LANE Introduction */}
          <div className="mb-12 w-1/2 m-auto flex flex-col items-center justify-around">
            <div className="flex justify-start items-center m-auto gap-3 mb-4">
              <div className="bg-[#D1B3FF] p-2 rounded-full">
                <img
                  src="/steering-wheel-icon.png"
                  alt="steering wheel"
                  className="w-8 h-8"
                />
              </div>
              <h2 className="text-3xl font-bold">We at LANE</h2>
            </div>
            <p className="text-lg mb-4">
              Believe driving should be fun, not stressful 🚗 It's not rocket
              science, and trust us—it's way easier when you're taught the right
              way. We're on a mission to turn learners into confident,
              responsible drivers who actually enjoy being behind the wheel! 😊
            </p>
            <p className="text-lg">
              Plus, we're working on some seriously cool tech that tracks your
              driving style while you learn! Think of it as your driving buddy
              that entertains you, helps you level up and avoid accidents.
              ⚡🎮❤️
            </p>
          </div>

          {/* Founder Section */}
          <div className="bg-[#D1B3FF] rounded-3xl p-8 mb-12 w-full ">
            <div className="flex flex-col items-center gap-3 mb-4"></div>

            <div className="flex flex-col items-center gap-3 mb-4">
              <div className="flex  justify-center items-start mb-12 gap-12">
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
                    gets that you don't want the boring experience your parents
                    had. It's time for something fresh, fun and so much cooler!
                    ✨
                  </p>
                </div>

                <div className="bg-red-500 p-2 h-[400px] rounded-xl w-[30%]">
                  {/* <img src="/svg/Clouds.svg" alt="cloud" className="w-8 h-8" /> */}
                </div>
              </div>
              {/* Team Section */}
              <div className="bg-white rounded-3xl p-8 mb-12 w-full ">
                <h2 className="text-3xl font-bold mb-8">
                  And now, the <span className="text-purple-600">Pit Crew</span>{" "}
                  that is making it all possible! 🏎️🔧
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  {teamMembers.map((member, index) => (
                    <div key={index} className="bg-purple-50 rounded-2xl p-4">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-48 object-cover rounded-xl mb-4"
                      />
                      <h3 className="font-bold text-lg mb-2">{member.name}</h3>
                      <p className="text-gray-600 text-sm">{member.role}</p>
                    </div>
                  ))}
                </div>

                <div className="text-center bg-purple-50 rounded-2xl p-6">
                  <p className="text-gray-600 mb-2">
                    P.S. Big thanks to Rakshith and Shouvik, the awesome friends
                    at Workbench who made everything running possible!
                  </p>
                  <p className="text-gray-600">
                    We couldn't do it without you! 💜
                  </p>
                </div>

                <div className="text-center mt-8">
                  <button className="bg-emerald-400 text-white px-8 py-3 rounded-full font-bold hover:bg-emerald-500 transition-colors">
                    Join Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
