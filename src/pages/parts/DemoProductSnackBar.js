import React, { useState } from 'react';
import { Card, CardContent, CardHeader, Typography, IconButton, Paper } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export function DemoProductSnackBar() {
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
          title="Snackbar"
          action={
            <IconButton onClick={handleToggle}>
              <ExpandMoreIcon />
            </IconButton>
          }
        />
        <CardContent>
          <Typography>SnackBar.js</Typography>
          <Typography>
            Purpose: SnackBar.js provides a way to display brief messages or alerts to users, typically at the bottom of the screen.
          </Typography>
          <Typography>
            Initialization: The init function attaches a click event to the snackbar icon, allowing the snackbar to be toggled on and off.
          </Typography>
          <Typography>
            Toggle Functionality: The toggleSnackBar method changes the snackbar's visibility by toggling the open class and rotates the icon to indicate the current state.
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