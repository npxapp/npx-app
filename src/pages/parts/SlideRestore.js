import React from 'react';
import { Box, IconButton, Typography, Slide } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { usePayment } from './PaymentContext';

const SlideRestore = () => {
  const { activeSlide, handleBack } = usePayment();

  return (
    <Slide direction="left" in={activeSlide === 2} mountOnEnter unmountOnExit>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          width: '100%',
        }}
      >
        <IconButton onClick={handleBack}>
          <ArrowForwardIcon sx={{ color: '#61dafb' }} />
        </IconButton>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100vh',
          }}
        >
          <Typography variant="h6" sx={{ color: '#61dafb' }}>
            Stripe
          </Typography>
        </Box>
      </Box>
    </Slide>
  );
};

export default SlideRestore;