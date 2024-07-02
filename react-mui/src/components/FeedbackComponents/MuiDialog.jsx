import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React, { useState } from "react";

const MuiDialog = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Dialog</Button>
      <Dialog
        aria-label="dialog-title"
        aria-describedby="dialog-description"
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <DialogTitle id="dialog-title">Submit the test?</DialogTitle>
        <DialogContent id="dialog-description">
          <DialogContentText>
            Are you sure you want to submit the test? You will not be able to
            edit after submitting
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} autoFocus>
            Submit
          </Button>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default MuiDialog;
//dialog is a type of model that appears in front of application content to present important information or ask for a decision unlike a snackbar dialog disable all app functionality until confirmed or dismissed
