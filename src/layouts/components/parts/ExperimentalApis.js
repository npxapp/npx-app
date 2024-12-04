// ./parts/ExperimentalApis.js
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

const ExperimentalApis = ({ expanded, handleAccordionChange }) => {
  const navigate = useNavigate();
  const { darkMode } = useDarkMode();
  const { dashboardDrawerOpen, toggleDashboardDrawer } = useDashboardDrawer();
  const { drawerOpen, toggleDrawer } = useDrawer();

  const navigateOpen = (path) => {
    toggleDashboardDrawer(false);
    toggleDrawer(false);
    navigate(path);
  };

  return (
    <Accordion 
      expanded={expanded.includes('Experimental APIs')} 
      onChange={handleAccordionChange('Experimental APIs')}
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
        {expanded.includes('Experimental APIs') ? (
          <KeyboardArrowDownIcon
            sx={AccordionSummaryIconStyles(darkMode)}
          />
        ) : (
          <KeyboardArrowRightIcon
            sx={AccordionSummaryIconStyles(darkMode)}
          />
        )}
        <Typography sx={AccordionSummaryTypographyStyles(darkMode)}>
          Experimental APIs
        </Typography>
      </AccordionSummary>
      <AccordionDetails
        sx={AccordionDetailsStyles(darkMode)}
      >        
        <ListItemText 
          primary="Success Endpoint" 
          onClick={() => navigateOpen('/success')}
          sx={AccordionDetailsListItemTextStyles(darkMode)}
        />
        <ListItemText 
          primary="Download Product" 
          onClick={() => navigateOpen('/get')}
          sx={AccordionDetailsListItemTextStyles(darkMode)}
        />
        <ListItemText 
          primary="Stripe Reconciliation" 
          onClick={() => navigateOpen('/stripe')}
          sx={AccordionDetailsListItemTextStyles(darkMode)}
        />
      </AccordionDetails>
    </Accordion>
  );
};

export default ExperimentalApis;





