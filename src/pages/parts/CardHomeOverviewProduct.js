import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import { useDarkMode } from '../../contexts/DarkMode';
import CreateIcons from './CreateIcons'; // Import the wrapper component
import CreateCardHomeOverviewProduct from './CreateCardHomeOverviewProduct'; // Import CreateCard component

const CardStyles = (darkMode) => ({
  background: darkMode
    ? 'linear-gradient(135deg, rgba(0, 127, 255, 0.15) 25%, rgba(0, 127, 255, 0.25) 25%, rgba(0, 127, 255, 0.25) 50%, rgba(0, 127, 255, 0.15) 50%, rgba(0, 127, 255, 0.15) 75%, rgba(0, 127, 255, 0.25) 75%)'
    : '#2d3748',
  backgroundSize: '20px 20px',
  
  // Default does not include boxShadow, leaving it out

  '@media (max-width: 600px)': { // For xs screens (max-width: 600px)
    boxShadow: darkMode
      ? '0px 20px 50px rgba(0, 0, 0, 0.8), 0px 10px 20px rgba(0, 0, 0, 0.7)' // Heavy shadow for dark mode on xs
      : '0px 20px 50px rgba(0, 0, 0, 0.5), 0px 10px 20px rgba(0, 0, 0, 0.4)', // Lighter shadow for light mode on xs
  },
});

const CardHeaderStyles = (darkMode) => ({
  background: darkMode
    ? 'linear-gradient(45deg, rgba(255, 255, 255, 0.03) 0%, rgba(97, 218, 251, 0.06) 100%)'
    : '#2d3748',
});

const CardHeaderTextStyles = (darkMode) => ({
  fontSize: '6rem',
  color: darkMode ? '#61dafb' : '#fff',
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
      color: darkMode ? '#61dafb' : '#fff',
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

export function CardHomeOverviewProduct() {
  const { darkMode } = useDarkMode();

  return (
    <CreateCardHomeOverviewProduct
      sx={CardStyles(darkMode)}
      headerSx={CardHeaderStyles(darkMode)}
      headerAvatar={
        <CreateIcons sx={AvatarIconStyles}>
          <LanguageIcon />
        </CreateIcons>
      }
      headerTitleSx={CardHeaderTextStyles(darkMode)}
      headerTitle="Parts"
      content={
        <>
          <List sx={ListStyles(darkMode)}>
            <ListItem>
              <ListItemText primary="A streamlined entry point ensures efficient app load and navigation." sx={ListItemTextStyles(darkMode)} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Utilizes Express to handle server requests, enforce middleware, and manage routing." sx={ListItemTextStyles(darkMode)} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Routes all requests to a single page, managing navigation without page reloads." sx={ListItemTextStyles(darkMode)} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Path Mapping" sx={ListItemTextStyles(darkMode)} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Uses popstate and link click listeners to dynamically update page content and URLs." sx={ListItemTextStyles(darkMode)} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Loads and initializes only the necessary page components, optimizing performance and user experience." sx={ListItemTextStyles(darkMode)} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Waits for static assets to load before rendering content, ensuring a smooth user experience." sx={ListItemTextStyles(darkMode)} />
            </ListItem>
          </List>
        </>
      }
    />
  );
}