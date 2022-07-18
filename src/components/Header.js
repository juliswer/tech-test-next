// ? Import React
import React from "react";

// ? Import Next Hooks
import { useRouter } from "next/router";

// ? Import subcomponent for the Header
import LoginButton from "../components/LoginButton.js";

// ? Import Material UI Components
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

// ? Import Material UI Icons
import HomeIcon from "@mui/icons-material/Home";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

// * Header Component

function Header() {

  // Initialize Router
  const router = useRouter();

  // Logic to handle the back button
  const toggleOnClick = () => {
    if (router.pathname === "/") {
      router.push("/");
    } else {
      router.back();
    }
  };


  // * Render the Header
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: "#560032" }} className="animate__animated animate__fadeInDown">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleOnClick}
            sx={{ mr: 2 }}
          >
            {router.pathname === "/" ? <HomeIcon /> : <ArrowBackIcon />}
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Tasks JS
          </Typography>
          <LoginButton />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
