import React, { useState, useEffect } from 'react';
import { Box, CircularProgress, IconButton, Typography, Slide } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useDarkMode } from '../../contexts/DarkMode';
import { useSlide } from './SlideContext';

const SlideAssetsRegistry = () => {
  const { darkMode } = useDarkMode();

  const { 
    loading, 
    setLoading, 
    activeSlide, 
    setActiveSlide,
    setPreviousSlide 
  } = useSlide();

  const handleBack = () => {
    setPreviousSlide(activeSlide);
    setActiveSlide(0);
  };
  
  const [assets, setAssets] = useState(null);

  useEffect(() => {
    const fetchAssets = async () => {
      if (activeSlide === 4) {
        try {
          const response = await fetch('/npx/assets/registry', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({})
          });

          const data = await response.json();

          if (data.status === 'OK') {
            setAssets(data.assets);
          } else {
            setAssets(null);
          }
        } catch (error) {
          console.error(`Error fetching assets: ${error.message}`);
          setAssets(null);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchAssets();
  }, [activeSlide, setLoading]);
  
  return (
    <Slide direction="right" in={activeSlide === 4} mountOnEnter unmountOnExit>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          width: '100%',
        }}
      >
        <IconButton onClick={handleBack}>
          <ArrowForwardIcon sx={{ color: '#61dafb' }} />
        </IconButton>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100vh',
          }}
        >
          <Typography variant="h6" sx={{ color: '#61dafb' }}>
            Assets Registry
          </Typography>
        </Box>
        {loading ? (
          <CircularProgress sx={{ color: darkMode ? '#61dafb' : '#007fff' }} />
        ) : (
          assets?.map((asset) => (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          Assets Registry Records
        </Box>
          ))
        )}
      </Box>
    </Slide>
  );
};

export default SlideAssetsRegistry;