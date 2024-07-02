import { Check } from "@mui/icons-material";
import { Alert, AlertTitle, Button, Stack } from "@mui/material";
import React from "react";

const MuiAlert = () => {
  return (
    <Stack spacing={2}>
      <Alert severity="error">This is an error alert</Alert>
      <Alert severity="warning">This is an warning alert</Alert>
      <Alert severity="info">This is an info alert</Alert>
      <Alert severity="success">This is an error alert</Alert>

      <Alert
        variant="outlined"
        severity="error"
        onClose={() => alert("Close Alert")}
      >
        <AlertTitle>Error</AlertTitle>
        This is an error alert
      </Alert>
      <Alert variant="outlined" severity="warning">
        <AlertTitle>Warning</AlertTitle>
        This is an warning alert
      </Alert>
      <Alert variant="outlined" severity="info">
        <AlertTitle>Info</AlertTitle>
        This is an info alert
      </Alert>
      <Alert
        variant="outlined"
        severity="success"
        icon={<Check />}
        action={
          <Button color="success" size="small">
            Undo
          </Button>
        }
      >
        <AlertTitle>Success</AlertTitle>
        This is an succes alert
      </Alert>

      <Alert variant="filled" severity="error">
        This is an error alert
      </Alert>
      <Alert variant="filled" severity="warning">
        This is an warning alert
      </Alert>
      <Alert variant="filled" severity="info">
        This is an info alert
      </Alert>
      <Alert variant="filled" severity="success">
        This is an error alert
      </Alert>
    </Stack>
  );
};

export default MuiAlert;

//snackbar provide brief notifications and also known as toast notifications