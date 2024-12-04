export const AppBarStyles = (darkMode) => ({
    position: 'fixed',
    bottom: 0,
    top: 'auto',
    left: 0,
    right: 0,
    boxShadow: darkMode 
        ? '0 0 20px rgba(97, 218, 251, 0.3), 0 -4px 15px rgba(97, 218, 251, 0.2), inset 0 0 30px rgba(97, 218, 251, 0.1)'
        : '0px 4px 8px rgba(0, 0, 0, 0.2)',
    backgroundColor: darkMode 
        ? 'rgba(97, 218, 251, 0.1) !important' 
        : 'primary.main !important',
    backdropFilter: darkMode ? 'blur(10px)' : 'none',
    borderTop: darkMode 
        ? '1px solid rgba(97, 218, 251, 0.3)' 
        : 'none',
    paddingY: 2,
    transition: 'all 0.3s ease',
    zIndex: 1000,
    '&.MuiAppBar-root': {
        backgroundColor: darkMode 
            ? 'rgba(97, 218, 251, 0.1) !important' 
            : 'primary.main !important',
    },
});

export const ToolbarStyles = (darkMode) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 16px',
    backgroundColor: 'transparent',
    '&.MuiToolbar-root': {
        backgroundColor: 'transparent',
    },
});

export const TypographyStyles = (darkMode) => ({
    whiteSpace: 'nowrap',
    flexGrow: 1,
    textAlign: 'center',
    cursor: 'pointer',
    color: darkMode ? 'rgb(97, 218, 251)' : 'inherit',
    fontSize: '1.1rem',
    fontWeight: 600,
    letterSpacing: '0.05em',
    textShadow: darkMode 
        ? '0 0 5px rgba(97, 218, 251, 0.5), 0 0 10px rgba(97, 218, 251, 0.3)'
        : 'none',
    transition: 'all 0.3s ease',
    '&:hover': {
        opacity: 0.7,
        transform: 'scale(1.02)',
        textShadow: darkMode 
            ? '0 0 10px rgba(97, 218, 251, 0.7), 0 0 15px rgba(97, 218, 251, 0.5)'
            : 'none',
    },
});

export const IconButtonStyles = (darkMode) => ({
    marginLeft: 2,
    color: darkMode ? 'rgb(97, 218, 251)' : 'inherit',
    transition: 'all 0.3s ease',
    '&:hover': {
        backgroundColor: darkMode 
            ? 'rgba(97, 218, 251, 0.2)' 
            : 'rgba(0, 0, 0, 0.1)',
        transform: 'scale(1.1)',
        boxShadow: darkMode 
            ? '0 0 10px rgba(97, 218, 251, 0.3)'
            : 'none',
    },
    '& .MuiSvgIcon-root': {
        filter: darkMode 
            ? 'drop-shadow(0 0 5px rgba(97, 218, 251, 0.5))'
            : 'none',
    },
});