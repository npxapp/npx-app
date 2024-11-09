import React from 'react';
import { Card, CardContent, Box, Typography, CardHeader } from '@mui/material';
import { useDarkMode } from '../../contexts/DarkMode';

const CardStyles = (darkMode) => ({
    marginBottom: 2,
    borderRadius: '20px', // Ensures card has rounded corners
    border: '0px solid #007fff',
    background: darkMode
        ? 'linear-gradient(135deg, rgba(0, 127, 255, 0.15) 25%, rgba(0, 127, 255, 0.25) 25%, rgba(0, 127, 255, 0.25) 50%, rgba(0, 127, 255, 0.15) 50%, rgba(0, 127, 255, 0.15) 75%, rgba(0, 127, 255, 0.25) 75%)'
        : 'linear-gradient(135deg, rgba(0, 127, 255, 0.15) 25%, rgba(0, 127, 255, 0.25) 25%, rgba(0, 127, 255, 0.25) 50%, rgba(0, 127, 255, 0.15) 50%, rgba(0, 127, 255, 0.15) 75%, rgba(0, 127, 255, 0.25) 75%)',
    backgroundSize: '20px 20px',
    position: 'relative', // To position CardHeader relative to this card
    overflow: 'hidden', // Ensures no overflow from card elements
});

const CardHeaderStyles = (darkMode) => ({
    background: darkMode
        ? 'linear-gradient(45deg, rgba(255, 255, 255, 0.03) 0%, rgba(97, 218, 251, 0.06) 100%)'
        : 'linear-gradient(45deg, rgba(0, 127, 255, 0.03) 0%, rgba(0, 127, 255, 0.06) 100%)',
    borderRadius: '20px 20px 0 0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    '& .MuiCardHeader-avatar': {
        marginRight: 0,
        marginBottom: '16px',
    },
    '& .MuiCardHeader-content': {
        flex: 'none',
    }
});


const CreateCardProBusiness = ({ headerAvatar, headerTitle, content, sx }) => {
    const { darkMode } = useDarkMode(); // Access darkMode from context

    return (
        <Card sx={{ ...CardStyles(darkMode), ...sx }}>
            {/* CardHeader with title and avatar as props */}
            <CardHeader
                avatar={
                    <Box
                        component="span"
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: 100, // Adjust size as needed
                            height: 100,
                            fontSize: '2.5rem',
                            backgroundColor: '#fff', // Avatar background color
                            borderRadius: '50%', // Make it round
                            boxShadow: '0 4px 6px rgba(0,0,0,0.1)', // Optional shadow for avatar
                        }}
                    >
                        {headerAvatar}
                    </Box>
                }
                title={
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{
                            textAlign: 'center',
                            color: darkMode ? '#007fff' : '#007fff',
                        }}
                    >
                        {headerTitle}
                    </Typography>
                }
                sx={CardHeaderStyles(darkMode)} // Apply custom styles to CardHeader
            />
            {/* CardContent for other content */}
            <CardContent>
                {content}
            </CardContent>
        </Card>
    );
};

export default CreateCardProBusiness;