import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { List, ListItem, ListItemText, Button, Box } from '@mui/material';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import { useDarkMode } from '../../contexts/DarkMode';
import CreateIcons from './CreateIcons'; 
import CreateCardHomeOverviewParts from './CreateCardHomeOverviewParts'; 

const CardStyles = (darkMode) => ({
  display: 'flex',
  flexDirection: 'column',
  boxShadow: {
    xs: `0px 15px 40px rgba(0, 0, 0, ${darkMode ? 0.95 : 0.75})`, // Heavy shadow for extra small screens
    sm: `inset -10px 0px 20px rgba(0, 0, 0, ${darkMode ? 0.8 : 0.6})`, // Heavy inset left shadow for small screens
    md: `0px 10px 30px rgba(0, 0, 0, ${darkMode ? 0.9 : 0.7})`, // Default shadow for medium and larger screens
  },
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
    : 'linear-gradient(135deg, rgba(0, 63, 127, 0.98) 25%, rgba(0, 63, 127, 0.9) 25%, rgba(0, 63, 127, 0.9) 50%, rgba(0, 63, 127, 0.98) 50%, rgba(0, 63, 127, 0.98) 75%, rgba(0, 63, 127, 0.9) 75%)',
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
      '&:hover': {
        backgroundColor: 'transparent',
      },
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

export function CardHomeOverviewParts() {
  const { darkMode } = useDarkMode();
  const buttonRef = useRef(null);
  const navigate = useNavigate();
  const [selectedFilter, setSelectedFilter] = useState('Learn the Parts');

  const slidesData = ['Integration Guide', 'See in Action', 'Learn the Parts'];
  const pathsData = ['/', '/', '/Demo'];

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
          <PersonPinIcon />
        </CreateIcons>
      }
      headerTitle="Use"
      contentSx={CardContentStyles(darkMode)}
      content={
        <>
          <List sx={CardListStyles(darkMode)}>
            <ListItem>
              <ListItemText primary="Deploy Your Single Page Application" sx={CardListItemStyles(darkMode)} />
            </ListItem>
          </List>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 3,
            }}
          >
            {slidesData.map((header, index) => (
              <Button
                key={header}
                variant={selectedFilter === header.toLowerCase() ? 'contained' : 'outlined'}
                onClick={() => navigateOpen(header, pathsData[index])}
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