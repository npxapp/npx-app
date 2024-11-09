import React from 'react';
import Masonry from '@mui/lab/Masonry';
import { Box, IconButton, Button } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import CloudIcon from '@mui/icons-material/Cloud';
import { useDarkMode } from '../contexts/DarkMode';
import { useDrawer } from '../contexts/DrawerMode';
import logo from '../logo.svg';
import { DemoProductPro } from './parts/DemoProductPro';
import { DemoProductProRouter } from './parts/DemoProductProRouter';
import { DemoProductProCarousel } from './parts/DemoProductProCarousel';
import { DemoProductProSnackBar } from './parts/DemoProductProSnackBar';
import { DemoProductProAccordion } from './parts/DemoProductProAccordion';
import { DemoProductProDrawer } from './parts/DemoProductProDrawer';

import '../App.css';
import '../Page.css';

const DemoPro = () => {
  const { darkMode } = useDarkMode();
  const { toggleDrawer } = useDrawer();
  
  return (
        <Masonry columns={{ xs: 1, sm: 3, md: 4, lg: 4 }} spacing={2}>
          {/* New DemoApp as the first item */}
          <Box className="Box--Box">
            <DemoProductPro />
          </Box>
          <Box className="Box--Box">
            <DemoProductProRouter />
          </Box>
          <Box className="Box--Box">
            <DemoProductProCarousel />
          </Box>
          <Box className="Box--Box">
            <DemoProductProSnackBar />
          </Box>
          <Box className="Box--Box">
            <DemoProductProAccordion />
          </Box>
          <Box className="Box--Box">
            <DemoProductProDrawer />
          </Box>
        </Masonry>
  );
}

export default DemoPro;

