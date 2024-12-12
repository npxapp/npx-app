import React from 'react';
import { Box } from '@mui/material';
import { CardDownloads } from './parts/CardDownloads';
import '../App.css';
import '../Page.css';

const Downloads = () => {
  
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        <CardDownloads />
      </Box>
    </Box>
  );
}

export default Downloads;

