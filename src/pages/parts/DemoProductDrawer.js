import React, { useState } from 'react';
import { Card, CardContent, CardHeader, Typography, IconButton, Paper } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export function DemoProductDrawer() {
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
          title="Drawer"
          action={
            <IconButton onClick={handleToggle}>
              <ExpandMoreIcon />
            </IconButton>
          }
        />
        <CardContent>
          <Typography>Drawer.js</Typography>
          <Typography>
            Purpose: Drawer.js is responsible for managing a sidebar menu drawer, allowing users to toggle visibility.
          </Typography>
          <Typography>
            Core Elements: This component references four elements: the menu icon, the drawer itself, an overlay, and a close icon.
          </Typography>
          <Typography>
            Initialization: The init method adds click event listeners to the menu icon, close icon, and overlay, linking them to toggle and close actions for the drawer.
          </Typography>
          <Typography>
            Toggle Drawer: The toggleDrawer method toggles open and active classes on the drawer and overlay, changing their visibility and appearance.
          </Typography>
          <Typography>
            Close Drawer: The closeDrawer method removes the open and active classes, hiding the drawer and overlay.
          </Typography>

          <Typography>app.tar.gz</Typography>
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