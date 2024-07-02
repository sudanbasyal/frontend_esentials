import { Rating, Stack } from "@mui/material";
import React, { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const MuiRating = () => {
  const [value, setValue] = useState(null);
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <Stack spacing={2}>
      <Rating
        value={value}
        onChange={handleChange}
        precision={0.5}
        size="large"
        icon={<FavoriteIcon fontSize="inherit" color="error" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
        // readOnly
        // highlightSelectedOnly
      />
    </Stack>
  );
};

export default MuiRating;
//precision allows you to set like 1/2 rating aswell
// highlightSelectedOnly prop only highlights the selected rating only