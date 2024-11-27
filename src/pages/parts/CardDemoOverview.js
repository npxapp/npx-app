import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';
import QrCode2Icon from '@mui/icons-material/QrCode2';
import LanguageIcon from '@mui/icons-material/Language';
import { useDarkMode } from '../../contexts/DarkMode';
import CreateIcons from './CreateIcons'; 
import CreateCardHomeOverview from './CreateCardHomeOverview'; 

const CardStyles = (darkMode) => ({
  background: darkMode
    ? 'linear-gradient(135deg, rgba(0, 127, 255, 0.15) 25%, rgba(0, 127, 255, 0.25) 25%, rgba(0, 127, 255, 0.25) 50%, rgba(0, 127, 255, 0.15) 50%, rgba(0, 127, 255, 0.15) 75%, rgba(0, 127, 255, 0.25) 75%)'
    : '#2d3748',
  backgroundSize: '20px 20px',
});

const CardHeaderStyles = (darkMode) => ({
  background: darkMode
    ? 'linear-gradient(45deg, rgba(255, 255, 255, 0.03) 0%, rgba(97, 218, 251, 0.06) 100%)'
    : '#2d3748',
});

const CardHeaderTextStyles = (darkMode) => ({
  fontSize: '6rem',
  color: darkMode ? '#61dafb' : '#ffffff',
});

const AvatarIconStyles = {
  backgroundColor: '#007fff',
  padding: '10px',
  borderRadius: '50%',
  color: '#fff',
  '&.MuiIconButton-root': {
    backgroundColor: '#007fff',
    '&:hover': {
      backgroundColor: '#007fff',
    },
    '&:active': {
      backgroundColor: '#007fff',
    },
    '&:focus': {
      backgroundColor: '#007fff',
    },
  },
  '& .MuiSvgIcon-root': {
    fontSize: '6rem',
  },
};

const ListStyles = (darkMode) => ({
  '& .MuiListItem-root': {
    '&::before': {
      content: '"•"',
      color: darkMode ? '#61dafb' : '#ffffff',
      marginRight: '8px',
      fontSize: '2rem',
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

const ListItemTextStyles = (darkMode) => ({
  '& .MuiListItemText-primary': {
    fontSize: '2rem',
    color: darkMode ? '#61dafb' : '#2d3748',
    fontWeight: 500,
  },
});

export function CardDemoOverview() {
  const { darkMode } = useDarkMode();

  return (
    <CreateCardHomeOverview
      sx={CardStyles(darkMode)}
      headerSx={CardHeaderStyles(darkMode)}
      headerAvatar={
        <CreateIcons sx={AvatarIconStyles}>
          <QrCode2Icon />
        </CreateIcons>
      }
      headerTitleSx={CardHeaderTextStyles(darkMode)}
      headerTitle="See Parts"
      content={
        <>
          <List sx={ListStyles(darkMode)}>
            <ListItem>
              <ListItemText primary="A streamlined entry point ensures efficient app load and navigation." sx={ListItemTextStyles(darkMode)} />
            </ListItem>
          </List>
        </>
      }
    />
  );
}