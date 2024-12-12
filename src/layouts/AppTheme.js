import { createTheme } from '@mui/material';

import { componentStyles } from './themeComponents';

const getTheme = (darkMode, isXs = false) => {
  return createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      background: {
        default: darkMode ? '#000000' : '#ffffff',
      },
    },
    typography: {
      fontFamily: 'Poppins',
    },
    components: componentStyles(darkMode, isXs),
  });
};

export default getTheme;
