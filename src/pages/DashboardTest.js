import React from 'react';
import { Box } from '@mui/material';
import { PaymentProvider } from './parts/PaymentContext';
import SlidePayments from './parts/SlidePayments';
import SlideDetails from './parts/SlideDetails';
import SlideRestore from './parts/SlideRestore';

const DashboardTest = () => {
  return (
    <PaymentProvider>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <SlidePayments />
        <SlideDetails />
        <SlideRestore />
      </Box>
    </PaymentProvider>
  );
};

export default DashboardTest;