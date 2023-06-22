import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Box, Divider, IconButton, Paper } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CloseIcon from "@mui/icons-material/Close";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { customScrollbar, styleData } from "../Utils/Constants";

function TitlebarBelowImageList({
  handleClose,
  hoveredIndex,
  setHoveredIndex,
  selected,
  setSelected,
}) {
  const handleImageClick = (index, title) => {
    setSelected({
      index: index,
      title: title,
    });
    handleClose();
    console.log(selected);
  };

  React.useEffect(() => {
    console.log(selected);
  }, [selected]);

  const handleMouseOver = (index, title) => {
    setHoveredIndex({
      index: index,
      title: title,
    });
  };

  const handleMouseOut = () => {
    setHoveredIndex({
      index: "",
      title: "",
    });
  };

  return (
    <ImageList
      cols={3}
      gap={3}
      sx={{
        width: "95%",
        height: 385,
        ...customScrollbar,
        ml: 2,
      }}
    >
      {styleData.map((item) => (
        <ImageListItem key={item.img}>
          <Box>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              onClick={() => handleImageClick(item.img, item.title)}
              onMouseOver={() => handleMouseOver(item.img, item.title)}
              onMouseOut={handleMouseOut}
              style={{
                width: "100px",
                height: "auto",
                borderRadius: "8px",
                cursor: "pointer",
                filter:
                  selected.index === item.img || hoveredIndex.index === item.img
                    ? "brightness(100%)"
                    : "brightness(70%)",
              }}
              loading="lazy"
            />
          </Box>
          <ImageListItemBar
            title={
              <Typography
                sx={{
                  fontSize: "14px",
                  fontFamily: "Inter",
                  fontSize: "14px",
                  fontWeight:
                    hoveredIndex.title === item.title ||
                    selected.title === item.title
                      ? "500"
                      : "300",
                  color: "#fff",
                  opacity:
                    hoveredIndex.title === item.title ||
                    selected.title === item.title
                      ? 1
                      : 0.6,
                }}
              >
                {item.title}
              </Typography>
            }
            position="below"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

export default function EnhancePopover() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [hoveredIndex, setHoveredIndex] = React.useState({
    index: "",
    title: "",
  });
  const [selected, setSelected] = React.useState({
    index: "assets/StylesImage/enhance.png",
    title: "Enhance",
  });

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
        disableRipple
        sx={{
          size: "small",
          boxShadow: "none",
          width: "100%",
          paddingLeft: "0px",
          paddingRight: "0px",
          mt: 0,
          background: open ? "#27272a" : "none",
          textTransform: "none",
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
              src={selected.index}
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
              {selected.title}
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
        sx={{ ml: 2 }}
        PaperProps={{
          sx: {
            bgcolor: "#18181B",
            width: "23rem",
            minHeight: "55vh",
            boxShadow: "inset 0 0 0.9px #fff",
          },
        }}
      >
        <Box display="flex" justifyContent="space-between">
          <Typography
            sx={{
              color: "#fff",
              justifyContent: "center",
              padding: "8px",
              fontSize: "14px",
              fontFamily: "Inter",
              fontWeight: "400",
              ml: 1,
            }}
          >
            Styles
          </Typography>
          <IconButton onClick={handleClose} sx={{ color: "#fff", mr: 1 }}>
            <CloseIcon fontSize="small" />
          </IconButton>
        </Box>

        <Divider sx={{ borderBottomWidth: 1, bgcolor: "#3F3F46" }} />
        <TitlebarBelowImageList
          handleClose={handleClose}
          hoveredIndex={hoveredIndex}
          setHoveredIndex={setHoveredIndex}
          selected={selected}
          setSelected={setSelected}
        />
      </Popover>
    </div>
  );
}
