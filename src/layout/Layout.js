import React from "react";
import Container from "@mui/material/Container";
import Header from "../components/Header";
import Fab from '@mui/material/Fab';
import GitHubIcon from '@mui/icons-material/GitHub';

function Layout({ children }) {
  return (
    <>
      <Header />
      <Container style={{maxWidth: "85vw"}}>{children}</Container>
      <Fab
        aria-label="add"
        variant="extended"
        href="https://github.com/juliswer/tech-test-next"
        style={{ position: "fixed", bottom: "20px", right: "20px" }}
      >
        <GitHubIcon style={{marginRight: "5px"}} />
        Check out Code
      </Fab>
    </>
  );
}

export default Layout;
