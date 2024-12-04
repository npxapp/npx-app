export const CardStyles = (darkMode) => ({
  position: 'relative',
  background: darkMode
    ? 'linear-gradient(135deg, rgba(97, 218, 251, 0.15) 25%, rgba(97, 218, 251, 0.25) 25%, rgba(97, 218, 251, 0.25) 50%, rgba(97, 218, 251, 0.15) 50%, rgba(97, 218, 251, 0.15) 75%, rgba(97, 218, 251, 0.25) 75%)'
    : 'linear-gradient(135deg, rgba(0, 0, 0, 0.1) 25%, rgba(0, 0, 0, 0.2) 25%, rgba(0, 0, 0, 0.2) 50%, rgba(0, 0, 0, 0.1) 50%, rgba(0, 0, 0, 0.1) 75%, rgba(0, 0, 0, 0.2) 75%)',
  backgroundSize: '20px 20px',
  boxShadow: darkMode 
    ? '0 10px 25px rgba(97, 218, 251, 0.2), 0 0 15px rgba(97, 218, 251, 0.3), inset 0 0 20px rgba(97, 218, 251, 0.1)'
    : '0 10px 25px rgba(0, 0, 0, 0.3)',
  borderRadius: '12px',
  border: darkMode ? '1px solid rgba(97, 218, 251, 0.3)' : 'none',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'radial-gradient(circle at center, rgba(97, 218, 251, 0.05) 0%, transparent 70%)',
    pointerEvents: 'none',
    zIndex: 1,
  }
});

export const CardHeaderStyles = (darkMode) => ({
  background: darkMode
    ? 'linear-gradient(45deg, rgba(97, 218, 251, 0.1) 0%, rgba(97, 218, 251, 0.2) 100%)'
    : 'rgba(97, 218, 251, 0.2)',
  backdropFilter: 'blur(10px)',
  boxShadow: darkMode 
    ? '0 4px 6px rgba(97, 218, 251, 0.1), inset 0 0 15px rgba(97, 218, 251, 0.05)'
    : 'none',
  borderBottom: darkMode ? '1px solid rgba(97, 218, 251, 0.3)' : 'none',
});

export const CardHeaderTextStyles = (darkMode) => ({
  fontSize: '6rem',
  color: darkMode ? 'rgb(97, 218, 251)' : '#ffffff',
  textShadow: darkMode 
    ? '0 0 10px rgba(97, 218, 251, 0.5), 0 0 20px rgba(97, 218, 251, 0.3)'
    : 'none',
  fontWeight: 600,
  letterSpacing: '0.05em',
});

export const AvatarIconStyles = {
  backgroundColor: 'rgba(97, 218, 251, 0.2)',
  padding: '10px',
  borderRadius: '50%',
  color: 'rgb(97, 218, 251)',
  transition: 'all 0.3s ease',
  boxShadow: '0 4px 6px rgba(97, 218, 251, 0.2)',
  '&.MuiIconButton-root': {
    backgroundColor: 'rgba(97, 218, 251, 0.2)',
    '&:hover': {
      backgroundColor: 'rgba(97, 218, 251, 0.3)',
      boxShadow: '0 6px 8px rgba(97, 218, 251, 0.3)',
      transform: 'scale(1.05)',
    },
    '&:active': {
      transform: 'scale(0.95)',
      boxShadow: '0 2px 4px rgba(97, 218, 251, 0.2)',
    },
  },
  '& .MuiSvgIcon-root': {
    fontSize: '6rem',
    filter: 'drop-shadow(0 0 5px rgba(97, 218, 251, 0.5))',
  },
};

export const ListStyles = (darkMode) => ({
  '& .MuiListItem-root': {
    '&::before': {
      content: '"•"',
      color: 'rgb(97, 218, 251)',
      marginRight: '8px',
      fontSize: '2rem',
      textShadow: darkMode 
        ? '0 0 5px rgba(97, 218, 251, 0.5)'
        : 'none',
    },
    '&:hover': {
      backgroundColor: 'rgba(97, 218, 251, 0.1)',
      transition: 'background-color 0.3s ease',
    },
    '&.Mui-selected': {
      backgroundColor: 'rgba(97, 218, 251, 0.2)',
      '&:hover': {
        backgroundColor: 'rgba(97, 218, 251, 0.3)',
      },
    },
  },
});

export const ListItemTextStyles = (darkMode) => ({
  '& .MuiListItemText-primary': {
    fontSize: '2rem',
    color: darkMode ? 'rgb(97, 218, 251)' : '#2d3748',
    fontWeight: 500,
    textShadow: darkMode 
      ? '0 0 5px rgba(97, 218, 251, 0.3)'
      : 'none',
    transition: 'color 0.3s ease',
  },
});