import React, { useState } from 'react';
import { Drawer as MUIDrawer, Accordion, AccordionSummary, AccordionDetails, ListItemText, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useDarkMode } from '../../contexts/DarkMode';
import GettingStarted from './parts/GettingStarted';
import DashboardDemo from './parts/DashboardDemo';
import Demo from './parts/Demo';
import Integrations from './parts/Integrations';
import ExperimentalApis from './parts/ExperimentalApis';
import {
  DrawerStyles, 
} from './parts/DrawerStyles';

const DashboardDrawer = ({ open, toggleDashboardDrawer }) => {
  const navigate = useNavigate();
  const { darkMode } = useDarkMode();
  const [expanded, setExpanded] = useState([]);

  const navigateOpen = (path) => {
    navigate(path);
    toggleDashboardDrawer(false);
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

  return (
  <>
    <MUIDrawer
      variant="temporary"
      anchor="left" 
      open={open} 
      onClose={() => toggleDashboardDrawer(false)}
      PaperProps={{
        sx: {
          height: '100vh',
          boxShadow: 'none',
          backgroundColor: darkMode ? 'rgba(0, 0, 0, 0.7) !important' : 'rgba(97, 218, 251, 0.8) !important',
        },
      }}
    >
      <GettingStarted 
        expanded={expanded} 
        handleAccordionChange={handleAccordionChange} 
      />
  
      <Demo 
        expanded={expanded} 
        handleAccordionChange={handleAccordionChange} 
      />
  
      <Integrations
        expanded={expanded} 
        handleAccordionChange={handleAccordionChange} 
      />
  
      <ExperimentalApis
        expanded={expanded} 
        handleAccordionChange={handleAccordionChange} 
      />
    </MUIDrawer>
  </>
  );
};

export default DashboardDrawer;