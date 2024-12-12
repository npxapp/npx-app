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

export function CardTwo() {
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
          title="Our order process uses Stripe payment links"
          action={
            <IconButton onClick={handleToggle}>
              <ExpandMoreIcon />
            </IconButton>
          }
        />
        <CardContent variant="demo">
          <Typography>How it works</Typography>
          <List>
            <ListItem>
              <ListItemText primary="Use Stripe Payment Links to capture your Secure Checkout Session." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Pay Securely for Redirection back to our Page." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Our Success Url Captures your Order Details." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Look for your Six Digit Token on the Success Page." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Also find your Digital Product download link and Button for you to Access your Product." />
            </ListItem>
            <ListItem>
              <ListItemText primary="We do not keep your Private information and track only your Order, Last 4, and secure Token." />
            </ListItem>
            <ListItem>
              <ListItemText primary="PullUp your Order Anytime Using Your Secure Token." />
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
