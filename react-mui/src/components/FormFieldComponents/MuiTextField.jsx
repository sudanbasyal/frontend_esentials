import { InputAdornment, Stack, TextField } from "@mui/material";
import React, { useState } from "react";

const MuiTextField = () => {
  const [value, setValue] = useState({});
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={2}>
        <TextField label="First Name" variant="outlined" />
        <TextField label="First Name" variant="filled" />
        <TextField label="First Name" variant="standard" />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField
          label="Small Secondary"
          size="small"
          color="secondary"
          required
        />
        <TextField
          label="Email"
          size="small"
          color="secondary"
          required
          helperText="Choose a unique email"
          type="email"
        />
        <TextField
          label="Password"
          size="small"
          color="secondary"
          required
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          error={!value}
          helperText={!value?"Required":"Do not share your password"}
          type="password"
        />
        <TextField
          label="Read Only"
          size="small"
          color="secondary"
          inputProps={{ readOnly: true }}
        />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />

        <TextField
          label="weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          }}
        />
      </Stack>
    </Stack>
  );
};

export default MuiTextField;

//outlined is the default variant
// other variants include filled and standard

//size prop can be small medium or large
//color can be any of the six default colors

//required prop adds *
//helper text props provides helperText
//type prop to specify the type of input field

//InputProps has a value readOnly which only allows read

//InputProps with inputAdornment allows you to place adornments at the start or the end

//error props can be used to feed back validation messages to the user
