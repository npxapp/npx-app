import React from 'react';
import { Box, Typography } from '@mui/material';
import HubIcon from '@mui/icons-material/Hub';
import NearMeIcon from '@mui/icons-material/NearMe';
import ScatterPlotIcon from '@mui/icons-material/ScatterPlot';
import { useDarkMode } from '../../contexts/DarkMode';
import CreateIcons from './CreateIcons'; // Import the CreateIcons wrapper component
import CreateCard from './CreateCard'; // Import the CreateCard component

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

export function DemoProductAccordion() {
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