import React from 'react';
import { Box, IconButton, Button } from '@mui/material';
import { useDarkMode } from '../contexts/DarkMode';
import { useDrawer } from '../contexts/DrawerMode';
import logo from '../logo.svg';
import { CardPaid } from './parts/CardPaid';

import '../App.css';
import '../Page.css';

const Paid = () => {
  const { darkMode } = useDarkMode();
  const { toggleDrawer } = useDrawer();
  
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

