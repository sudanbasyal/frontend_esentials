import { Box, MenuItem, TextField } from "@mui/material";
import React, { useState } from "react";

const MuiSelectBox = () => {
  const [countries, setCountries] = useState([]);
  const handleChange = (event) => {
    const value = event.target.value;
    console.log(value);
    setCountries(typeof value === "string" ? value.split(",") : value);
  };
  return (
    <Box width="250px">
      <TextField
        label="select country"
        select
        value={countries}
        onChange={handleChange}
        fullWidth
        SelectProps={{
          multiple: true,
        }}
        size="small"
        color="secondary"
        helperText="Please Select Your Country"
      >
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="US">USA</MenuItem>
        <MenuItem value="AU">Australia</MenuItem>
      </TextField>
    </Box>
  );
};

export default MuiSelectBox;
//Box is a div tag where we can specify width and height properties
//we have two ways either use TextArea component or Select component
//to make textfield a select just provide a select prop and use MenuItem to give options
//selectProps targets the Select component
//due to multiple prop the value becomes an array
//error props changes label and helper text color to red
