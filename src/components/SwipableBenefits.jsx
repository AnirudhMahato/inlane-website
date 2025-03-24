import React, { useState } from 'react';
import { Card } from '@mui/material';
import Button from '@mui/material/Button';
import Rocket from './SVGs/Rocket';
import { useMediaQuery, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Location to practice routes mapping
const locationRoutes = {
  "HSR LAYOUT": "BDA complex and 27th Main Road",
  "KR PURAM": "Old Madras Road (NH75), Devasandra Main Road, Hoodi Main Road",
  "MAHADEVAPURA": "Whitefield Main Road, Graphite India Road, ITPL Main Road",
  "WHITEFIELD": "Varthur Road, Channasandra Main Road, ECC Road",
  "MARATHAHALLI": "Outer Ring Road (ORR), Varthur Main Road, Old Airport Road",
  "KUDLU GATE": "Hosur Road (NH44), Kudlu Main Road, Begur Road",
  "KUDLU": "Haralur Road, Singasandra Main Road, Hosa Road",
  "BEGUR": "Begur Main Road, Begur-Koppa Road, Hulimavu-Begur Road",
  "INDIRANAGAR": "100 Feet Road, CMH Road, Indiranagar 1st Stage Main Road",
  "BENNIGANHALLI": "Old Madras Road (NH75), Benniganhalli(tin factory) Main Road, Pai Layout Main Road",
  "BAIYAPPANAHALLI": "Swami Vivekananda Road, Baiyappanahalli Road, NGEF Main Road",
  "SWAMI VIVEKANANDA ROAD": "Old Madras Road (NH75), Swami Vivekananda Road, Cambridge Road",
  "TC PALYA": "TC Palya Main Road, Ramamurthy Nagar Main Road, Anandapura Main Road",
  "HORAMAVU": "Horamavu Main Road, Outer Ring Road (ORR), Horamavu-Agara Road",
  "RAMAMURTHY NAGAR": "Ramamurthy Nagar Main Road, Outer Ring Road (ORR), TC Palya Main Road",
  "KASTURI NAGAR": "Kasturi Nagar Main Road, Outer Ring Road (ORR) – Kasturi Nagar Stretch, NGEF Layout Roads",
  "HOODI": "Hoodi Main Road, Whitefield-Hoodi Road, Graphite India Road",
  "ITPL": "ITPL Main Road, Vydehi Hospital Road, Brookefield Road",
  "AVALAHALLI": "Avalahalli Main Road, Old Madras Road (NH75) – Avalahalli Stretch, Medahalli-Avalahalli Road"
};

const BenefitsSplitLayout = ({ location = "HSR Layout" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [swipeKeyframes, setSwipeKeyframes] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Get practice routes for the current location or use a default message
  const practiceRoutes = locationRoutes[location.toUpperCase()] || "No practice routes available for this location.";

  const benefits = [
    {
      id: 1,
      title: "Tailored driving lessons",
      description: "Tailored driving lessons for beginners & advanced learners",
      color: "bg-[#FFC229]",
      image: "/benefits3.png"
    },
    {
      id: 2,
      title: "Local expertise",
      description: `Local experts who understand ${location}'s traffic patterns & shortcuts`,
      color: "bg-[#FF99F5]",
      image: "/benefits2.png"
    },
    {
      id: 3,
      title: "Practice routes",
      description: `Practice routes around ${practiceRoutes} and others`,
      color: "bg-[#6BECFF]",
      image: "/benefits1.png"
    }
  ];

  const cardsLength = benefits.length;

  const modulo = (m, n) => {
    return ((m % n) + n) % n;
  };

  const dragEnd = (event, info) => {
    // Reduced swipe threshold for mobile to improve usability
    const swipeThreshold = isMobile ? 100 : 200;
    const velocityThreshold = isMobile ? 50 : 100;

    if ((Math.abs(info.velocity.x) > velocityThreshold) & (Math.abs(info.offset.x) > swipeThreshold)) {
      setCurrentIndex((currentIndex) => (currentIndex + 1) % cardsLength);
      setSwipeKeyframes(info.offset.x);
    }
  };

  // Added touch-friendly interactions for mobile users (tap to advance)
  const handleCardClick = (index) => {
    if (isMobile && index === currentIndex) {
      setCurrentIndex((currentIndex + 1) % cardsLength);
    }
  };

  return (
    <div className="w-full mb-10 bg-[#00CE84] p-4 sm:p-6 md:p-8  ">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
          {/* Left side content */}
          <div className="space-y-4 md:space-y-6">
            <div className="space-y-2 md:space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-8 lg:mb-12">
  Looking for a{' '}
  <span className="inline-block">
    driving school in{' '}<br/>
    <span className="location-wrapper">
      <span className="location-lines">
        {location}? {/* The text will naturally wrap based on available space */}
      </span>
    </span>
  </span>
</h1>
              <h3 className="text-lg sm:text-xl md:text-3xl font-bold ">
                Our expert instructors in {location} are 
                here to help you drive <br/> confidently and safely
                <br/>
                <br/>
              </h3>

            </div>

            <Button
              variant="contained"
              component={Link}
              to="/signup"
              startIcon={
                <Rocket
                  color={{ color: "#000000", width: { xs: 10, sm: 20, md: 24, lg: 20} , height: 24 }}
                />
              }
              sx={{
                background: "linear-gradient(90deg, #D9FF7A 0%, #C1EC55 100%)",
                color: "#000000",
                "&:hover": {
                  background: "linear-gradient(90deg, #D9FF7A 0%, #C1EC55 100%)",
                },
                border: "3px solid #FFFFFF",
                borderRadius: "50px",
                padding: { xs: "12px 24px", sm: "14px 32px", md: "16px 44px" },
                width: { xs: "55%", sm: "30%", md: "40%", lg: 264 },
                height: { xs: 38, sm: 44, md: 53.47 },
                fontFamily: "Bricolage Grotesque",
                fontSize: { xs: "16px", sm: "18px", md: "22px", lg: "26px" },
                fontWeight: "bold",
                textTransform: "none",
                marginBottom: { xs: "64px", sm: "96px", md: "128px" },
                boxShadow: "6px 8px 4px rgba(0, 0, 0, 0.35)",
              }}
            >
              Start Now!
            </Button>
          </div>

          {/* Right side cards */}  
          <motion.section className="relative h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] w-[200px] sm:w-[250px] md:w-[350px] lg:w-[400px] mx-10 mt-10 sm:mt-12 md:mt-0 lg:mt-0">
            {benefits.map((benefit, index) => {
              const diff = modulo(index - currentIndex, cardsLength);
              return (
                <motion.article
                  key={benefit.id}
                  className={`absolute inset-0 ${benefit.color} shadow-lg rounded-2xl border-2 border-white`}
                  initial={false}
                  animate={{
                    zIndex: diff === cardsLength - 1 ? [10 * cardsLength, 10 * (cardsLength - diff)] : 10 * (cardsLength - diff),
                    scale: 1.0 - 0.05 * diff,
                    x: diff === cardsLength - 1 ? [swipeKeyframes, 60 * diff] : 60 * diff,
                    rotate: diff === cardsLength - 1 ? [10, 0] : 5 * diff,
                  }}
                  transition={{
                    duration: 0.5,
                    rotate: {
                      duration: 0.7,
                    },
                  }}
                  drag={currentIndex === index ? "x" : false}
                  whileDrag={{
                    rotate: "5deg",
                    transition: {
                      duration: 0.1,
                    },
                  }}
                  // Added hover and tap effects for better interactive feedback
                  whileHover={currentIndex === index ? { scale: 1.02 } : {}}
                  whileTap={currentIndex === index ? { scale: 0.98 } : {}}
                  onDragEnd={dragEnd}
                  // Added touch-friendly interactions
                  onClick={() => handleCardClick(index)}
                  dragSnapToOrigin
                  style={{
                    cursor: currentIndex === index ? 'grabbing' : 'grab',
                    boxShadow: currentIndex === index ? '0 25px 50px -12px rgba(0, 0, 0, 0.25)' : '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                    width: '100%',
                    height: '100%',
                    maxWidth: '100%',
                    maxHeight: '100%',
                  }}
                >
                  <div className="h-full p-3 sm:p-4 md:p-6 flex flex-col">
                    <div className="relative h-16 sm:h-20 md:h-32 lg:h-48 mb-2 sm:mb-4 md:mb-6 mt-6 sm:mt-8 md:mt-10">
                      <img
                        src={benefit.image}
                        alt={benefit.title}
                        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-contain ${
                          index === 0 ? 'h-40 w-40 sm:h-48 sm:w-48 md:h-64 md:w-64 lg:h-80 lg:w-80' : index === 1 ? 'h-32 w-32 sm:h-40 sm:w-40 md:h-56 md:w-56 lg:h-72 lg:w-72' :  'h-24 w-24 sm:h-28 sm:w-28 md:w-48 md:h-48 lg:w-64 lg:h-64'
                        }`}
                      />
                    </div>
                    <h3 className="text-sm sm:text-base md:text-xl lg:text-2xl font-bold mb-2 md:mb-3 text-center justify-center mt-4 sm:mt-6 md:mt-8 lg:mt-10">{benefit.description}</h3>
                  </div>
                </motion.article>
              );
            })}
          </motion.section>
        </div>
      </div>
      
      {/* Add custom CSS for the location tag */}
      <style jsx>{`
        .location-wrapper {
  position: relative;
}

.location-lines {
  background-image: url('/location_tag.svg');
  background-size: cover;
  background-position: center;
  line-height: 1.2;
  font-weight: bold;
}
      `}</style>
    </div>
  );
};

export default BenefitsSplitLayout;