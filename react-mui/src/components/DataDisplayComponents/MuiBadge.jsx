import { Mail } from "@mui/icons-material";
import { Badge, Stack } from "@mui/material";
import React from "react";

const MuiBadge = () => {
  return (
    <Stack spacing={2} direction="row">
      <Badge badgeContent={5} color="error">
        <Mail />
      </Badge>
      <Badge badgeContent={0} color="secondary" showZero>
        <Mail />
      </Badge>
      <Badge badgeContent={100} color="info" showZero max={999}>
        <Mail />
      </Badge>
      <Badge variant="dot" color="error" invisible={true}>
        <Mail />
      </Badge>
    </Stack>
  );
};

export default MuiBadge;
//Badge component generates a small badge to its parent component
//if badgeContent is zero then badge is not displayed whereas showZero overwrites and shows 0
//max is 99 and after that 99+ is shown but can be changed by specifying max={999}
//variant dot shows just the dot and invisible true prop makes the dot invisible insvisible must have a true value for example length of number is 0 then invisible
