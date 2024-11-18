import React from 'react';
import { Card, CardContent, CardHeader, Box } from '@mui/material';
import { useDarkMode } from '../../contexts/DarkMode';

const CardStyles = (darkMode) => ({
    marginBottom: 2,
    borderRadius: '20px',
    border: '0px solid #007fff',
    background: darkMode
        ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 25%, rgba(255, 255, 255, 0.25) 25%, rgba(255, 255, 255, 0.25) 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, rgba(255, 255, 255, 0.25) 75%)'
        : 'linear-gradient(135deg, rgba(0, 127, 255, 0.15) 25%, rgba(0, 127, 255, 0.25) 25%, rgba(0, 127, 255, 0.25) 50%, rgba(0, 127, 255, 0.15) 50%, rgba(0, 127, 255, 0.15) 75%, rgba(0, 127, 255, 0.25) 75%)',
    backgroundSize: '20px 20px'
});

const CardHeaderStyles = (darkMode) => ({
    background: darkMode
        ? 'linear-gradient(45deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.06) 100%)'
        : 'linear-gradient(45deg, rgba(0, 127, 255, 0.03) 0%, rgba(0, 127, 255, 0.06) 100%)',
    color: darkMode ? '#ffffff' : '#007fff'
});

const CreateCardPro = ({ headerAvatar, headerTitle, content, sx }) => {
    const { darkMode } = useDarkMode(); // Access darkMode from context

    return (
        <Card sx={{ ...CardStyles(darkMode), ...sx }}>
            <CardHeader
                avatar={
                    <Box component="span" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: '24px' }}>
                        {headerAvatar}
                    </Box>
                }
                title={headerTitle}
                sx={CardHeaderStyles(darkMode)}
            />
            <CardContent>
                {content}
            </CardContent>
        </Card>
    );
};

export default CreateCardPro;