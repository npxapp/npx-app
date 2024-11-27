// src/layouts/AppTheme.js
import { createTheme } from '@mui/material';

const getTheme = (darkMode) => {
  return createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: darkMode ? '#000000' : '#ffffff',
      },
      background: {
        default: darkMode ? '#000000' : '#ffffff',
        paper: darkMode ? '#000000' : '#ffffff',
      },
    },
    components: {
      MuiAppBar: {
        defaultProps: {
          enableColorOnDark: true,
        },
        styleOverrides: {
          root: ({ theme }) => ({
            backgroundColor: theme.palette.mode === 'dark' ? '#000000' : '#ffffff',
            color: '#007FFF',
            borderBottom: 'none',
          }),
        },
      },
      MuiDrawer: {
        styleOverrides: {
          paper: ({ theme }) => ({
            backgroundColor: theme.palette.mode === 'dark' ? '#000000' : '#ffffff',
            color: '#007FFF',
            '--Paper-overlay': 'none',
          }),
        },
      },
      MuiListItem: {
        styleOverrides: {
          root: ({ theme }) => ({
            color: '#007FFF',
            '&:hover': {
              backgroundColor: theme.palette.mode === 'dark' ? '#000000' : '#ffffff', // Change background based on theme
            },
          }),
        },
      },
      MuiListItemIcon: {
        styleOverrides: {
          root: {
            color: '#007FFF',
          },
        },
      },
    },
  });
};

export default getTheme;