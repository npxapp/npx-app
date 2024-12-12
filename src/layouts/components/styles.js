import { popInAnimation, popOutAnimation, itemPopInAnimation } from './animations';

export const popupStyle = (isAnimatingOut, darkMode) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  maxWidth: '500px',
  height: '50vh',
  background: darkMode 
    ? 'transparent'
    : 'linear-gradient(135deg, rgba(97, 218, 251, 0.01) 0%, rgba(97, 218, 251, 0.03) 100%)',
  borderRadius: '20px',
  backdropFilter: 'blur(35px)',
  boxShadow: darkMode
    ? '0 15px 50px rgba(97, 218, 251, 0.2), 0 10px 30px rgba(0, 0, 0, 0.3)'
    : '0 15px 50px rgba(255, 255, 255, 0.15), 0 10px 30px rgba(255, 255, 255, 0.1)',
  padding: '25px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '20px',
  outline: 'none',
  overflow: 'hidden',
  border: darkMode 
    ? '2px solid rgba(97, 218, 251, 0.3)' 
    : '2px solid rgba(45, 55, 72, 0.1)',
  animation: isAnimatingOut
    ? `${popOutAnimation} 0.3s ease-in-out forwards`
    : `${popInAnimation} 0.3s ease-in-out`,
  transformOrigin: 'center',
  zIndex: 1000,
  perspective: '1000px',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translate(-50%, -50%) scale(1.02)',
    boxShadow: darkMode
      ? '0 20px 60px rgba(97, 218, 251, 0.3), 0 15px 40px rgba(0, 0, 0, 0.4)'
      : '0 20px 60px rgba(45, 55, 72, 0.2), 0 15px 40px rgba(0, 0, 0, 0.1)',
  }
});

export const inputStyle = (darkMode) => ({
  animation: `${itemPopInAnimation} 0.3s ease-out`,
  '& .MuiOutlinedInput-root': {
    borderRadius: '15px',
    backgroundColor: darkMode 
      ? 'rgba(255, 255, 255, 0.05)' 
      : 'rgba(255, 255, 255, 0.3)', 
    boxShadow: darkMode
      ? `
        inset 0 0 20px 8px rgba(97, 218, 251, 0.1),
        0 0 30px 12px rgba(0, 0, 0, 0.1)
      `
      : `
        inset 0 0 20px 8px rgba(45, 55, 72, 0.05),
        0 0 30px 12px rgba(0, 0, 0, 0.05)
      `,
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'scale(1.01)',
      boxShadow: darkMode
        ? `
          inset 0 0 25px 10px rgba(97, 218, 251, 0.2),
          0 0 35px 15px rgba(0, 0, 0, 0.15)
        `
        : `
          inset 0 0 25px 10px rgba(45, 55, 72, 0.1),
          0 0 35px 15px rgba(0, 0, 0, 0.08)
        `,
    },
    '& input, & textarea': {
      color: darkMode ? '#fff' : 'rgba(97, 218, 251, 1)', 
      caretColor: '#61dafb',
      fontSize: '1.3rem', 
      backgroundColor: 'transparent',
      padding: '12px 18px', 
      letterSpacing: '0.5px',
    },
    '& fieldset': {
      border: 'none',
    },
  },
  '& .MuiInputLabel-root': {
    color: darkMode ? 'rgba(97, 218, 251, 0.7)' : 'rgba(45, 55, 72, 0.6)', 
    fontWeight: 600,
    transition: 'all 0.3s ease',
    '&.Mui-focused': {
      color: darkMode ? '#61dafb' : 'rgba(97, 218, 251, 0.7)',
      transform: 'scale(1.05)',
    }
  },
});

export const iconStyle = (submissionState, darkMode) => ({
  animation: `${itemPopInAnimation} 0.3s ease-out`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: submissionState === 'success' 
    ? '#61dafb'  
    : submissionState === 'error' 
    ? '#ff5252'  
    : darkMode ? 'rgba(255, 255, 255, 0.8)' : 'rgba(45, 55, 72, 0.8)', 
  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  transform: submissionState ? 'scale(1.2)' : 'scale(1)',
  filter: submissionState === 'success' 
    ? 'drop-shadow(0 0 10px rgba(97, 218, 251, 0.5))' 
    : submissionState === 'error'
    ? 'drop-shadow(0 0 10px rgba(97, 218, 251, 0.8))'
    : 'none',
});

export const buttonStyle = (darkMode) => ({
  flex: '0 0 auto',
  borderRadius: 12,
  color: darkMode ? '#61dafb' : 'rgba(97, 218, 251, 1)',
  border: `2px solid ${darkMode ? 'rgba(97, 218, 251, 0.3)' : 'rgba(45, 55, 72, 0.1)'}`,
  transition: 'all 0.3s ease',
  animation: `${itemPopInAnimation} 0.3s ease-out`,
  fontWeight: 600,
  textTransform: 'none',
  '&:hover': {
    backgroundColor: darkMode
      ? 'rgba(97, 218, 251, 0.1)'
      : 'rgba(97, 218, 251, 0.05)', 
    transform: 'scale(1.05)',
    boxShadow: darkMode
      ? '0 5px 15px rgba(97, 218, 251, 0.2)'
      : '0 5px 15px rgba(45, 55, 72, 0.1)',
  },
  '&:active': {
    transform: 'scale(0.95)',
    boxShadow: 'none',
  }
});