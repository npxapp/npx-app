// ./parts/Demo.js
import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, ListItemText, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useDarkMode } from '../../../contexts/DarkMode';
import { useDashboardDrawer } from '../../../contexts/DashboardDrawerContext';
import { useDrawer } from '../../../contexts/DrawerContext';

import { 
  AccordionSummaryStyles,
  AccordionSummaryIconStyles, 
  AccordionSummaryTypographyStyles, 
  AccordionDetailsListItemTextStyles,
  AccordionDetailsStyles,
} from './DrawerStyles';

const Demo = ({ expanded, handleAccordionChange }) => {
  const navigate = useNavigate();
  const { darkMode } = useDarkMode();
  const { dashboardDrawerOpen, toggleDashboardDrawer } = useDashboardDrawer();
  const { drawerOpen, toggleDrawer } = useDrawer();

  const navigateOpen = (path) => {
    toggleDashboardDrawer(false);
    toggleDrawer(false);
    navigate(path);
  };
  
  const navigateDemo = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  
  return (
    <Accordion 
      expanded={expanded.includes('Demo')} 
      onChange={handleAccordionChange('Demo')}
      sx={{
        margin: '0 !important',  // Remove margin around Accordion
        padding: '0',             // Remove padding within Accordion
        '&.MuiAccordion-root': {
          boxShadow: 'none',      // Optional: Remove box shadow if you want a flat look
        },
      }}
      disableGutters
    >
      <AccordionSummary
        sx={AccordionSummaryStyles(darkMode)}
      >
        {expanded.includes('Demo') ? (
          <KeyboardArrowDownIcon
            sx={AccordionSummaryIconStyles(darkMode)}
          />
        ) : (
          <KeyboardArrowRightIcon
            sx={AccordionSummaryIconStyles(darkMode)}
          />
        )}
        <Typography sx={AccordionSummaryTypographyStyles(darkMode)}>
          Demo
        </Typography>
      </AccordionSummary>
      <AccordionDetails
        sx={AccordionDetailsStyles(darkMode)}
      >
        <ListItemText 
          primary="See Demo" 
          onClick={() => navigateDemo('https://proappdemo.ip-ddns.com:3000')}
          sx={AccordionDetailsListItemTextStyles(darkMode)}
        />
        <ListItemText 
          primary="See Scaffold Parts" 
          onClick={() => navigateOpen('/Demo')}
          sx={AccordionDetailsListItemTextStyles(darkMode)}
        />
        <ListItemText 
          primary="Dashboard Test" 
          onClick={() => navigateOpen('/DashboardTest')}
          sx={AccordionDetailsListItemTextStyles(darkMode)}
        />
      </AccordionDetails>
    </Accordion>
  );
};

export default Demo;