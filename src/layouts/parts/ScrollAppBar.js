import React, { useEffect } from 'react';
import {
  IconButton,
  Typography,
  Link,
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
import { getDomain } from '../utils';
import { useNavigate } from 'react-router-dom';

const ScrollAppBar = () => {
  const { setScrolled } = useScrolled();
  const { drawerOpen, toggleDrawer } = useDrawer();
  const { darkMode, setDarkMode } = useDarkMode();
  const domain = getDomain();
  const navigate = useNavigate();

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

  const navigateOpen = (path) => {
    navigate(path);
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
<Link
  component="a"
  href="/"
  onClick={(e) => {
    e.preventDefault();
    navigateOpen('/');
  }}
  sx={{
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    cursor: 'pointer',
  }}
>
  <Typography
    component="span"
    variant="customTitle"
    sx={{
      cursor: 'pointer',
      textDecoration: 'none',
    }}
  >
    {domain.slice(0, 1).toUpperCase().concat(domain.slice(1))}
  </Typography>
  <PlayCircleFilledIcon
    sx={{
      fontSize: '3rem',
      color: darkMode ? 'white' : 'black',
      position: 'relative',
      left: '-3px',
    }}
  />
</Link>
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