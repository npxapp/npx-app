import React from 'react';
import { Card, CardContent, CardHeader, List, ListItem, ListItemText } from '@mui/material';

export function CardDemoOverview() {

  return (
    <Card variant="action">
      <CardHeader
        variant="action"
        title="Pro Demo"
      />
      <CardContent variant="action">
        <List>
          <ListItem>
            <ListItemText primary="Pro Pages make editing files like Home.js and Demo.js a breeze for quick customization." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Router.js uses the history API to make routing smooth and effortless." />
          </ListItem>
          <ListItem>
            <ListItemText primary="UI components like Carousel.js, SnackBar.js, Accordion.js, and Drawer.js enhance your app’s experience." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Focus on building faster so users get to see results without unnecessary delays." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Pro Features simplify development with one clear entry point, boosting both efficiency and speed." />
          </ListItem>
          <ListItem>
            <ListItemText primary="The Express Middleware Server keeps your requests running smoothly, allowing for better performance." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Router.js ensures Single Page Application (SPA) routing with seamless transitions." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Path mapping and event listeners like PopState keep the page content in sync for a dynamic feel." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Easily manage link clicks, and update content without a hiccup, improving interactions." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Page components load in the background, making sure the page feels ready instantly when you need it." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Component initialization happens swiftly, keeping your app running with a fast start." />
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
}