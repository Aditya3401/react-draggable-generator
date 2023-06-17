import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function EnhancePopover() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <Button
        sx={{
          size: "small",
          boxShadow: "none",
          width: "100%",
          paddingLeft: "0px",
          paddingRight: "0px",
          mt: 0,
          background: "none",
          textTransform: "capitalize",
          justifyContent: "flex-start",
          "&:hover": {
            background: "none",
            boxShadow: "none",
          },
        }}
        aria-describedby={id}
        variant="contained"
        onClick={handleClick}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          sx={{ width: "100%", ml: 1 }}
        >
          <Box display="flex" alignItems="center">
            <img
              alt="enhance"
              src="assets/enhance.png"
              style={{ height: "17px", width: "17px" }}
            />
            <Typography
              sx={{
                ml: 1,
                fontFamily: "Inter",
                fontWeight: "400",
                fontSize: "14px",
              }}
            >
              Enhance
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", mr: 1 }}>
            <ArrowForwardIosIcon sx={{ fontSize: "12px" }} />
          </Box>
        </Box>
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
      </Popover>
    </div>
  );
}
