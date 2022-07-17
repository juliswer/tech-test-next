import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LoginButton from "../components/LoginButton.js";
import { useRouter } from "next/router";
import HomeIcon from "@mui/icons-material/Home";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function Header() {
  const router = useRouter();

  const toggleOnClick = () => {
    if (router.pathname === "/") {
      router.push("/");
    } else {
      router.back();
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: "#560032" }}>
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
