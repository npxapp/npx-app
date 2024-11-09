import React from 'react';
import { Typography, Box, Divider } from '@mui/material';
import QrCode2Icon from '@mui/icons-material/QrCode2';
import LanguageIcon from '@mui/icons-material/Language';
import { useDarkMode } from '../../contexts/DarkMode';
import CreateIcons from './CreateIcons'; // Import the wrapper component
import CreateCardProFeatures from './CreateCardProFeatures'; // Import CreateCard component

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

export function CardPro() {
    const { darkMode } = useDarkMode();

    return (
        <CreateCardProFeatures
            sx={CardStyles}
            headerSx={CardHeaderStyles}
            headerAvatar={
                <CreateIcons sx={AvatarIconStyles}>
                    <QrCode2Icon />
                </CreateIcons>
            }
            headerTitle="Product Parts"
            content={
                <>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                        ProApp Demo
                    </Typography>
                    <Box display="flex" alignItems="center" sx={{ mt: 1 }}>
                        <CreateIcons>
                            <LanguageIcon />
                        </CreateIcons>
                        <Typography
                            component="a"
                            href="http://proappdemo.ip-ddns.com:3000/pro"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{ color: '#007fff' }}
                        >
                            http://proappdemo.ip-ddns.com:3000/pro
                        </Typography>
                    </Box>

                    <Typography sx={{ mt: 2 }}>
                        ProApp Demo is a fully-featured single-page application (SPA) inspired by React, built for high performance and seamless user interaction.
                    </Typography>

                    <Divider sx={{ my: 2 }} />

                    <Typography sx={{ fontWeight: 'bold', mb: 1 }}>
                        Key Features:
                    </Typography>
                    <Typography sx={{ ml: 2, mt: 1 }}>
                        • <strong>Single Point of Entry</strong> - A streamlined entry point ensures efficient app load and navigation.
                    </Typography>
                    <Typography sx={{ ml: 2 }}>
                        • <strong>Express Middleware Server</strong> - Utilizes Express to handle server requests, enforce middleware, and manage routing.
                    </Typography>
                    <Typography sx={{ ml: 2 }}>
                        • <strong>Router.js for SPA Routing</strong> - Routes all requests to a single page, managing navigation without page reloads.
                    </Typography>
                    <Typography sx={{ ml: 2 }}>
                        • <strong>Path Mapping & Event Listeners</strong> - Uses <code>popstate</code> and link click listeners to dynamically update page content and URLs.
                    </Typography>
                    <Typography sx={{ ml: 2 }}>
                        • <strong>Component Initialization</strong> - Loads and initializes only the necessary page components, optimizing performance and user experience.
                    </Typography>
                    <Typography sx={{ ml: 2 }}>
                        • <strong>Static Asset Management</strong> - Waits for static assets to load before rendering content, ensuring a smooth user experience.
                    </Typography>
                </>
            }
            sx={{ color: darkMode ? '#fff' : '#007fff' }} // Optional additional styling
        />
    );
}