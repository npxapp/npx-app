import React from 'react';
import { Box } from '@mui/material';
import { CardStripe } from './parts/CardStripe';
import '../App.css';
import '../Page.css';

const Stripe = () => {
  
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
        <CardStripe />
      </Box>
    </Box>
  );
}

export default Stripe;

