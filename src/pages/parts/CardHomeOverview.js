import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';
import QrCode2Icon from '@mui/icons-material/QrCode2';
import LanguageIcon from '@mui/icons-material/Language';
import { useDarkMode } from '../../contexts/DarkMode';
import CreateIcons from './CreateIcons'; // Import the wrapper component
import CreateCardHomeOverview from './CreateCardHomeOverview'; // Import CreateCard component

const CardStyles = (darkMode) => ({
  background: darkMode
    ? 'linear-gradient(135deg, rgba(0, 127, 255, 0.15) 25%, rgba(0, 127, 255, 0.25) 25%, rgba(0, 127, 255, 0.25) 50%, rgba(0, 127, 255, 0.15) 50%, rgba(0, 127, 255, 0.15) 75%, rgba(0, 127, 255, 0.25) 75%)'
    : 'linear-gradient(135deg, rgba(0, 127, 255, 0.25) 25%, rgba(0, 127, 255, 0.35) 25%, rgba(0, 127, 255, 0.35) 50%, rgba(0, 127, 255, 0.25) 50%, rgba(0, 127, 255, 0.25) 75%, rgba(0, 127, 255, 0.35) 75%)',
  backgroundSize: '20px 20px',
});

const CardHeaderStyles = (darkMode) => ({
  background: darkMode
    ? 'linear-gradient(45deg, rgba(255, 255, 255, 0.03) 0%, rgba(97, 218, 251, 0.06) 100%)'
    : 'linear-gradient(45deg, rgba(0, 127, 255, 0.03) 0%, rgba(0, 127, 255, 0.06) 100%)',
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
  // Handle all interaction states
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
    color: darkMode ? '#61dafb' : '#ffffff',
    fontWeight: 500,
  },
});

export function CardHomeOverview() {
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
      headerTitle="Be Pro"
      content={
        <>
          <List sx={ListStyles(darkMode)}>
            <ListItem>
              <ListItemText primary="Single Point of Entry" sx={ListItemTextStyles(darkMode)} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Express Middleware Server" sx={ListItemTextStyles(darkMode)} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Router.js for Single Page Application Routing" sx={ListItemTextStyles(darkMode)} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Path Mapping" sx={ListItemTextStyles(darkMode)} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Event Listeners Like PopState" sx={ListItemTextStyles(darkMode)} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Handling Link Clicks" sx={ListItemTextStyles(darkMode)} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Updating Page Content" sx={ListItemTextStyles(darkMode)} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Loading Page Components" sx={ListItemTextStyles(darkMode)} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Waiting for Static Assets" sx={ListItemTextStyles(darkMode)} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Component Initialization" sx={ListItemTextStyles(darkMode)} />
            </ListItem>
          </List>
        </>
      }
    />
  );
}