import { Alert, Button, Snackbar } from "@mui/material";
import React, { forwardRef, useState } from "react";
const SnackbarAlert = forwardRef(function SnackbarAlert(props, ref) {
  return <Alert elevation={6} ref={ref} {...props} />;
});
const MuiSnackbar = () => {
  const [open, setOpen] = useState(false);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  return (
    <>
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        Submit
      </Button>
      {/* <Snackbar
        message="Form Submitted Successfully!"
        autoHideDuration={4000}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      /> */}
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <SnackbarAlert onClose={handleClose} severity="success">
          Form Submitted Successfully!
        </SnackbarAlert>
      </Snackbar>
    </>
  );
};

export default MuiSnackbar;
//an alert displays short important message that attracts users attention without interrupting users tasks. they appear temporary at the bottom of the screen
//autoHideDuration prop to close automatically
//handleClose is for user when user clicked away
//anchorOrigin to change the position
