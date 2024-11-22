import React from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import GitHubIcon from '@mui/icons-material/GitHub';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import XIcon from '@mui/icons-material/X';
import TIcon from '../../images/T';
import YiIcon from '../../images/Yi';
import { useDarkMode } from '../../contexts/DarkMode';
import { useDrawer } from '../../contexts/DrawerMode';
import { useYiMode } from '../../contexts/YiMode';

const TopIcons = () => {
  const { darkMode, setDarkMode } = useDarkMode();
  const { toggleDrawer } = useDrawer();
  const { yiMode, setYiMode } = useYiMode();

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };
  
  const toggleYi = () => {
    setYiMode(!yiMode);
  };

  const navigateOpen = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <AppBar 
      position="fixed" 
      sx={{
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
      }}
    >
      <Toolbar>
        <IconButton 
          edge="start" 
          color="primary" 
          aria-label="menu" 
          onClick={toggleDrawer} 
          sx={{
            borderRadius: '12px',
            border: '1px solid #007FFF',
            margin: '2px',
            padding: '4px',
            fontSize: '0.8rem',
          }}
          size="small"
        >
          <DragHandleIcon sx={{ color: '#007FFF', fontSize: '1rem' }} />
        </IconButton>
        <Typography variant="h6" style={{ flexGrow: 1, color: '#007FFF' }}>
          My App
        </Typography>
        <IconButton 
          color="primary" 
          onClick={toggleTheme} 
          sx={{
            borderRadius: '12px',
            border: '1px solid #007FFF',
            margin: '2px',
            padding: '4px',
          }}
          size="small"
        >
          {darkMode ? (
            <DarkModeIcon sx={{ color: '#007FFF', fontSize: '1rem' }} />
          ) : (
            <LightModeIcon sx={{ color: '#007FFF', fontSize: '1rem' }} />
          )}
        </IconButton>
        <IconButton 
          color="primary" 
          aria-label="github" 
          onClick={() => navigateOpen('https://github.com/npxapp/npx-app')}
          sx={{
            borderRadius: '12px',
            border: '1px solid #007FFF',
            margin: '2px',
            padding: '4px',
          }}
          size="small"
        >
          <GitHubIcon sx={{ color: '#007FFF', fontSize: '1rem' }} />
        </IconButton>
        <IconButton 
          color="primary" 
          onClick={toggleYi}
          sx={{
            borderRadius: '12px',
            border: '1px solid #007FFF',
            margin: '2px',
            padding: '4px',
          }}
          size="small"
        >
          {yiMode ? (
            <YiIcon sx={{ color: '#007FFF', fontSize: '1rem' }} />
          ) : (
            <TIcon sx={{ color: '#007FFF', fontSize: '1rem' }} />
          )}
        </IconButton>
        <IconButton 
          color="primary" 
          aria-label="notifications" 
          sx={{
            borderRadius: '12px',
            border: '1px solid #007FFF',
            margin: '2px',
            padding: '4px',
          }}
          size="small"
        >
          <NotificationsNoneIcon sx={{ color: '#007FFF', fontSize: '1rem' }} />
        </IconButton>
        <IconButton 
          color="primary" 
          aria-label="x" 
          onClick={() => navigateOpen('https://x.com/proappdemo')}
          sx={{
            borderRadius: '12px',
            border: '1px solid #007FFF',
            margin: '2px',
            padding: '4px',
          }}
          size="small"
        >
          <XIcon sx={{ color: '#007FFF', fontSize: '1rem' }} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default TopIcons;