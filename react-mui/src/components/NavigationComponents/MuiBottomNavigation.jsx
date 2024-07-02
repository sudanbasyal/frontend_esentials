import { Favorite, Home, Person } from "@mui/icons-material";
import { BottomNavigation, BottomNavigationAction, Box } from "@mui/material";
import React, { useState } from "react";
import MuiBreadCrumbs from "./NavigationComponents/MuiBreadCrumbs";
import MuiAccordion from "./MuiAccordion";
import MuiAutoComplete from "./MuiAutoComplete";

const MuiBottomNavigation = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const renderContent = () => {
    switch (value) {
      case 0:
        return <MuiBreadCrumbs />;
      case 1:
        return <MuiAccordion />;
      case 2:
        return <MuiAutoComplete />;
      default:
        return <MuiBreadCrumbs />;
    }
  };

  return (
    <Box sx={{ width: "100%", position: "relative", minHeight: "100vh" }}>
      <Box sx={{ paddingBottom: "56px" }}>{renderContent()}</Box>
      <BottomNavigation
        sx={{ width: "100%", position: "absolute", bottom: 0 }}
        value={value}
        onChange={handleChange}
      >
        <BottomNavigationAction label="Home" icon={<Home />} />
        <BottomNavigationAction label="Favorites" icon={<Favorite />} />
        <BottomNavigationAction label="Profile" icon={<Person />} />
      </BottomNavigation>
    </Box>
  );
};

export default MuiBottomNavigation;
