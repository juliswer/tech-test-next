// ? Import React
import React from "react";

// ? Import Material UI Components
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

// * Loading Component
function Loading() {
  // * Render Loading Component
  return (
    <>
      <Box display="flex">
        <CircularProgress />
      </Box>
    </>
  );
}

export default Loading;
