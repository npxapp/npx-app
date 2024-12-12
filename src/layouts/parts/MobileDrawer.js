import React, { useState } from 'react';
import {
  Drawer,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  ListItemText,
  Typography,
  IconButton,
  Button,
  Box,
} from '@mui/material';
import { useDashboardDrawer } from '../../contexts/DashboardDrawerContext';
import { useDarkMode } from '../../contexts/DarkMode';
import { useNavigate } from 'react-router-dom';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import GitHubIcon from '@mui/icons-material/GitHub';
import {
  darken,
  lighten,
  useTheme,
} from '@mui/material/styles';

const MobileDrawer = ({ open, toggleDrawer }) => {
  const { dashboardDrawerOpen, toggleDashboardDrawer } = useDashboardDrawer();
  const { darkMode, setDarkMode } = useDarkMode();
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState([]);
  const theme = useTheme();

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded((prevExpanded) => {
      if (isExpanded) {
        return [...prevExpanded, panel];
      } else {
        return prevExpanded.filter((item) => item !== panel);
      }
    });
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
    { path: '/Pro', label: 'Startersoft.io Learn about our integrations', summary: 'Overview' },
    { path: '/', label: 'Github projects we source', summary: 'Overview' },
    { path: '/Demo', label: 'Startersoft.io Premium live middleware', summary: 'Integrations' },
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
          background: darkMode ? `${theme.palette.background.default} !important` : `${theme.palette.background.default} !important`,
        },
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        {Object.entries(summaryLinksMap).map(([summary, summaryLinks], index) => (
          <Accordion
            key={`accordion-${summary}`}
            expanded={expanded.includes(summary.toLowerCase().replace(/\s+/g, ''))}
            onChange={handleAccordionChange(summary.toLowerCase().replace(/\s+/g, ''))}
            variant="panel"
            disableGutters
          >
            <AccordionSummary 
              variant="panel"
            >
              {expanded.includes(summary.toLowerCase().replace(/\s+/g, '')) ? (
              <IconButton
                variant="arrowSwitch"
              >
                <KeyboardArrowDownIcon 
                  variant="arrowIcon"
                />
              </IconButton>
              ) : (
              <IconButton
                variant="arrowSwitch"
              >
                <KeyboardArrowRightIcon 
                  variant="arrowIcon"
                />
              </IconButton>
              )}
              <Button
                variant="customPanel"
              >
                {summary}
              </Button>
            </AccordionSummary>

            {summaryLinks.map((link, linkIndex) => (
              <AccordionDetails
                key={`accordion-detail-${summary}-${linkIndex}`}
                variant="panel"
              >
                <Button
                  variant="customPanel"
                  onClick={
                    link.path === 'toggleDashboardDrawer'
                      ? toggleDashboardDrawer
                      : () => navigateOpen(link.path)
                  }
                >
                  {link.label}
                </Button>
              {link.label === 'Github projects we source' && (
                <IconButton
                  color="primary"
                  aria-label="github"
                  onClick={() => navigatePage('https://github.com/npxapp/npx-app')}
                  size="small"
                  variant="panel"
                >
                  <GitHubIcon 
                    variant="customIcon"
                  />
                </IconButton>
                )}
              </AccordionDetails>
            ))}
          </Accordion>
        ))}
      </Box>
    </Drawer>
  );
};

export default MobileDrawer;
