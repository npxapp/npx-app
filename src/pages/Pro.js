import React from 'react';
import Masonry from '@mui/lab/Masonry';
import { Box, Button } from '@mui/material';
import CloudIcon from '@mui/icons-material/Cloud';
import { useDarkMode } from '../contexts/DarkMode';
import { useDashboardDrawer } from '../contexts/DashboardDrawerContext';
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
  const { darkMode } = useDarkMode();
  const { toggleDashboardDrawer } = useDashboardDrawer();

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