import React from 'react';
import { Typography, Box } from '@mui/material';
import BusinessIcon from '@mui/icons-material/Business';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import ChatIcon from '@mui/icons-material/Chat';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useDarkMode } from '../../contexts/DarkMode';
import CreateIcons from './CreateIcons'; // Import the wrapper component
import CreateCard from './CreateCard'; // Import CreateCard component

const CardStyles = {
    marginBottom: 2,
};

const CardHeaderStyles = {
    color: '#007fff'
};

export function CardProBusiness() {
    const { darkMode } = useDarkMode();

    return (
        <CreateCard
            sx={CardStyles}
            headerSx={CardHeaderStyles}
            headerAvatar={
                <CreateIcons>
                    <BusinessIcon />
                </CreateIcons>
            }
            headerTitle="Business Information"
            content={
                <>
                    <Box display="flex" alignItems="center" sx={{ mt: 2 }}>
                        <CreateIcons>
                            <PhotoCameraIcon />
                        </CreateIcons>
                        <Typography variant="body1">@proappdemo</Typography>
                    </Box>
                    <Box display="flex" alignItems="center" sx={{ mt: 2 }}>
                        <CreateIcons>
                            <ChatIcon />
                        </CreateIcons>
                        <Typography variant="body1">@proappdemo</Typography>
                    </Box>

                    <Box display="flex" alignItems="center" sx={{ mt: 3, fontWeight: 'bold' }}>
                        <CreateIcons>
                            <SupportAgentIcon />
                        </CreateIcons>
                        <Typography variant="body1">Customer Service</Typography>
                    </Box>
                    <Box display="flex" alignItems="center" sx={{ mt: 1 }}>
                        <CreateIcons>
                            <PhoneIcon />
                        </CreateIcons>
                        <Typography variant="body1">(323)-601-8023</Typography>
                    </Box>
                    <Box display="flex" alignItems="center" sx={{ mt: 1 }}>
                        <CreateIcons>
                            <EmailIcon />
                        </CreateIcons>
                        <Typography variant="body1">proappdemo@outlook.com</Typography>
                    </Box>
                    <Box display="flex" alignItems="center" sx={{ mt: 1 }}>
                        <CreateIcons>
                            <LocationOnIcon />
                        </CreateIcons>
                        <Typography variant="body1">Los Angeles, CA 90001</Typography>
                    </Box>
                </>
            }
            sx={{ color: darkMode ? '#fff' : '#007fff' }} // Optional additional styling
        />
    );
}