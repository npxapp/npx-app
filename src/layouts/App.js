import React from 'react';
import { Container, CssBaseline, ThemeProvider as MuiThemeProvider, AppBar, Toolbar } from '@mui/material';
import getTheme from './AppTheme';
import Drawer from './components/Drawer';
import { SnackBar } from './components/SnackBar';
import TopIcons from './components/TopIcons';
import { useDarkMode } from '../contexts/DarkMode';
import { useDrawer } from '../contexts/DrawerMode';

const App = ({ children }) => {
  const { darkMode, setDarkMode } = useDarkMode();
  const { drawerOpen, toggleDrawer } = useDrawer();

  const theme = getTheme(darkMode);

  return (
    <>
      <style>
        {`
          .MuiPaper-root {
            --Paper-shadow: none !important;
            --Paper-overlay: none !important;
            background-color: ${darkMode ? '#000000' : '#FFFFFF'} !important;
          }
        `}
      </style>
      <MuiThemeProvider theme={theme}>
        <SnackBar>
          <CssBaseline />
          <AppBar position="fixed" elevation={darkMode ? 0 : 1}>
            <Toolbar>
              <TopIcons />
            </Toolbar>
          </AppBar>
          <div style={{ display: 'flex', marginTop: '56px' }}>
            <Drawer 
              open={drawerOpen} 
              toggleDrawer={toggleDrawer}
              variant="persistent"
              anchor="left"
            />
            <Container
              sx={{
                flexGrow: 1,
                padding: '0',
                display: 'flex',
                justifyContent: 'center',
                width: '100%',
                boxSizing: 'border-box'
              }}
            >
              {children}
            </Container>
          </div>
        </SnackBar>
      </MuiThemeProvider>
    </>
  );
};

export default App;