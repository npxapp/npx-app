import React from 'react';
import Masonry from '@mui/lab/Masonry';
import { Box, IconButton, Button } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import CloudIcon from '@mui/icons-material/Cloud';
import { useDarkMode } from '../contexts/DarkMode';
import { useDrawer } from '../contexts/DrawerMode';
import logo from '../logo.svg';
import { DemoProduct } from './parts/DemoProduct';
import '../App.css';
import '../Page.css';

const Demo = () => {
  const { darkMode } = useDarkMode();
  const { toggleDrawer } = useDrawer();
  
  return (
        <Masonry columns={{ xs: 1, sm: 3, md: 4, lg: 4 }} spacing={2}>
          {/* New DemoApp as the first item */}
          <Box className="Box--Box">
            <DemoProduct />
          </Box>
        </Masonry>
  );
}

export default Demo;

