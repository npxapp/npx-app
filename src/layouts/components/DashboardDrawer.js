import React, { useState } from 'react';
import { 
  Drawer as MUIDrawer, 
  Accordion, 
  AccordionSummary, 
  AccordionDetails,
  Typography,
  Box,
} from '@mui/material';
import {
  useTheme,
} from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useDarkMode } from '../../contexts/DarkMode';

const DashboardDrawer = ({ open, toggleDashboardDrawer }) => {
  const navigate = useNavigate();
  const { darkMode } = useDarkMode();
  const [expanded, setExpanded] = useState([]);
  const theme = useTheme();

  const navigateOpen = (path) => {
    navigate(path);
    toggleDashboardDrawer(false);
  };
  
  const navigateDemo = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
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
  
  const links = [
    { path: '/', label: 'Home', summary: 'Main Page' },
    { path: '/dashboard', label: 'Dashboard Panel access', summary: 'Control Access' },
    { path: 'toggleDashboardDrawer', label: 'See project in action', summary: 'Community' },
    { path: '/Demo', label: 'See scaffold parts', summary: 'Control Access' },
    { path: '/DashboardTest', label: 'Dashboard Panel tests', summary: 'Control Access' },
    { path: '/paid', label: 'Payment success', summary: 'Integrations' },
    { path: '/downloads', label: 'Digital download', summary: 'Integrations' },
    { path: '/DemoDashboard', label: 'Dashboard demo', summary: 'Integrations' },
    { path: '/DemoDashboardPro', label: 'Dashboard Premium', summary: 'Integrations' },
    { path: '/success', label: 'Success endpoint', summary: 'Experimental Apis' },
    { path: '/get', label: 'Download Product', summary: 'Experimental Apis' },
    { path: '/stripe', label: 'Stripe reconciliation', summary: 'Experimental Apis' },
  ];

  const summaryLinksMap = links.reduce((acc, link) => {
    if (!acc[link.summary]) {
      acc[link.summary] = [];
    }
    acc[link.summary].push(link);
    return acc;
  }, {});

  const linkDemo = 'https://proappdemo.ip-ddns.com:3000';

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
          background: darkMode ? `${theme.palette.background.default} !important` : `${theme.palette.background.default} !important`,
        },
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        {Object.entries(summaryLinksMap).map(([summary, summaryLinks], index) => (
          <Accordion
            key={`accordion-${summary}`}
            expanded={expanded.includes(summary.toLowerCase().replace(/\s+/g, ''))}
            onChange={handleAccordionChange(summary.toLowerCase().replace(/\s+/g, ''))}
            variant="panel"
            disableGutters
          >
            <AccordionSummary 
              variant="panel"
            >
              {expanded.includes(summary.toLowerCase().replace(/\s+/g, '')) ? (
                <KeyboardArrowDownIcon 
                  variant="arrowIcon"
                />
              ) : (
                <KeyboardArrowRightIcon 
                  variant="arrowIcon"
                />
              )}
              <Typography
                variant="customPanel"
              >
                {summary}
              </Typography>
            </AccordionSummary>

            {summaryLinks.map((link, linkIndex) => (
              <AccordionDetails
                key={`accordion-detail-${summary}-${linkIndex}`}
                variant="panel"
              >
                <Typography
                  variant="customPanel"
                  onClick={
                    link.path === 'toggleDashboardDrawer'
                      ? () => navigateDemo(linkDemo)
                      : () => navigateOpen(link.path)
                  }
                  sx={{ 
                    cursor: 'pointer', 
                    display: 'flex', 
                    alignItems: 'center', 
                    flexGrow: 1 
                  }}
                >
                  {link.label}
                </Typography>
              </AccordionDetails>
            ))}
          </Accordion>
        ))}
      </Box>
    </MUIDrawer>
  </>
  );
};

export default DashboardDrawer;