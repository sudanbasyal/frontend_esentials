import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const MuiAccordion = () => {
  const [expanded, setExpanded] = useState(false);
  const handleChange = (isExpanded, panel) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel1")}
      >
        <AccordionSummary
          id="panel1-header"
          aria-controls="panel1-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
          doloremque minus aperiam aspernatur ipsum architecto consequuntur modi
          accusamus perspiciatis vero soluta debitis veritatis, minima aliquid,
          numquam cupiditate repellat pariatur delectus ratione et! Vitae,
          blanditiis magni, corporis nam dolor asperiores deserunt ad eligendi
          aut, cumque vero optio consectetur sit officiis eos!
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel2")}
      >
        <AccordionSummary
          id="panel2-header"
          aria-controls="panel2-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
          doloremque minus aperiam aspernatur ipsum architecto consequuntur modi
          accusamus perspiciatis vero soluta debitis veritatis, minima aliquid,
          numquam cupiditate repellat pariatur delectus ratione et! Vitae,
          blanditiis magni, corporis nam dolor asperiores deserunt ad eligendi
          aut, cumque vero optio consectetur sit officiis eos!
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel3")}
      >
        <AccordionSummary
          id="panel3-header"
          aria-controls="panel3-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Accordion 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
          doloremque minus aperiam aspernatur ipsum architecto consequuntur modi
          accusamus perspiciatis vero soluta debitis veritatis, minima aliquid,
          numquam cupiditate repellat pariatur delectus ratione et! Vitae,
          blanditiis magni, corporis nam dolor asperiores deserunt ad eligendi
          aut, cumque vero optio consectetur sit officiis eos!
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default MuiAccordion;
