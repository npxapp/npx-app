// ./parts/Integrations.js
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

const Integrations = ({ expanded, handleAccordionChange }) => {
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
      expanded={expanded.includes('Integrations')} 
      onChange={handleAccordionChange('Integrations')}
      sx={{
        margin: '0 !important',  
        padding: '0',             
        '&.MuiAccordion-root': {
          boxShadow: 'none',      
        },
      }}
      disableGutters
    >
      <AccordionSummary
        sx={AccordionSummaryStyles(darkMode)}
      >
        {expanded.includes('Integrations') ? (
          <KeyboardArrowDownIcon
            sx={AccordionSummaryIconStyles(darkMode)}
          />
        ) : (
          <KeyboardArrowRightIcon
            sx={AccordionSummaryIconStyles(darkMode)}
          />
        )}
        <Typography sx={AccordionSummaryTypographyStyles(darkMode)}>
          Integrations
        </Typography>
      </AccordionSummary>
      <AccordionDetails
        sx={AccordionDetailsStyles(darkMode)}
      >        
        <ListItemText 
          primary="Payment Success" 
          onClick={() => navigateOpen('/paid')}
          sx={AccordionDetailsListItemTextStyles(darkMode)}
        />
        <ListItemText 
          primary="Digital Download" 
          onClick={() => navigateOpen('/downloads')}
          sx={AccordionDetailsListItemTextStyles(darkMode)}
        />
      </AccordionDetails>
    </Accordion>
  );
};

export default Integrations;





