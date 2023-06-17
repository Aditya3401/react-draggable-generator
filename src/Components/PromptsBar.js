import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";

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

const AccordionSummary = styled(({ color, ...props }) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem", color }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? "rgba(255, 255, 255, .05)" : "#27272A",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  paddingLeft: theme.spacing(2),
}));

export default function PromptsBar({ name, color, placeholderText }) {
  const [expanded, setExpanded] = React.useState("panel");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        sx={{
          background: "#27272A",
          border: "1px solid #3F3F46",
          borderRadius: "3.5px",
        }}
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          color={color}
          aria-controls="panel1d-content"
          id="panel1d-header"
        >
          <Typography
            sx={{
              color: "#fff",
              opacity: "0.8",
              fontFamily: "Inter",
              fontWeight: "300",
              fontSize: "14px",
            }}
          >
            {name}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TextField
            variant="standard"
            sx={{ width: "100%", input: { color: "#fff" } }}
            id="outlined-basic"
            placeholder={placeholderText}
            InputProps={{
              disableUnderline: true,
            }}
          />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
