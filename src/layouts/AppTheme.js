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
        paper: 'transparent', // Explicitly set paper background to transparent
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
            color: '#61dafb',
            borderBottom: 'none',
          }),
        },
      },
      MuiDrawer: {
        styleOverrides: {
          root: {
            backgroundColor: 'transparent',
          },
          paper: {
            backgroundColor: 'transparent !important',
            background: 'transparent !important',
          },
        },
      },
      MuiListItem: {
        styleOverrides: {
          root: ({ theme }) => ({
            color: '#61dafb',
            '&:hover': {
              backgroundColor: theme.palette.mode === 'dark' ? '#000000' : '#ffffff',
            },
          }),
        },
      },
      MuiListItemIcon: {
        styleOverrides: {
          root: {
            color: '#61dafb',
          },
        },
      },
    },
  });
};

export default getTheme;