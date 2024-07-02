import { Box, styled } from "@mui/material";
import React from "react";
const StyledBox = styled(Box)(({ theme }) => ({
  height: "250px",
  width: "250px",
  backgroundColor: theme.status.danger,
}));
const NewBox = styled(Box)(({ theme }) => ({
  height: "250px",
  width: "250px",
  // backgroundColor: theme.palette.neutral?.main,
  backgroundColor: theme.palette.neutral?.darker,
}));
const MuiResponsive = () => {
  return (
    <>
      <Box
        sx={{
          height: 300,
          width: {
            xs: 100, //0+
            sm: 200, //600+
            md: 300, //900+
            lg: 400, //1200+
            xl: 500, //1536+
          },
          // bgcolor: "secondary.dark",
          // bgcolor: "secondary.light",
          bgcolor: "secondary.main",
        }}
      ></Box>
      <StyledBox></StyledBox>
      <NewBox></NewBox>
    </>
  );
};

export default MuiResponsive;
