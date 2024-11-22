import React from 'react';
import { Box, Typography } from '@mui/material';
import HubIcon from '@mui/icons-material/Hub';
import NearMeIcon from '@mui/icons-material/NearMe';
import ScatterPlotIcon from '@mui/icons-material/ScatterPlot';
import { useDarkMode } from '../../contexts/DarkMode';
import CreateIcons from './CreateIcons'; // Import the CreateIcons wrapper component
import CreateCard from './CreateCard'; // Import CreateCard component

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

export function DemoProductSnackBar() {
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
                        <Typography variant="h6" sx={{ fontWeight: 'bold', ml: 1 }}>
                            SnackBar.js
                        </Typography>
                    </Box>
                    <Typography sx={{ ml: 1 }}>
                        <strong>Purpose:</strong> SnackBar.js provides a way to display brief messages or alerts to users, typically at the bottom of the screen.
                    </Typography>
                    <Typography sx={{ ml: 1 }}>
                        <strong>Initialization:</strong> The init function attaches a click event to the snackbar icon, allowing the snackbar to be toggled on and off.
                    </Typography>
                    <Typography sx={{ ml: 1 }}>
                        <strong>Toggle Functionality:</strong> The toggleSnackBar method changes the snackbar's visibility by toggling the open class and rotates the icon to indicate the current state.
                    </Typography>
                    <Box display="flex" alignItems="center" sx={{ mt: 3 }}>
                        <CreateIcons>
                            <NearMeIcon />
                        </CreateIcons>
                        <Typography variant="body1" sx={{ fontWeight: 'bold', ml: 1 }}>ProApp.tar.gz</Typography>
                    </Box>
                </>
            }
            sx={{ color: darkMode ? '#fff' : '#007fff' }} // Optional styling based on dark mode
        />
    );
}