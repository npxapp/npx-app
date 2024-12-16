import React from 'react';
import { Box } from '@mui/material';
import { CardSuccess } from './parts/CardSuccess';
import '../App.css';
import '../Page.css';

const Success = () => {
  
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
        <CardSuccess />
      </Box>
    </Box>
  );
}

export default Success;

