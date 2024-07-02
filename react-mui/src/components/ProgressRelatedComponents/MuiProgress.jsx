import { CircularProgress, LinearProgress, Stack } from "@mui/material";
import React from "react";

const MuiProgress = () => {
  return (
    <Stack spacing={2}>
      <CircularProgress />
      <CircularProgress color="success" />
      <CircularProgress variant="determinate" value={60} />
      <LinearProgress />
      <LinearProgress color="success" />
      <LinearProgress variant="determinate" value={60} />
    </Stack>
  );
};

export default MuiProgress;
//progress indicators inform users about the status about ongoing processes such as loading,submitting form, updating a form
//Linear Progress and Circular Progress
