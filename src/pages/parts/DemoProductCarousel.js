import React from 'react';
import { Box, Typography } from '@mui/material';
import { useDarkMode } from '../../contexts/DarkMode';
import CreateCard from './CreateCard';

const CardStyles = (darkMode) => ({
    borderRadius: '20px',
    background: darkMode
      ? 'linear-gradient(135deg, rgba(0, 127, 255, 0.15) 25%, rgba(0, 127, 255, 0.25) 25%, rgba(0, 127, 255, 0.25) 50%, rgba(0, 127, 255, 0.15) 50%, rgba(0, 127, 255, 0.15) 75%, rgba(0, 127, 255, 0.25) 75%)'
      : 'transparent',
    backgroundSize: '20px 20px',
    color: darkMode ? '#fff' : 'rgba(0, 0, 0, 0.6)',
});

const CardHeaderStyles = (darkMode) => ({
    background: 'linear-gradient(45deg, rgba(0, 127, 255, 0.03) 0%, rgba(0, 127, 255, 0.06) 100%)',
    color: darkMode ? '#fff' : 'rgba(0, 0, 0, 0.8)',
});

export function DemoProductCarousel() {
    const { darkMode } = useDarkMode();

    return (
        <CreateCard
            sx={CardStyles(darkMode)}
            headerSx={CardHeaderStyles(darkMode)}
            headerTitle="Carousel"
            content={
                <>
                    {/* Existing Carousel.js description */}
                    <Box display="flex" alignItems="center" sx={{ mt: 2 }}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', ml: 1 }}>
                            Carousel.js
                        </Typography>
                    </Box>
                        <Typography sx={{ ml: 1 }}>
                            <strong>init()</strong> - Initializes the carousel by setting up button and touch event listeners.
                        </Typography>
                        <Typography sx={{ ml: 1 }}>
                            <strong>moveCarousel(direction)</strong> - Moves the carousel slides left or right based on the given direction.
                        </Typography>
                        <Typography sx={{ ml: 1 }}>
                            <strong>updateCarouselPosition()</strong> - Updates the carousel’s position with a smooth transition effect.
                        </Typography>
                        <Typography sx={{ ml: 1 }}>
                            <strong>setupTouchEvents()</strong> - Configures touch events to support drag and swipe gestures on mobile.
                        </Typography>
                    <Box display="flex" alignItems="center" sx={{ mt: 2 }}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', ml: 1 }}>
                            app.tar.gz
                        </Typography>
                    </Box>
                </>
            }
        />
    );
}