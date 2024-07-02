import { NavigateNext } from "@mui/icons-material";
import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
import React from "react";

const MuiBreadCrumbs = () => {
  return (
    <Box m={2}>
      <Breadcrumbs
        aria-label="breadcrumb"
        separator={<NavigateNext fontSize="small" />}
        // maxItems={3}
        // itemsAfterCollapse={2}
        // itemsBeforeCollapse={2}
      >
        <Link underline="hover" href="#">
          Home
        </Link>
        <Link underline="hover" href="#">
          Catalog
        </Link>
        <Link underline="hover" href="#">
          Accessories
        </Link>
        <Typography color="text.primary">Shoes</Typography>
      </Breadcrumbs>
    </Box>
  );
};

export default MuiBreadCrumbs;
//breadcrumbs is a secondary navigation scheme that reveals user's location
//separator prop by default /
//by default breadcrumbs show 8 items maxItems can change it
//by default the maximum items show between ellipses is 1 i.e between home and shoes