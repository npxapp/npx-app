import React from 'react';
import { Paper, Typography } from '@mui/material';

export function CardDemoOverview() {

  return (
    <Paper borderRadius={2} borderColor="grey.300">
      <Typography variant="h6">
        Pro Demo
      </Typography>
      <Typography paragraph>
        Pro Pages make editing files like Home.js and Demo.js a breeze for quick customization.
      </Typography>
      <Typography paragraph>
        Router.js uses the history API to make routing smooth and effortless.
      </Typography>
      <Typography paragraph>
        UI components like Carousel.js, SnackBar.js, Accordion.js, and Drawer.js enhance your app’s experience.
      </Typography>
      <Typography paragraph>
        Focus on building faster so users get to see results without unnecessary delays.
      </Typography>
      <Typography paragraph>
        Pro Features simplify development with one clear entry point, boosting both efficiency and speed.
      </Typography>
      <Typography paragraph>
        The Express Middleware Server keeps your requests running smoothly, allowing for better performance.
      </Typography>
      <Typography paragraph>
        Router.js ensures Single Page Application (SPA) routing with seamless transitions.
      </Typography>
      <Typography paragraph>
        Path mapping and event listeners like PopState keep the page content in sync for a dynamic feel.
      </Typography>
      <Typography paragraph>
        Easily manage link clicks, and update content without a hiccup, improving interactions.
      </Typography>
      <Typography paragraph>
        Page components load in the background, making sure the page feels ready instantly when you need it.
      </Typography>
      <Typography>
        Component initialization happens swiftly, keeping your app running with a fast start.
      </Typography>
    </Paper>
  );
}