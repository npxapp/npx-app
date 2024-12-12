import React from 'react';
import { Box, Typography } from '@mui/material';
import { useDarkMode } from '../../contexts/DarkMode';
import CreateCardParts from './CreateCardParts';

export function DemoProductCarousel() {
    const { darkMode } = useDarkMode();

    return (
        <CreateCardParts
            variant="parts"
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