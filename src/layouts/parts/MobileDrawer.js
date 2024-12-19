import React, { useState } from 'react';
import {
  Drawer,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from '@mui/material';
import { useDashboardDrawer } from '../../contexts/DashboardDrawerContext';
import { useDarkMode } from '../../contexts/DarkMode';
import { useNavigate } from 'react-router-dom';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useTheme } from '@mui/material/styles';

const MobileDrawer = ({ open, toggleDrawer }) => {
  const { toggleDashboardDrawer } = useDashboardDrawer();
  const { darkMode } = useDarkMode();
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(null);
  const theme = useTheme();

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    // Only allow one panel to be expanded at a time
    setExpanded(isExpanded ? panel : null);
  };

  const navigateOpen = (path) => {
    if (path === 'toggleDashboardDrawer') {
      toggleDashboardDrawer();
    } else {
      navigate(path);
      toggleDrawer();
    }
  };

  const navigatePage = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const links = [
    { path: '/', label: 'Overview', summary: 'Overview' },
    { path: '/Pro', label: 'Startersoft.io integrations', summary: 'Overview' },
    { path: '/', label: 'Github projects we source', summary: 'Overview' },
    { path: '/Demo', label: 'Startersoft.io Premium middleware', summary: 'Integrations' },
    { path: '/dashboard', label: 'Dashboard Panel access', summary: 'Integrations' },
    { path: 'toggleDashboardDrawer', label: 'Slide open Control Panel', summary: 'Control Access' },
  ];

  const summaryLinksMap = links.reduce((acc, link) => {
    if (!acc[link.summary]) {
      acc[link.summary] = [];
    }
    acc[link.summary].push(link);
    return acc;
  }, {});

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={() => toggleDrawer(false)}
      PaperProps={{
        sx: {
          zIndex: 1400,
          height: '100vh',
          width: '100vw',
          backgroundColor: theme.palette.background.default,
        },
      }}
    >
      <Box
        sx={{
          display: 'flex', 
          flexDirection: 'column',
          height: darkMode ? '100vh' : 'initial',
          justifyContent: darkMode ? 'center' : 'initial',
          transition: 'transform 1s ease',
        }}
      >
        {Object.entries(summaryLinksMap).map(([summary, summaryLinks], index) => {
          const panelId = summary.toLowerCase().replace(/\s+/g, '');
          return (
            <Accordion
              key={`accordion-${summary}`}
              expanded={expanded === panelId}
              onChange={handleAccordionChange(panelId)}
              variant="panel"
              disableGutters
            >
              <AccordionSummary variant="panel">
                {expanded === panelId ? (
                  <KeyboardArrowDownIcon variant="arrowIcon" />
                ) : (
                  <KeyboardArrowRightIcon variant="arrowIcon" />
                )}
                <Typography variant="customPanel">
                  {summary}
                </Typography>
              </AccordionSummary>

              {summaryLinks.map((link, linkIndex) => (
                <AccordionDetails
                  key={`accordion-detail-${summary}-${linkIndex}`}
                  variant="panel"
                  sx={{ display: 'flex', alignItems: 'center' }}
                >
                  <Typography
                    variant="customPanel"
                    onClick={
                      link.label === 'Github projects we source'
                        ? () => navigatePage('https://github.com/npxapp/npx-app')
                        : link.path === 'toggleDashboardDrawer'
                        ? toggleDashboardDrawer
                        : () => navigateOpen(link.path)
                    }
                    sx={{
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      flexGrow: 1,
                    }}
                  >
                    {link.label}
                    {link.label === 'Github projects we source' && (
                      <GitHubIcon variant="customIcon" sx={{ ml: 1 }} />
                    )}
                  </Typography>
                </AccordionDetails>
              ))}
            </Accordion>
          );
        })}
      </Box>
    </Drawer>
  );
};

export default MobileDrawer;