// ? Import React
import React from "react";

// ? Import Material UI components
import Container from "@mui/material/Container";
import Fab from "@mui/material/Fab";
import GitHubIcon from "@mui/icons-material/GitHub";

// ? Import Components (Header and SpeedDialComponent)
import SpeedDialComponent from "../components/SpeedDial";
import Header from "../components/Header";

// * Layout Component
function Layout({ children }) {
  // * Render Layout Component
  return (
    <>
      <Header />
      <Container style={{ maxWidth: "85vw" }}>{children}</Container>
      <Fab
        aria-label="add"
        className="animate__animated animate__fadeInLeft"
        variant="extended"
        href="https://github.com/juliswer/tech-test-next"
        style={{ position: "fixed", bottom: "20px", left: "20px" }}
      >
        <GitHubIcon style={{ marginRight: "5px" }} />
        View Source Code
      </Fab>
      <SpeedDialComponent />
    </>
  );
}

export default Layout;
