import {
  FormatBold,
  FormatItalic,
  FormatUnderlined,
} from "@mui/icons-material";
import { Stack, ToggleButton, ToggleButtonGroup } from "@mui/material";
import React, { useState } from "react";

const MuiToggleButtons = () => {
  const [format, setFormat] = useState("");
  const handleFormatChange = (_event, updatedFormats) => {
    setFormat(updatedFormats);
  };
  return (
    <Stack direction="row">
      <ToggleButtonGroup
        aria-label="text formatting"
        value={format}
        onChange={handleFormatChange}
        exclusive
      >
        <ToggleButton value="bold" aria-label="bold">
          <FormatBold />
        </ToggleButton>
        <ToggleButton value="italic" aria-label="italic">
          <FormatItalic />
        </ToggleButton>
        <ToggleButton value="underlined" aria-label="underlined">
          <FormatUnderlined />
        </ToggleButton>
      </ToggleButtonGroup>
    </Stack>
  );
};

export default MuiToggleButtons;

// in onChange the updateFormat is a variable but the variable is automatically passed as togglebuttongroup stores a state internally and passes it on onChange event
