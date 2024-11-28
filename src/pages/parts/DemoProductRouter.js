import React from 'react';
import { Typography, Box } from '@mui/material';
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

export function DemoProductRouter() {
    const { darkMode } = useDarkMode();

    return (
        <CreateCard
            sx={CardStyles(darkMode)}
            headerSx={CardHeaderStyles(darkMode)}
            headerTitle="Router"
            content={
                <>
                    <Box display="flex" alignItems="center" sx={{ mt: 2 }}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', ml: 1 }}>
                            Router.js
                        </Typography>
                    </Box>
                        <Typography sx={{ ml: 1 }}>
                            Router.js handles client-side routing for this app, mapping paths to components.
                        </Typography>
                        <Typography sx={{ ml: 1 }}>
                            Key components include Home, Demo, Favorite, and Settings pages.
                        </Typography>
                        <Typography sx={{ ml: 1 }}>
                            Supports pushState navigation, drawer link handling, and dynamic content loading.
                        </Typography>
                    <Box display="flex" alignItems="center" sx={{ mt: 3 }}>
                        <Typography variant="body1" sx={{ fontWeight: 'bold', ml: 1 }}>app.tar.gz</Typography>
                    </Box>
                </>
            }
        />
    );
}