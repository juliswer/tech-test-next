import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

function Loading() {
  return (
    <>
      <Box
        display="flex"
      >
        <CircularProgress />
      </Box>
    </>
  );
}

export default Loading;
