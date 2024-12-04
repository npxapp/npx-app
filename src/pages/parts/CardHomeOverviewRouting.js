import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { List, ListItem, ListItemText, Button, Box } from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { useDarkMode } from '../../contexts/DarkMode';
import CreateIcons from './CreateIcons'; // Import the wrapper component
import CreateCardHomeOverviewParts from './CreateCardHomeOverviewParts'; // Import CreateCard component
import {
  CardStyles,
  CardHeaderStyles,
  CardContentStyles,
  AvatarIconStyles,
  CardListStyles,
  CardListItemStyles,
  CardPurchaseButtonStyles,
} from './CardsStyles';

export function CardHomeOverviewRouting() {
  const { darkMode } = useDarkMode();
  const buttonRef = useRef(null);
  const navigate = useNavigate();
  const [selectedFilter, setSelectedFilter] = useState('Payment Link');

  const slidesData = ['Click to Purchase', 'Payment Link', 'Single Page Application'];

  const toggleClass = () => {
    const button = buttonRef.current;
    if (button && !button.classList.contains('ResetMe')) {
      button.classList.add('ResetMe');
    } else if (button) {
      button.classList.remove('ResetMe');
    }
  };

  const navigateOpen = (header, url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
    setSelectedFilter(header);
    toggleClass();
  };

  return (
    <CreateCardHomeOverviewParts
      sx={CardStyles(darkMode)}
      headerSx={CardHeaderStyles(darkMode)}
      headerAvatar={
        <CreateIcons sx={AvatarIconStyles(darkMode)}>
          <AttachMoneyIcon />
        </CreateIcons>
      }
      headerTitle="Pay"
      contentSx={CardContentStyles(darkMode)}
      content={
        <>
          <List sx={CardListStyles(darkMode)}>
            <ListItem>
              <ListItemText primary="One Time Payment With Stripe" sx={CardListItemStyles(darkMode)} />
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
                onClick={() => navigateOpen(header, 'https://buy.stripe.com/bIYdSG5EZ0Ba492eUV')}
                sx={CardPurchaseButtonStyles(darkMode, selectedFilter, header)}
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