import React from "react";
import { useRouter } from "next/router";

import { useUser } from "@auth0/nextjs-auth0";

import { Button, Typography } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import Avatar from "@mui/material/Avatar";

function LoginButton() {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/api/auth/login");
  };

  const handleLogout = () => {
    router.push("/api/auth/logout");
    localStorage.clear();
  };

  const { user, isLoading, error } = useUser();

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

  React.useEffect(() => {
    setUserData();
  }, [user]);

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
