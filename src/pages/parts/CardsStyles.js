export const CardStyles = (darkMode: boolean) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxWidth: '480px',
  margin: '20px auto',
  background: 'transparent',
  borderRadius: '12px',
  overflow: 'hidden',
  boxShadow: darkMode
    ? '0 8px 16px rgba(97, 218, 251, 0.2)'
    : '0 4px 12px rgba(0, 0, 0, 0.1)',
  border: darkMode
    ? '1px solid rgba(97, 218, 251, 0.5)'
    : '1px solid #dddddd',
  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  '&:hover': {
    transform: 'scale(1.02)',
    boxShadow: darkMode
      ? '0 12px 24px rgba(97, 218, 251, 0.3)'
      : '0 6px 18px rgba(0, 0, 0, 0.15)',
  },
});

export const CardHeaderStyles = (darkMode: boolean) => ({
  padding: '16px 20px',
  fontSize: '1.2rem',
  fontWeight: 600,
  background: 'transparent',
  textAlign: 'center',
  borderBottomLeftRadius: '12px',
  borderBottomRightRadius: '12px',
  textTransform: 'uppercase',
  letterSpacing: '0.08em',
});

export const CardContentStyles = (darkMode: boolean) => ({
  padding: '20px',
  background: 'transparent',
  fontSize: '1rem',
  lineHeight: 1.6,
});

export const AvatarIconStyles = (darkMode: boolean) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '20px auto',
  width: '80px',
  height: '80px',
  borderRadius: '50%',
  background: 'rgba(97, 218, 251, 0.1)',
  transition: 'background 0.3s ease, transform 0.3s ease',
  '& .MuiSvgIcon-root': {
    fontSize: '2.5rem',
    color: darkMode ? '#61dafb' : '#000',
  },
  '&:hover': {
    transform: 'scale(1.1)',
    background: darkMode
      ? 'rgba(97, 218, 251, 0.2)'
      : 'rgba(0, 0, 0, 0.1)',
  },
});

export const CardListStyles = (darkMode: boolean) => ({
  margin: 0,
  padding: 0,
  listStyle: 'none',
  '& .MuiListItem-root': {
    padding: '12px 20px',
    borderBottom: darkMode
      ? '1px solid rgba(97, 218, 251, 0.3)'
      : '1px solid #eeeeee',
    '&:hover': {
      background: darkMode
        ? 'rgba(97, 218, 251, 0.1)'
        : 'rgba(0, 0, 0, 0.05)',
    },
  },
});

export const CardPurchaseButtonStyles = (darkMode: boolean) => ({
  color: '#61dafb',
  background: 'transparent',
  border: `1px solid #61dafb`,
  padding: '12px 20px',
  borderRadius: '20px',
  textTransform: 'none',
  fontSize: '1.9rem',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  textAlign: 'center',
  margin: '20px auto',
  width: 'fit-content',
});

export const CardListItemStyles = (darkMode: boolean) => ({
  display: 'flex',
  alignItems: 'center',
  padding: '12px 20px',
  borderBottom: darkMode
    ? '1px solid rgba(97, 218, 251, 0.3)'
    : '1px solid #eeeeee',
  transition: 'background 0.3s ease, color 0.3s ease',
  '&:hover': {
    background: darkMode
      ? 'rgba(97, 218, 251, 0.1)'
      : 'rgba(0, 0, 0, 0.05)',
  },
  '& .MuiListItemText-primary': {
    color: darkMode ? '#61dafb' : '#000',
    fontWeight: 500,
    fontSize: '1rem',
  },
  '& .MuiListItemText-secondary': {
    color: darkMode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.6)',
    fontSize: '0.9rem',
  },
});