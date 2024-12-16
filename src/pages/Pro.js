import React from 'react';
import { Box } from '@mui/material';
import { CardProPay } from './parts/CardProPay';
import { CardHomeOverview } from './parts/CardHomeOverview';
import { CardOne } from './parts/CardOne';
import { CardTwo } from './parts/CardTwo';
import { CardThree } from './parts/CardThree';
import { CardHomeOverviewProduct } from './parts/CardHomeOverviewProduct';
import { CardHomeOverviewPayment } from './parts/CardHomeOverviewPayment';
import '../App.css';
import '../Page.css';
import '../Fonts.css';

const Pro = () => {

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          maxWidth: '100%',
        }}
      >
            <CardHomeOverview />
  
            <CardOne />
  
            <CardHomeOverviewPayment />
  
            <CardTwo />

            <CardHomeOverviewProduct />
  
            <CardThree />

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
          }}
        >
          <CardProPay />
        </Box>
      </Box>
    </>
  );
};

export default Pro;