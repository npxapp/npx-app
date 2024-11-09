import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';
import QrCode2Icon from '@mui/icons-material/QrCode2';
import LanguageIcon from '@mui/icons-material/Language';
import { useDarkMode } from '../../contexts/DarkMode';
import CreateIcons from './CreateIcons'; // Import the wrapper component
import CreateCardHomeOverview from './CreateCardHomeOverview'; // Import CreateCard component

const CardStyles = {
  marginBottom: 2,
  background:
    'linear-gradient(135deg, rgba(0, 127, 255, 0.15) 25%, rgba(0, 127, 255, 0.25) 25%, rgba(0, 127, 255, 0.25) 50%, rgba(0, 127, 255, 0.15) 50%, rgba(0, 127, 255, 0.15) 75%, rgba(0, 127, 255, 0.25) 75%)',
  backgroundSize: '20px 20px',
};

const CardHeaderStyles = {
  background: 'linear-gradient(45deg, rgba(0, 127, 255, 0.03) 0%, rgba(0, 127, 255, 0.06) 100%)',
  color: '#007fff',
};

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

const ListStyles = {
  '& .MuiListItem-root': {
    '&::before': {
      content: '"•"',
      color: '#61dafb',
      marginRight: '8px',
      fontSize: '2rem',
    },
  },
};

const ListItemTextStyles = {
  '& .MuiListItemText-primary': {
    fontSize: '2rem',
    color: '#61dafb',
    fontWeight: 500,
  },
};

export function CardHomeOverview() {
  const { darkMode } = useDarkMode();

  return (
    <CreateCardHomeOverview
      sx={CardStyles}
      headerSx={CardHeaderStyles}
      headerAvatar={
        <CreateIcons sx={AvatarIconStyles}>
          <QrCode2Icon />
        </CreateIcons>
      }
      headerTitle="Be Pro"
      content={
        <>
          <List sx={ListStyles}>
            <ListItem>
              <ListItemText primary="Single Point of Entry" sx={ListItemTextStyles} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Express Middleware Server" sx={ListItemTextStyles} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Router.js for Single Page Application Routing" sx={ListItemTextStyles} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Path Mapping" sx={ListItemTextStyles} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Event Listeners Like PopState" sx={ListItemTextStyles} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Handling Link Clicks" sx={ListItemTextStyles} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Updating Page Content" sx={ListItemTextStyles} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Loading Page Components" sx={ListItemTextStyles} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Waiting for Static Assets" sx={ListItemTextStyles} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Component Initialization" sx={ListItemTextStyles} />
            </ListItem>
          </List>
        </>
      }
      sx={{ color: darkMode ? '#fff' : '#007fff' }} // Optional additional styling
    />
  );
}