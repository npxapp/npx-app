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
    color: '#007fff'
};

export function DemoProductDrawer() {
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
                        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Drawer.js</Typography>
                    </Box>
                    <Typography sx={{ ml: 1 }}>
                        <strong>Purpose:</strong> Drawer.js is responsible for managing a sidebar menu drawer, allowing users to toggle visibility.
                    </Typography>
                    <Typography sx={{ ml: 1 }}>
                        <strong>Core Elements:</strong> This component references four elements: the menu icon, the drawer itself, an overlay, and a close icon.
                    </Typography>
                    <Typography sx={{ ml: 1 }}>
                        <strong>Initialization:</strong> The init method adds click event listeners to the menu icon, close icon, and overlay, linking them to toggle and close actions for the drawer.
                    </Typography>
                    <Typography sx={{ ml: 1 }}>
                        <strong>Toggle Drawer:</strong> The toggleDrawer method toggles open and active classes on the drawer and overlay, changing their visibility and appearance.
                    </Typography>
                    <Typography sx={{ ml: 1 }}>
                        <strong>Close Drawer:</strong> The closeDrawer method removes the open and active classes, hiding the drawer and overlay.
                    </Typography>

                    <Box display="flex" alignItems="center" sx={{ mt: 3 }}>
                        <CreateIcons>
                            <NearMeIcon />
                        </CreateIcons>
                        <Typography variant="body1" sx={{ fontWeight: 'bold', ml: 1 }}>ProApp.tar.gz</Typography>
                    </Box>
                </>
            }
            sx={{ color: darkMode ? '#fff' : '#007fff' }}
        />
    );
}