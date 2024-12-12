import React, { useState } from 'react';
import {
  List,
  ListItem,
  ListItemText,
  Typography,
  Card,
  CardContent,
  CardHeader,
  Paper,
  IconButton,
} from '@mui/material';
import { useDarkMode } from '../../contexts/DarkMode';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export function CardOne() {
  const { darkMode } = useDarkMode();
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen((prev) => !prev);
  
  return (
    <>
      <Card
        variant="demo"
        sx={{
          height: isOpen ? 'auto' : 350,
          ...(isOpen && {
            animation: 'bounce 0.2s ease',
          }),
        }}
      >
        <CardHeader
          variant="demo"
          title="Learn about our digital products"
          action={
           <>
            <IconButton 
              onClick={handleToggle}>
              <ExpandMoreIcon />
            </IconButton>
           </>
          }
        />
        <CardContent variant="demo">
          <Typography>Only what you need to launch your next idea</Typography>
          <List>
            <ListItem>
              <ListItemText primary="Single Point of Entry" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Express Middleware Server" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Router.js for Single Page Application Routing" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Path Mapping" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Event Listeners Like PopState" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Handling Link Clicks" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Updating Page Content" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Loading Page Components" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Waiting for Static Assets" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Component Initialization" />
            </ListItem>
          </List>
        </CardContent>
        <Paper
          variant="fade"
          sx={{
            ...(isOpen && {
              background: 'transparent',
            }),
          }}
        />
      </Card>
    </>
  );
}
