import {
  Box,
  FormControl,
  FormLabel,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormHelperText
} from "@mui/material";
import React, { useState } from "react";

const MuiRadioButton = () => {
  const [value, setValue] = useState("");
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <Box>
      <FormControl error>
        <FormLabel id="job-experience">Years of Experience</FormLabel>
        <RadioGroup
          name="job-experience-group"
          aria-label="job-experience"
          value={value}
          onChange={handleChange}
          row
        >
          <FormControlLabel control={<Radio color="error" size="large" />} label="0-2" value="0-2" />
          <FormControlLabel control={<Radio />} label="3-5" value="3-5" />
          <FormControlLabel control={<Radio />} label="6-9" value="6-9" />
        </RadioGroup>
        <FormHelperText>Invalid</FormHelperText>
      </FormControl>
    </Box>
  );
};

export default MuiRadioButton;


//radio group props row which aligns radio into row
//default size of Radio component is medium