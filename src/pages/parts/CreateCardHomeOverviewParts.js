import React from 'react';
import { Card, CardContent, Box, Typography, CardHeader } from '@mui/material';
import { useDarkMode } from '../../contexts/DarkMode';
import {
  CardStyles,
  CardHeaderStyles,
  CardContentStyles,
} from './CardsStylesCreate';

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
              justifyContent: 'center',
              alignItems: 'center',
              flexGrow: 1,
            }}
          >
            {headerAvatar}
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexGrow: 1,
            }}
          >
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
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              flexGrow: 1,
            }}
          >
            {content}
          </Box>
      </CardContent>
    </Card>
  );
};

export default CreateCardHomeOverviewParts;