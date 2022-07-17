// ? Import React
import React from "react";

// ? Import Next hooks
import { useRouter } from "next/router";

// ? Import Auth0 Hooks
import { useUser } from "@auth0/nextjs-auth0";

// ? Import Material UI Components
import { Button, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";

// ? Import Material UI Icons
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";

// * Header Component

function LoginButton() {
  // Initialize Router
  const router = useRouter();

  // Logic for Login Button
  const handleLogin = () => {
    router.push("/api/auth/login");
  };

  // Logic for Logout Button
  const handleLogout = () => {
    router.push("/api/auth/logout");
    localStorage.clear();
  };

  // Initialize Auth0 Hooks
  const { user, isLoading, error } = useUser();

  // * Render and save the user data (provided by auth0) and save it in the localStorage
  const setUserData = () => {
    if (user) {
      const generatedToken = Date.now();

      const bodyToSave = {
        name: user.name,
        email: user.email,
        picture: user.picture,
        accessToken: generatedToken,
      };

      localStorage.setItem("user", JSON.stringify(bodyToSave));
    }
  };

  // ? UseEffect to always be pendient of userData changes
  React.useEffect(() => {
    setUserData();
  }, [user]);


  // * Render the Login/Logout Button
  return (
    <>
      {user && (
        <>
          <Avatar src={user.picture} style={{ marginRight: "10px" }} />
          <Typography
            variant="h6"
            component="h2"
            style={{ marginRight: "10px", fontWeight: "600", fontSize: "17px" }}
          >
            {user.name}
          </Typography>
        </>
      )}
      <Button
        color="inherit"
        startIcon={user ? <LogoutIcon /> : <LoginIcon />}
        onClick={user ? handleLogout : handleLogin}
      >
        {user ? "Logout" : "Login"}
      </Button>
    </>
  );
}

export default LoginButton;
