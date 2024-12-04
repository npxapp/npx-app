import React, { useState, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  List, 
  ListItem, 
  ListItemText, 
  Button, 
  Box, 
  Tooltip, 
  Zoom,
  Fade 
} from '@mui/material';
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
  CardPurchaseButtonStyles,
} from './CardsStyles';

export function CardHomeOverviewParts() {
  const { darkMode } = useDarkMode();
  const navigate = useNavigate();
  const [selectedFilter, setSelectedFilter] = useState('Learn the Parts');

  const slidesData = useMemo(() => [
    { 
      header: 'Integration Guide', 
      path: '/', 
      description: 'Comprehensive setup and integration instructions' 
    },
    { 
      header: 'See in Action', 
      path: '/', 
      description: 'Interactive demonstration of key features' 
    },
    { 
      header: 'Learn the Parts', 
      path: '/Demo', 
      description: 'Detailed breakdown of system components' 
    }
  ], []);

  const navigateOpen = useCallback((header, url) => {
    navigate(url);
    setSelectedFilter(header);
  }, [navigate]);

  const avatarHoverEffects = {
    transition: 'transform 0.3s ease',
    cursor: 'pointer',
    '&:hover': {
      transform: 'scale(1.1) rotate(5deg)',
    },
  };

  return (
    <CreateCardHomeOverviewParts
      sx={{
        ...CardStyles(darkMode),
        maxWidth: '500px',
        margin: 'auto',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'scale(1.02)',
          boxShadow: darkMode 
            ? '0 10px 20px rgba(97, 218, 251, 0.1)' 
            : '0 10px 20px rgba(0, 0, 0, 0.1)',
        },
      }}
      headerSx={CardHeaderStyles(darkMode)}
      headerAvatar={
        <CreateIcons sx={{ ...AvatarIconStyles(darkMode), ...avatarHoverEffects }}>
          <PersonPinIcon />
        </CreateIcons>
      }
      headerTitle="Use"
      contentSx={{
        ...CardContentStyles(darkMode),
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
      }}
      content={
        <>
          <Fade in timeout={300}>
            <List sx={CardListStyles(darkMode)}>
              <ListItem>
                <ListItemText 
                  primary="Deploy Your Single Page Application" 
                  sx={{
                    ...CardListItemStyles(darkMode),
                    textAlign: 'center',
                  }} 
                />
              </ListItem>
            </List>
          </Fade>

          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 2,
            }}
          >
            {slidesData.map((slide, index) => (
              <Zoom 
                in 
                key={slide.header}
                style={{ transitionDelay: `${100 * (index + 1)}ms` }}
              >
                <Tooltip 
                  title={slide.description}
                  placement="top"
                  arrow
                >
                  <Button
                    variant={selectedFilter === slide.header ? 'contained' : 'outlined'}
                    onClick={() => navigateOpen(slide.header, slide.path)}
                    aria-label={slide.header}
                    sx={{
                      ...CardPurchaseButtonStyles(darkMode, selectedFilter, slide.header),
                      position: 'relative',
                      overflow: 'hidden',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'scale(1.05)',
                        boxShadow: darkMode 
                          ? '0 4px 8px rgba(97, 218, 251, 0.3)' 
                          : '0 4px 8px rgba(0, 0, 0, 0.2)',
                      },
                      '&:active': {
                        transform: 'scale(0.95)',
                      },
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: darkMode 
                          ? 'linear-gradient(45deg, rgba(97, 218, 251, 0.1), transparent)' 
                          : 'linear-gradient(45deg, rgba(97, 218, 251, 0.05), transparent)',
                        opacity: selectedFilter === slide.header ? 0.3 : 0,
                        transition: 'opacity 0.3s ease',
                      },
                      '&:hover::before': {
                        opacity: 0.5,
                      },
                    }}
                  >
                    {slide.header}
                  </Button>
                </Tooltip>
              </Zoom>
            ))}
          </Box>
        </>
      }
    />
  );
}

export default CardHomeOverviewParts;