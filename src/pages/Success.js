import React from 'react';
import { Box, IconButton, Button } from '@mui/material';
import { useDarkMode } from '../contexts/DarkMode';
import { useDashboardDrawer } from '../contexts/DashboardDrawerContext';
import logo from '../logo.svg';
import { CardSuccess } from './parts/CardSuccess';

import '../App.css';
import '../Page.css';

const Success = () => {
  const { darkMode } = useDarkMode();
  const { toggleDashboardDrawer } = useDashboardDrawer();
  
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

