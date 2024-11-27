import React from 'react';
import { Card, CardContent, Box, Typography, CardHeader } from '@mui/material';
import { useDarkMode } from '../../contexts/DarkMode';

const CardStyles = (darkMode) => ({
  position: 'relative',
  overflow: 'hidden',
});

const CardHeaderStyles = (darkMode) => ({
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
  },
});

const CreateDemoProduct = ({ headerSx, headerAvatar, headerTitleSx, headerTitle, contentSx, content, sx }) => {
  const { darkMode } = useDarkMode();

  return (
    <Card sx={{ ...CardStyles(darkMode), ...sx }}>
      <CardHeader
        title={
          <Typography
            variant="h6"
            component="div"
            sx={headerTitleSx}
          >
            {headerTitle}
          </Typography>
        }
        sx={{ ...CardHeaderStyles(darkMode), ...headerSx }}
      />
      <CardContent>
        {content}
      </CardContent>
    </Card>
  );
};

export default CreateDemoProduct;