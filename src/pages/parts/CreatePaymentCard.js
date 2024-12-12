import React from 'react';
import { Card, CardContent, CardHeader } from '@mui/material';

const CardStyles = {
    marginBottom: 0,
    backgroundColor: 'transparent', // Ensure Card itself is transparent
    boxShadow: 'none', // Remove any shadow (optional, for full transparency)
};

const CardHeaderStyles = {
    color: '#007fff',
    backgroundColor: 'transparent', // Ensure CardHeader is also transparent
};

const CardContentStyles = {
    backgroundColor: 'transparent', // Ensure CardContent is transparent
    border: 'none', // Remove any border if set by default
};

const CreatePaymentCard = ({ headerAvatar, headerTitle, content, sx }) => (
    <Card sx={{ ...CardStyles, ...sx }}>
        <CardHeader
            avatar={headerAvatar}
            title={headerTitle}
            sx={CardHeaderStyles}
        />
        <CardContent sx={CardContentStyles}>
            {content}
        </CardContent>
    </Card>
);

export default CreatePaymentCard;