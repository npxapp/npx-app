import React from 'react';
import { Box } from '@mui/material';
import DrawerSlider from './parts/DrawerSlider';

const Footer = () => {

    return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          my: 2,
        }}
      >
        <DrawerSlider />
      </Box>
    </>
    );
};

export default Footer;