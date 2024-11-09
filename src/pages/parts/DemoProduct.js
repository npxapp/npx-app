import React from 'react';
import { Typography, Box } from '@mui/material';
import HubIcon from '@mui/icons-material/Hub';
import NearMeIcon from '@mui/icons-material/NearMe';
import ScatterPlotIcon from '@mui/icons-material/ScatterPlot';
import { useDarkMode } from '../../contexts/DarkMode';
import CreateIcons from './CreateIcons';
import CreateCard from './CreateCard';

export function DemoProduct() {
    const { darkMode } = useDarkMode();

    return (
        <CreateCard
            headerAvatar={
                <CreateIcons>
                    <ScatterPlotIcon />
                </CreateIcons>
            }
            headerTitle="Demo Product"
            content={
                <>
                    <Box display="flex" flexDirection="column" alignItems="center" sx={{ mt: 2 }}>
                        <CreateIcons>
                            <HubIcon sx={{ fontSize: 64 }} />
                        </CreateIcons>
                        <Typography variant="caption" sx={{ mt: 1 }}>Pro Pages</Typography>
                    </Box>
                    <Box display="flex" flexDirection="column" alignItems="center" sx={{ mt: 2 }}>
                        <CreateIcons>
                            <NearMeIcon sx={{ fontSize: 100 }} />
                        </CreateIcons>
                        <Typography variant="caption" sx={{ mt: 1 }}>App.tar.gz</Typography>
                    </Box>
                </>
            }
            sx={{ color: darkMode ? '#fff' : '#007fff' }}  // Optional additional styling
        />
    );
}