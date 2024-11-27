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

export function DemoProductAccordion() {
    const { darkMode } = useDarkMode();

    return (
        <CreateCard
            sx={CardStyles(darkMode)}
            headerSx={CardHeaderStyles(darkMode)}
            headerTitle="Accordion"
            content={
                <>
                    <Box display="flex" alignItems="center" sx={{ mt: 2 }}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', ml: 1 }}>
                            Accordion.js
                        </Typography>
                    </Box>
                    <Typography sx={{ ml: 1 }}>
                        <strong>Purpose:</strong> Accordion.js handles expanding and collapsing sections of content, allowing users to show or hide details interactively.
                    </Typography>
                    <Typography sx={{ ml: 1 }}>
                        <strong>Initialization:</strong> The init method attaches click events to each accordion header, linking them to toggle their respective sections.
                    </Typography>
                    <Typography sx={{ ml: 1 }}>
                        <strong>Toggle Function:</strong> The toggleAccordion function toggles the active class on a clicked item, expanding or collapsing it. The function also updates the accordion icon to reflect the item's state.
                    </Typography>
                    <Typography sx={{ ml: 1 }}>
                        <strong>Icon Update:</strong> The updateAccordionIcon method changes the icon based on the state of the section (add/remove).
                    </Typography>
                    <Typography sx={{ ml: 1 }}>
                        <strong>Download Setup:</strong> setupDownloadButtons sets up functionality for download buttons within each accordion, triggering an alert for the selected package download.
                    </Typography>
                    <Box display="flex" alignItems="center" sx={{ mt: 3 }}>
                        <Typography variant="body1" sx={{ fontWeight: 'bold', ml: 1 }}>app.tar.gz</Typography>
                    </Box>
                </>
            }
        />
    );
}