import React from 'react';
import { Card, CardContent, CardHeader, Typography } from '@mui/material';
import VerifiedUserTwoToneIcon from '@mui/icons-material/VerifiedUserTwoTone';

export function DemoProduct() {
  return (
    <Card>
      <CardHeader
        title="Parts"
        action={<VerifiedUserTwoToneIcon />}
      />
      <CardContent>
        <Typography>Pro Pages</Typography>
        <Typography>
          Easy-to-edit Home.js and Demo.js pages for customizable experiences.
        </Typography>
        <Typography>
          Single Point of Entry - Efficient load and navigation.
        </Typography>
        <Typography>
          Express Middleware Server - Manages server requests, middleware, and routing.
        </Typography>
        <Typography>
          SPA Routing with Router.js - Enables seamless navigation without page reloads.
        </Typography>
        <Typography>
          Path Mapping & Event Listeners - Uses popstate and link listeners for dynamic updates.
        </Typography>
        <Typography>
          Component Initialization - Loads necessary components for optimized user experience.
        </Typography>
        <Typography>
          Static Asset Management - Ensures assets load smoothly before rendering content.
        </Typography>
        <Typography>app.tar.gz</Typography>
      </CardContent>
    </Card>
  );
}