import { Autocomplete, Stack, TextField } from "@mui/material";
import React, { useState } from "react";

const skills = ["HTML", "CSS", "JavaScript", "TypeScript", "React"];

const MuiAutoComplete = () => {
  const [value, setValue] = useState(null);
  console.log(value);
  return (
    <Stack spacing={2} width="250px">
      <Autocomplete
        options={skills}
        renderInput={(params) => <TextField {...params} label="Skills" />}
        value={value}
        onChange={(event, newValue) => setValue(newValue)}
        freeSolo
      />
    </Stack>
  );
};

export default MuiAutoComplete;


// Autocomplete accepts an array of strings or an array of objects
//two mandatory props in autocomplete options and
