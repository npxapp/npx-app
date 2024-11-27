import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, List, ListItem, ListItemText } from '@mui/material';
import { useDarkMode } from '../../contexts/DarkMode';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import CreateIcons from './CreateIcons';
import CreateCardHomeOverviewParts from './CreateCardHomeOverviewParts';
import logo from '../../images/planets.svg';

const CardStyles = (darkMode) => ({
  display: 'flex',
  flexDirection: 'column',
  boxShadow: darkMode
    ? '10px 15px 30px rgba(0, 0, 0, 0.9), -10px -15px 30px rgba(0, 0, 0, 0.7)' // Heavy shadows all around for dark mode
    : '10px 15px 30px rgba(0, 0, 0, 0.6), -10px -15px 30px rgba(0, 0, 0, 0.4)', // Heavy shadows for light mode
  borderRadius: '8px', // Keeps the corners rounded
});

const CardHeaderStyles = (darkMode) => ({
  fontSize: '3rem',
  color: darkMode ? '#fff' : '#fff',
  display: 'flex',
  flexGrow: 1,
});

const CardContentStyles = (darkMode) => ({
  background: darkMode
    ? 'linear-gradient(135deg, rgba(0, 127, 255, 0.15) 25%, rgba(0, 127, 255, 0.25) 25%, rgba(0, 127, 255, 0.25) 50%, rgba(0, 127, 255, 0.15) 50%, rgba(0, 127, 255, 0.15) 75%, rgba(0, 127, 255, 0.25) 75%)' 
    : '#2d3748',
  color: darkMode ? '#f5f5f5' : '#fff',
  display: 'flex',
  flexDirection: 'column',
});

const AvatarIconStyles = (darkMode) => ({
  backgroundColor: 'transparent',
  padding: '10px',
  borderRadius: '50%',
  borderColor: '#61dafb',
  color: darkMode ? '#fff' : '#fff',
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
  display: 'flex',
  flexGrow: 1,
  alignItems: 'flex-start',
  '& .MuiListItem-root': {
    '&::before': {
      content: '"•"',
      color: darkMode ? '#fff' : '#fff',
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
  alignItems: 'flex-start',
  '& .MuiListItemText-primary': {
    fontSize: '1.6rem',
    color: darkMode ? '#fff' : '#fff',
    fontWeight: 700,
  },
});

export function CardHomeOverviewPaths() {
  const { darkMode } = useDarkMode();
  const buttonRef = useRef(null);
  const navigate = useNavigate();
  const [selectedFilter, setSelectedFilter] = useState('Gzipped Tarball');

  const slidesData = ['Download Here', 'Secure Download', 'Gzipped Tarball', 'Use Token'];

  const toggleClass = () => {
    const button = buttonRef.current;
    if (button && !button.classList.contains('ResetMe')) {
      button.classList.add('ResetMe');
    } else if (button) {
      button.classList.remove('ResetMe');
    }
  };

  const navigateOpen = (header, url) => {
    navigate(url);
    setSelectedFilter(header);
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
              flexWrap: 'wrap',
              gap: 3,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {slidesData.map((header, index) => (
              <Button
                key={header}
                variant={selectedFilter === header.toLowerCase() ? 'contained' : 'outlined'}
                onClick={() => navigateOpen(header, '/get')}
                sx={{
                  borderRadius: 20,
                  border: darkMode ? '1px solid #61dafb' : '1px solid #8ce1fc',
                  color: darkMode ? '#61dafb' : '#61dafb',
                  backgroundColor: selectedFilter === header
                    ? 'rgba(97, 218, 251, .2)'
                    : 'rgba(0, 0, 0, 1)',
                  textTransform: 'none',
                }}
              >
                {header}
              </Button>
            ))}
          </Box>
        </>
      }
    />
  );
}