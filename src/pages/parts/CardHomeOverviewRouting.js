import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';import { useDarkMode } from '../../contexts/DarkMode';
import CreateIcons from './CreateIcons'; // Import the wrapper component
import CreateCardHomeOverviewParts from './CreateCardHomeOverviewParts'; // Import CreateCard component
import logo from '../../images/globe.svg';

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
      '&:hover': {
        backgroundColor: 'transparent',
      },
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

export function CardHomeOverviewRouting() {
  const { darkMode } = useDarkMode();

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
        </>
      }
    />
  );
}