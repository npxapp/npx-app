import React, { useEffect } from 'react';
import {
  IconButton,
  Button,
  Box,
} from '@mui/material';
import ArrowBackTwoToneIcon from '@mui/icons-material/ArrowBackTwoTone';
import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import { useDarkMode } from '../../contexts/DarkMode';
import { useDrawer } from '../../contexts/DrawerContext';
import { useScrolled } from '../../contexts/ScrolledContext';

const ScrollAppBar = () => {
  const { setScrolled } = useScrolled();
  const { drawerOpen, toggleDrawer } = useDrawer();
  const { darkMode, setDarkMode } = useDarkMode();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [setScrolled]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <Box
        sx={{
          position: 'fixed',
          width: '100%',
          zIndex: 1200,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            padding: 0,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-start',
              padding: 0,
              margin: 0,
              height: '56px',
              maxHeight: '56px',
              flexWrap: 'wrap',
            }}
          >
            <Box
              sx={{
                textAlign: 'left',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Button variant="customTitle">Startersoft.io</Button>
              <PlayCircleFilledIcon 
                sx={{
                  fontSize: '3rem',
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          position: 'fixed',
          right: 10,
          top: 10,
          zIndex: 2000,
          background: 'transparent',
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}
      >
        <IconButton onClick={toggleTheme} variant="panel">
          {darkMode ? <DarkModeIcon variant="customIcon" /> : <LightModeIcon variant="customIcon" />}
        </IconButton>

        <IconButton variant="arrowButton" onClick={toggleDrawer}>
          {drawerOpen ? (
            <ArrowForwardTwoToneIcon variant="customIcon" />
          ) : (
            <ArrowBackTwoToneIcon variant="customIcon" />
          )}
        </IconButton>
      </Box>
    </>
  );
};

export default ScrollAppBar;