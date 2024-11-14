// ./parts/Demo.js
import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, ListItemText, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import StarIcon from '@mui/icons-material/Star';  // Importing StarIcon from MUI
import { useDarkMode } from '../../../contexts/DarkMode';

const Demo = ({ expanded, handleAccordionChange }) => {
  const navigate = useNavigate();
  const { darkMode } = useDarkMode();

  const navigateOpen = (path) => {
    navigate(path);
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
            margin: '0',           // Remove inner content margin
          },
          position: 'relative',
        }}
      >
        {expanded.includes('Demo') ? (
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
          Demo
        </Typography>
        
        {/* StarIcon with Pro text placed on top */}
        <div
          style={{
            display: 'none',
            position: 'absolute',
            right: '10px',  // Place it on the right side of the Summary
          }}
        >
          <StarIcon 
            sx={{
              fontSize: '24px',
              color: '#007fff',
              position: 'relative',
            }}
          />
          <Typography 
            sx={{
              color: darkMode ? '#ffffff' : '000000',
              fontSize: '16px',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              textAlign: 'center',
            }}
          >
            Pro
          </Typography>
        </div>

      </AccordionSummary>
      <AccordionDetails
        sx={{
          paddingTop: '0',  // Remove padding from AccordionDetails
          paddingBottom: '0',
        }}
      >
        <ListItemText 
          primary="Demo Pro" 
          onClick={() => navigateOpen('/Demo')}
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

export default Demo;