import React from 'react';
import Masonry from '@mui/lab/Masonry';
import { Box, IconButton, Button } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import CloudIcon from '@mui/icons-material/Cloud';
import { useDarkMode } from '../contexts/DarkMode';
import { useDrawer } from '../contexts/DrawerMode';
import logo from '../logo.svg';
import { DemoProduct } from './parts/DemoProduct';
import { DemoProductRouter } from './parts/DemoProductRouter';
import { DemoProductCarousel } from './parts/DemoProductCarousel';
import { DemoProductSnackBar } from './parts/DemoProductSnackBar';
import { DemoProductAccordion } from './parts/DemoProductAccordion';
import { DemoProductDrawer } from './parts/DemoProductDrawer';
import { DemoProductScaffold } from './parts/DemoProductScaffold';
import { DemoProductMarkdown } from './parts/DemoProductMarkdown';

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
        <DemoProductScaffold />
      </Box>
        <Masonry columns={{ xs: 1, sm: 3, md: 4, lg: 4 }} spacing={2}>
          {/* New DemoApp as the first item */}
          <Box className="Box--Box">
            <DemoProduct />
          </Box>
          <Box className="Box--Box">
            <DemoProductRouter />
          </Box>
          <Box className="Box--Box">
            <DemoProductCarousel />
          </Box>
          <Box className="Box--Box">
            <DemoProductSnackBar />
          </Box>
          <Box className="Box--Box">
            <DemoProductAccordion />
          </Box>
          <Box className="Box--Box">
            <DemoProductDrawer />
          </Box>
        </Masonry>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        <DemoProductMarkdown />
      </Box>
    </Box>
  );
}

export default Demo;

