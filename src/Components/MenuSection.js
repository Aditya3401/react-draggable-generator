import React, { useState } from "react";
import {
  Box,
  Button,
  Divider,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import EnhancePopover from "./EnhancePopover";
import PromptsBar from "./PromptsBar";
import CustomAccordions from "./CustomAccordions";
import { data, imageData } from "../Utils/Constants";
import { motion, AnimatePresence } from "framer-motion";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import "../Css/MenuSection.css";

const MenuSection = ({
  selected,
  setSelected,
  setSourceData,
  open,
  setOpen,
  pages,
  setPages,
  setDestinationData,
}) => {
  const [disablePage, setDisablePage] = useState(false);

  const handleChange = (event) => {
    setSelected(event.target.value);
  };

  const handleGenerate = () => {
    console.log(selected);
    setDisablePage(true);
    if (selected === "text") {
      setSourceData(data);
    } else if (selected === "image") {
      setSourceData(imageData);
    }
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <>
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
          >
            <Box
              sx={{
                background: "#18181B",
                height: "auto",
              }}
            >
              <Box
                sx={{
                  padding: "7px",
                  display: "flex",
                  justifyContent: "center",
                  position: "relative",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Inter",
                    fontWeight: "400",
                    color: "#fff",
                    fontSize: "1.25rem",
                  }}
                >
                  React Draggable Generator
                </Typography>
                <IconButton
                  onClick={handleToggle}
                  sx={{ color: "#fff", position: "absolute", right: 1 }}
                >
                  <KeyboardDoubleArrowLeftIcon />
                </IconButton>
              </Box>
              <Divider sx={{ borderBottomWidth: 1, bgcolor: "#3F3F46" }} />
              <Box sx={{ padding: "7px" }}>
                <Typography
                  sx={{
                    fontFamily: "Inter",
                    fontWeight: "300",
                    fontSize: "12.25px",
                    color: "#fff",
                    ml: "8.25px",
                  }}
                >
                  Style
                </Typography>
                <EnhancePopover />
              </Box>
              <Divider sx={{ borderBottomWidth: 1, bgcolor: "#3F3F46" }} />
              <Box sx={{ padding: "7px" }}>
                <Box
                  display="flex"
                  alignItems="center"
                  sx={{ mb: 1, justifyContent: "space-between", ml: 2, mr: 2 }}
                >
                  <InputLabel
                    id="demo-simple-select-label"
                    sx={{ color: "#fff" }}
                  >
                    Search type
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selected}
                    label="Select"
                    onChange={handleChange}
                    sx={{ width: "70%", background: "#3F3F46", color: "#fff" }}
                    size="small"
                  >
                    <MenuItem value="text">Text</MenuItem>
                    <MenuItem value="image">Image</MenuItem>
                  </Select>
                </Box>

                <PromptsBar
                  name="Prompt"
                  color="green"
                  placeholderText="What do you want to see ?"
                />
                <Box sx={{ mt: 1 }}></Box>
                <PromptsBar
                  name="Negative prompt"
                  color="red"
                  placeholderText="What do you want to avoid ?"
                />
              </Box>
              <Divider sx={{ borderBottomWidth: 1, bgcolor: "#3F3F46" }} />
              <Box>
                <CustomAccordions
                  pages={pages}
                  setPages={setPages}
                  setDestinationData={setDestinationData}
                  disablePage={disablePage}
                />
              </Box>
              <Divider sx={{ borderBottomWidth: 1, bgcolor: "#3F3F46" }} />
              <Box sx={{ padding: "7px" }}>
                <Button
                  sx={{
                    width: "100%",
                    background: "rgb(118, 53, 220)",
                    borderRadius: "8px",
                    boxShadow: "rgba(118, 53, 220, 0.24) 0px 8px 16px 0px",
                    "&:hover": {
                      boxShadow: "none",
                      backgroundColor: "rgb(67, 26, 158)",
                    },
                  }}
                  variant="contained"
                  onClick={handleGenerate}
                >
                  <img
                    alt="dreamImage"
                    src="assets/DreamImg.png"
                    style={{ height: "15px", width: "15px" }}
                  />
                  <Typography
                    sx={{
                      ml: 0.6,
                      textTransform: "capitalize",
                      fontFamily: "Inter",
                      fontWeight: "500",
                      fontSize: "0.875rem",
                    }}
                  >
                    Dream
                  </Typography>
                </Button>
              </Box>
            </Box>
          </motion.div>
        ) : (
          <IconButton
            onClick={handleToggle}
            sx={{
              color: "#fff",
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <KeyboardDoubleArrowRightIcon />
          </IconButton>
        )}
      </AnimatePresence>
    </>
  );
};

export default MenuSection;
