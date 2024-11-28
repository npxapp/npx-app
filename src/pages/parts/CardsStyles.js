export const CardStyles = (darkMode: boolean) => ({
  display: 'flex',
  flexDirection: 'column',
  boxShadow: darkMode
    ? '10px 15px 30px rgba(0, 0, 0, 0.9), -10px -15px 30px rgba(0, 0, 0, 0.7)'
    : '10px 15px 30px rgba(0, 0, 0, 0.6), -10px -15px 30px rgba(0, 0, 0, 0.4)',
  borderRadius: '8px',
  
  '@media (max-width:600px)': {
    width: '100%',
    margin: '0',
    borderRadius: '12px', // Slightly rounded corners
    boxShadow: darkMode
      ? `
        0 1px 3px rgba(0,0,0,0.12),
        0 2px 6px rgba(0,0,0,0.23),
        0 4px 12px rgba(0,0,0,0.35),
        0 8px 24px rgba(0,0,0,0.45),
        0 16px 48px rgba(0,0,0,0.55)
      `
      : `
        0 1px 3px rgba(255,255,255,0.08),
        0 2px 6px rgba(255,255,255,0.16),
        0 4px 12px rgba(255,255,255,0.24),
        0 8px 24px rgba(255,255,255,0.32),
        0 16px 48px rgba(255,255,255,0.40)
      `,
    padding: '10px',
    transform: 'perspective(500px) rotateX(-2deg)', // Subtle 3D effect
    transformStyle: 'preserve-3d',
    background: darkMode 
      ? 'linear-gradient(145deg, rgba(30,30,30,0.9), rgba(20,20,20,0.95))' 
      : 'linear-gradient(145deg, rgba(240,240,240,0.9), rgba(220,220,220,0.95))',
  },
});

export const CardHeaderStyles = (darkMode: boolean) => ({
  fontSize: '3rem',
  color: darkMode ? '#fff' : '#fff',
  display: 'flex',
  flexGrow: 1,
  
  '@media (max-width:600px)': {
    fontSize: '2rem',
    padding: '15px',
    display: 'flex',
    justifyContent: 'center', // Centered for xs
    alignItems: 'center',
    textAlign: 'center',
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
    fontWeight: 700,
    background: darkMode 
      ? 'linear-gradient(90deg, rgba(97,218,251,0.1), rgba(97,218,251,0.2))' 
      : 'linear-gradient(90deg, rgba(255,255,255,0.1), rgba(255,255,255,0.2))',
    borderRadius: '8px',
    boxShadow: darkMode
      ? '0 4px 6px rgba(97,218,251,0.2), 0 1px 3px rgba(97,218,251,0.1)'
      : '0 4px 6px rgba(255,255,255,0.2), 0 1px 3px rgba(255,255,255,0.1)',
    textShadow: darkMode 
      ? '0 0 5px rgba(97,218,251,0.5), 0 0 10px rgba(97,218,251,0.3)' 
      : '0 0 5px rgba(255,255,255,0.5), 0 0 10px rgba(255,255,255,0.3)',
    transform: 'perspective(300px) translateZ(10px)', // Slight 3D lift
  },
});

export const CardContentStyles = (darkMode: boolean) => ({
  background: darkMode
    ? 'linear-gradient(135deg, rgba(0, 127, 255, 0.15) 25%, rgba(0, 127, 255, 0.25) 25%, rgba(0, 127, 255, 0.25) 50%, rgba(0, 127, 255, 0.15) 50%, rgba(0, 127, 255, 0.15) 75%, rgba(0, 127, 255, 0.25) 75%)' 
    : '#2d3748',
  color: darkMode ? '#f5f5f5' : '#fff',
  display: 'flex',
  flexDirection: 'column',
  
  '@media (max-width:600px)': {
    padding: '15px',
    gap: '15px',
    background: darkMode
      ? 'linear-gradient(145deg, rgba(30,40,50,0.9), rgba(20,30,40,0.95))'
      : 'linear-gradient(145deg, rgba(50,60,70,0.9), rgba(40,50,60,0.95))',
    borderRadius: '10px',
    boxShadow: darkMode
      ? `
        inset 0 1px 3px rgba(0,0,0,0.2),
        inset 0 2px 6px rgba(0,0,0,0.3),
        0 4px 12px rgba(0,0,0,0.2)
      `
      : `
        inset 0 1px 3px rgba(255,255,255,0.1),
        inset 0 2px 6px rgba(255,255,255,0.2),
        0 4px 12px rgba(255,255,255,0.1)
      `,
  },
});

