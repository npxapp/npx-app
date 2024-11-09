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
import CreateCardProBusiness from './CreateCardProBusiness'; // Import CreateCard component

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

const AvatarIconStyles = {
    backgroundColor: '#007fff',
    padding: '10px',
    borderRadius: '50%',
    color: '#fff',
    // Handle all interaction states
    '&.MuiIconButton-root': {
        backgroundColor: '#007fff',
        '&:hover': {
            backgroundColor: '#007fff',
        },
        '&:active': {
            backgroundColor: '#007fff',
        },
        '&:focus': {
            backgroundColor: '#007fff',
        },
    },
    '& .MuiSvgIcon-root': {
        fontSize: '6rem',
    },
};

export function CardProBusiness() {
    const { darkMode } = useDarkMode();

    return (
        <CreateCardProBusiness
            sx={CardStyles}
            headerSx={CardHeaderStyles}
            headerAvatar={
                <CreateIcons sx={AvatarIconStyles}>
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