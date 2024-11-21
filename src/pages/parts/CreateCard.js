import React from 'react';
import { Card, CardContent, CardHeader, Box } from '@mui/material';

const CardStyles = {
    marginBottom: 2,
};

const CardHeaderStyles = {
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