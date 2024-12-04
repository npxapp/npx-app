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

const DashboardDemo = ({ expanded, handleAccordionChange }) => {
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
      expanded={expanded.includes('dashboardDemo')} 
      onChange={handleAccordionChange('dashboardDemo')}
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
        {expanded.includes('dashboardDemo') ? (
          <KeyboardArrowDownIcon
            sx={AccordionSummaryIconStyles(darkMode)}
          />
        ) : (
          <KeyboardArrowRightIcon
            sx={AccordionSummaryIconStyles(darkMode)}
          />
        )}
        <Typography sx={AccordionSummaryTypographyStyles(darkMode)}>
          Dashboard
        </Typography>
      </AccordionSummary>
      <AccordionDetails
        sx={AccordionDetailsStyles(darkMode)}
      >        
        <ListItemText 
          primary="Dashboard Demo" 
          onClick={() => navigateOpen('/DemoDashboard')}
          sx={AccordionDetailsListItemTextStyles(darkMode)}
        />
        <ListItemText 
          primary="Dashboard Demo Pro" 
          onClick={() => navigateOpen('/DemoDashboardPro')}
          sx={AccordionDetailsListItemTextStyles(darkMode)}
        />
      </AccordionDetails>
    </Accordion>
  );
};

export default DashboardDemo;



