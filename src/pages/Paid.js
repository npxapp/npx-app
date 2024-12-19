import React from 'react';
import { Box } from '@mui/material';
import { CardPaid } from './parts/CardPaid';
import '../App.css';
import '../Page.css';

const Paid = () => {
  
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
        <CardPaid />
      </Box>
    </Box>
  );
}

export default Paid;

