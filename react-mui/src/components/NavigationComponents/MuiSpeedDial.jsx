import { CopyAll, Edit, Print, Share } from "@mui/icons-material";
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import React from "react";

const MuiSpeedDial = () => {
  return (
    <SpeedDial
      ariaLabel="Navigation speed dial"
      sx={{
        position: "absolute",
        bottom: 16,
        right: 16,
      }}
      icon={<SpeedDialIcon openIcon={<Edit />} />}
    >
      <SpeedDialAction
        icon={<CopyAll />}
        tooltipTitle="Copy"
        // tooltipOpen="copy"
      />
      <SpeedDialAction icon={<Print />} tooltipTitle="Print" />
      <SpeedDialAction icon={<Share />} tooltipTitle="Share" />
    </SpeedDial>
  );
};

export default MuiSpeedDial;
//speed dial is suited for mobile or tablet devices
//tooltipOpen prop will provide the tooltip once the speed dial is open while tooltipTitle provides after hover
