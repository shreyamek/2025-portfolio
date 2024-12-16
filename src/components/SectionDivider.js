import React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

function SectionDivider() {
  return (
    <Box sx={{ width: "100%", display: "flex", justifyContent: "center", marginY: "32px" }}>
      <Divider sx={{ width: "75%", backgroundColor: "divider" }} />
    </Box>
  );
}

export default SectionDivider;
