import React from 'react';
import { Typography, Box } from '@mui/material';
import HubIcon from '@mui/icons-material/Hub';
import NearMeIcon from '@mui/icons-material/NearMe';
import ScatterPlotIcon from '@mui/icons-material/ScatterPlot';
import { useDarkMode } from '../../contexts/DarkMode';
import CreateIcons from './CreateIcons';
import CreateCard from './CreateCard';

const CardStyles = {
    marginBottom: 2,
    borderRadius: '20px',
    border: '0px solid #007fff',
    background: 'linear-gradient(135deg, rgba(0, 127, 255, 0.15) 25%, rgba(0, 127, 255, 0.25) 25%, rgba(0, 127, 255, 0.25) 50%, rgba(0, 127, 255, 0.15) 50%, rgba(0, 127, 255, 0.15) 75%, rgba(0, 127, 255, 0.25) 75%)',
    backgroundSize: '20px 20px'
};

const CardHeaderStyles = {
    background: 'linear-gradient(45deg, rgba(0, 127, 255, 0.03) 0%, rgba(0, 127, 255, 0.06) 100%)',
    color: '#007fff',
};

export function DemoProduct() {
    const { darkMode } = useDarkMode();

    return (
        <CreateCard
            sx={CardStyles}
            headerSx={CardHeaderStyles}
            headerAvatar={
                <CreateIcons>
                    <ScatterPlotIcon />
                </CreateIcons>
            }
            headerTitle="Demo Product Pro"
            content={
                <>
                    <Box display="flex" alignItems="center" sx={{ mt: 2 }}>
                        <CreateIcons>
                            <HubIcon />
                        </CreateIcons>
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
                        <CreateIcons>
                            <NearMeIcon />
                        </CreateIcons>
                        <Typography variant="body1" sx={{ fontWeight: 'bold', ml: 1 }}>ProApp.tar.gz</Typography>
                    </Box>
                </>
            }
            sx={{ color: darkMode ? '#fff' : '#007fff' }} // Optional additional styling
        />
    );
}