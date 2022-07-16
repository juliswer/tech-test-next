import React from "react";
import Container from "@mui/material/Container";
import Header from "../components/Header";

function Layout({ children }) {
  return (
    <>
      <Header />
      <Container>{children}</Container>
      <footer>
        <p>&copy; 2020</p>
      </footer>
    </>
  );
}

export default Layout;
