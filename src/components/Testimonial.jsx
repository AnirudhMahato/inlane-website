import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
  Card,
  Link as LinkMui,
  CardContent,
  Modal,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import StarIcon from "@mui/icons-material/Star";
import Rocket from "./SVGs/Rocket";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import styled from "styled-components";
import testimonialsData from "../data/testimonials";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { Link } from "react-router-dom";

const TestimonialCard = styled(Box)`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  transition: transform 0.3s ease-in-out;
`;

const BorderedStarIcon = styled('svg')`
  width: 16px;
  height: 16px;
`;

const ScrollContainer = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  padding: 0;
`;

const ScrollingRow = styled.div`
  display: flex;
  animation: ${props => props.direction === 'left' ? 
    'scrollLeft 40s linear infinite' : 
    'scrollRight 40s linear infinite'};
  gap: 1rem;
  
  @media (max-width: 600px) {
    gap: 0.5rem;
    animation: ${props => props.direction === 'left' ? 
      'scrollLeft 8s linear infinite' : 
      'scrollRight 8s linear infinite'};
  }

  @keyframes scrollLeft {
    0% { transform: translateX(0); }
    100% { transform: translateX(-100%); }
  }

  @keyframes scrollRight {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(0); }
  }
`;

const Testimonial = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const smallIconStyle = { color: "#000000", width: 24, height: 24 };
  const mediumIconStyle = { color: "#000000", width: 34, height: 24 };
  const largeIconStyle = { color: "#000000", width: 44, height: 24 };
  const [openModal, setOpenModal] = useState(false);
  const [activeVideo, setActiveVideo] = useState("");
  const [isSticky, setIsSticky] = useState(false);
  const [isWheelSticky, setIsWheelSticky] = useState(false);
  const [showReviews, setShowReviews] = useState(true);
  const [bridgeOffset, setBridgeOffset] = useState(0);
  const [wheelOffset, setWheelOffset] = useState(0);
  const IconStyle = isSmallScreen
    ? smallIconStyle
    : isMediumScreen
    ? mediumIconStyle
    : largeIconStyle;

 const testimonials = testimonialsData;

  useEffect(() => {
    const handleScroll = () => {
      const bridgeText = document.getElementById('bridge-text');
      const wheelText = document.getElementById('wheel-text');
      const reviewsSection = document.getElementById('reviews-section');
      
      if (bridgeText && wheelText && reviewsSection) {
        const bridgeRect = bridgeText.getBoundingClientRect();
        const wheelRect = wheelText.getBoundingClientRect();
        const reviewsRect = reviewsSection.getBoundingClientRect();
        
        // Only make elements sticky if we haven't scrolled to reviews section
        if (reviewsRect.top > 160) {
          // Bridge text sticks first
          setIsSticky(bridgeRect.top <= 0);
          
          // Wheel text sticks after bridge text
          setIsWheelSticky(wheelRect.top <= 80);
        } else {
          // Remove sticky positioning when reaching reviews
          setIsSticky(false);
          setIsWheelSticky(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenModal = (videoUrl) => {
    setActiveVideo(videoUrl);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setActiveVideo("");
  };

  // Split testimonials into two rows
  const firstRow = testimonials.slice(0, Math.ceil(testimonials.length / 2));
  const secondRow = testimonials.slice(Math.ceil(testimonials.length / 2));

  // Helper function to get embedded Drive URL
  const getEmbeddedDriveUrl = (driveUrl) => {
    const fileId = driveUrl.split('/d/')[1].split('/')[0];
    return `https://drive.google.com/file/d/${fileId}/preview`;
  };

  return (
    <Box
      id="testimonial-section"
      sx={{
        backgroundColor: "#00CE84",
        // padding: { xs: 2, sm: 3, md: 4 },
        textAlign: "center",
        backgroundImage: "url('/TestimonialBG.svg')",
        marginTop: { xs: "64px", sm: "96px", md: "128px" },
        // padding: { xs: 2, sm: 3, md: 4 },
      }}
    >
      <Typography
        id="bridge-text"
        variant="h3"
        sx={{
          position: isSticky ? 'sticky' : 'relative',
          top: 0,
          zIndex: 10,
          background: isSticky ? 'linear-gradient(180deg, rgba(0, 206, 132, 0.9) 0%, rgba(0, 206, 132, 0) 100%)' : 'transparent',
          backdropFilter: isSticky ? 'blur(8px)' : 'none',
          WebkitBackdropFilter: isSticky ? 'blur(8px)' : 'none',
          paddingY: 2,
          fontSize: { xs: "18px", sm: "40px", md: "40px" },
          color: "#000000",
          mt: { xs: 4, sm: 6, md: 8 },
          mb: 40,
          fontWeight: 700,
          fontFamily: "Bricolage Grotesque",
        }}
      >
        Let's Bridge the Gap Between you and
      </Typography>
      <Box
        sx={{
          position: isWheelSticky ? 'sticky' : 'relative',
          top: isSticky ? '80px' : 0,
          zIndex: 9,
          display: "inline-block",
          backgroundImage: "url('src/assets/images/Tag5.svg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "center",
          width: { xs: "90%", sm: "80%", md: 300.75 },
          maxWidth: 461.75,
          mb: 6,
          mt: 4,
          padding: { xs: "3px", sm: "15px", md: "20px" },
          marginBottom: { xs: "100px", sm: "96px", md: "128px" },
        }}
      >
        <Typography
          id="wheel-text"
          variant="h5"
          fontWeight="bold"
          fontSize={{ xs: "20px", sm: "38px", md: "40px" }}
          color={"#000000"}
          fontFamily={"Bricolage Grotesque"}
        >
          The Wheel
        </Typography>
      </Box>
      <Box 
        id="reviews-section"
        sx={{ 
          visibility: 'visible',
          opacity: 1,
          margin: "0 auto", 
          marginBottom: { xs: "64px", sm: "96px", md: "128px" },
          padding: 0,
          position: 'relative',
          zIndex: 8
        }}
      >
        <ScrollContainer>
          <ScrollingRow direction="left">
            {[...firstRow, ...firstRow].map((testimonial, index) => (
              <div key={index} className="min-w-[300px] sm:min-w-[350px] md:min-w-[400px]">
                {testimonial.videoLink ? (
                  <div 
                    className="rounded-[32px] border-[12px] xs:border-[8px] border-white overflow-hidden cursor-pointer relative h-[250px] xs:h-[200px] md:h-[300px]"
                    onClick={() => handleOpenModal(getEmbeddedDriveUrl(testimonial.videoLink))}
                  >
                    <iframe 
                      src={getEmbeddedDriveUrl(testimonial.videoLink)}
                      className="w-full h-full"
                      frameBorder="0"
                    />
                    <div className="absolute top-0 left-0 right-0 p-6 xs:p-4">
                      <div className="flex justify-between items-start">
                        <h3 className="text-xl xs:text-lg font-bold font-['Bricolage_Grotesque'] text-black">
                          {testimonial.name}
                        </h3>
                        <div className="flex gap-0.5">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <BorderedStarIcon
                              key={i}
                              viewBox="0 0 24 24"
                            >
                              <path
                                d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                                stroke="black"
                                strokeWidth="1"
                                fill={index % 2 === 0 ? '#D1B3FF' : '#D9FF7A'}
                              />
                            </BorderedStarIcon>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className={`
                    rounded-[32px] 
                    p-6 
                    xs:p-4
                    h-[250px] 
                    xs:h-[200px] 
                    md:h-[300px]
                    border-[12px] 
                    xs:border-[8px]
                    border-white 
                    bg-[${index % 2 === 0 ? '#D9FF7A' : '#D1B3FF'}]
                    flex 
                    flex-col
                  `}>
                    <div className="space-y-3 xs:space-y-2 overflow-hidden">
                      <div className="flex justify-between items-center">
                        <h3 className="text-xl xs:text-lg font-bold font-['Bricolage_Grotesque']">
                          {testimonial.name}
                        </h3>
                        <div className="flex gap-0.5">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <BorderedStarIcon
                              key={i}
                              viewBox="0 0 24 24"
                            >
                              <path
                                d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                                stroke="black"
                                strokeWidth="1"
                                fill={index % 2 === 0 ? '#D1B3FF' : '#D9FF7A'}
                              />
                            </BorderedStarIcon>
                          ))}
                        </div>
                      </div>
                        
                      <p className="text-black md:text-lg   leading-relaxed font-['Bricolage_Grotesque'] line-clamp-auto overflow-auto">
                        {testimonial.comment}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </ScrollingRow>
        </ScrollContainer>

        <Box sx={{ my: { xs: 3, sm: 4, md: 5 } }} />

        <ScrollContainer>
          <ScrollingRow direction="right">
            {[...secondRow, ...secondRow].map((testimonial, index) => (
              <div key={index} className="min-w-[300px] sm:min-w-[350px] md:min-w-[400px]">
                {testimonial.videoLink ? (
                  <div 
                    className="rounded-[32px] border-[12px] 
                    xs:border-[8px] border-white overflow-hidden
                     cursor-pointer relative h-[250px] xs:h-[200px] md:h-[300px]"
                    onClick={() => handleOpenModal(getEmbeddedDriveUrl(testimonial.videoLink))}
                  >
                    <iframe 
                      src={getEmbeddedDriveUrl(testimonial.videoLink)}
                      className="w-full h-full"
                      frameBorder="0"
                    />
                    <div className="absolute top-0 left-0 right-0 p-6 xs:p-4 bg-white/80">
                      <div className="flex justify-between items-start">
                        <h3 className="text-xl xs:text-lg font-bold font-['Bricolage_Grotesque'] text-black">
                          {testimonial.name}
                        </h3>
                        <div className="flex gap-0.5">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <BorderedStarIcon
                              key={i}
                              viewBox="0 0 24 24"
                            >
                              <path
                                d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                                stroke="black"
                                strokeWidth="1"
                                fill={index % 2 === 0 ? '#D1B3FF' : '#D9FF7A'}
                              />
                            </BorderedStarIcon>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className={`
                    rounded-[32px] 
                    p-6 
                    xs:p-4
                    h-[250px] 
                    xs:h-[200px] 
                    md:h-[300px]
                    border-[12px] 
                    xs:border-[8px]
                    border-white 
                    bg-[${index % 2 === 0 ? '#D9FF7A' : '#D1B3FF'}]
                    flex 
                    flex-col
                  `}>
                    <div className="space-y-3 xs:space-y-2">
                      <div className="flex justify-between items-center">
                        <h3 className="text-xl xs:text-lg font-bold font-['Bricolage_Grotesque']">
                          {testimonial.name}
                        </h3>
                        <div className="flex gap-0.5">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <BorderedStarIcon
                              key={i}
                              viewBox="0 0 24 24"
                            >
                              <path
                                d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                                stroke="black"
                                strokeWidth="1"
                                fill={index % 2 === 0 ? '#D1B3FF' : '#D9FF7A'}
                              />
                            </BorderedStarIcon>
                          ))}
                        </div>
                      </div>

                      <p className="text-black md:text-xl  leading-relaxed font-['Bricolage_Grotesque'] line-clamp-4">
                        {testimonial.comment}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </ScrollingRow>
        </ScrollContainer>
      </Box>
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '90%',
            maxWidth: '1000px',
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            borderRadius: '16px',
          }}
        >
          <IconButton
            aria-label="close"
            onClick={handleCloseModal}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
          <iframe
            src={activeVideo}
            width="100%"
            height="600"
            allow="autoplay"
            allowFullScreen
            frameBorder="0"
          />
        </Box>
      </Modal>

      <Link to="/signup">
        <Button
          variant="contained"
          size="small"
          startIcon={<Rocket color={IconStyle} className='m-0 p-0'/>}
          sx={{
            background: "linear-gradient(90deg, #D9FF7A 0%, #C1EC55 100%)",
            color: "#000000",
            fontFamily: "Bricolage Grotesque",
            fontSize: { xs: "16px", sm: "30px", md: "28px" },
            textDecoration: "none",
            textTransform: "none",
            fontWeight: "bold",
            "&:hover": {
              background: "linear-gradient(90deg, #D9FF7A 0%, #C1EC55 100%)",
            },
            border: "4px solid white",
            borderRadius: "50px",
            marginBottom: { xs: "64px", sm: "96px", md: "128px" },
            boxShadow: "6px 8px 4px rgba(0, 0, 0, 0.35)",
          }}
        >
          Start Now!
        </Button>
      </Link>
    </Box>
  );
};

export default Testimonial;
