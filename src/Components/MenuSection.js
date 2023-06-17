import React from "react";
import {
  Box,
  Button,
  Divider,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import EnhancePopover from "./EnhancePopover";
import PromptsBar from "./PromptsBar";
import CustomAccordions from "./CustomAccordions";
import { data, imageData } from "../Utils/Constants";

const MenuSection = ({ selected, setSelected, setSourceData }) => {
  const handleChange = (event) => {
    setSelected(event.target.value);
  };

  const handleGenerate = () => {
    console.log(selected);
    if (selected === "text") {
      setSourceData(data);
    } else if (selected === "image") {
      setSourceData(imageData);
    }
  };

  return (
    <>
      <Box sx={{ background: "#18181B", height: "auto" }}>
        <Box sx={{ padding: "7px", display: "flex" }}>
          <Button
            variant="contained"
            onClick={handleGenerate}
            sx={{
              width: "50%",
              mr: 0.5,
              textTransform: "capitalize",
              background: "#3F3F46",
              justifyContent: "flex-start",
            }}
          >
            <img
              src="assets/Generate.png"
              alt="Generate"
              style={{ marginRight: "6px" }}
            />
            <Typography
              sx={{ fontFamily: "Inter", fontSize: "14px", fontWeight: "300" }}
            >
              Generate
            </Typography>
          </Button>
          <Button
            variant="contained"
            sx={{
              width: "50%",
              ml: 0.5,
              textTransform: "capitalize",
              background: "#27272A",
              justifyContent: "flex-start",
            }}
          >
            <img
              src="assets/Edit.png"
              alt="Edit"
              style={{ marginRight: "6px" }}
            />
            <Typography
              sx={{
                fontFamily: "Inter",
                fontSize: "14px",
                fontWeight: "300",
                opacity: "0.8",
              }}
            >
              Edit
            </Typography>
          </Button>
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
            <InputLabel id="demo-simple-select-label" sx={{ color: "#fff" }}>
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
          <CustomAccordions />
        </Box>
        <Divider sx={{ borderBottomWidth: 1, bgcolor: "#3F3F46" }} />
        <Box sx={{ padding: "7px" }}>
          <Button
            sx={{ width: "100%", background: "#6844D2", borderRadius: "3.5px" }}
            variant="contained"
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
                fontWeight: "300",
                fontSize: "14px",
              }}
            >
              Dream
            </Typography>
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default MenuSection;
