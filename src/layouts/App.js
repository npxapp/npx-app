import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Grid,
  CssBaseline,
  ThemeProvider,
  AppBar,
  Toolbar,
  Box,
  Link,
  IconButton,
  useMediaQuery,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownTwoToneIcon from '@mui/icons-material/KeyboardArrowDownTwoTone';
import KeyboardArrowUpTwoToneIcon from '@mui/icons-material/KeyboardArrowUpTwoTone';
import getTheme from './AppTheme';
import DashboardDrawer from './components/DashboardDrawer';
import MobileDrawer from './parts/MobileDrawer';
import { SnackBar } from './components/SnackBar';
import TopIcons from './components/TopIcons';
import Footer from './components/Footer';
import SnackBox from './components/SnackBox';
import { useDarkMode } from '../contexts/DarkMode';
import { useDashboardDrawer } from '../contexts/DashboardDrawerContext';
import { useDrawer } from '../contexts/DrawerContext';
import SimpleSlider from './parts/SimpleSlider';
import ShorterBox from './parts/ShorterBox';
import TallerBox from './parts/TallerBox';
import ScrollAppBar from './parts/ScrollAppBar';
import { links } from './parts/Links';
import { useScrolled } from '../contexts/ScrolledContext';
import {
  AppBarStyles,
  ToolbarStyles,
  ToolbarTypographyStyles,
  IconButtonStyles,
  IconStyles,
  IconDragHandleButtonStyles,
  IconDragHandleStyles,
} from './components/TopStyles';
import '../Box.css';

const App = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { darkMode } = useDarkMode();
  const { dashboardDrawerOpen, toggleDashboardDrawer } = useDashboardDrawer();
  const { drawerOpen, toggleDrawer } = useDrawer();
  const isXs = useMediaQuery('(max-width:600px)');
  const theme = getTheme(darkMode);
  const { scrolled, setScrolled } = useScrolled();

  const navigateOpen = (path) => {
    if (path === 'toggleDashboardDrawer') {
      toggleDashboardDrawer();
    } else {
      navigate(path);
      toggleDrawer();
    }
  };

  const navigateDemo = (url) => window.open(url, '_blank', 'noopener,noreferrer');

  return (
    <>
      <ThemeProvider theme={theme}>
        <SnackBar>
          <CssBaseline />
          <DashboardDrawer
            anchor="left"
            open={dashboardDrawerOpen}
            toggleDashboardDrawer={toggleDashboardDrawer}
          />
          <Grid container columns={12}>
            <Grid item xs={12}>
              <ScrollAppBar />
            </Grid>
            {isXs && (
              <Grid item xs={12}>
              {/* Please turn this into a Regular Drawer */}
                <MobileDrawer 
                  anchor="right"
                  open={drawerOpen}
                  toggleDrawer={toggleDrawer}
                />
              {/* Use DrawerContext already setup */}
              </Grid>
            )}
            {location.pathname === '/' && (
              <Grid item xs={12}>
                <Box sx={{ display: 'flex' }}>
                  <SimpleSlider />
                </Box>
              </Grid>
            )}
            <Grid item xs={12} sm={2} md={4} sx={{ order: isXs ? 1 : 0 }}>
              <Box
                sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}
              >
                <ShorterBox />
              </Box>
            </Grid>
            <Grid item xs={12} sm={8} md={4}>
              <Box sx={{ display: 'flex' }}>{children}</Box>
            </Grid>
            <Grid item xs={12} sm={2} md={4} sx={{ order: isXs ? 2 : 0 }}>
              <Box
                sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}
              >
                <TallerBox />
              </Box>
            </Grid>
            <Grid item xs={12} sx={{ order: isXs ? 3 : 0 }}>
              <Box sx={{ display: 'flex' }}>
                <Footer />
              </Box>
            </Grid>
          </Grid>
          <SnackBox />
        </SnackBar>
      </ThemeProvider>
      <style>{`
        @keyframes holographicSweep {
          0% { transform: rotate(0deg) scale(1); opacity: 0.6; }
          50% { transform: rotate(180deg) scale(1.1); opacity: 0.8; }
          100% { transform: rotate(360deg) scale(1); opacity: 0.6; }
        }
        @keyframes scanLines {
          0%, 100% { opacity: 0.8; background-position: 0 0; }
          50% { opacity: 1; background-position: 0 -10px; }
        }
      `}</style>
    </>
  );
};

export default App;