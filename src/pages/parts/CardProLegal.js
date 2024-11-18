import React from 'react';
import { Typography, Box } from '@mui/material';
import GavelIcon from '@mui/icons-material/Gavel';
import DescriptionIcon from '@mui/icons-material/Description';
import SecurityIcon from '@mui/icons-material/Security';
import VerifiedIcon from '@mui/icons-material/Verified';
import { useDarkMode } from '../../contexts/DarkMode';
import CreateIcons from './CreateIcons'; // Import the wrapper component
import CreateCard from './CreateCard'; // Import CreateCard component

const CardStyles = {
    marginBottom: 2,
    borderRadius: '20px',
    border: '0px solid #007fff',
};

const CardHeaderStyles = {
    color: '#007fff'
};

export function CardProLegal() {
    const { darkMode } = useDarkMode();

    return (
        <CreateCard
            sx={CardStyles}
            headerSx={CardHeaderStyles}
            headerAvatar={
                <CreateIcons>
                    <GavelIcon />
                </CreateIcons>
            }
            headerTitle="Legal Information"
            content={
                <>
                    <Box display="flex" alignItems="center" sx={{ mt: 3, fontWeight: 'bold' }}>
                        <CreateIcons>
                            <DescriptionIcon />
                        </CreateIcons>
                        <Typography variant="body1">Terms and Conditions</Typography>
                    </Box>
                    <Typography sx={{ mt: 1 }}>
                        By purchasing or using ProApp, you agree to the following terms and conditions.
                    </Typography>

                    <Box display="flex" alignItems="center" sx={{ mt: 2, fontWeight: 'bold' }}>
                        <CreateIcons>
                            <SecurityIcon />
                        </CreateIcons>
                        <Typography variant="body1">Privacy Policy</Typography>
                    </Box>
                    <Typography sx={{ mt: 1 }}>
                        ProApp Demo values your privacy and is committed to protecting your personal information.
                    </Typography>

                    <Box display="flex" alignItems="center" sx={{ mt: 2, fontWeight: 'bold' }}>
                        <CreateIcons>
                            <VerifiedIcon />
                        </CreateIcons>
                        <Typography variant="body1">License</Typography>
                    </Box>
                    <Typography sx={{ mt: 1 }}>
                        This software is licensed under the Apache 2.0 License.
                    </Typography>
                </>
            }
            sx={{ color: darkMode ? '#fff' : '#007fff' }} // Optional additional styling
        />
    );
}