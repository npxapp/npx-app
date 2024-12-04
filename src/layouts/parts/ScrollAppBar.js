import React, { useEffect } from 'react';
import { 
  AppBar, 
  Toolbar, 
  IconButton, 
  Link, 
  Box, 
  useMediaQuery 
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowBackTwoToneIcon from '@mui/icons-material/ArrowBackTwoTone';
import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';
import { useDarkMode } from '../../contexts/DarkMode';
import { useDrawer } from '../../contexts/DrawerContext';
import { links } from './Links';
import { useScrolled } from '../../contexts/ScrolledContext';
import { 
  IconButtonStyles, 
  IconStyles 
} from '../components/TopStyles';

const ScrollAppBar = () => {
  const { scrolled, setScrolled } = useScrolled();  
  const { drawerOpen, toggleDrawer } = useDrawer();
  const { darkMode, setDarkMode } = useDarkMode();
  const isXs = useMediaQuery('(max-width:600px)');
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [setScrolled]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const navigateOpen = (path) => {
    navigate(path);
    toggleDrawer();
  };

  const navigatePage = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        padding: 0,
      }}
    >
      <AppBar
        position={scrolled && isXs ? 'fixed' : 'static'}
        elevation={darkMode ? 0 : scrolled ? 0 : 0}
        sx={{
          zIndex: 1200, // Ensure AppBar is below Drawer
          transition: 'all 0.3s ease-in-out',
          padding: 0,
          margin: 0,
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: 0,
            margin: 0,
            minHeight: '56px',
            flexWrap: 'wrap',
          }}
        >
          <Box
            sx={{
              flexGrow: 0,
              color: '#61dafb',
              textAlign: 'left',
              pl: 0,
              margin: 0,
              display: 'flex',
            }}
          >
            StarterSoft.io
          </Box>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
              position: isXs ? 'fixed' : 'static',
              right: 10,
              top: 10,
              zIndex: 1500,
              background: 'transparent',
            }}
          >
            {isXs ? (
              <>
                <IconButton
                  color="primary"
                  onClick={toggleDrawer}
                  size="small"
                  sx={{
                    zIndex: 1501,
                    ...IconButtonStyles(darkMode),
                    border: 'none',
                  }}
                >
                  {drawerOpen ? (
                    <ArrowForwardTwoToneIcon sx={{ ...IconStyles(darkMode), fontSize: '2rem' }} />
                  ) : (
                    <ArrowBackTwoToneIcon sx={{ ...IconStyles(darkMode), fontSize: '2rem' }} />
                  )}
                </IconButton>
              </>
            ) : (
              links.map((link, index) => (
                <Link
                  key={index}
                  onClick={() => navigateOpen(link.path)}
                  underline="none"
                  sx={{
                    color: '#61dafb',
                    fontWeight: 'normal',
                    fontSize: isXs ? '0.86rem' : '0.86rem',
                    p: 1,
                    borderRadius: 2,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: 'rgba(255,255,255,0.3)',
                      transform: isXs && 'scale(1.05)',
                    },
                  }}
                >
                  {link.label}
                </Link>
              ))
            )}
          </Box>
        </Toolbar>
      </AppBar>

      {/* This Box will aggressively target the IconButtons */}
      <Box
        sx={{
          position: 'fixed',
          top: 10,
          right: 10,
          zIndex: 2000, // Make sure this is above everything else
          background: 'transparent',
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}
      >
        {/* IconButtons */}
        {isXs ? (
          <>
            <IconButton
              color="primary"
              onClick={toggleDrawer}
              size="small"
              sx={{
                zIndex: 2001,
                ...IconButtonStyles(darkMode),
                border: 'none',
              }}
            >
              {drawerOpen ? (
                <ArrowForwardTwoToneIcon sx={{ ...IconStyles(darkMode), fontSize: '2rem' }} />
              ) : (
                <ArrowBackTwoToneIcon sx={{ ...IconStyles(darkMode), fontSize: '2rem' }} />
              )}
            </IconButton>
          </>
        ) : null}
      </Box>
    </Box>
  );
};

export default ScrollAppBar;