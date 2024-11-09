import React from 'react';
import { Card, CardContent, CardHeader, Box } from '@mui/material';

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

const CreateCard = ({ headerAvatar, headerTitle, content, sx }) => (
    <Card sx={{ ...CardStyles, ...sx }}>
        <CardHeader
            avatar={
                <Box component="span" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: '24px' }}>
                    {headerAvatar}
                </Box>
            }
            title={headerTitle}
            sx={CardHeaderStyles}
        />
        <CardContent>
            {content}
        </CardContent>
    </Card>
);

export default CreateCard;