import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
  List,
  ListItem,
  ListItemText,
  Button,
} from "@mui/material";
import {
  Instagram as InstagramIcon,
  X as XIcon,
  LinkedIn as LinkedInIcon,
  Phone as PhoneIcon,
  Email as EmailIcon,
  WhatsApp as WhatsAppIcon,
} from "@mui/icons-material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  const handleClose = () => {
    setDrawerOpen(false);
  };

  const drawerContent = (
    <Box
      role="presentation"
      display="flex"
      justifyContent="space-between"
      flexDirection="column"
      height="100%"
    >
      <Box margin={"20px"}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          margin="20px"
        >
          <img
            src="./LANE_LOGO_White.svg"
            alt="Website Logo"
            style={{ maxWidth: "40%", height: "auto" }}
          />
        </Box>
        <List>
          <ListItem button component={Link} to="/" onClick={handleClose}>
            <ListItemText
              primary={
                <Typography
                  variant="h5"
                  sx={{ fontFamily: "Bricolage Grotesque" }}
                >
                  Home
                </Typography>
              }
            />
          </ListItem>
          <ListItem button component={Link} to="/courses" onClick={handleClose}>
            <ListItemText
              primary={
                <Typography
                  variant="h5"
                  sx={{ fontFamily: "Bricolage Grotesque" }}
                >
                  Courses
                </Typography>
              }
            />
          </ListItem>
          {/* <ListItem button>
            <ListItemText primary={
              <Typography variant="h5" sx={{ fontFamily: 'Bricolage Grotesque' }}>
                Lane Journal
              </Typography>} />
          </ListItem>
          <ListItem button>
            <ListItemText primary={
              <Typography variant="h5" sx={{ fontFamily: 'Bricolage Grotesque' }}>
                About Us
              </Typography>} />
          </ListItem>
          <ListItem button>
            <ListItemText primary={
              <Typography variant="h5" sx={{ fontFamily: 'Bricolage Grotesque' }}>
                Contact Us
              </Typography>} />
          </ListItem> */}
        </List>
      </Box>
      <Box margin={"20px"} display="flex" justifyContent="center">
        <IconButton
          component="a"
          href="https://www.instagram.com/inlane.in/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon />
        </IconButton>
        <IconButton
          component="a"
          href="https://x.com/inlane_in/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <XIcon />
        </IconButton>
        <IconButton
          component="a"
          href="https://www.linkedin.com/company/in-lane/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon />
        </IconButton>
      </Box>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" elevation={0}>
        <Toolbar
          sx={{
            backgroundColor: "#FAF9E6",
            boxShadow: "none",
            padding: theme.spacing(2),
          }}
        >
          <Typography
            variant="h4"
            component={Link}
            to="/"
            sx={{
              flexGrow: 1,
              color: "green",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              paddingLeft: { xs: theme.spacing(2) },
            }}
          >
            <img
              src="/LANE_LOGO.svg"
              alt="Lane logo"
              width={isMobile ? 50 : 60}
              style={{ marginRight: theme.spacing(1) }}
            />
          </Typography>
          {isMobile ? (
            <Link
              to={"/courses"}
              style={{ textTransform: "none", textDecoration: "none" }}
            >
              <Button
                sx={{
                  bgcolor: "#00CE84",
                  color: "#fff",
                  textTransform: "none",
                  fontFamily: "Bricolage Grotesque",
                  fontSize: "1rem",
                  "&:hover": {
                    bgcolor: "#00CE84",
                  },
                }}
              >
                Courses
              </Button>
            </Link>
          ) : (
            <IconButton
              size="large"
              edge="end"
              aria-label="menu"
              aria-controls="menu-appbar"
              onClick={toggleDrawer}
              sx={{
                fontWeight: "bold",
                marginRight: theme.spacing(1),
                width: 54,
                height: 44,
              }}
            >
              <img
                src="/Hamburger Menu.png"
                alt="menu icon"
                width={30}
                height={isMobile ? 20 : 25}
              />
            </IconButton>
          )}
          <Drawer open={drawerOpen} anchor="right" onClose={toggleDrawer}>
            <Box
              sx={{
                // width: 250,
                padding: theme.spacing(2.5),
                height: "100vh",
                backgroundColor: "#00CE84",
              }}
            >
              {drawerContent}
            </Box>
          </Drawer>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
