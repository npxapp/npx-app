import React, { useState } from 'react';
import { Drawer as MUIDrawer, Accordion, AccordionSummary, AccordionDetails, ListItemText, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useDarkMode } from '../../contexts/DarkMode';
import GettingStarted from './parts/GettingStarted';
import DashboardDemo from './parts/DashboardDemo';
import Demo from './parts/Demo';
import Integrations from './parts/Integrations';

const Drawer = ({ open, toggleDrawer }) => {
  const navigate = useNavigate();
  const { darkMode } = useDarkMode();
  const [expanded, setExpanded] = useState([]);

  const navigateOpen = (path) => {
    navigate(path);
    toggleDrawer(false);
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
    <MUIDrawer 
      variant="temporary" 
      anchor="left" 
      open={open} 
      onClose={() => toggleDrawer(false)}
    >
      {/* Getting Started Section */}
      <GettingStarted 
        expanded={expanded} 
        handleAccordionChange={handleAccordionChange} 
      />
  
      {/* ProApp Demo Section */}
      <Demo 
        expanded={expanded} 
        handleAccordionChange={handleAccordionChange} 
      />
    </MUIDrawer>
  );
};

export default Drawer;