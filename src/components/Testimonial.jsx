import React, { useState } from "react";
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
import Slider from "react-slick";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

const TestimonialCard = styled(Box)`
  position: relative;
  overflow: hidden;
  border-radius: 16px;
  width: "100%";
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    // transform: translateY(-10px);

    .overlay {
      opacity: 1;
    }

    .play-button {
      transform: scale(1.2);
    }
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;

    transition: opacity 0.3s ease-in-out;
  }

  .play-button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.5);
    transition: transform 0.3s ease-in-out;
  }
`;

const Overlay = styled(Box)`
  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.1);
  color: white;
  opacity: 0;

  transition: opacity 0.3s ease-in-out;
  @media (max-width: 600px) {
    opacity: 1;
    max-width: 75%;
    margin: 0 auto;
    border-radius: 10%;
  }

  @media (min-width: 600px) and (max-width: 1024px) {
    max-width: 90%;
    margin: 0 auto;
    border-radius: 10%;
    opacity: 0;
  }

  @media (min-width: 1024px) {
    max-width: 100%;
    margin: 0 auto;
    border-radius: 10%;
  }
`;

const PlayButton = styled(PlayArrowIcon)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.4);
    transform: scale(1.1);
  }

  svg {
    font-size: 48px;
    color: white;
    transition: transform 0.3s ease-in-out;
  }

  &:hover svg {
    transform: scale(1.2);
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
  const IconStyle = isSmallScreen
    ? smallIconStyle
    : isMediumScreen
    ? mediumIconStyle
    : largeIconStyle;

  const testimonials = [
    {
      src: "/User1.png",
      alt: "Happy Learner 1",
      title: "Amazing Experience!",
      comment:
        "The course was incredibly helpful. I feel much more confident on the road now.",
      videoUrl:
        "https://drive.google.com/file/d/1f3tGfIFU9W62eBwjph-4Q5K-iK82Aixn/preview",
    },
    {
      src: "/User2.png",
      alt: "Happy Learner 2",
      title: "Great Instructors",
      comment: "The instructors were patient and knowledgeable. ",
      videoUrl: "",
    },
    {
      src: "/User3.png",
      alt: "Happy Learner 3",
      title: "Highly Recommended",
      comment:
        "If you want to learn driving properly, this is the place to go. Top-notch training!",
      videoUrl:
        "https://drive.google.com/file/d/1Srkjn9SRvEKCZz6sCb-CX5jN6600yntR/preview",
    },
  ];
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: isSmallScreen ? 1 : 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
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
        fontSize={{ xs: "18px", sm: "40px", md: "48px" }}
        color={"#000000"}
        mb={2}
        mt={{ xs: 4, sm: 6, md: 8 }}
        fontWeight={700}
        fontFamily={"Bricolage Grotesque"}
      >
        Let’s Bridge the Gap Between you and
      </Typography>
      {/* <Typography
        fontSize={{ xs: "16px", sm: "32px", md: "48px" }}
        color={"#000000"}
        fontFamily={"Bricolage Grotesque"}
      >
        Check out these awesome reviews from our
      </Typography> */}
      <Box
        sx={{
          display: "inline-block",
          backgroundImage: "url('/Tag5.svg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "center",
          width: { xs: "90%", sm: "80%", md: 561.75 },
          maxWidth: 561.75,
          mb: 4,
          padding: { xs: "3px", sm: "15px", md: "20px" },
        }}
      >
        <Typography
          variant="h5"
          fontWeight="bold"
          fontSize={{ xs: "20px", sm: "48px", md: "60px" }}
          color={"#000000"}
          fontFamily={"Bricolage Grotesque"}
          // boxShadow={"6px 8px 4px rgba(0, 0, 0, 0.35)"}
        >
          The Wheel
        </Typography>
      </Box>
      <Box
        sx={{
          maxWidth: "100%",

          overflow: "hidden",
          mb: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <Box key={index}>
              <TestimonialCard>
                <Box
                  component="img"
                  src={testimonial.src}
                  alt={testimonial.alt}
                  sx={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                    maxWidth: { xs: "70%", sm: "90%", md: "100%" },
                    margin: "0 auto",
                  }}
                />
                <Overlay className="overlay">
                  {testimonial.videoUrl ? (
                    <PlayButton
                      className="play-button"
                      onClick={() => handleOpenModal(testimonial.videoUrl)}
                    />
                  ) : (
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        textDecoration: "none",
                      }}
                      component="a"
                      href="https://www.google.com" //todo: Replace with actual Google Review link
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <OpenInNewIcon
                        style={{
                          color: "white",
                          fontSize: { md: "48px", xs: "18px" },
                        }}
                      />
                    </Box>
                  )}
                  <Typography
                    variant="h6"
                    fontSize={{ xs: "18px", sm: "32px", md: "48px" }}
                    fontFamily={"Bricolage Grotesque"}
                  >
                    {testimonial.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    fontSize={{ xs: "8px", sm: "12px", md: "18px" }}
                    fontFamily={"Bricolage Grotesque"}
                  >
                    {testimonial.comment}
                  </Typography>
                </Overlay>
              </TestimonialCard>
            </Box>
          ))}
        </Slider>
      </Box>
      {/* <Box
        mb={4}
        sx={{
          fontSize: { xs: "16px", sm: "16px", md: "24px" },
          color: "#0000EE",
          fontFamily: "Bricolage Grotesque",
        }}
      >
        <LinkMui
          href="https://tinyurl.com/lane-google-reviews"
          target="_blank"
          rel="noopener noreferrer"
          color={"#000000"}
        >
          View Google Reviews
        </LinkMui>
      </Box> */}
      {/* //NOTE: MODAL IS STARED FROM here*/}
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={{
            // position: "absolute",
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
      {/* <Box mb={2}>
        {[1, 2, 3, 4, 5].map((star) => (
          <StarIcon
            key={star}
            sx={{ color: "#ffeb3b", fontSize: { xs: 24, sm: 42, md: 48 } }}
          />
        ))}
      </Box> */}
      <Button
        variant="contained"
        component={Link}
        // to={"https://forms.gle/pjjmUjoQvN7XsgC87"}
        // component="a"
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
          // padding: { xs: "4px 4px", sm: "10px 20px", md: "12px 12px" },
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
