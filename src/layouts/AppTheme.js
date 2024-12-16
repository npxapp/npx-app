import { createTheme } from '@mui/material';
import { componentStyles } from './themeComponents';
import { componentButtons } from './themeButtons';

const getTheme = (darkMode, isXs = false) => {
  return createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: darkMode ? '#007fff' : '#61dafb',
      },
      secondary: {
        main: darkMode ? '#f9d71c' : '#f3f3f3',
      },
      background: {
        default: darkMode ? '#000000' : '#ffffff',
      },
    },
    typography: {
      fontFamily: 'Poppins',
      allVariants: {
        color: '#000000',
        fontSize: '1rem',
      },
    },
    components: {
      ...componentStyles(darkMode, isXs),
      ...componentButtons(darkMode, isXs),
      MuiTypography: {
        variants: [
          {
            props: { variant: 'customPanel' },
            style: ({ theme }) => ({
              flex: '0 0 auto',
              borderRadius: 20,
              border: 'none',
              fontWeight: 200,
              letterSpacing: '-0.5px',
              textTransform: 'none',
              fontSize: '1rem',
              color: darkMode ? theme.palette.secondary.main : theme.palette.primary.main,
            }),
          },
          {
            props: { variant: 'customTitle' },
            style: ({ theme }) => ({
              fontFamily: 'kornucopiaregular',
              fontWeight: 400,
              fontSize: '64px',
            }),
          },
          {
            props: { variant: 'body2' },
            style: ({ theme }) => ({
              color: darkMode ? '#ffffff' : '#000000',
              marginTop: 1,
              fontSize: '16px',
              textAlign: 'center',
              maxWidth: '80%',
            }),
          },
          {
            props: { variant: 'h6' },
            style: ({ theme }) => ({
              color: darkMode ? '#ffffff' : '#000000',
              marginTop: 2,
              fontSize: '2rem',
            }),
          },
        ],
      },
      MuiSvgIcon: {
        variants: [
          {
            props: { variant: 'icon' },
            style: ({ theme }) => ({
              color: '#ffffff',
            }),
          },
          {
            props: { variant: 'custom' },
            style: ({ theme }) => ({
              color: '#000000',
            }),
          },
          {
            props: { variant: 'arrowIcon' },
            style: ({ theme }) => ({
              display: darkMode ? 'none' : 'inherit',
              fontSize: '1rem',
              color: theme.palette.text.secondary,
            }),
          },
          {
            props: { variant: 'customIcon' },
            style: ({ theme }) => ({
              color: darkMode ? '#ffffff' : '#000000',
            }),
          },
        ],
      },
      MuiDrawer: {
        styleOverrides: {
          paper: ({ theme }) => ({
            backgroundColor: theme.palette.primary.main,
            background: theme.palette.primary.main,
          }),
        },
      },
    },
  });
};

export default getTheme;