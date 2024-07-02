import { Button, Stack, IconButton, ButtonGroup } from "@mui/material";
import React from "react";
import SendIcon from "@mui/icons-material/Send";
const MuiButtons = () => {
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        <Button variant="text">Text</Button>
        <Button variant="outlined">outlined</Button>
        <Button variant="contained">contained</Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="contained" color="primary">
          primary
        </Button>
        <Button variant="contained" color="secondary">
          secondary
        </Button>
        <Button variant="contained" color="error">
          error
        </Button>
        <Button variant="contained" color="warning">
          warning
        </Button>
        <Button variant="contained" color="info">
          info
        </Button>
        <Button variant="contained" color="success">
          success
        </Button>
      </Stack>
      <Stack display="block" spacing={2} direction="row">
        <Button variant="contained" color="primary" size="small">
          small
        </Button>
        <Button variant="contained" color="secondary" size="medium">
          medium
        </Button>
        <Button variant="contained" color="error" size="large">
          large
        </Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button
          variant="contained"
          color="primary"
          size="small"
          startIcon={<SendIcon />}
        >
          small
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="medium"
          endIcon={<SendIcon></SendIcon>}
        >
          medium
        </Button>
        <Button variant="contained" color="error" size="large">
          large
        </Button>
        <IconButton aria-label="send" onClick={()=>{
            alert("button clicked")
        }}>
          <SendIcon />
        </IconButton>
      </Stack>
      
    </Stack>
  );
};

export default MuiButtons;
