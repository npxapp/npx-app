import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, List, ListItem, ListItemText } from '@mui/material';
import { useDarkMode } from '../../contexts/DarkMode';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
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