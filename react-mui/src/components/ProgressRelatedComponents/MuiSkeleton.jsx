import { Avatar, Box, Skeleton, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const MuiSkeleton = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    // <Stack spacing={1} width="250px">
    //   <Skeleton variant="circular" width={40} height={40} animation="wave" />
    //   <Skeleton
    //     variant="rectangular"
    //     width={250}
    //     height={125}
    //     animation="wave"
    //   />
    //   <Skeleton animation="wave" />
    //   <Skeleton variant="text" animation="wave" />
    //   <Skeleton animation={false} />
    // </Stack>
    <Box sx={{ width: "250px" }}>
      {loading ? (
        <Skeleton
          variant="rectangular"
          width={200}
          height={144}
          animation="wave"
        />
      ) : (
        <img
          src="https://randomuser.me/api/portraits/men/79.jpg"
          alt="skeleton image"
          width={200}
          height={144}
        />
      )}
      <Stack
        direction="row"
        spacing={1}
        sx={{ width: "100%", marginTop: "12px" }}
      >
        {loading ? (
          <Skeleton
            variant="circular"
            width={40}
            height={40}
            animation="wave"
          />
        ) : (
          <Avatar>V</Avatar>
        )}
        <Stack sx={{ width: "80%" }}>
          {loading ? (
            <>
              <Typography variant="body1">
                <Skeleton variant="text" width="100%" animation="wave" />
              </Typography>
              <Typography variant="body2">
                <Skeleton variant="text" width="100%" animation="wave" />
              </Typography>
            </>
          ) : (
            <>
              <Typography variant="body1">John Doe</Typography>
            </>
          )}
        </Stack>
      </Stack>
    </Box>
  );
};

export default MuiSkeleton;
//Skeleton are used to display placeholder value before data gets loaded to reduce load time frustation
//default variant is text
//circular for avatars
//rectangular for images
//default animation is pulse to remove animation simply pass false
//package lab
