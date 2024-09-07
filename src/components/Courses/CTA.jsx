import React from 'react';
import { Link } from "react-router-dom";
import {
    Box,
    Button,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import Rocket from "../SVGs/Rocket";

const CTASection = () => {
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
        <section>
            <Box
                sx={{
                    maxHeight: "100vh",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: { xs: "20px", sm: "30px", md: "40px" },
                    marginBottom: { xs: "24px", sm: "30px", md: "40px" },
                }}
            >
                <Box
                    sx={{
                        borderRadius: "30px",
                        padding: { xs: "28px", sm: "30px", md: "40px" },
                        height: "auto",
                        width: { xs: "100%", sm: "90%", md: "80%", lg: "100%" },
                        maxWidth: 1378,
                        justifyContent: "center",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        textAlign: "center",
                    }}
                >
                    <Typography
                        variant="h3"
                        fontWeight="bold"
                        fontSize={{ xs: "24px", sm: "30px", md: "48px", lg: "61px" }}
                        fontFamily="Bricolage Grotesque"
                        color="#000000"
                        marginBottom={{ xs: "18px", sm: "30px", md: "40px" }}
                    >
                        Have you made up your mind?
                    </Typography>
                    <Typography
                        variant="h5"
                        fontSize={{ xs: "16px", sm: "22px", md: "36px", lg: "48px" }}
                        fontFamily="Bricolage Grotesque"
                        color="#000000"
                        marginBottom={{ xs: "0px", sm: "20px", md: "30px" }}
                    >
                        Get in touch with us to
                    </Typography>
                    <Box
                        sx={{
                            backgroundImage: "url('/Tag5.svg')",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "contain",
                            backgroundPosition: "center",
                            width: { xs: "100%", sm: "90%", md: "80%", lg: 774.83 },
                            maxWidth: 774.83,
                            marginBottom: { xs: "6px", sm: "30px", md: "40px" },
                            padding: { xs: "10px", sm: "11px", md: "20px" },
                        }}
                    >
                        <Typography
                            variant="h5"
                            fontWeight="bold"
                            fontSize={{ xs: "18px", sm: "30px", md: "32px", lg: "66px" }}
                            fontFamily="Bricolage Grotesque"
                            color="#000000"
                        >
                            Start your journey!
                        </Typography>
                    </Box>
                    <Button
                        variant="contained"
                        component={Link}
                        to="/signup"
                        size="large"
                        startIcon={<Rocket color={IconStyle} />}
                        sx={{
                            backgroundColor: "#00CE84",
                            color: "white",
                            "&:hover": {
                                backgroundColor: "#00CE85",
                            },
                            border: "3px solid white",
                            borderRadius: "50px",
                            boxShadow: "6px 8px 4px rgba(0, 0, 0, 0.35)",
                            padding: { xs: "12px 24px", sm: "14px 32px", md: "16px 44px" },
                            width: { xs: "75%", sm: "70%", md: "60%", lg: 324.38 },
                            maxWidth: 324.38,
                            height: { xs: 38, sm: 60, md: 69.47 },
                            fontFamily: "Bricolage Grotesque",
                            fontSize: { xs: "16px", sm: "24px", md: "30px", lg: "36px" },
                            fontWeight: "bold",
                            textTransform: "none",
                            marginTop: { xs: "12px", sm: "30px", md: "40px" },
                        }}
                    >
                        Sign Up
                    </Button>
                </Box>
            </Box>
        </section>
    );
};

export default CTASection;