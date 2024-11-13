import React from 'react';
import Masonry from '@mui/lab/Masonry';
import { Box, Button } from '@mui/material';
import CloudIcon from '@mui/icons-material/Cloud';
import { useDarkMode } from '../contexts/DarkMode';
import { useDrawer } from '../contexts/DrawerMode';
import { CardProPay } from './parts/CardProPay';
import { CardProLegal } from './parts/CardProLegal';
import { CardProBusiness } from './parts/CardProBusiness';
import { CardProReturns } from './parts/CardProReturns';
import { CardHomeOverview } from './parts/CardHomeOverview';
import { CardHomeOverviewRouting } from './parts/CardHomeOverviewRouting';
import { CardHomeOverviewPaths } from './parts/CardHomeOverviewPaths';
import { CardHomeOverviewParts } from './parts/CardHomeOverviewParts';
import { CardHomeOverviewProduct } from './parts/CardHomeOverviewProduct';
import '../App.css';
import '../Page.css';
import '../Fonts.css';

const Home = () => {
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
        <CardHomeOverview />
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row', md: 'row' },
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <Box sx={{ width: { xs: '100%', sm: '33%', md: '33%' } }}>
          <CardHomeOverviewRouting />
        </Box>

        <Box sx={{ width: { xs: '100%', sm: '33%', md: '33%' } }}>
          <CardHomeOverviewPaths />
        </Box>

        <Box sx={{ width: { xs: '100%', sm: '33%', md: '33%' } }}>
          <CardHomeOverviewParts />
        </Box>
      </Box>
  
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        <CardHomeOverviewProduct />
      </Box>

      {/* Masonry for Product Cards */}
      <Masonry columns={{ xs: 1, sm: 3, md: 4, lg: 4 }} spacing={2}>
        <Box className="Box--Box">
          <CardProPay />
        </Box>

        <Box className="Box--Box">
          <CardProBusiness />
        </Box>

        <Box className="Box--Box">
          <CardProReturns />
        </Box>

        <Box className="Box--Box">
          <CardProLegal />
        </Box>
      </Masonry>
    </Box>
  );
}

export default Home;