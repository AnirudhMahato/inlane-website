import React, { useEffect, useState } from "react";
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
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const footerElement = document.getElementById('animated-footer');
    if (footerElement) {
      observer.observe(footerElement);
    }

    return () => {
      if (footerElement) {
        observer.unobserve(footerElement);
      }
    };
  }, []);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const isLarge = useMediaQuery(theme.breakpoints.up("lg"));

  const socialIcons = [
    {
      Icon: InstagramIcon,
      text: "Instagram",
      href: "https://www.instagram.com/inlane.in/",
    },
    {
      Icon: XIcon,
      text: "X",
      href: "https://x.com/inlane_in/",
    },
    {
      Icon: LinkedInIcon,
      text: "LinkedIn",
      href: "https://www.linkedin.com/company/in-lane/",
    },
  ];

  const contactInfo = [
    {
      Icon: PhoneIcon,
      text: "+91 9611687011",
      href: "tel:+919611687011",
    },
    {
      Icon: EmailIcon,
      text: "team@inlane.in",
      href: "mailto:team@inlane.in",
    },
    {
      Icon: WhatsAppIcon,
      text: "WhatsApp ",
      href: "https://wa.me/919611687011",
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
      text: "About us",
      href: "about-us",
    },
    {
      text: "Courses",
      href: "/courses",
    },
    {
      text: "FAQs",
      href: "/faqs",
    },
    {
      text: "Lane Journal",
      href: "/blog",
    },
  ];

  const styles = {
    footerContainer: {
      bgcolor: "background.paper",
      paddingTop: { xs: 3, sm: 4, md: 6 },
      backgroundImage: `url(${isMobile ? "/img.png" : "/Road1.png"})`,
      backgroundRepeat: "no-repeat",
      minHeight: { xs: "auto", sm: "400px", md: "470px" },
      backgroundSize: { xs: "100% auto", sm: "100% 100%" },
      backgroundPosition: "center",
      paddingBottom: { xs: 3, sm: 4, md: 6 },
      position: 'relative',
      overflow: 'hidden',
    },
    footerMainContainer: {
      display: "flex",
      flexDirection: { xs: "column", md: "row" },
      justifyContent: "space-between",
      alignItems: { xs: "stretch", md: "flex-start" },
      px: { xs: 2, sm: 3, md: 6, lg: 12 },
      gap: { xs: 3, sm: 4, md: 2 },
      maxWidth: "1400px",
      mx: "auto",
    },
    logoSection: {
      flex: { xs: "none", md: 2 },
      mb: { xs: 3, md: 4 },
      mt: { xs: 0, md: 6 },
      display: "flex",
      flexDirection: "column",
      alignItems: { xs: "center", md: "flex-start" },
      textAlign: { xs: "center", md: "left" },
    },
    logoImage: {
      width: "100%",
      maxWidth: { xs: "160px", sm: "180px", md: "173px" },
      height: "auto",
      mb: 2,
    },
    socialIconsContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: { xs: "center", md: "flex-start" },
      gap: 1,
      mt: 2,
      mb: 2,
    },
    tagline: {
      fontWeight: 600,
      fontSize: { xs: "16px", sm: "20px", md: "24px", lg: "26px" },
      color: "#000000",
      fontFamily: "Bricolage Grotesque",
      textAlign: { xs: "center", md: "left" },
    },
    sectionContainer: {
      flex: { xs: "none", md: 1 },
      mb: { xs: 3, md: 4 },
      mt: { xs: 0, md: 6 },
      display: "flex",
      flexDirection: "column",
      alignItems: { xs: "center", md: "flex-start" },
    },
    footerHeadingImage: {
      display: "inline-block",
      backgroundImage: "url('/Tag.svg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: { xs: "160px", sm: "180px", md: "200px", lg: "212.25px" },
      mb: 2,
      textAlign: "center",
    },
    footerHeading: {
      fontWeight: "bold",
      fontSize: { xs: "20px", sm: "24px", md: "28px", lg: "32px" },
      color: "#000000",
      fontFamily: "Bricolage Grotesque",
      textAlign: "center",
    },
    linksContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: { xs: "center", md: "flex-start" },
      gap: { xs: 1, sm: 1.5 },
      width: "100%",
    },
    footerLinks: {
      textDecoration: "none",
      color: "#000000",
      fontWeight: "500",
      fontSize: { xs: "16px", sm: "18px", md: "20px", lg: "22px" },
      fontFamily: "Bricolage Grotesque",
      lineHeight: { xs: "24px", sm: "28px", md: "32px" },
      textAlign: { xs: "center", md: "left" },
      transition: "color 0.3s ease",
      "&:hover": {
        color: "#00CE84",
        transform: "scale(1.1)",
        backgroundColor: "#00CE84",
      },
    },
    footerIcons: {
      backgroundColor: "black",
      color: "white",
      borderRadius: "50%",
      padding: { xs: "4px", sm: "5px" },
      fontSize: { xs: "28px", sm: "32px", md: "36px", lg: "38px" },
      transition: "transform 0.3s ease-in-out",
      // "&:hover": { 
        
      // },
    },
    contactItem: {
      display: "flex",
      alignItems: "center",
      justifyContent: { xs: "center", md: "flex-start" },
      mb: { xs: 1.5, sm: 2 },
      fontSize: { xs: "16px", sm: "18px", md: "20px", lg: "22px" },
      fontFamily: "Bricolage Grotesque",
      lineHeight: { xs: "24px", sm: "28px", md: "32px" },
      textAlign: { xs: "center", md: "left" },
      width: "100%",
    },
    contactIcon: {
      mr: { xs: 1, sm: 1.5 },
      color: "#00CE84",
      fontSize: { xs: "18px", sm: "20px", md: "22px" },
    },
    contactLink: {
      textDecoration: "none",
      color: "#000000",
      transition: "color 0.3s ease",
      "&:hover": {
        color: "#00CE84",
      },
    },
    carAnimation: {
      position: 'absolute',
      top: { xs: '-15px', sm: '-25px', md: '-50px' },
      right: { xs: '-50px', sm: '-75px', md: '-100px' },
      width: { xs: '20px', sm: '25px', md: '40px', lg: '60px' },
      height: { xs: '20px', sm: '25px', md: '40px', lg: '60px' },
      animation: isVisible ? 'carMove 4s linear infinite' : 'none',
      transform: 'scaleX(-1)',
      zIndex: 1,
    },
    mobileGrid: {
      display: "grid",
      gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
      gap: { xs: 3, sm: 4 },
      width: "100%",
    },
  };

  const keyframes = `
    @keyframes carMove {
      0% {
        transform: scaleX(-1) translateX(0);
      }
      100% {
        transform: scaleX(-1) translateX(${isMobile ? 'calc(-100vw - 50px)' : isTablet ? 'calc(-100vw - 75px)' : 'calc(-110vw - 100px)'});
      }
    }
  `;

  return (
    <>
      <style>{keyframes}</style>
      <Box id="animated-footer" sx={styles.footerContainer}>
        {isVisible && (
          <Box
            component="img"
            src="/svg/car.png"
            alt="Moving car"
            sx={styles.carAnimation}
          />
        )}
        
        <Box sx={styles.footerMainContainer}>
          {/* Logo Section - Always first */}
          <Box sx={styles.logoSection}>
            <Box component="img" src="/Lane_Footer_Logo.svg" alt="Logo" sx={styles.logoImage} />
            <Box sx={styles.socialIconsContainer}>
              {socialIcons.map(({ Icon, href }, index) => (
                <Link
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconButton sx={styles.footerIcons}>
                    <Icon />
                  </IconButton>
                </Link>
              ))}
            </Box>
            <Typography sx={styles.tagline}>
              We do cool things here!
            </Typography>
          </Box>

          {/* Mobile/Tablet Grid Layout */}
          {(isMobile || isTablet) && (
            <Box sx={styles.mobileGrid}>
              {/* Information Section */}
              <Box sx={styles.sectionContainer}>
                <Box sx={styles.footerHeadingImage}>
                  <Typography variant="h4" sx={styles.footerHeading}>
                    Information
                  </Typography>
                </Box>
                <Box sx={styles.linksContainer}>
                  {infoLinks.map(({ text, href }, i) => (
                    <Link key={i} href={href} sx={styles.footerLinks}>
                      {text}
                    </Link>
                  ))}
                </Box>
              </Box>

              {/* Quick Links Section */}
              <Box sx={styles.sectionContainer}>
                <Box sx={styles.footerHeadingImage}>
                  <Typography variant="h4" sx={styles.footerHeading}>
                    Quick Links
                  </Typography>
                </Box>
                <Box sx={styles.linksContainer}>
                  {quickLinks.map(({ text, href }, i) => (
                    <Link key={i} href={href} sx={styles.footerLinks}>
                      {text}
                    </Link>
                  ))}
                </Box>
              </Box>

              {/* Contact Section - Full width on mobile */}
              <Box sx={{ 
                ...styles.sectionContainer, 
                gridColumn: { xs: "1", sm: "1 / -1" }
              }}>
                <Box sx={styles.footerHeadingImage}>
                  <Typography variant="h4" sx={styles.footerHeading}>
                    Contact Us
                  </Typography>
                </Box>
                <Box sx={styles.linksContainer}>
                  {contactInfo.map(({ Icon, text, href }, index) => (
                    <Typography key={index} sx={styles.contactItem}>
                      <Icon sx={styles.contactIcon} />
                      <Link
                        sx={styles.contactLink}
                        href={href}
                        target={text === "WhatsApp " ? "_blank" : "_self"}
                        rel={text === "WhatsApp " ? "noopener noreferrer" : ""}
                      >
                        {text}
                      </Link>
                    </Typography>
                  ))}
                </Box>
              </Box>
            </Box>
          )}

          {/* Desktop Layout */}
          {!isMobile && !isTablet && (
            <>
              {/* Information Section */}
              <Box sx={styles.sectionContainer}>
                <Box sx={styles.footerHeadingImage}>
                  <Typography variant="h4" sx={styles.footerHeading}>
                    Information
                  </Typography>
                </Box>
                <Box sx={styles.linksContainer}>
                  {infoLinks.map(({ text, href }, i) => (
                    <Link key={i} href={href} sx={styles.footerLinks}>
                      {text}
                    </Link>
                  ))}
                </Box>
              </Box>

              {/* Quick Links Section */}
              <Box sx={styles.sectionContainer}>
                <Box sx={styles.footerHeadingImage}>
                  <Typography variant="h4" sx={styles.footerHeading}>
                    Quick Links
                  </Typography>
                </Box>
                <Box sx={styles.linksContainer}>
                  {quickLinks.map(({ text, href }, i) => (
                    <Link key={i} href={href} sx={styles.footerLinks}>
                      {text}
                    </Link>
                  ))}
                </Box>
              </Box>

              {/* Contact Section */}
              <Box sx={styles.sectionContainer}>
                <Box sx={styles.footerHeadingImage}>
                  <Typography variant="h4" sx={styles.footerHeading}>
                    Contact Us
                  </Typography>
                </Box>
                <Box sx={styles.linksContainer}>
                  {contactInfo.map(({ Icon, text, href }, index) => (
                    <Typography key={index} sx={styles.contactItem}>
                      <Icon sx={styles.contactIcon} />
                      <Link
                        sx={styles.contactLink}
                        href={href}
                        target={text === "WhatsApp " ? "_blank" : "_self"}
                        rel={text === "WhatsApp " ? "noopener noreferrer" : ""}
                      >
                        {text}
                      </Link>
                    </Typography>
                  ))}
                </Box>
              </Box>
            </>
          )}
        </Box>
      </Box>
    </>
  );
};

export default Footer;
