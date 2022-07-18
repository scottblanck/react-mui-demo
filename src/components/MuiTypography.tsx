import React from "react";
import { Typography } from "@mui/material";
export const MuiTypography = () => {
  return (
    <div>
      <Typography variant="h1">h1 Heading</Typography>
      <Typography variant="h2">h2 Heading</Typography>
      <Typography variant="h3">h3 Heading</Typography>
      <Typography variant="h4" component="h1" gutterBottom>
        h4 Heading
      </Typography>
      <Typography variant="h5">h5 Heading</Typography>
      <Typography variant="h6">h6 Heading</Typography>

      <Typography variant="subtitle1">Sub title 1</Typography>
      <Typography variant="subtitle2">Sub title 2</Typography>

      <Typography variant="body1" gutterBottom>
        default font body1 - Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Culpa fugiat fugit ipsa. Omnis ipsum odio repellat quia, nemo vero
        dignissimos laudantium, quod labore assumenda, dolor tenetur repellendus
        cum quaerat voluptatem!
      </Typography>

      <Typography variant="body2">
        body2 - slightly smaller - Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Laboriosam provident repellendus officiis possimus,
        necessitatibus et dignissimos accusantium nobis praesentium harum fugit?
        Illo repudiandae omnis perferendis iusto? Harum tenetur itaque eaque.
      </Typography>
    </div>
  );
};