export const AvatarIconStyles = (darkMode: boolean) => ({
  backgroundColor: 'transparent',
  padding: '10px',
  borderRadius: '50%',
  borderColor: '#61dafb',
  color: darkMode ? '#fff' : '#fff',
  '&.MuiIconButton-root': {
    backgroundColor: 'transparent',
    '&:hover': {
      backgroundColor: 'transparent',
    },
    '&:active': {
      backgroundColor: 'transparent',
    },
    '&:focus': {
      backgroundColor: 'transparent',
    },
  },
  '& .MuiSvgIcon-root': {
    fontSize: '6rem',
    backgroundColor: 'transparent',
  },
  
  '@media (max-width:600px)': {
    padding: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: darkMode
      ? 'linear-gradient(145deg, rgba(50,50,50,0.8), rgba(30,30,30,0.9))'
      : 'linear-gradient(145deg, rgba(240,240,240,0.8), rgba(220,220,220,0.9))',
    boxShadow: darkMode
      ? `
        0 4px 6px rgba(0,0,0,0.3),
        inset 0 2px 4px rgba(97,218,251,0.2)
      `
      : `
        0 4px 6px rgba(255,255,255,0.3),
        inset 0 2px 4px rgba(255,255,255,0.2)
      `,
    '& .MuiSvgIcon-root': {
      fontSize: '4rem',
      color: darkMode ? '#61dafb' : '#ffffff',
      textShadow: darkMode 
        ? '0 0 5px rgba(97,218,251,0.5), 0 0 10px rgba(97,218,251,0.3)' 
        : '0 0 5px rgba(255,255,255,0.5), 0 0 10px rgba(255,255,255,0.3)',
    },
  },
});

export const CardListStyles = (darkMode: boolean) => ({
  display: 'flex',
  flexGrow: 1,
  alignItems: 'flex-start',
  '& .MuiListItem-root': {
    '&::before': {
      content: '"•"',
      color: darkMode ? '#fff' : '#fff',
      marginRight: '8px',
      fontSize: '3rem',
    },
    '&:hover': {
      backgroundColor: 'transparent',
    },
    '&:focus': {
      backgroundColor: 'transparent',
    },
    '&.Mui-selected': {
      backgroundColor: 'transparent',
    },
  },
  
  '@media (max-width:600px)': {
    display: 'flex',
    flexDirection: 'column', // Force column layout on xs
    alignItems: 'center', // Center items
    justifyContent: 'center',
    gap: '15px',
    padding: '10px 0',
    '& .MuiListItem-root': {
      width: '100%', // Full width
      justifyContent: 'center', // Center list items
      textAlign: 'center',
      padding: '10px',
      borderRadius: '8px',
      background: darkMode
        ? 'linear-gradient(145deg, rgba(40,40,40,0.8), rgba(30,30,30,0.9))'
        : 'linear-gradient(145deg, rgba(230,230,230,0.8), rgba(220,220,220,0.9))',
      boxShadow: darkMode
        ? `
          0 2px 4px rgba(0,0,0,0.2),
          inset 0 1px 3px rgba(97,218,251,0.1)
        `
        : `
          0 2px 4px rgba(255,255,255,0.2),
          inset 0 1px 3px rgba(255,255,255,0.1)
        `,
      transition: 'all 0.3s ease-in-out',
      
      '&::before': {
        content: '"•"',
        color: darkMode ? '#61dafb' : '#ffffff',
        marginRight: '10px',
        fontSize: '2rem',
        textShadow: darkMode 
          ? '0 0 5px rgba(97,218,251,0.5), 0 0 10px rgba(97,218,251,0.3)' 
          : '0 0 5px rgba(255,255,255,0.5), 0 0 10px rgba(255,255,255,0.3)',
      },
    },
  },
});

export const CardListItemStyles = (darkMode: boolean) => ({
  alignItems: 'flex-start',
  '& .MuiListItemText-primary': {
    fontSize: '1.6rem',
    color: darkMode ? '#fff' : '#fff',
    fontWeight: 700,
  },
  
  '@media (max-width:600px)': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    '& .MuiListItemText-primary': {
      fontSize: '1.2rem',
      fontWeight: 600,
      color: darkMode ? '#61dafb' : '#ffffff',
      textAlign: 'center',
      textShadow: darkMode 
        ? '0 0 3px rgba(97,218,251,0.5), 0 0 6px rgba(97,218,251,0.3)' 
        : '0 0 3px rgba(255,255,255,0.5), 0 0 6px rgba(255,255,255,0.3)',
      letterSpacing: '0.05em',
    },
  },
});