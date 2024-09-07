import React from "react";
import { Container, Typography, Box } from "@mui/material";

const PageTemplate = ({ title, children }) => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 4,
          mb: 4,
        }}
      >
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          fontFamily="Bricolage Grotesque"
          sx={{ fontWeight: "bold", textAlign: "center" }}
        >
          {title}
        </Typography>
        <Box sx={{ maxWidth: "800px", width: "100%", textAlign: "justify" }}>
          {children}
        </Box>
      </Box>
    </Container>
  );
};

export default PageTemplate;
