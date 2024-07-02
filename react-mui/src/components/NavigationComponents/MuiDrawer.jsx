import { Box, Drawer, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import { Add, Menu, Remove } from "@mui/icons-material";
const MuiDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <>
      <IconButton
        size="large"
        // edge="start"
        color="inherit"
        aria-label="logo"
        onClick={() => {
          setIsDrawerOpen(true);
        }}
      >
        <Add />
      </IconButton>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => {
          setIsDrawerOpen(false);
        }}
      >
        <Box p={2} width="250px" role="presentation">
          <Box display="flex" justifyContent="end">
            <IconButton
              anchor="right"
              onClick={() => {
                setIsDrawerOpen(false);
              }}
            >
              <Remove />
            </IconButton>
          </Box>
        </Box>
        {/* <Typography variant="h6" component="div">
          Side Panel
        </Typography> */}
      </Drawer>
    </>
  );
};

export default MuiDrawer;
//drawer component is used to build a sidebar
//anchor props specifies which side the sidebar starts
//ARIA- accessible Rich Internet Applications
//some aria roles
// *button: Identifies an element as a button that can be activated by a user.
// *navigation: Indicates a region intended for navigation.
// *dialog: Identifies a dialog box or window.
// *presentation: Indicates that the element is being used only for presentation and should not be interpreted by assistive technologies (e.g., it has no semantic meaning).
// *alert: Indicates a message with important, and usually time-sensitive, information.
