import { Button, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';
import Rocket from "../../components/SVGs/Rocket";

const MyButton = () => {
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
    <Button
              variant="contained"
              component={Link}
              to="https://forms.gle/Up128jny4nRz5DH59"
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
                boxShadow: "2px 4px 4px rgba(0, 0, 0, 0.35)",
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
  )
}

export default MyButton