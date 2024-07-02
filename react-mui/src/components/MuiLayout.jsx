import { Box, Stack, Divider, Grid, Paper } from "@mui/material";
import React from "react";

const MuiLayout = () => {
  return (
    <Paper sx={{ padding: "32px" }} elevation={4}>
      <Stack
        sx={{
          border: "1px solid red",
        }}
        direction="row"
        spacing={2} //spacing{2} means 2*8=16px space between the items
        divider={<Divider orientation="vertical" flexItem />}
      >
        <Box
          component="span"
          sx={{
            backgroundColor: "primary.main",
            color: "white",
            height: "100px",
            width: "100px",
            padding: "16px",
            "&:hover": {
              backgroundColor: "primary.light",
            },
          }}
        >
          MuiLayout
        </Box>
        <Box
          display="flex"
          height="100px"
          width="100px"
          bgcolor="success.light"
          p={2}
        ></Box>
      </Stack>
      <Grid
        container
        my={4}
        spacing={2} // rowSpacing={2}// columnSpacing={1}
      >
        <Grid item xs sm={6}>
          <Box bgcolor="primary.main" p={2} border={1}>
            Item 1
          </Box>
        </Grid>
        <Grid item xs sm={6}>
          <Box bgcolor="primary.main" p={2} border={1}>
            Item 2
          </Box>
        </Grid>
        <Grid item xs sm={6}>
          <Box bgcolor="primary.main" p={2} border={1}>
            Item 3
          </Box>
        </Grid>
        <Grid item xs sm={6}>
          <Box bgcolor="primary.main" p={2} border={1}>
            Item 4
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default MuiLayout;

//box is an replacement to div
//box accepts sx for custom css while div doesn't so box is used instead of div
//stack component is used to manage layout in one dimension that is vertical or horizontal axis
//default stack direction is column
// Use Box when you need more control over the layout and styles, or when you are dealing with complex layouts that require custom CSS properties.
// Use Stack when you want a straightforward way to manage vertical or horizontal layouts with consistent spacing between elements.
//grid is used for two dimensional and responsive layouts
//grid has container and item props container for parent and item for children
//the grid consists of 12 columns and we can assign integer values which indicates how many of the 12 available columns are occupied by the gridItems
//to assign equal space just assign xs

//paper adds a white background it is generally used in login forms
//elevation prop handles the box shadow property and default value is 1