import React from 'react';
import { Box, Typography } from '@mui/material';
import { useDarkMode } from '../contexts/DarkMode';
import { useDrawer } from '../contexts/DrawerMode';
import logo from '../logo.svg';
import { CardDemoOverview } from './parts/CardDemoOverview';
import { DemoProduct } from './parts/DemoProduct';
import { DemoProductRouter } from './parts/DemoProductRouter';
import { DemoProductCarousel } from './parts/DemoProductCarousel';
import { DemoProductSnackBar } from './parts/DemoProductSnackBar';
import { DemoProductAccordion } from './parts/DemoProductAccordion';
import { DemoProductDrawer } from './parts/DemoProductDrawer';
import '../App.css';
import '../Page.css';

const Demo = () => {
  const { darkMode } = useDarkMode();
  const { toggleDrawer } = useDrawer();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        width: '100%',
        maxWidth: '100%',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          maxWidth: '100%',
        }}
      >
        <CardDemoOverview />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row', md: 'row', lg: 'row' },
          }}
        >
          <DemoProduct />
          <DemoProductRouter />
          <DemoProductCarousel />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row', md: 'row', lg: 'row' },
          }}
        >
          <DemoProductSnackBar />
          <DemoProductAccordion />
          <DemoProductDrawer />
        </Box>
      </Box>
    </Box>
  );
};

export default Demo;