import { typographyStyles } from './themeTypography';
import {
  darken,
  lighten,
  alpha,
} from '@mui/material/styles';
import backgroundImage from '../images/Background.png';

export const componentStyles = (darkMode, isXs) => ({
  MuiCssBaseline: {
          styleOverrides: `
          html, body {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            overflow-x: hidden;
            max-width: 100%;
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          body {
            background-image: url(${backgroundImage});
            background-repeat: no-repeat;
            background-size: 100% auto;
            background-position: center top 200px;
          }
          html::-webkit-scrollbar, 
          body::-webkit-scrollbar {
            display: none;
          }          
          * {
            box-sizing: border-box;
          }
        `
  },
  MuiTypography: {
    variants: typographyStyles(darkMode),
          styleOverrides: {
                  h3: ({theme}) => ({
                          fontSize: '3rem',
                          color: darkMode ? theme.palette.text.primary : theme.palette.text.secondary,
                  }),
          },
  },
  MuiToolbar: {
    variants: [
      {
        props: { variant: 'snack' },
        style: () => ({
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: 'transparent',
          '&.MuiToolbar-root': {
            backgroundColor: 'transparent',
          },
        }),
      },
    ],
  },
  MuiAppBar: {
    variants: [
      {
        props: { variant: 'Menu' },
        style: ({ theme }) => ({
          zIndex: 1200,
          transition: 'all 0.3s ease-in-out',
          padding: 0,
          margin: 0,
          borderRadius: 20,
          backgroundColor: 'transparent',
          backdropFilter: darkMode ? 'blur(10px)' : 'none',
        }),
      },
      {
        props: { variant: 'snack' },
        style: ({ theme }) => ({
          position: 'fixed',
          bottom: 0,
          top: 'auto',
          left: 0,
          right: 0,
          margin: 0,
          borderRadius: 20,
          backgroundColor: 'transparent',
          backdropFilter: darkMode ? 'blur(10px)' : 'none',
          padding: '5px 0',
          transition: 'all 0.3s ease',
          zIndex: 1000,
        }),
      },
    ],
    styleOverrides: {
      root: ({ theme }) => ({
        backgroundColor: darkMode ? theme.palette.background.paper : theme.palette.background.paper,
        color: darkMode ? theme.palette.text.primary : theme.palette.text.secondary,
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
      root: () => ({
        '&:hover': {
          backgroundColor: 'transparent',
        },
      }),
    },
  },
  MuiListItemText: {
    styleOverrides: {
      root: ({theme}) => ({
        '& .MuiTypography-root': {
          fontWeight: 'normal',
          color: darkMode ? theme.palette.text.primary : theme.palette.text.secondary,
        },
      }),
    },
  },
  MuiListItemIcon: {
    styleOverrides: {
      root: ({theme}) => ({
        color: darkMode ? theme.palette.text.primary : theme.palette.text.secondary,
      }),
    },
  },
  MuiButton: {
    variants: [
      {
        props: { variant: 'customOutlined' },
        style: ({ theme }) => ({
          backgroundColor: darkMode ? theme.palette.background.paper : theme.palette.background.paper,
          color: darkMode ? theme.palette.text.primary : theme.palette.text.secondary,
        }),
      },
      {
        props: { variant: 'panelButton' },
        style: ({ theme }) => ({
          backgroundColor: darkMode ? theme.palette.background.paper : theme.palette.background.paper,
          color: darkMode ? theme.palette.text.primary : theme.palette.text.secondary,
        }),
      },
      {
        props: { variant: 'customPanel' },
        style: () => ({
          flex: '0 0 auto',
          marginX: 1,
          borderRadius: 20,
          border: 'none',
          textTransform: 'none',
        }),
      },
      {
        props: { variant: 'customTitle' },
        style: ({ theme }) => ({
          flex: '0 0 auto',
          marginX: 1,
          fontWeight: 700,
          fontSize: '1.2rem',
          color: darkMode ? theme.palette.text.primary : theme.palette.text.secondary,
          backgroundColor: darkMode ? alpha(theme.palette.background.paper, .2) : alpha(theme.palette.background.paper, .2),
          borderRadius: 20,
          border: 'none',
          textTransform: 'none',
        }),
      },
      {
        props: { variant: 'customLink' },
        style: () => ({
          flex: '0 0 auto',
          marginX: 1,
          borderRadius: 20,
          border: 'none',
          textTransform: 'none',
        }),
      },
      {
        props: { variant: 'filterButton' },
        style: ({theme}) => ({
          flex: '0 0 auto',
          marginX: 1,
          color: darkMode ? theme.palette.text.primary : theme.palette.text.secondary,
          borderRadius: 20,
          backgroundColor: darkMode ? theme.palette.background.paper : theme.palette.background.paper,
          border: darkMode ? theme.palette.background.paper : theme.palette.background.paper,
          textTransform: 'none',
          '&.Mui-selected': {
            backgroundColor: darkMode ? theme.palette.background.paper : theme.palette.background.paper,
          },
          '&:not(.Mui-selected)': {
            backgroundColor: 'transparent',
          },
        }),
      },
    ],
    styleOverrides: {
      root: () => ({
        flexGrow: 1,
        borderRadius: '20px',
        padding: 11,
        textTransform: 'none',
      }),
      outlined: ({theme}) => ({
        '&.demo-button': {
          flexGrow: 1,
          color: darkMode ? theme.palette.text.primary : theme.palette.text.secondary,
          borderRadius: '20px',
          border: 'none',
          backgroundColor: darkMode ? theme.palette.background.paper : theme.palette.background.paper,
          padding: 11,
          '&:hover': {
            backgroundColor: darkMode ? theme.palette.background.paper : theme.palette.background.paper,
            border: 'none',
          },
          '&.selected': {
            backgroundColor: darkMode ? theme.palette.background.paper : theme.palette.background.paper,
          },
        },
      }),
    },
  },
  MuiPaper: {
    variants: [
      {
        props: { variant: 'dialer' },
        style: ({ theme }) => ({
          width: '100%',
          background: 'transparent',
        }),
      },
      {
        props: { variant: 'fade' },
        style: ({ theme }) => ({
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '50%',
          zIndex: 2,
          pointerEvents: 'none',
          borderBottomLeftRadius: 40,
          borderBottomRightRadius: 40,
          background: theme.palette.mode === 'dark'
            ? 'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))'
            : 'linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1))',
          transition: 'background 3s ease',
        }),
      },
    ],
  },
  MuiCard: {
    variants: [
      {
        props: { variant: 'demo' },
        style: ({ theme }) => ({
          [theme.breakpoints.up('sm')]: {
            width: '340px',
          },
          [theme.breakpoints.up('md')]: {
            width: '460px',
          },
          [theme.breakpoints.up('lg')]: {
            width: '580px',
          },
          [theme.breakpoints.up('xl')]: {
            width: '700px',
          },
          marginBottom: 2,
          height: 450,
          position: 'relative',
          transition: 'height 0.3s ease',
          borderRadius: '40px',
          background: darkMode ? theme.palette.background.paper : theme.palette.background.paper,
          backgroundSize: '20px 20px',
          color: darkMode ? theme.palette.text.primary : theme.palette.text.secondary,
        }),
      },
      {
        props: { variant: 'parts' },
        style: ({ theme }) => ({
          borderRadius: '40px',
          background: 'transparent',
          background: darkMode ? theme.palette.background.paper : theme.palette.background.paper,
          backgroundSize: '20px 20px',
          color: darkMode ? theme.palette.text.primary : theme.palette.text.secondary,
          '& .MuiTypography-root': {
            color: darkMode ? theme.palette.text.primary : theme.palette.text.secondary,
            fontSize: isXs ? '1rem' : '14px',
            fontWeight: 200,
          },
        }),
      },
      {
        props: { variant: 'action' },
        style: () => ({
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
        }),
      },
    ],
  },
  MuiCardHeader: {
    variants: [
      {
        props: { variant: 'demo' },
        style: ({ theme }) => ({
          background: darkMode ? theme.palette.background.paper : theme.palette.background.paper,
          color: darkMode ? theme.palette.text.primary : theme.palette.text.secondary,
          '& .MuiTypography-root': {
            color: darkMode ? theme.palette.text.primary : theme.palette.text.secondary,
          },
        }),
      },
      {
        props: { variant: 'parts' },
        style: ({ theme }) => ({
          background: darkMode ? theme.palette.background.paper : theme.palette.background.paper,
          color: darkMode ? theme.palette.text.primary : theme.palette.text.secondary,
        }),
      },
      {
        props: { variant: 'action' },
        style: ({ theme }) => ({
          display: 'flex',
          flexDirection: 'column-reverse',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          gap: 2,
          '& .MuiCardHeader-content': {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            flexGrow: 1,
          },
          '& .MuiCardHeader-action': {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            flexGrow: 1,
            flex: 1,
            width: '100%',
            '& .MuiSvgIcon-root': {
              fontSize: '6rem',
              color: darkMode ? theme.palette.text.primary : theme.palette.text.secondary,
            },
          },
        }),
      },
    ],
  },
  MuiCardContent: {
    variants: [
      {
        props: { variant: 'demo' },
        style: ({ theme }) => ({
          height: '100%',
          overflow: 'hidden',
          '& .MuiTypography-root': {
            color: darkMode ? theme.palette.text.primary : theme.palette.text.secondary,
          },
        }),
      },
      {
        props: { variant: 'action' },
        style: ({ theme }) => ({
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          '& .MuiTypography-root, & .MuiListItemText-primary': {
            color: darkMode ? theme.palette.text.primary : theme.palette.text.secondary,
          },
          background: darkMode ? theme.palette.background.paper : theme.palette.background.paper,
          borderBottomLeftRadius: '16px',
          borderBottomRightRadius: '16px',
        }),
      },
    ],
    styleOverrides: {
      root: ({ theme }) => ({
        '& .MuiTypography-root': {
          color: darkMode ? theme.palette.text.primary : theme.palette.text.secondary,
        },
      }),
    },
  },
  MuiSvgIcon: {
    variants: [
      {
        props: { variant: 'customIcon' },
        style: ({ theme }) => ({
          color: theme.palette.text.primary,
        }),
      },
      {
        props: { variant: 'arrowIcon' },
        style: ({ theme }) => ({
          color: theme.palette.text.primary,
        }),
      },
    ],
  },
  MuiAccordion: {
    variants: [
      {
        props: { variant: 'panel' },
        style: () => ({
          border: 'none !important',
          boxShadow: 'none !important',
          '&::before': {
            display: 'none !important',
          },
        }),
      },
    ],
    styleOverrides: {
      root: ({ theme }) => ({
        backgroundColor: 'transparent',
      }),
    },
  },
  MuiAccordionSummary: {
    variants: [
      {
        props: { variant: 'panel' },
        style: ({ theme }) => ({
          marginLeft: 10,
          display: 'flex',
          flexDirection: 'row-reverse',
          alignItems: 'center',
          justifyContent: 'space-between',
          '& .MuiAccordionSummary-root': {
            color: theme.palette.text.primary,
          },
          '& .MuiTypography-root': {
            color: theme.palette.text.primary,
          },
        }),
      },
    ],
  },
  MuiAccordionDetails: {
    variants: [
      {
        props: { variant: 'panel' },
        style: () => ({
          marginLeft: 10,
          '& .MuiListItemText-primary': {
            padding: '0',
            margin: '0',
            position: 'relative',
          },
        }),
      },
    ],
  },
  MuiIconButton: {
    variants: [
      {
        props: { variant: 'panel' },
        style: ({theme}) => ({
          zIndex: 1501,
          backgroundColor: darkMode ? alpha(theme.palette.background.paper, .2) : alpha(theme.palette.background.paper, .2),
        }),
      },
      {
        props: { variant: 'arrowButton' },
        style: ({ theme }) => ({
          zIndex: 2001,
          backgroundColor: darkMode ? alpha(theme.palette.background.paper, .2) : alpha(theme.palette.background.paper, .2),
        }),
      },
      {
        props: { variant: 'arrowSwitch' },
        style: () => ({
          position: 'absolute',
          left: '-26px',
          top: '50%',
          transform: 'translateY(-50%)',
        }),
      },
    ],
  },
});