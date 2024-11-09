import React from 'react';
import { Card, CardContent, Box, Typography, CardHeader } from '@mui/material';
import { useDarkMode } from '../../contexts/DarkMode';

const CardStyles = (darkMode) => ({
  marginBottom: 2,
  background: darkMode
    ? 'linear-gradient(135deg, rgba(0, 127, 255, 0.15) 25%, rgba(0, 127, 255, 0.25) 25%, rgba(0, 127, 255, 0.25) 50%, rgba(0, 127, 255, 0.15) 50%, rgba(0, 127, 255, 0.15) 75%, rgba(0, 127, 255, 0.25) 75%)'
    : 'linear-gradient(135deg, rgba(0, 127, 255, 0.15) 25%, rgba(0, 127, 255, 0.25) 25%, rgba(0, 127, 255, 0.25) 50%, rgba(0, 127, 255, 0.15) 50%, rgba(0, 127, 255, 0.15) 75%, rgba(0, 127, 255, 0.25) 75%)',
  backgroundSize: '20px 20px',
  position: 'relative',
  overflow: 'hidden',
});

const CardHeaderStyles = (darkMode) => ({
  background: darkMode
    ? 'linear-gradient(45deg, rgba(255, 255, 255, 0.03) 0%, rgba(97, 218, 251, 0.06) 100%)'
    : 'linear-gradient(45deg, rgba(0, 127, 255, 0.03) 0%, rgba(0, 127, 255, 0.06) 100%)',
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

const CreateCardHomeOverview = ({ headerAvatar, headerTitle, content, sx }) => {
  const { darkMode } = useDarkMode();

  return (
    <Card sx={{ ...CardStyles(darkMode), ...sx }}>
      <CardHeader
        title={
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontSize: '6rem',
              color: darkMode ? '#61dafb' : '#007fff',
            }}
          >
            {headerTitle}
          </Typography>
        }
        sx={CardHeaderStyles(darkMode)}
      />
      <CardContent>
        {content}
      </CardContent>
    </Card>
  );
};

export default CreateCardHomeOverview;