import { ExpandMore } from "@mui/icons-material";
import { Masonry } from "@mui/lab";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
const heights = [
  150, 30, 90, 70, 110, 150, 130, 80, 50, 90, 100, 150, 30, 50, 80,
];
const MuiMasonry = () => {
  return (
    <Box sx={{ width: 500, minHeight: 400 }}>
      <Masonry columns={4} spacing={1}>
        {heights.map((height, index) => (
          //   <Paper
          //     key={index}
          //     sx={{
          //       display: "flex",
          //       justifyContent: "center",
          //       alignItems: "center",
          //       height,
          //       border: "1px solid",
          //     }}
          //   >
          //     {index + 1}
          //   </Paper>
          <Paper
            sx={{
              border: "1px solid",
            }}
          >
            <Accordion sx={{ minHeight: height }}>
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography>Accordion {index + 1}</Typography>
              </AccordionSummary>
              <AccordionDetails>Content</AccordionDetails>
            </Accordion>
          </Paper>
        ))}
      </Masonry>
    </Box>
  );
};

export default MuiMasonry;
//masonry component maintains a list of content blocks with consistent width but different height the contents are ordered by row
