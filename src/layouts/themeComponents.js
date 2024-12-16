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
  MuiListItem: {
    styleOverrides: {
      root: () => ({
        '&:hover': {
          backgroundColor: 'transparent',
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
          background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1))',
          transition: 'background 3s ease',
        }),
      },
    ],
  },
    MuiCard: {
      styleOverrides: {
        root: ({theme}) => ({
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          borderRadius: '40px',
          position: 'relative',
          transition: 'height 0.3s ease',
          backgroundSize: '20px 20px',
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
        }),
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        root: {
          display: 'flex',
          flexDirection: 'column-reverse',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '16px',
          '& .MuiCardHeader-content': {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            flexGrow: 1,
            width: '100%',
          },
          '& .MuiCardHeader-action': {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            flexGrow: 1,
            width: '100%',
            '& .MuiSvgIcon-root': {
              fontSize: '2rem', // Can be adjusted globally
            },
          },
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: 'auto',
          overflow: 'hidden',
          width: '100%',
        },
      },
    },
  MuiAccordion: {
    variants: [
      {
        props: { variant: 'panel' },
        style: () => ({
          display: 'flex',
          flexDirection: 'column',
          alignItems: darkMode ? 'center' : 'flex-start',
          flexGrow: 0,
          background: 'transparent',
          border: 'none !important',
          boxShadow: 'black !important',
          '&::before': {
            display: 'none !important',
          },
        }),
      },
    ],
  },
  MuiAccordionSummary: {
    variants: [
      {
        props: { variant: 'panel' },
        style: ({ theme }) => ({
          marginLeft: darkMode ? 0 : 10,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          textAlign: 'center',
          background: 'transparent',
          borderRadius: 20,
          '&.Mui-expanded': {
            backgroundColor: darkMode ? 'none' : theme.palette.background.paper,
            '& .MuiAccordionSummary-content .MuiTypography-root': {
              transition: 'font-size 0.3s ease',
              fontSize: darkMode ? '2rem' : 'initial',
              color: darkMode ? theme.palette.secondary.main : theme.palette.primary.main,
            }
          },
        '& .MuiAccordionSummary-content': { // Target the internal content wrapper
          display: 'flex',
          flexDirection: 'row',
          justifyContent: darkMode ? 'center' : 'flex-start',
          alignItems: 'center',
          width: '100%', // Ensure full width
          gap: theme.spacing(1), // Add some space between items
        },
        }),
      },
    ],
  },
  MuiAccordionDetails: {
    variants: [
      {
        props: { variant: 'panel' },
        style: ({theme}) => ({
          display: 'flex',
          flexDirection: darkMode ? 'column' : 'row',
          alignItems: darkMode ? 'center' : 'inherit',
          justifyContent: darkMode ? 'center' : 'flex-start',
          borderLeft: darkMode ? 'none' : '1px solid',
          borderLeftColor: darkMode ? 'none' : theme.palette.background.paper,
          marginLeft: darkMode ? 0 : 34,
          '& .MuiTypography-root': {
            color: darkMode ? '#ffffff' : theme.palette.text.secondary,
          },
        }),
      },
    ],
  },
});