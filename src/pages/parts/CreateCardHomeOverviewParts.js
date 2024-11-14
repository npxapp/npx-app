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
  },
  '& .MuiCardHeader-content': {
    flex: 'none',
  },
});

const CardContentStyles = (darkMode) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  '& .MuiCardHeader-avatar': {
    marginRight: 0,
  },
  '& .MuiCardHeader-content': {
    flex: 'none',
  },
});

const CreateCardHomeOverviewParts = ({ headerSx, headerAvatar, headerTitle, contentSx, content, sx }) => {
  const { darkMode } = useDarkMode();

  return (
    <Card sx={{ ...CardStyles(darkMode), ...sx }}>
      <CardContent
        sx={{
          ...CardContentStyles(darkMode),
          ...contentSx,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box
            component="span"
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {headerAvatar}
          </Box>
          <Typography
            variant="h6"
            component="div"
            sx={{
              ...CardHeaderStyles(darkMode),
              ...headerSx,
            }}
          >
            {headerTitle}
          </Typography>
          <Box>
            {content}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CreateCardHomeOverviewParts;