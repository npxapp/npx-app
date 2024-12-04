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