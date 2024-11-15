// ./parts/Integrations.js
import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, ListItemText, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useDarkMode } from '../../../contexts/DarkMode';

const Integrations = ({ expanded, handleAccordionChange }) => {
  const navigate = useNavigate();
  const { darkMode } = useDarkMode();

  const navigateOpen = (path) => {
    navigate(path);
  };

  return (
    <Accordion 
      expanded={expanded.includes('Integrations')} 
      onChange={handleAccordionChange('Integrations')}
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
        sx={{
          display: 'flex',
          flexDirection: 'row-reverse',
          alignItems: 'center',
          justifyContent: 'space-between',
          margin: '0 !important',  // Remove margin from AccordionSummary
          paddingTop: '0',
          paddingBottom: '0',
          minHeight: '28px',
          '& .MuiAccordionSummary-content': {
            margin: '0',           // Remove inner content margin
          },
        }}
      >
        {expanded.includes('Integrations') ? (
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
          Integrations
        </Typography>
      </AccordionSummary>
      <AccordionDetails
        sx={{
          paddingTop: '0',  // Remove padding from AccordionDetails
          paddingBottom: '0',
        }}
      >        
        <ListItemText 
          primary="Payment Success" 
          onClick={() => navigateOpen('/paid')}
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
          primary="Digital Download" 
          onClick={() => navigateOpen('/downloads')}
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

export default Integrations;





