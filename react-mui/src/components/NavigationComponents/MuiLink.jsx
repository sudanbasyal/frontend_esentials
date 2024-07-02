import { Link, Stack, Typography } from "@mui/material";
import React from "react";

const MuiLink = () => {
  return (
    <Stack spacing={2} direction="row" m={4}>
      <Link href="/login" variant="h6">
        Link
      </Link>
      <Typography variant="h6">
        <Link href="/login" color="secondary">
          Secondary
        </Link>
      </Typography>
    </Stack>
  );
};

export default MuiLink;

//underline=hover,none according to requirement
//variant default value is inherit

