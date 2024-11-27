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

export function DemoProductSnackBar() {
    const { darkMode } = useDarkMode();

    return (
        <CreateCard
            sx={CardStyles(darkMode)}
            headerSx={CardHeaderStyles(darkMode)}
            headerTitle="Snackbar"
            content={
                <>
                    <Box display="flex" alignItems="center" sx={{ mt: 2 }}>
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
                        <Typography variant="body1" sx={{ fontWeight: 'bold', ml: 1 }}>app.tar.gz</Typography>
                    </Box>
                </>
            }
        />
    );
}