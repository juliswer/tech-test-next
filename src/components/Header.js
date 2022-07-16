import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import { useAuth0 } from "@auth0/auth0-react";
import AddIcon from "@mui/icons-material/Add";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import { useRouter } from "next/router";
import HomeIcon from "@mui/icons-material/Home";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function Header() {
  const { loginWithRedirect } = useAuth0();

  const router = useRouter();

  const toggleOnClick = () => {
    if (router.pathname === "/") {
      router.push("/");
    } else {
      router.back();
    }
  }

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
            {router.pathname === "/" ? < HomeIcon /> : <ArrowBackIcon />}
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            JSwerdlin Tasks
          </Typography>
          <Button
            color="inherit"
            startIcon={<AddIcon />}
            onClick={() => router.push("/create")}
          >
            Create
          </Button>
          <Button
            color="inherit"
            startIcon={<LoginIcon />}
            onClick={() => loginWithRedirect()}
          >
            Login
          </Button>
          {/* <Button color="inherit" startIcon={<LogoutIcon />} onClick={() => loginWithRedirect()}>
            Logout
          </Button> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
