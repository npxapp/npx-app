import React from 'react';
import { Card, CardContent, CardHeader, Box } from '@mui/material';

const CardStyles = {
    marginBottom: 0,
};

const CardHeaderStyles = {
    color: '#007fff'
};

const CreateCard = ({ headerAvatar, headerTitle, content, sx }) => (
    <Card sx={{ ...CardStyles, ...sx }}>
        <CardHeader
            title={headerTitle}
            sx={CardHeaderStyles}
        />
        <CardContent>
            {content}
        </CardContent>
    </Card>
);

export default CreateCard;