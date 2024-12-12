import React from 'react';
import { Box } from '@mui/material';
import { CardGet } from './parts/CardGet';
import '../App.css';
import '../Page.css';

const Get = () => {
  
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
        <CardGet />
      </Box>
    </Box>
  );
}

export default Get;

