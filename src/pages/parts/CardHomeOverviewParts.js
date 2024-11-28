import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { List, ListItem, ListItemText, Button, Box } from '@mui/material';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import { useDarkMode } from '../../contexts/DarkMode';
import CreateIcons from './CreateIcons'; 
import CreateCardHomeOverviewParts from './CreateCardHomeOverviewParts'; 
import {
  CardStyles,
  CardHeaderStyles,
  CardContentStyles,
  AvatarIconStyles,
  CardListStyles,
  CardListItemStyles,
} from './CardsStyles';

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