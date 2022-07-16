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
        color="primary"
        aria-label="add"
        variant="extended"
        style={{ position: "fixed", bottom: "20px", right: "20px" }}
      >
        <GitHubIcon style={{marginRight: "5px"}} />
        Check Code
      </Fab>
      <footer>
        <p>&copy; 2020</p>
      </footer>
    </>
  );
}

export default Layout;
