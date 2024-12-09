import React from "react";
import {
  Box,
  Typography,
  Link,
  IconButton,
  Tooltip,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  Instagram as InstagramIcon,
  X as XIcon,
  LinkedIn as LinkedInIcon,
  Phone as PhoneIcon,
  Email as EmailIcon,
  WhatsApp as WhatsAppIcon,
} from "@mui/icons-material";

const Footer = () => {
  // USED USETHEME AND USEMEDIAQUERY HOOK FROM MUI TO CREATE A BREAKPOINTS FOR RESPONSIVENESS.
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  // DATA OF ICONS TO BE RENDER ARE USED AS AN ARRAY
  const socialIcons = [
    {
      Icon: InstagramIcon,
      href: "https://www.instagram.com/inlane.in/",
    },
    {
      Icon: XIcon,
      href: "https://x.com/inlane_in/",
    },
    {
      Icon: LinkedInIcon,
      href: "https://www.linkedin.com/company/in-lane/",
    },
  ];

  const contactInfo = [
    {
      Icon: PhoneIcon,
      text: "Call ",
      href: "tel:+919748439881",
    },
    {
      Icon: EmailIcon,
      text: "Email ",
      href: "mailto:discover.laneschool@inlane.in",
    },
    {
      Icon: WhatsAppIcon,
      text: "WhatsApp ",
      href: "https://wa.me/919748439881",
    },
  ];
  const quickLinks = [
    {
      text: "Privacy Policy",
      href: "/privacy-policy",
    },
    {
      text: "Terms & Conditions",
      href: "/terms-and-conditions",
    },
    {
      text: "Disclaimer",
      href: "/disclaimer",
    },
  ];
  const infoLinks = [
    {
      text: "Home",
      href: "#",
    },
    {
      text: "Courses",
      href: "/courses",
    },
    // {
    //   text: "FAQs",
    //   href: "#",
    // },
    // {
    //   text: "Lane Journal",
    //   href: "#",
    // },
  ];
  // CUSTOM STYLES
  const styles = {
    footerSecondContainer: {
      display: "flex",
      flexDirection: { xs: "column", md: "row" },
      justifyContent: "space-between",
      px: { xs: 2, sm: 4, md: 12 },
    },
    footerSmallScreenContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      gap: "12px",

      px: { xs: 2, sm: 4, md: 12 },
      paddingTop: { xs: 2, sm: 3, md: 4 },
      scale: isMobile ? "0.85" : "1",
    },
    footerSmallScreenContainerTwo: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      gap: "12px",
      px: { xs: 2, sm: 4, md: 12 },
      scale: isMobile ? "0.85" : "1",
    },
    footerContainer: {
      bgcolor: "background.paper",
      paddingTop: { xs: 3, sm: 4, md: 6 },
      backgroundImage: `url(${isMobile ? "/img.png" : "/Road1.png"})`,
      backgroundRepeat: "no-repeat",
      height: isMobile ? "100%" : "470px",
      backgroundSize: isMobile ? "" : "contain",
    },
    footerHeadingImage: {
      display: "inline-block",
      backgroundImage: "url('/Tag.svg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: { xs: "180px", sm: "200px", md: "212.25px" },
      mb: 2,
      textAlign: "center",
    },
    footerHeading: {
      fontWeight: "bold",
      fontSize: { xs: "24px", sm: "28px", md: "32px" },
      color: "#000000",
      marginRight: { xs: "0px", sm: "0px", md: "30px" },
      fontFamily: "Bricolage Grotesque",
    },
    footerLinks: {
      textDecoration: "none",
      color: "#000000",
      fontWeight: "500",
      fontSize: { xs: "18px", sm: "22px", md: "20px" },
      fontFamily: "Bricolage Grotesque",
      mb: 1,
      flexBasis: isMobile ? "45%" : "auto",
      lineHeight: { xs: "32px", sm: "28px", md: "32px" },
    },
    footerIcons: {
      backgroundColor: "black",
      color: "white",
      borderRadius: "50%",
      mt: "20px",
      mb: "10px",
      padding: "5px",
      fontSize: { xs: "36px", sm: "42px", md: "38px" },
      transition: "transform 0.3s ease-in-out",
      "&:hover": { transform: "scale(1.1)" },
    },
    footerContact: {
      display: "flex",
      alignItems: "center",
      mb: 1,
      fontWeight: "bold",
      fontSize: { xs: "18px", sm: "20px", md: "22px" },
      fontFamily: "Bricolage Grotesque",
      lineHeight: { xs: "32px", sm: "28px", md: "32px" },
    },
  };
  return (
    <Box sx={styles.footerContainer}>
      {isMobile ? (
        <Box>
          <Box sx={styles.footerSmallScreenContainer}>
            {/* LANE LOGO  */}
            <Box mb={4}>
              <Box
              sx={{
                width: "100%",
                maxWidth: isMobile ? "187px" : "173px",
                height: "auto",
              }}
              >
                <img
                  src="/Lane_Footer_Logo.svg"
                 
                  alt="Logo"
                />
              </Box>
              <Box>
                <Box mt={2} display="flex" flexDirection="row">
                  {socialIcons.map(({ Icon, href }, index) => (
                    <Link
                      key={index}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ mr: 1 }}
                    >
                      <Icon sx={styles.footerIcons} />
                    </Link>
                  ))}
                </Box>
                <Typography
                  variant="h5"
                  fontWeight={600}
                  fontSize={{ xs: "18px", sm: "24px", md: "26px" }}
                  color="#000000"
                  fontFamily="Bricolage Grotesque"
                  sx={{ mt: 2 }}
                >
                  We do cool things here!
                </Typography>
              </Box>
            </Box>
            {/* Contact Information */}
            <Box>
              <Box sx={styles.footerHeadingImage}>
                <Typography variant="h4" sx={styles.footerHeading}>
                  Contact Us
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: isMobile ? "column" : "column",
                  justifyContent: isMobile ? "space-around" : "flex-start",
                }}
              >
                {contactInfo.map(({ Icon, text, href }, index) => (
                  // isMobile ? (
                  //   <Tooltip title={text} key={index} sx={{ bgcolor: "red" }}>
                  //     <IconButton
                  //       component={Link}
                  //       href={href}
                  //       sx={{ color: "#00CE84", bgcolor: "lightGrey" }}
                  //     >
                  //       <Icon />
                  //     </IconButton>
                  //   </Tooltip>
                  // ) : (
                  <Typography
                    key={index}
                    variant="body2"
                    sx={styles.footerContact}
                  >
                    <Icon sx={{ mr: 1, color: "#00CE84" }} />
                    <Link
                      sx={{ textDecoration: "none", color: "#000000" }}
                      href={href}
                    >
                      {text}
                    </Link>
                  </Typography>
                ))}
              </Box>
            </Box>
          </Box>
          <Box sx={styles.footerSmallScreenContainerTwo}>
            {/* Information section */}
            <Box flex={{ xs: "1 1 100%" }} mb={4}>
              <Box sx={styles.footerHeadingImage}>
                <Typography variant="h4" sx={styles.footerHeading}>
                  Information
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  flexWrap: "wrap",
                  justifyContent: isMobile ? "space-around" : "flex-start",
                }}
              >
                {infoLinks.map(({ text, href }, i) => (
                  <Link key={i} href={href} sx={styles.footerLinks}>
                    {text}
                  </Link>
                ))}
              </Box>
            </Box>
            {/* Quick links section */}
            <Box flex={{ xs: "1 1 100%" }} mb={4}>
              <Box sx={styles.footerHeadingImage}>
                <Typography variant="h4" sx={styles.footerHeading}>
                  Quick Links
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  flexWrap: "wrap",
                  justifyContent: isMobile ? "space-around" : "flex-start",
                }}
              >
                {quickLinks.map(({ text, href }, i) => (
                  <Link
                    key={i}
                    href={href}
                    sx={styles.footerLinks}
                    paddingLeft={{ xs: 1.2 }}
                  >
                    {text}
                  </Link>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      ) : (
        <Box sx={styles.footerSecondContainer}>
          <Box flex={2} mb={4} mt={6}>
            <Box>
              <img
                src="/Lane_Footer_Logo.svg"
                style={{
                  // width: "100%",
                  maxWidth: isMobile ? "187px" : "173px",
                  height: "auto",
                }}
                alt="Logo"
              />
            </Box>
            <Box>
              <Box mt={2} display="flex" flexDirection="row">
                {socialIcons.map(({ Icon, href }, i) => (
                  <Link
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ mr: 1 }}
                  >
                    <Icon sx={styles.footerIcons} />
                  </Link>
                ))}
              </Box>
              <Typography
                variant="h5"
                fontWeight={600}
                fontSize={{ xs: "20px", sm: "24px", md: "26px" }}
                color="#000000"
                fontFamily="Bricolage Grotesque"
                sx={{ mt: 2 }}
              >
                We do cool things here!
              </Typography>
            </Box>
          </Box>
          {/* Information section */}
          <Box flex={1} mb={4} mt={6}>
            <Box sx={styles.footerHeadingImage}>
              <Typography variant="h4" sx={styles.footerHeading}>
                Information
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: isMobile ? "row" : "column",
                flexWrap: "wrap",
                justifyContent: isMobile ? "space-around" : "flex-start",
              }}
            >
              {infoLinks.map(({ text, href }, i) => (
                <Link key={i} href={href} sx={styles.footerLinks}>
                  {text}
                </Link>
              ))}
            </Box>
          </Box>
          {/* Quick links section */}
          <Box flex={1} mb={4} mt={6}>
            <Box sx={styles.footerHeadingImage}>
              <Typography variant="h4" sx={styles.footerHeading}>
                Quick Links
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: isMobile ? "column" : "column",
                flexWrap: "wrap",
                justifyContent: isMobile ? "space-around" : "flex-start",
              }}
            >
              {quickLinks.map(({ text, href }, i) => (
                <Link
                  key={i}
                  href={href}
                  sx={styles.footerLinks}
                  paddingLeft={{ xs: 1.2 }}
                >
                  {text}
                </Link>
              ))}
            </Box>
          </Box>
          {/* Contact us section */}
          <Box flex={1} mt={6}>
            <Box sx={styles.footerHeadingImage}>
              <Typography variant="h4" sx={styles.footerHeading}>
                Contact Us
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: isMobile ? "column" : "column",
                justifyContent: isMobile ? "space-around" : "flex-start",
              }}
            >
              {contactInfo.map(({ Icon, text, href }, index) => (
                <Typography
                  key={index}
                  variant="body2"
                  sx={styles.footerContact}
                >
                  <Icon sx={{ mr: 1, color: "#00CE84" }} />
                  <Link
                    sx={{ textDecoration: "none", color: "#000000" }}
                    href={href}
                  >
                    {text}
                  </Link>
                </Typography>
              ))}
            </Box>
          </Box>
        </Box>
      )}
    </Box>
    // </Box>
  );
};

export default Footer;
