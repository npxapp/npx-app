import React, { useState } from 'react';
import { Card, CardContent, CardHeader, Typography, IconButton, Paper } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export function DemoProductCarousel() {
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
          title="Carousel"
          action={
            <IconButton onClick={handleToggle}>
              <ExpandMoreIcon />
            </IconButton>
          }
        />
        <CardContent>
          <Typography>
            Carousel.js
          </Typography>
          <Typography>
            init() - Initializes the carousel by setting up button and touch event listeners.
          </Typography>
          <Typography>
            moveCarousel(direction) - Moves the carousel slides left or right based on the given direction.
          </Typography>
          <Typography>
            updateCarouselPosition() - Updates the carousel’s position with a smooth transition effect.
          </Typography>
          <Typography>
            setupTouchEvents() - Configures touch events to support drag and swipe gestures on mobile.
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