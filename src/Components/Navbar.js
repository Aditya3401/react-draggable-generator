import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Divider } from "@mui/material";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          background: "#18181B",
          padding: "7px",
          boxShadow: "none",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {/* <img src="assets/logo1.png" alt="logo" />
            <img
              src="assets/logo2.png"
              alt="logo"
              style={{ filter: "brightness(0) invert(1)" }}
            /> */}
          </Box>
          <Box sx={{ alignItems: "center" }}>
            <Button
              variant="contained"
              sx={{
                color: "#fff",
                background: "#6844D2",
                textTransform: "capitalize",
              }}
            >
              Login
            </Button>
          </Box>
        </Box>
      </AppBar>
      <Divider sx={{ borderBottomWidth: 1, bgcolor: "#3F3F46" }} />
    </Box>
  );
}
