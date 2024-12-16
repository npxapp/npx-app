export const CardStyles = (darkMode) => ({
  position: 'relative',
    background: {
      xs: darkMode 
      ? 'linear-gradient(135deg, rgba(97, 218, 251, 0.15) 25%, rgba(97, 218, 251, 0.25) 25%, rgba(97, 218, 251, 0.25) 50%, rgba(97, 218, 251, 0.15) 50%, rgba(97, 218, 251, 0.15) 75%, rgba(97, 218, 251, 0.25) 75%) 0 0 / 20px 20px' 
      : 'transparent',
      sm: 'transparent',
  },
  boxShadow: {
    xs: darkMode 
    ? '0 10px 25px rgba(97, 218, 251, 0.2), 0 0 15px rgba(97, 218, 251, 0.3), inset 0 0 20px rgba(97, 218, 251, 0.1)'
    : 'none',
    sm: 'none',
  },
  borderRadius: '12px',
  border: {
    xs: darkMode ? '1px solid rgba(97, 218, 251, 0.3)' : 'none',
    sm: 'none',
  },
  overflow: 'hidden',
});

export const CardHeaderStyles = (darkMode) => ({
  background: {
    xs: darkMode
    ? 'linear-gradient(45deg, rgba(97, 218, 251, 0.1) 0%, rgba(97, 218, 251, 0.2) 100%)'
    : 'transparent',
    sm: 'transparent',
  },
  backdropFilter: 'blur(10px)',
  boxShadow: darkMode 
    ? '0 4px 6px rgba(97, 218, 251, 0.1), inset 0 0 15px rgba(97, 218, 251, 0.05)'
    : 'none',
});

export const CardHeaderTextStyles = (darkMode) => ({
  textShadow: darkMode 
    ? '0 0 10px rgba(97, 218, 251, 0.5), 0 0 20px rgba(97, 218, 251, 0.3)'
    : 'none',
  fontWeight: 600,
  letterSpacing: '0.05em',
});

export const AvatarIconStyles = {
  color: 'rgb(255, 255, 255, .2)',
  fontSize: '8rem',
};

export const ListStyles = (darkMode) => ({
  '& .MuiListItem-root': {
    margin: 0,
    padding: 0,
    '&::before': {
      content: '""',
    },
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
});

export const ListItemTextStyles = (darkMode) => ({
    textShadow: darkMode 
      ? '0 0 5px rgba(97, 218, 251, 0.3)'
      : 'none',
});