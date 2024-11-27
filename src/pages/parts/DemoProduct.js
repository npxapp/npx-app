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

export function DemoProduct() {
    const { darkMode } = useDarkMode();

    return (
        <CreateCard
            sx={CardStyles(darkMode)}
            headerSx={CardHeaderStyles(darkMode)}
            headerTitle="Parts"
            content={
                <>
                    <Box display="flex" alignItems="center" sx={{ mt: 2 }}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', ml: 1 }}>Pro Pages</Typography>
                    </Box>
                    <Typography sx={{ ml: 1, mt: 1 }}>
                        • Easy-to-edit Home.js and Demo.js pages for customizable experiences.
                    </Typography>
                    <Typography sx={{ ml: 1 }}>
                        • <strong>Single Point of Entry</strong> - Efficient load and navigation.
                    </Typography>
                    <Typography sx={{ ml: 1 }}>
                        • <strong>Express Middleware Server</strong> - Manages server requests, middleware, and routing.
                    </Typography>
                    <Typography sx={{ ml: 1 }}>
                        • <strong>SPA Routing with Router.js</strong> - Enables seamless navigation without page reloads.
                    </Typography>
                    <Typography sx={{ ml: 1 }}>
                        • <strong>Path Mapping & Event Listeners</strong> - Uses popstate and link listeners for dynamic updates.
                    </Typography>
                    <Typography sx={{ ml: 1 }}>
                        • <strong>Component Initialization</strong> - Loads necessary components for optimized user experience.
                    </Typography>
                    <Typography sx={{ ml: 1 }}>
                        • <strong>Static Asset Management</strong> - Ensures assets load smoothly before rendering content.
                    </Typography>
                    <Box display="flex" alignItems="center" sx={{ mt: 3 }}>
                        <Typography variant="body1" sx={{ fontWeight: 'bold', ml: 1 }}>app.tar.gz</Typography>
                    </Box>
                </>
            }
        />
    );
}