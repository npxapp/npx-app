import React from 'react';
import { Typography, Box } from '@mui/material';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AssignmentReturnIcon from '@mui/icons-material/AssignmentReturn';
import RestoreIcon from '@mui/icons-material/Restore';
import EventBusyIcon from '@mui/icons-material/EventBusy';
import PublicIcon from '@mui/icons-material/Public';
import { useDarkMode } from '../../contexts/DarkMode';
import CreateIcons from './CreateIcons'; // Import the wrapper component
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

export function CardProReturns() {
    const { darkMode } = useDarkMode();

    return (
        <CreateCard
            sx={CardStyles}
            headerSx={CardHeaderStyles}
            headerAvatar={
                <CreateIcons>
                    <MonetizationOnIcon />
                </CreateIcons>
            }
            headerTitle="Digital Product Returns"
            content={
                <>
                    <Box display="flex" alignItems="center" sx={{ mt: 3, fontWeight: 'bold' }}>
                        <CreateIcons>
                            <AssignmentReturnIcon />
                        </CreateIcons>
                        <Typography variant="body1">Refund Policy</Typography>
                    </Box>
                    <Typography sx={{ mt: 1 }}>
                        Refunds are available within 30 days of purchase, provided the digital download has not been accessed or downloaded.
                    </Typography>

                    <Box display="flex" alignItems="center" sx={{ mt: 2, fontWeight: 'bold' }}>
                        <CreateIcons>
                            <RestoreIcon />
                        </CreateIcons>
                        <Typography variant="body1">Return Policy</Typography>
                    </Box>
                    <Typography sx={{ mt: 1 }}>
                        Returns are accepted within 14 days if the digital download is found to be defective and has not been accessed or downloaded.
                    </Typography>

                    <Box display="flex" alignItems="center" sx={{ mt: 2, fontWeight: 'bold' }}>
                        <CreateIcons>
                            <EventBusyIcon />
                        </CreateIcons>
                        <Typography variant="body1">Cancellation Policy</Typography>
                    </Box>
                    <Typography sx={{ mt: 1 }}>
                        Orders can be canceled within 24 hours of purchase if the digital download has not been accessed or downloaded.
                    </Typography>

                    <Box display="flex" alignItems="center" sx={{ mt: 2, fontWeight: 'bold' }}>
                        <CreateIcons>
                            <PublicIcon />
                        </CreateIcons>
                        <Typography variant="body1">Export Restrictions</Typography>
                    </Box>
                    <Typography sx={{ mt: 1 }}>
                        Currently, there are no export restrictions for ProApp.
                    </Typography>
                </>
            }
            sx={{ color: darkMode ? '#fff' : '#007fff' }} // Optional additional styling
        />
    );
}