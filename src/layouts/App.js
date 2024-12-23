import React from 'react';
import {
  Grid,
  CssBaseline,
  ThemeProvider,
  Box,
  useMediaQuery,
} from '@mui/material';
import getTheme from './AppTheme';
import DashboardDrawer from './components/DashboardDrawer';
import MobileDrawer from './parts/MobileDrawer';
import { SnackBar } from './components/SnackBar';
import Footer from './components/Footer';
import { useDarkMode } from '../contexts/DarkMode';
import { useDashboardDrawer } from '../contexts/DashboardDrawerContext';
import { useDrawer } from '../contexts/DrawerContext';
import ScrollAppBar from './parts/ScrollAppBar';
import { useLocation } from 'react-router-dom';

const App = ({ children }) => {
  const { darkMode } = useDarkMode();
  const { dashboardDrawerOpen, toggleDashboardDrawer } = useDashboardDrawer();
  const { drawerOpen, toggleDrawer } = useDrawer();
  const isXs = useMediaQuery('(max-width:600px)');
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const theme = isHomePage ? getTheme(true) : getTheme(darkMode, isXs);

  return (
    <ThemeProvider theme={theme}>
      <SnackBar>
        <CssBaseline />
        <DashboardDrawer
          anchor="left"
          open={dashboardDrawerOpen}
          toggleDashboardDrawer={toggleDashboardDrawer}
        />
        <Grid container columns={12}>
          <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box
              sx={{
                display: 'none',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'center',
                width: {
                  xs: '100%',
                  sm: 600,
                  md: 960,
                  lg: 1280,
                  xl: 1920,
                },
              }}
            >
              <ScrollAppBar />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <MobileDrawer
              anchor="right"
              open={drawerOpen}
              toggleDrawer={toggleDrawer}
            />
          </Grid>
          <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
            {isHomePage && !darkMode && (
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100vw',
                  height: '90vh',
                  background: 'radial-gradient(circle at center, rgba(255, 165, 0, 0.4) 0%, rgba(255, 165, 0, 0.2) 10%, rgba(255, 165, 0, 0) 30%)',
                  pointerEvents: 'none',
                  zIndex: 1,
                }}
              />
            )}
            <Box sx={{ width: '100%' }}>
              <ScrollAppBar />
            </Box>
            <Box
              sx={{
                position: 'absolute',
                top: 76,
                left: 0,
                right: 0,
                bottom: 0,
                height: {
                  xs: '80vh',
                  sm: '80%',
                },
                backgroundColor: 'rgba(255, 255, 255, .95)',
                borderTopLeftRadius: 40,
                borderTopRightRadius: 40,
                borderBottomLeftRadius: 40,
                borderBottomRightRadius: 40,
                overflow: 'hidden',
              }}
            >
              <Box
                sx={{
                  height: '100%',
                  width: '100%',
                  overflowY: 'auto',
                  borderTopLeftRadius: 40,
                  borderTopRightRadius: 40,
                  clipPath: 'inset(0 round 20px 20px 0 0)',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Box
                    sx={{
                      width: {
                        xs: '100%',
                        sm: 600,
                        md: 960,
                        lg: 1280,
                        xl: 1920,
                      },
                    }}
                  >
                    <ThemeProvider theme={getTheme(false, isXs)}>
                      {children}
                    </ThemeProvider>
                  </Box>
                  <Box
                    sx={{
                      width: {
                        xs: '100%',
                        sm: 600,
                        md: 960,
                        lg: 1280,
                        xl: 1920,
                      },
                    }}
                  >
                    <Footer />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </SnackBar>
    </ThemeProvider>
  );
};

export default App;