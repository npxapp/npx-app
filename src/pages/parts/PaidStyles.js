export const CardStyles = (darkMode) => ({
  background: darkMode
    ? 'linear-gradient(135deg, rgba(0, 127, 255, 0.15) 25%, rgba(0, 127, 255, 0.25) 25%, rgba(0, 127, 255, 0.25) 50%, rgba(0, 127, 255, 0.15) 50%, rgba(0, 127, 255, 0.15) 75%, rgba(0, 127, 255, 0.25) 75%)'
    : 'linear-gradient(135deg, rgba(0, 127, 255, 0.25) 25%, rgba(0, 127, 255, 0.35) 25%, rgba(0, 127, 255, 0.35) 50%, rgba(0, 127, 255, 0.25) 50%, rgba(0, 127, 255, 0.25) 75%, rgba(0, 127, 255, 0.35) 75%)',
  backgroundSize: '20px 20px',
});

export const CardHeaderStyles = (darkMode) => ({
  background: darkMode
    ? 'linear-gradient(45deg, rgba(255, 255, 255, 0.03) 0%, rgba(97, 218, 251, 0.06) 100%)'
    : 'linear-gradient(45deg, rgba(0, 127, 255, 0.03) 0%, rgba(0, 127, 255, 0.06) 100%)',
});

export const CardHeaderTextStyles = (darkMode) => ({
  fontSize: '6rem',
  color: darkMode ? '#61dafb' : '#ffffff',
});

export const AvatarIconStyles = (darkMode) => ({
  backgroundColor: '#007fff',
  padding: '10px',
  borderRadius: '50%',
  color: '#fff',
  '&.MuiIconButton-root': {
    backgroundColor: '#007fff',
    '&:hover': { backgroundColor: '#007fff' },
    '&:active': { backgroundColor: '#007fff' },
    '&:focus': { backgroundColor: '#007fff' },
  },
  '& .MuiSvgIcon-root': { fontSize: '6rem' },
});

export const ListStyles = (darkMode) => ({
  '& .MuiListItem-root': {
    '&::before': {
      content: '"•"',
      color: darkMode ? '#61dafb' : '#ffffff',
      marginRight: '8px',
      fontSize: '2rem',
    },
    '&:hover': { backgroundColor: 'transparent' },
    '&:focus': { backgroundColor: 'transparent' },
    '&.Mui-selected': {
      backgroundColor: 'transparent',
      '&:hover': { backgroundColor: 'transparent' },
    },
  },
});

export const ListItemTextStyles = (darkMode) => ({
  '& .MuiListItemText-primary': {
    fontSize: '2rem',
    color: darkMode ? '#61dafb' : '#ffffff',
    fontWeight: 500,
  },
});

