import { Box, Typography } from "@mui/material";
import React from "react";

const Signup = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <Typography
        variant="h1"
        fontFamily="Bricolage Grotesque"
        textAlign="center"
      >
        {" "}
        Welcome to signup page
      </Typography>{" "}
      <Typography
        variant="h3"
        fontFamily="Bricolage Grotesque"
        textAlign="center"
        color="red"
      >
        {" "}
        The work is under progress...
      </Typography>
    </Box>
  );
};

export default Signup;
