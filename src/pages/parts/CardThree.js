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

export function CardThree() {
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
          title="Modern integrations bring you to launch"
          action={
            <IconButton onClick={handleToggle}>
              <ExpandMoreIcon />
            </IconButton>
          }
        />
        <CardContent variant="demo">
          <Typography>Integrations and APIs</Typography>
          <List>
            <ListItem>
              <ListItemText primary="A streamlined entry point ensures efficient app load and navigation." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Utilizes Express to handle server requests, enforce middleware, and manage routing." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Routes all requests to a single page, managing navigation without page reloads." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Path Mapping" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Uses popstate and link click listeners to dynamically update page content and URLs." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Loads and initializes only the necessary page components, optimizing performance and user experience." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Waits for static assets to load before rendering content, ensuring a smooth user experience." />
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
