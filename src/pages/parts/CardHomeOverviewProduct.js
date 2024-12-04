import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import { useDarkMode } from '../../contexts/DarkMode';
import CreateIcons from './CreateIcons';
import CreateCardHomeOverviewProduct from './CreateCardHomeOverviewProduct';
import { 
  CardStyles, 
  CardHeaderStyles, 
  CardHeaderTextStyles, 
  AvatarIconStyles, 
  ListStyles, 
  ListItemTextStyles 
} from './CardsActionStyles';

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