import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
  Grid,
} from "@mui/material";
import React from "react";

const MuiCards = () => {
  return (
    <Box width="300px" flexDirection="row">
      <Grid container spacing={2} direction='column'>
        <Grid item xs>
          <Card>
            <CardMedia
              component="img"
              height="140px"
              image="https://images.unsplash.com/photo-1521747116042-5a810fda9664?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzU2OTJ8MHwxfGFsbHwxfHx8fHx8fHwxNjIxNjgxMzc5&ixlib=rb-1.2.1&q=80&w=400"
              alt="unsplash image"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                React
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Distinctio vero eveniet est rerum iusto hic ipsam magni
                laboriosam consequuntur repellat.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs>
          <Card>
            <CardMedia
              component="img"
              height="140px"
              image="https://images.unsplash.com/photo-1521747116042-5a810fda9664?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzU2OTJ8MHwxfGFsbHwxfHx8fHx8fHwxNjIxNjgxMzc5&ixlib=rb-1.2.1&q=80&w=400"
              alt="unsplash image"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                React
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Distinctio vero eveniet est rerum iusto hic ipsam magni
                laboriosam consequuntur repellat.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MuiCards;
