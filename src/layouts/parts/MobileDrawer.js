import React, { useState } from 'react';
import {
  Drawer,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  ListItemText,
  Typography,
  IconButton,
  Box,
} from '@mui/material';
import { useDashboardDrawer } from '../../contexts/DashboardDrawerContext';
import { useDarkMode } from '../../contexts/DarkMode';
import { useNavigate } from 'react-router-dom';
import {
  AccordionSummaryStyles,
  AccordionSummaryIconStyles,
  AccordionSummaryTypographyStyles,
  AccordionDetailsListItemTextStyles,
  AccordionDetailsStyles,
} from '../components/parts/DrawerStyles';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import GitHubIcon from '@mui/icons-material/GitHub';
import { IconButtonStyles, IconStyles } from '../components/TopStyles';

const MobileDrawer = ({ open, toggleDrawer }) => {
  const { dashboardDrawerOpen, toggleDashboardDrawer } = useDashboardDrawer();
  const { darkMode, setDarkMode } = useDarkMode();
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState([]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

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
    { path: '/', label: 'Home', summary: 'Main Page' },
    { path: '/Demo', label: 'See Product Parts', summary: 'Product Demo' },
    { path: '/dashboard', label: 'Dashboard Panel access', summary: 'Control Access' },
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
          background: darkMode
            ? 'rgba(0, 0, 0, 0.7) !important'
            : 'rgba(97, 218, 251, 0.9) !important',
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}
      >
        <IconButton
          color="primary"
          onClick={toggleTheme}
          sx={{
            ...IconButtonStyles(darkMode),
            zIndex: 1501,
          }}
          size="small"
        >
          {darkMode ? (
            <DarkModeIcon sx={{ ...IconStyles(darkMode), fontSize: '1.6rem' }} />
          ) : (
            <LightModeIcon sx={{ ...IconStyles(darkMode), fontSize: '1.6rem' }} />
          )}
        </IconButton>

        <IconButton
          color="primary"
          aria-label="github"
          onClick={() => navigatePage('https://github.com/npxapp/npx-app')}
          sx={{
            ...IconButtonStyles(darkMode),
            zIndex: 1501,
          }}
          size="small"
        >
          <GitHubIcon sx={{ ...IconStyles(darkMode), fontSize: '1.6rem' }} />
        </IconButton>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        {Object.entries(summaryLinksMap).map(([summary, summaryLinks], index) => (
          <Accordion
            key={`accordion-${summary}`}
            expanded={expanded.includes(summary.toLowerCase().replace(/\s+/g, ''))}
            onChange={handleAccordionChange(summary.toLowerCase().replace(/\s+/g, ''))}
            sx={{
              margin: '0 !important',
              padding: '0',
              '&.MuiAccordion-root': {
                boxShadow: 'none',
              },
            }}
            disableGutters
          >
            <AccordionSummary sx={AccordionSummaryStyles(darkMode)}>
              {expanded.includes(summary.toLowerCase().replace(/\s+/g, '')) ? (
                <KeyboardArrowDownIcon sx={AccordionSummaryIconStyles(darkMode)} />
              ) : (
                <KeyboardArrowRightIcon sx={AccordionSummaryIconStyles(darkMode)} />
              )}
              <Typography sx={AccordionSummaryTypographyStyles(darkMode)}>
                {summary}
              </Typography>
            </AccordionSummary>

            {summaryLinks.map((link, linkIndex) => (
              <AccordionDetails
                key={`accordion-detail-${summary}-${linkIndex}`}
                sx={AccordionDetailsStyles(darkMode)}
              >
                <ListItemText
                  primary={link.label}
                  onClick={
                    link.path === 'toggleDashboardDrawer'
                      ? toggleDashboardDrawer
                      : () => navigateOpen(link.path)
                  }
                  sx={AccordionDetailsListItemTextStyles(darkMode)}
                />
              </AccordionDetails>
            ))}
          </Accordion>
        ))}
      </Box>
    </Drawer>
  );
};

export default MobileDrawer;
