import React from 'react';
import Masonry from '@mui/lab/Masonry';
import { Box, Button } from '@mui/material';
import CloudIcon from '@mui/icons-material/Cloud';
import { useDarkMode } from '../contexts/DarkMode';
import { useDrawer } from '../contexts/DrawerMode';
import { CardProProduct } from './parts/CardProProduct';
import { CardProPay } from './parts/CardProPay';
import { CardPro } from './parts/CardPro';
import { CardProLegal } from './parts/CardProLegal';
import { CardProBusiness } from './parts/CardProBusiness';
import { CardProReturns } from './parts/CardProReturns';
import { CardHomeOverview } from './parts/CardHomeOverview';
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
          mb: 2,
        }}
      >
        <CardHomeOverview />
      </Box>

      <Masonry columns={{ xs: 1, sm: 3, md: 4, lg: 4 }} spacing={2}>
        <Box className="Box--Box">
          <CardProProduct />
        </Box>

        <Box className="Box--Box">
          <CardPro />
        </Box>

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