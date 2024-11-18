import React from 'react';
import { Box, IconButton, Typography, Slide } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { usePayment } from './PaymentContext';

const SlideDetails = () => {
  const { activeSlide, selectedPayment, handleBack } = usePayment();

  return (
    <Slide direction="right" in={activeSlide === 1} mountOnEnter unmountOnExit>
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
          <ArrowBackIcon sx={{ color: '#61dafb' }} />
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
            {selectedPayment?.token}
          </Typography>
        </Box>
      </Box>
    </Slide>
  );
};

export default SlideDetails;