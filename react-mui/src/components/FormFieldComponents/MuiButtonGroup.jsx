import { Button, ButtonGroup, Stack } from "@mui/material";
import React from "react";

const MuiButtonGroup = () => {
  return (
    <Stack>
      <Stack display="block">
        <ButtonGroup variant="outlined" orientation="vertical">
          <Button>left</Button>
          <Button>center</Button>
          <Button>right</Button>
        </ButtonGroup>
      </Stack>
    </Stack>
  );
};

export default MuiButtonGroup;
