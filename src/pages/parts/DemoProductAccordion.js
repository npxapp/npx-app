import React, { useState } from 'react';
import { Card, CardContent, CardHeader, Typography, IconButton, Paper } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export function DemoProductAccordion() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen((prev) => !prev);

  return (
    <>
      <Card
        sx={{
          position: 'relative',
          height: isOpen ? 'auto' : 350,
          ...(isOpen && {
            animation: 'bounce 0.2s ease',
          }),
        }}
      >
        <CardHeader
          title="Accordion"
          action={
            <IconButton onClick={handleToggle}>
              <ExpandMoreIcon />
            </IconButton>
          }
        />
        <CardContent>
          <Typography>
            <strong>Accordion.js</strong>
          </Typography>
          <Typography>
            <strong>Purpose:</strong> Accordion.js handles expanding and collapsing sections of content, allowing users to show or hide details interactively.
          </Typography>
          <Typography>
            <strong>Initialization:</strong> The init method attaches click events to each accordion header, linking them to toggle their respective sections.
          </Typography>
          <Typography>
            <strong>Toggle Function:</strong> The toggleAccordion function toggles the active class on a clicked item, expanding or collapsing it. The function also updates the accordion icon to reflect the item's state.
          </Typography>
          <Typography>
            <strong>Icon Update:</strong> The updateAccordionIcon method changes the icon based on the state of the section (add/remove).
          </Typography>
          <Typography>
            <strong>Download Setup:</strong> setupDownloadButtons sets up functionality for download buttons within each accordion, triggering an alert for the selected package download.
          </Typography>
          <Typography>
            <strong>app.tar.gz</strong>
          </Typography>
        </CardContent>
        <Paper
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '50%',
            zIndex: 2,
            pointerEvents: 'none',
            borderBottomLeftRadius: 40,
            borderBottomRightRadius: 40,
            background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1))',
            transition: 'background 3s ease',
            ...(isOpen && {
              background: 'transparent',
            }),
          }}
        />
      </Card>
    </>
  );
}