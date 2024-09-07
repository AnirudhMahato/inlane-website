import React from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import HeroSection from "../components/Courses/HeroSection";
import CourseDetails from "../components/Courses/CourseDetails";
// import CourseFeatures from "../components/Courses/CourseFeatures";
import MiniCourses from "../components/Courses/MiniCourses";

import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import CTASection from "../components/Courses/CTA";

const CoursesPage = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const smallIconStyle = { color: "#FFFFFF", width: 24, height: 24 };
  const mediumIconStyle = { color: "#FFFFFF", width: 34, height: 34 };
  const largeIconStyle = { color: "#FFFFFF", width: 40, height: 40 };

  const IconStyle = isSmallScreen
    ? smallIconStyle
    : isMediumScreen
    ? mediumIconStyle
    : largeIconStyle;

  return (
    <Box>
        <HeroSection />
        <CourseDetails />
        <MiniCourses />
    </Box>
  );
};

export default CoursesPage;
