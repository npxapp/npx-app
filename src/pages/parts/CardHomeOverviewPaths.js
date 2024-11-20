import React, { useState, useRef, useEffect } from 'react';
import { Box, Button, List, ListItem, ListItemText } from '@mui/material';
import { useDarkMode } from '../../contexts/DarkMode';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import CreateIcons from './CreateIcons'; 
import CreateCardHomeOverviewParts from './CreateCardHomeOverviewParts'; 
import logo from '../../images/planets.svg';

const CardStyles = (darkMode) => ({
  backgroundImage: `linear-gradient(rgba(255, 255, 224, 0.7), rgba(255, 255, 224, 0.7)), url(${logo})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
});

const CardHeaderStyles = (darkMode) => ({
  fontSize: '3rem',
  color: darkMode ? '#fff' : '#4fa3d7',
});

const CardContentStyles = (darkMode) => ({
  background: darkMode ? 'rgba(97, 218, 251, 0.8)' : 'rgba(0, 127, 255, 0.1)',
  color: darkMode ? '#fff' : '#4fa3d7',
});

const AvatarIconStyles = (darkMode) => ({
  backgroundColor: 'transparent',
  padding: '10px',
  borderRadius: '50%',
  border: 'none',
  color: darkMode ? '#fff' : '#4fa3d7',
  '&.MuiIconButton-root': {
    backgroundColor: 'transparent',
    '&:hover': {
      backgroundColor: 'transparent',
    },
    '&:active': {
      backgroundColor: 'transparent',
    },
    '&:focus': {
      backgroundColor: 'transparent',
    },
  },
  '& .MuiSvgIcon-root': {
    fontSize: '6rem',
    backgroundColor: 'transparent',
  },
});

const CardListStyles = (darkMode) => ({
  '& .MuiListItem-root': {
    '&::before': {
      content: '"•"',
      color: darkMode ? '#fff' : '#4fa3d7',
      marginRight: '8px',
      fontSize: '3rem',
    },
    '&:hover': {
      backgroundColor: 'transparent',
    },
    '&:focus': {
      backgroundColor: 'transparent',
    },
    '&.Mui-selected': {
      backgroundColor: 'transparent',
    },
  },
});

const CardListItemStyles = (darkMode) => ({
  '& .MuiListItemText-primary': {
    fontSize: '1.6rem',
    color: darkMode ? '#fff' : '#4fa3d7',
    fontWeight: 700,
  },
});

export function CardHomeOverviewPaths() {
  const { darkMode } = useDarkMode();
  const buttonRef = useRef(null);

  const ResetButton = {
    '&.ResetMe': {
      backgroundColor: darkMode ? '#61dafb' : '#4fa3d7',
    }
  };

  const toggleClass = () => {
    const button = buttonRef.current;
    if (button && !button.classList.contains('ResetMe')) {
      button.classList.add('ResetMe');
    } else if (button) {
      button.classList.remove('ResetMe');
    }
  };

  const navigateOpen = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
    toggleClass();
  };

  return (
    <CreateCardHomeOverviewParts
      sx={CardStyles(darkMode)}
      headerSx={CardHeaderStyles(darkMode)}
      headerAvatar={
        <CreateIcons sx={AvatarIconStyles(darkMode)}>
          <EmojiEmotionsIcon />
        </CreateIcons>
      }
      headerTitle="Get"
      contentSx={CardContentStyles(darkMode)}
      content={
        <>
          <List sx={CardListStyles(darkMode)}>
            <ListItem>
              <ListItemText primary="Gzipped TarBall" sx={CardListItemStyles(darkMode)} />
            </ListItem>
          </List>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Button
              ref={buttonRef}
              onClick={() => navigateOpen('https://buy.stripe.com/test_9AQ5obca6gXZ7724gg')}
              variant="contained"
              sx={{
                fontSize: '3rem',
                '@media (min-width: 480px)': {
                  fontSize: 'clamp(1rem, 3vw, 3rem)',
                },
                borderRadius: 40,
                height: 80,
                border: darkMode ? '1px solid #61dafb' : '1px solid #8ce1fc',
                color: '#fff',
                backgroundColor: darkMode ? '#61dafb' : '#4fa3d7',
                textTransform: 'none',
              }}
            >
              app.tar.gz
            </Button>
          </Box>
        </>
      }
    />
  );
}