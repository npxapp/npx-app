import React from 'react';
import { Box, Button, Typography, Paper } from '@mui/material';
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
  return (
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
      <Paper variant="outlined" sx={{ width: '100%' }}>
        <Typography variant="h5">Explore Overview Integration</Typography>
        <Button variant="customOutlined">Learn More</Button>
      </Paper>
      <CardDemoOverview />
      
      <Paper variant="outlined" sx={{ width: '100%' }}>
        <Typography variant="h5">Test Product Integration</Typography>
        <Button variant="customOutlined">Learn More</Button>
      </Paper>
      <DemoProduct />
      
      <Paper variant="outlined" sx={{ width: '100%' }}>
        <Typography variant="h5">Explore Router Integration</Typography>
        <Button variant="customOutlined">Learn More</Button>
      </Paper>
      <DemoProductRouter />
      
      <Paper variant="outlined" sx={{ width: '100%' }}>
        <Typography variant="h5">Test Carousel Integration</Typography>
        <Button variant="customOutlined">Learn More</Button>
      </Paper>
      <DemoProductCarousel />
      
      <Paper variant="outlined" sx={{ width: '100%' }}>
        <Typography variant="h5">Explore SnackBar Integration</Typography>
        <Button variant="customOutlined">Learn More</Button>
      </Paper>
      <DemoProductSnackBar />
      
      <Paper variant="outlined" sx={{ width: '100%' }}>
        <Typography variant="h5">Test Accordion Integration</Typography>
        <Button variant="customOutlined">Learn More</Button>
      </Paper>
      <DemoProductAccordion />
      
      <Paper variant="outlined" sx={{ width: '100%' }}>
        <Typography variant="h5">Explore Drawer Integration</Typography>
        <Button variant="customOutlined">Learn More</Button>
      </Paper>
      <DemoProductDrawer />
    </Box>
  );
};

export default Demo;