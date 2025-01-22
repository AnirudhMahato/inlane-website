import React, { useState } from 'react';
import { Link } from "react-router-dom";
import styles from '../../css/CourseDetails.module.css';

import {
    Box,
    Button,
    Grid,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material";

import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Rocket from "../../components/SVGs/Rocket";

const beginnerCourseAccordions = [
    {
        title: "Hour 1 - Get to know your car",
        list: [
            "Get to know: Your car controls, the dashboard and the gearbox.",
            "Learn how to prepare before starting the car",
            "Start, Drive forward, and Stop the car"
        ]
    },
    {
        title: "Hour 2 - Master the art of balancing the three pedals",
        list: [
            "Practice stopping and starting the car often",
            "Drive forward and reverse on a straight road",
            "Practice balancing the pedals when on inclines"
        ]
    },
    {
        title: "Hour 3 - The Gearbox and Steering control",
        list: [
            "Use the clutch properly and shift gears smoothly",
            "Learn which gear to use and when",
            "Practice holding the steering wheel correctly for better control",
            "Driving on turns"
        ]
    },
    {
        title: "Hour 4 - Conquer Parking with Confidence!",
        list: [
            "Practice perpendicular and angular parking",
            "Develop the skill to find the right parking spot",
            "Practice steering control while parking",
            "How to leave the car after parking"
        ]
    },
    {
        title: "Hour 5 - Master driving at consistent speed and hit the slopes",
        list: [
            "Practice maintaining a steady speed",
            "Shift gears without looking at the gearbox",
            "Learn how to parallel park"
        ]
    },
    {
        title: "Hour 6 - Navigating the Main Road with Ease!",
        list: [
            "Driving in traffic and city roads",
            "Learn to stay in your lane while driving on the main road"
        ]
    },
    {
        title: "Hour 7 - Conquer City Driving with Confidence!",
        list: [
            "Smooth stopping and starting at traffic signs",
            "Judge and maintain appropriate speeds and distances in varied city traffic conditions",
            "Learn the ins and outs of navigating roundabouts and intersections",
            "Learn the techniques to drive on slopes"
        ]
    },
    {
        title: "Hour 8 - Master Evening Driving!",
        list: [
            "Learn when and how to use different headlights for safe evening driving",
            "Master the art of communicating with other drivers using your headlights",
            "Enhance your parking skills with night-time practice"
        ]
    },
    {
        title: "Hour 9 - Getting comfortable with the flyovers!",
        list: [
            "Get comfortable with the entry and exit points of flyovers",
            "Practice the smooth signal-check-change routine to glide between lanes",
        ]
    },
    {
        title: "Hour 10 - Final Lap",
        withDL: {
            list: [
                "Revisit all the driving techniques you've learned ",
                "Bring up any areas of confusion or uncertainty"
            ]
        },
        withoutDL: {
            list: [
                "Mini challenges to build your confidence for the test day",
                "Tips on staying relaxed and focused during the test",
            ]
        }

    }
];

const CourseDetails = () => {
    const [clickedButton, setClickedButton] = useState(null);
    const [showInfo, setShowInfo] = useState(null);

    const handleYesClick = () => {
        setClickedButton('yes');
        setShowInfo(true);
    };

    const handleNoClick = () => {
        setClickedButton('no');
        setShowInfo(false);
    };

    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
    const isMediumScreen = useMediaQuery(theme.breakpoints.between("sm", "md"));
    const smallIconStyle = { color: "#000000", width: 20, height: 20 };
    const mediumIconStyle = { color: "#000000", width: 34, height: 34 };
    const largeIconStyle = { color: "#000000", width: 44, height: 44 };
    const IconStyle = isSmallScreen
        ? smallIconStyle
        : isMediumScreen
            ? mediumIconStyle
            : largeIconStyle;

    return (
        <section className={styles.courseDetails}>
            <div className={styles.container}>
                <div>
                    <div className={styles.courseHeader}>
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
                                Beginner's Course
                            </Typography>
                        </Box>
                        <h4 style={{ fontSize: "22px" }}>(Duration: 10 hours)</h4>
                       {/* Price: Rs. 9,500/- (with Drivers License) */}
                    </div>
                    <div className={styles.accordion}>
                        {beginnerCourseAccordions.map((accordion, index) => (
                            <Accordion
                                key={index}
                                sx={{
                                    margin: '8px 0px 0px 0px',
                                    borderRadius: '16px',
                                    position: 'relative',
                                    '&::before': {
                                        display: 'none',
                                    }
                                }}
                            >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls={`panel${index + 1}-content`}
                                    id={`panel${index + 1}-header`}
                                >
                                    <Typography
                                        fontWeight="500"
                                        fontSize={{ xs: "18px", sm: "18px", md: "18px", lg: "18px" }}
                                        fontFamily="Bricolage Grotesque"
                                        color="#000000"
                                    >
                                        {accordion.title}
                                    </Typography>

                                </AccordionSummary>
                                <AccordionDetails>
                                    {index === 9 ? (
                                        <div>
                                            <p>Do you have a Driver's License?</p>
                                            <div className={styles.buttonContainer}>
                                                <Button
                                                    variant="contained"
                                                    onClick={handleYesClick}
                                                    className={clickedButton === 'yes' ? styles.clickedButton : ''}
                                                >Yes</Button>
                                                <Button
                                                    variant="contained"
                                                    onClick={handleNoClick}
                                                    className={clickedButton === 'no' ? styles.clickedButton : ''}
                                                >No</Button>
                                            </div>
                                            {showInfo !== null && (
                                                <ul className={styles.accordionDetails}>
                                                    {(showInfo ? accordion.withDL.list : accordion.withoutDL.list).map((item, idx) => (
                                                        <li key={idx}>{item}</li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    ) : (
                                        <ul className={styles.accordionDetails}>
                                            {accordion.list.map((item, idx) => (
                                                <li key={idx}>{item}</li>
                                            ))}
                                        </ul>
                                    )}
                                </AccordionDetails>
                            </Accordion>
                        ))}
                    </div>
                </div>

                {/* Removed the Value-Added Service section */}
            </div>
            <div className={styles.beginnerCourseSecondDiv}>
                <Button
                    variant="contained"
                    // component={Link}
                    // to={"https://forms.gle/Up128jny4nRz5DH59"}
                    component="a"
                    href="https://forms.gle/Up128jny4nRz5DH59"
                    // size="large"
                    startIcon={<Rocket color={IconStyle} />}
                    sx={{
                        scale: { xs: "1", sm: "1", md: "0.65", lg: "0.65" },
                        border: "3px solid white",
                        borderRadius: "50px",
                        boxShadow: "2px 4px 4px rgba(0, 0, 0, 0.35)",
                        padding: { xs: "12px 24px", sm: "14px 32px", md: "16px 44px" },
                        // width: { xs: "75%", sm: "70%", md: "60%", lg: 324.38 },
                        maxWidth: 324.38,
                        height: { xs: 38, sm: 60, md: 69.47 },
                        fontFamily: "Bricolage Grotesque",
                        fontSize: { xs: "18px", sm: "24px", md: "24px", lg: "24px" },
                        fontWeight: "bold",
                        textTransform: "none",
                        marginTop: { xs: "12px", sm: "30px", md: "40px" },
                        backgroundColor: "#D9FF7A",
                        color: "#000000",
                        "&:hover": {
                            backgroundColor: "#D9FF7A",
                        },
                    }}
                >
                    Sign Up Now
                </Button>
            </div>
        </section>
    );
};

export default CourseDetails;
