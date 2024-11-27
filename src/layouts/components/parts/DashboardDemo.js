// ./parts/DashboardDemo.js
import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, ListItemText, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useDarkMode } from '../../../contexts/DarkMode';

const DashboardDemo = ({ expanded, handleAccordionChange }) => {
  const navigate = useNavigate();
  const { darkMode } = useDarkMode();

  const navigateOpen = (path) => {
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
        sx={{
          display: 'flex',
          flexDirection: 'row-reverse',
          alignItems: 'center',
          justifyContent: 'space-between',
          margin: '0 !important',  
          paddingTop: '0',
          paddingBottom: '0',
          minHeight: '28px',
          '& .MuiAccordionSummary-content': {
            margin: '0',           
          },
        }}
      >
        {expanded.includes('dashboardDemo') ? (
          <KeyboardArrowDownIcon
            fontSize="0.65rem"
            sx={{
              color: darkMode ? '#007fff' : '#000000',
              position: 'absolute',
              left: '-5px',
              top: '50%',
              transform: 'translateY(-50%)',
            }}
          />
        ) : (
          <KeyboardArrowRightIcon
            fontSize="0.65rem"
            sx={{
              color: darkMode ? '#007fff' : '#000000',
              position: 'absolute',
              left: '-5px',
              top: '50%',
              transform: 'translateY(-50%)',
            }}
          />
        )}
        <Typography sx={{ color: darkMode ? '#007fff' : '#000000' }}>
          Dashboard
        </Typography>
      </AccordionSummary>
      <AccordionDetails
        sx={{
          paddingTop: '0',  
          paddingBottom: '0',
        }}
      >        
        <ListItemText 
          primary="Dashboard Demo" 
          onClick={() => navigateOpen('/DemoDashboard')}
          sx={{
            cursor: 'pointer',
            padding: '0',
            margin: '0',
            '& .MuiTypography-root': {
              color: darkMode ? '#007fff' : '#000000',
              padding: '0',
              margin: '0',
            },
          }}
        />
        <ListItemText 
          primary="Dashboard Demo Pro" 
          onClick={() => navigateOpen('/DemoDashboardPro')}
          sx={{
            cursor: 'pointer',
            padding: '0',
            margin: '0',
            '& .MuiTypography-root': {
              color: darkMode ? '#007fff' : '#000000',
              padding: '0',
              margin: '0',
            },
          }}
        />
      </AccordionDetails>
    </Accordion>
  );
};

export default DashboardDemo;



