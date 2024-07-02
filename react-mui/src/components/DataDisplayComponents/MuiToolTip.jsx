import { Delete } from "@mui/icons-material";
import { IconButton, Tooltip } from "@mui/material";
import React from "react";

const MuiToolTip = () => {
  return (
    <Tooltip title="delete" placement="right" arrow enterDelay={500} leaveDelay={200}>
      <IconButton>
        <Delete />
      </IconButton>
    </Tooltip>
  );
};

export default MuiToolTip;
//tooltips display user when they hover over or focus on or tap on it useful with icons
//There are 12 placement values
//500ms and 200ms