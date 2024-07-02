import { Face } from "@mui/icons-material";
import { Avatar, Chip, Stack } from "@mui/material";
import React, { useState } from "react";

const MuiChips = () => {
  const [chips, setChips] = useState(["chip1", "chip2", "chip3"]);
  const handleDelete = (chipToDelete) => {
    setChips((chips) => chips.filter((chip) => chip !== chipToDelete));
  };
  return (
    <Stack direction="row" spacing={1}>
      {/* <Chip label="Chip" color="primary" size="small" />
      <Chip
        label="Outlined Chip"
        color="secondary"
        size="small"
        variant="outlined"
        avatar={
          <Avatar>
            <Face />
          </Avatar>
        }
      />
      <Chip
        label="Click"
        size="small"
        color="success"
        onClick={() => {
          alert("Clicked");
        }}
      />
      <Chip
        label="Delete"
        size="small"
        color="error"
        onDelete={() => {
          alert("Deleted");
        }}
      /> */}
      {chips.map((chip) => (
        <Chip key={chip} label={chip} onDelete={() => handleDelete(chip)} />
      ))}
    </Stack>
  );
};

export default MuiChips;
//chips allows user to enter information make selection filter contents etc
//default size is medium