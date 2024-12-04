import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';
import QrCode2Icon from '@mui/icons-material/QrCode2';
import LanguageIcon from '@mui/icons-material/Language';
import { useDarkMode } from '../../contexts/DarkMode';
import CreateIcons from './CreateIcons'; 
import CreateCardHomeOverview from './CreateCardHomeOverview'; 
import { 
  CardStyles, 
  CardHeaderStyles, 
  CardHeaderTextStyles, 
  AvatarIconStyles, 
  ListStyles, 
  ListItemTextStyles 
} from './CardsActionStyles';

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