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
            <Box sx={{ mr: 1 }}>
              <img
                alt="logo"
                src="assets/logo.png"
                style={{ height: "30px", width: "30px" }}
              />
            </Box>
            <Box>
              <Typography sx={{ fontWeight: "500", fontFamily: "Inter" }}>
                DreamStudio
              </Typography>
              <Typography
                sx={{
                  fontSize: "10px",
                  fontWeight: "300",
                  fontFamily: "Inter",
                }}
              >
                by stability.ai
              </Typography>
            </Box>
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
