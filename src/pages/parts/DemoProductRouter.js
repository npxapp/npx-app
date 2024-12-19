import React, { useState } from 'react';
import { Card, CardContent, CardHeader, Typography, IconButton, Paper } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export function DemoProductRouter() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen((prev) => !prev);

  return (
    <>
      <Card
        sx={{
          position: 'relative',
          height: isOpen ? 'auto' : 350,
          ...(isOpen && {
            animation: 'bounce 0.2s ease',
          }),
        }}
      >
        <CardHeader
          title="Router"
          action={
            <IconButton onClick={handleToggle}>
              <ExpandMoreIcon />
            </IconButton>
          }
        />
        <CardContent>
          <Typography>
            Router.js
          </Typography>
          <Typography>
            Router.js handles client-side routing for this app, mapping paths to components.
          </Typography>
          <Typography>
            Key components include Home, Demo, Favorite, and Settings pages.
          </Typography>
          <Typography>
            Supports pushState navigation, drawer link handling, and dynamic content loading.
          </Typography>
          <Typography>
            app.tar.gz
          </Typography>
        </CardContent>
        <Paper
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '50%',
            zIndex: 2,
            pointerEvents: 'none',
            borderBottomLeftRadius: 40,
            borderBottomRightRadius: 40,
            background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1))',
            transition: 'background 3s ease',
            ...(isOpen && {
              background: 'transparent',
            }),
          }}
        />
      </Card>
    </>
  );
}