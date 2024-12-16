import React from 'react';
import { Card, CardContent, CardHeader, List, ListItem, ListItemText } from '@mui/material';
import VerifiedUserTwoToneIcon from '@mui/icons-material/VerifiedUserTwoTone';

export function DemoProduct() {

  return (
    <Card>
      <CardHeader
        title="Parts"
        action={<VerifiedUserTwoToneIcon />}
      />
      <CardContent>
        <List>
          <ListItem>
            <ListItemText primary="Pro Pages" />
          </ListItem>
          <ListItem>
            <ListItemText primary="• Easy-to-edit Home.js and Demo.js pages for customizable experiences." />
          </ListItem>
          <ListItem>
            <ListItemText primary="• Single Point of Entry - Efficient load and navigation." />
          </ListItem>
          <ListItem>
            <ListItemText primary="• Express Middleware Server - Manages server requests, middleware, and routing." />
          </ListItem>
          <ListItem>
            <ListItemText primary="• SPA Routing with Router.js - Enables seamless navigation without page reloads." />
          </ListItem>
          <ListItem>
            <ListItemText primary="• Path Mapping & Event Listeners - Uses popstate and link listeners for dynamic updates." />
          </ListItem>
          <ListItem>
            <ListItemText primary="• Component Initialization - Loads necessary components for optimized user experience." />
          </ListItem>
          <ListItem>
            <ListItemText primary="• Static Asset Management - Ensures assets load smoothly before rendering content." />
          </ListItem>
          <ListItem>
            <ListItemText primary="• app.tar.gz" />
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
}