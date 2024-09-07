import React from 'react';
import { Box, useMediaQuery, useTheme, Typography } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from '../../css/HeroSection.module.css';
import CoursePageHero from '../SVGs/Sections/Courses_Page_Hero';
import CoursePageHeroMobile from '../SVGs/Sections/Courses_Page_Hero_Mobile';

const HeroSection = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
    const isMediumScreen = useMediaQuery(theme.breakpoints.between("sm", "md"));

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        appendDots: dots => (
            <div style={{ paddingTop: '20px' }}>
                <ul style={{ margin: '0px' }}>{dots}</ul>
            </div>
        ),
    };
    return (
        <>
            <section className={styles.hero}>
                {isSmallScreen ? <CoursePageHeroMobile /> : <CoursePageHero />}
                <div style={{ textAlign: 'center', padding: '54px 36px', margin: '24px auto', maxWidth: '800px', font: "Bricolage Grotesque" }}>
                    <Box
                        sx={{
                            backgroundImage: "url('/Tag5.svg')",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "contain",
                            backgroundPosition: "center",
                            width: { xs: "100%", sm: "100%", md: "75%", lg: "50%" },
                            margin: "0 auto", // Center horizontally
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            padding: "4px", // Add padding
                        }}
                    >
                        <Typography
                            variant="h5"
                            fontWeight="bold"
                            fontFamily="Bricolage Grotesque"
                            color="#000000"
                        >
                            Why Choose Us
                        </Typography>
                    </Box>
                    <Slider {...sliderSettings} className={styles.slider} style={{ paddingTop: '40px', paddingBottom: '36px' }}>
                        <div>
                            <h3>Expert Instructors</h3>
                            <p>Our instructors are meticulously evaluated to ensure top-level skills, professionalism, and a friendly approach, helping you master driving with confidence.</p>
                        </div>
                        <div>
                            <h3>Safety and Comfort</h3>
                            <p>Our training cars undergo rigorous safety checks, are impeccably maintained, and kept spotlessly clean for your peace of mind.</p>
                        </div>
                        <div>
                            <h3>Flexible Convenience</h3>
                            <p>We offer reliable pickup and drop-off services, making it easy to fit driving lessons into your schedule.</p>
                        </div>
                        <div>
                            <h3>Personalized Learning</h3>
                            <p>We tailor each lesson to your pace and learning style, ensuring you get the most out of every session.</p>
                        </div>
                        <div>
                            <h3>Proven Results</h3>
                            <p>Our comprehensive course structure is designed to equip you with the skills and confidence to pass your driving test in just 10 hours.</p>
                        </div>
                    </Slider>
                </div>
            </section>
        </>
    );
};

export default HeroSection;
