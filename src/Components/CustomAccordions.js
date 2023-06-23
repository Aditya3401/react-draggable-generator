import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Box, Divider, Slider } from "@mui/material";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      <ArrowForwardIosSharpIcon
        sx={{ fontSize: "0.9rem", color: "#fff", opacity: "0.8" }}
      />
    }
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? "rgba(255, 255, 255, .05)" : "none",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
}));

export default function CustomAccordions({
  pages,
  setPages,
  setDestinationData,
  disablePage,
}) {
  const [expanded, setExpanded] = React.useState("panel2");
  const [sliderValue, setSliderValue] = React.useState(5);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const valuetext = (value) => {
    return `${value}`;
  };

  const handleSlider = (event) => {
    setSliderValue(event.target.value);
  };

  const handlePages = (event) => {
    setPages(event.target.value);
    const newDestinationData = [];
    for (let i = 1; i <= event.target.value; i++) {
      const droppable = {
        id: `droppable${i}`,
        page: i,
        items: [], // Initialize with empty items array
      };
      newDestinationData.push(droppable);
    }
    setDestinationData(newDestinationData);
  };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
        sx={{
          background: "none",
          border: "none",
        }}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography
            sx={{
              color: "#fff",
              opacity: "0.8",
              fontFamily: "Inter",
              fontWeight: "300",
              fontSize: "14px",
            }}
          >
            Settings
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box display="flex" justifyContent="space-between">
            <Typography
              sx={{
                color: "#fff",
                fontFamily: "Inter",
                fontSize: "14px",
                fontWeight: "300",
              }}
            >
              Image count
            </Typography>
            <Typography
              sx={{
                color: "#fff",
                fontFamily: "Inter",
                fontSize: "14px",
                fontWeight: "300",
              }}
            >
              {sliderValue}
            </Typography>
          </Box>

          <Slider
            aria-label="Count"
            onChange={handleSlider}
            defaultValue={5}
            getAriaValueText={valuetext}
            //valueLabelDisplay="auto"
            step={1}
            min={1}
            max={10}
            sx={{
              color: "#5833C3",
              height: "2px",
              padding: "13px 0",
              "& .MuiSlider-thumb": {
                height: 12.25,
                width: 12.25,
              },
              "& .MuiSlider-track": {
                height: "2px",
              },
            }}
          />
        </AccordionDetails>
        <AccordionDetails>
          <Box display="flex" justifyContent="space-between">
            <Typography
              sx={{
                color: "#fff",
                fontFamily: "Inter",
                fontSize: "14px",
                fontWeight: "300",
              }}
            >
              Pages
            </Typography>
            <Typography
              sx={{
                color: "#fff",
                fontFamily: "Inter",
                fontSize: "14px",
                fontWeight: "300",
              }}
            >
              {pages}
            </Typography>
          </Box>

          <Slider
            aria-label="Count"
            disabled={disablePage}
            onChange={handlePages}
            defaultValue={1}
            value={pages}
            getAriaValueText={valuetext}
            //valueLabelDisplay="auto"
            step={1}
            min={1}
            max={10}
            sx={{
              color: "#5833C3",
              height: "2px",
              padding: "13px 0",
              "& .MuiSlider-thumb": {
                height: 12.25,
                width: 12.25,
              },
              "& .MuiSlider-track": {
                height: "2px",
              },
            }}
          />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
