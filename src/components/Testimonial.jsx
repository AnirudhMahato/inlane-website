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
import { Link } from "react-router-dom";
import Rocket from "./SVGs/Rocket";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import styled from "styled-components";

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

const Testimonial = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const smallIconStyle = { color: "#000000", width: 24, height: 24 };
  const mediumIconStyle = { color: "#000000", width: 34, height: 24 };
  const largeIconStyle = { color: "#000000", width: 44, height: 24 };
  const [openModal, setOpenModal] = useState(false);
  const [activeVideo, setActiveVideo] = useState("");
  const IconStyle = isSmallScreen
    ? smallIconStyle
    : isMediumScreen
    ? mediumIconStyle
    : largeIconStyle;
  const [isSticky, setIsSticky] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const wheelElement = document.getElementById('wheel-text');
      if (wheelElement) {
        const wheelPosition = wheelElement.getBoundingClientRect().top;
        setIsSticky(wheelPosition > 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      comment: "The course was incredibly helpful. I feel much more confident on the road now. The instructors were patient and professional throughout my learning journey.",
    },
    {
      name: "Michael Chen",
      rating: 5,
      comment: "Best driving school in the area! The instructors are knowledgeable and make learning enjoyable. I passed my test on the first try!",
    },
    {
      name: "Emily Rodriguez",
      rating: 5,
      comment: "If you want to learn driving properly, this is the place to go. Top-notch training and excellent support throughout the process.",
    },
    {
      name: "Emily Rodriguez",
      rating: 5,
      comment: "If you want to learn driving properly, this is the place to go. Top-notch training and excellent support throughout the process.",
    },
    {
      name: "Emily Rodriguez",
      rating: 5,
      comment: "If you want to learn driving properly, this is the place to go. Top-notch training and excellent support throughout the process.",
    },
    {
      name: "Emily Rodriguez",
      rating: 5,
      comment: "If you want to learn driving properly, this is the place to go. Top-notch training and excellent support throughout the process.",
    },
    {
      name: "Emily Rodriguez",
      rating: 5,
      comment: "If you want to learn driving properly, this is the place to go. Top-notch training and excellent support throughout the process.",
    },
    {
      name: "Emily Rodriguez",
      rating: 5,
      comment: "If you want to learn driving properly, this is the place to go. Top-notch training and excellent support throughout the process.",
    },
  ];

  const handleOpenModal = (videoUrl) => {
    setActiveVideo(videoUrl);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setActiveVideo("");
  };

  return (
    <Box
      sx={{
        backgroundColor: "#00CE84",
        padding: { xs: 2, sm: 3, md: 4 },
        textAlign: "center",
        backgroundImage: "url('/TestimonialBG.svg')",
        marginTop: { xs: "64px", sm: "96px", md: "128px" },
      }}
    >
      <Typography
        variant="h3"
        sx={{
          position: isSticky ? 'sticky' : 'relative',
          top: 0,
          zIndex: 10,
          background: 'linear-gradient(180deg, rgba(0, 206, 132, 0.9) 0%, rgba(0, 206, 132, 0) 100%)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          paddingY: 2,
          fontSize: { xs: "18px", sm: "40px", md: "48px" },
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
          display: "inline-block",
          backgroundImage: "url('/Tag5.svg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "center",
          width: { xs: "90%", sm: "80%", md: 300.75 },
          maxWidth: 461.75,
          mb: 6,
          mt: 4,
          padding: { xs: "3px", sm: "15px", md: "20px" },
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
        sx={{ 
          // maxWidth: "1200px", 
          margin: "0 auto", 
          marginBottom: { xs: "64px", sm: "96px", md: "128px" },
          px: 2 
        }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full">
              <div 
                className={`
                  rounded-[32px] 
                  p-6 
                  h-[200px] 
                  border-[12px] 
                  border-white 
                  ${index % 2 === 0 ? 'bg-[#D1B3FF]' : 'bg-[#D9FF7A]'}
                  flex 
                  flex-col
                `}
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-bold font-['Bricolage_Grotesque']">
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
                            fill={index % 2 === 0 ? '#D9FF7A' : '#D1B3FF'}
                          />
                        </BorderedStarIcon>
                      ))}
                    </div>
                  </div>

                  <p className="text-black text-sm leading-relaxed font-['Bricolage_Grotesque'] line-clamp-4">
                    {testimonial.comment}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Box>
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "80%",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: "16px",
            position: "relative",
          }}
        >
          <IconButton
            aria-label="close"
            onClick={handleCloseModal}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
          <iframe
            src={activeVideo}
            title="Video Player"
            width="100%"
            height="500px"
            frameBorder="0"
            allowFullScreen
            allow="autoplay"
          ></iframe>
        </Box>
      </Modal>

      <Button
        variant="contained"
        component={Link}
        href="https://forms.gle/pjjmUjoQvN7XsgC87"
        size="small"
        startIcon={<Rocket color={IconStyle} className='m-0 p-0'/>}
        sx={{
          backgroundColor: "#D9FF7A",
          color: "#000000",
          fontFamily: "Bricolage Grotesque",
          fontSize: { xs: "16px", sm: "30px", md: "28px" },
          textDecoration: "none",
          width: { xs: "80%", sm: "80%", md: 280.72 },
          textTransform: "none",
          fontWeight: "bold",
          "&:hover": {
            backgroundColor: "#D9FF7A",
          },
          border: "4px solid white",
          borderRadius: "50px",
          marginBottom: { xs: "64px", sm: "96px", md: "128px" },
          boxShadow: "6px 8px 4px rgba(0, 0, 0, 0.35)",
        }}
      >
        Start Now!
      </Button>
    </Box>
  );
};

export default Testimonial;
