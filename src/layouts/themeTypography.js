export const typographyStyles = (darkMode) => ({
  variants: [
    {
      props: { variant: 'customTitle' },
      style: ({ theme }) => ({
        fontFamily: 'Poppins',
        color: theme.palette.text.primary,
        fontWeight: 400,
        fontSize: '64px',
      }),
    },
    {
      props: { variant: 'h1' },
      style: ({ theme }) => ({
        color: darkMode ? theme.palette.primary.light : '#4fa8d3',
      }),
    },
    {
      props: { variant: 'h2' },
      style: ({ theme }) => ({
        color: darkMode ? theme.palette.primary.light : '#4fa8d3',
      }),
    },
    {
      props: { variant: 'h3' },
      style: ({ theme }) => ({
        color: darkMode ? theme.palette.text.secondary : '#4fa8d3',
      }),
    },
    {
      props: { variant: 'h4' },
      style: ({ theme }) => ({
        color: darkMode ? theme.palette.primary.light : '#4fa8d3',
      }),
    },
    {
      props: { variant: 'h5' },
      style: ({ theme }) => ({
        color: darkMode ? theme.palette.primary.light : '#4fa8d3',
      }),
    },
    {
      props: { variant: 'h6' },
      style: ({ theme }) => ({
        color: darkMode ? theme.palette.primary.light : '#4fa8d3',
      }),
    },
    {
      props: { variant: 'body1' },
      style: ({ theme }) => ({
        color: theme.palette.action.active,
      }),
    },
    {
      props: { variant: 'body2' },
      style: {
        color: darkMode ? '#a0a0a0' : '#505050',
      },
    },
  ]
});

