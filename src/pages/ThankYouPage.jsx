import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useMediaQuery, useTheme, Box, Button, Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Search, SearchIcon } from "lucide-react";
import ScrollToTop from '../components/ScrollToTop';

const ThankYou = () => {
  const location = useLocation();
  const { name, email } = location.state || {};
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const iconSizes = {
    small: { width: 16, height: 16 },
    medium: { width: 30, height: 30 },
    large: { width: 30, height: 30 }
  };

  const getIconSize = () => {
    if (isSmallScreen) return iconSizes.small;
    if (isMediumScreen) return iconSizes.medium;
    return iconSizes.large;
  };

  return (
    <>
    <ScrollToTop />
      <Navbar backgroundColor='#FFFFFF' logo='./LANE_LOGO.svg' burgerMenu='/PurpleHamburger.png' />
      
      <div className="h-24"></div>
      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center p-8 md:p-8 relative ">
        {/* Background with stars */}
        <div className="absolute inset-0 bg-[#FFFFFFFF]" style={{ backgroundImage: `url('/star-bg.png')`, backgroundSize: isSmallScreen ? "100%" : "72%", backgroundRepeat: "no-repeat", height:isSmallScreen? 300:650, backgroundPosition: "center" }}>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center mx-auto text-center mt-12 md:mt-24">
          {/* Emoji */}
          <div >
            <img 
              src="/happy-face-emoji-man.png" 
              alt="Happy Emoji" 
              className="w-32 md:w-42 lg:w-56"
            />
          </div>

          {/* Thank you text with tag background */}
          <div className="relative mb-6 md:mb-12">
            <img
              src="/thank-you-tag.png"
              alt="Thank you background"
              className="absolute  left-1/2 transform -translate-x-1/2 md:w-[550px]"
            />
            <h1 className="relative font-['Bricolage_Grotesque'] text-xl md:text-4xl font-bold text-black">
              Thank you for choosing us ⭐
            </h1>
          </div>

          {/* Message */}
          <p className="font-['Bricolage_Grotesque'] text-base md:text-2xl font-medium text-black mb-8 md:mb-12 text-left ">
            Our team will get back to you shortly.<br />
            In the meantime dig into the universe of<br />
            driving 🚗🥳
          </p>

          {/* Button */}
          <Link 
            to="https://www.instagram.com/inlane.in/"
            className="inline-block"
          >

<Button
                type="submit"
                variant="contained"
                sx={{
                  background: "linear-gradient(90deg, #00CE84 0%, #00BC78 100%)",
                  color: "white",
                  fontWeight: "bold",
                  fontFamily: "Bricolage Grotesque",
                  textDecoration: "none",
                  textTransform: "none",
                  "&:hover": {
                    background: "linear-gradient(90deg, #00CE84 0%, #00BC78 100%)",
                  },
                  border: "2px solid #FFFFFF",
                  borderRadius: "50px",
                  padding: {
                    xs: "0.125rem 0.5rem",
                    sm: "0.25rem 0.75rem",
                    md: "0.25rem 0.75rem",
                  },
                  fontSize: { xs: "0.8rem", sm: "1rem", md: "24px" },
                  whiteSpace: "nowrap",
                  boxShadow: "2px 4px 4px rgba(0, 0, 0, 0.35)",
                }}
              >
            
              <SearchIcon {...getIconSize()} />
             
              Discover More
            </Button>
          </Link>
        </div>
      </main>
      
      <div className={`
        ${isSmallScreen ? "h-24" : ""}
        ${isMediumScreen ? "h-32" : ""}
        ${!isSmallScreen && !isMediumScreen ? "h-48" : ""}
      `}></div>

      <Footer />
    </>
  );
};

export default ThankYou;

