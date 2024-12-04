import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  IconButton, 
  Typography, 
  Box, 
  Slide, 
  keyframes, 
  styled,
  alpha
} from '@mui/material';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import ContactPopup from './ContactPopup';
import { useDarkMode } from '../../contexts/DarkMode';
import { 
  AppBarStyles, 
  ToolbarStyles, 
  TypographyStyles, 
  IconButtonStyles 
} from './SnackStyles';


const ghostPopAnimation = keyframes`
  0% { 
    opacity: 0; 
    transform: scale(0.2);
  }
  50% { 
    opacity: 0.8; 
    transform: scale(2);
  }
  100% { 
    opacity: 0; 
    transform: scale(3);
  }
`;

const textShakeAnimation = keyframes`
  0%, 100% { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(-3px); }
  20%, 40%, 60%, 80% { transform: translateX(3px); }
`;

const iconShakeAnimation = keyframes`
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-2px); }
  75% { transform: translateX(2px); }
`;

const GhostIcon = styled(Box)(({ theme }) => ({
  position: 'fixed',
  pointerEvents: 'none',
  zIndex: theme.zIndex.appBar + 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: alpha(theme.palette.grey[300], 0.4),
  borderRadius: '50%',
  animation: `${ghostPopAnimation} 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards`,
}));

const SnackBox = () => {
  const { darkMode } = useDarkMode();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState('left');
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [ghostPosition, setGhostPosition] = useState(null);
  const [shouldShake, setShouldShake] = useState(false);

  const textItems = [
    "I need a Single Page Application",
    "I need an eCommerce solution", 
    "I want to talk to a Programmer",
  ];

  const handleNext = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setGhostPosition({
      left: rect.left + rect.width / 2,
      top: rect.top + rect.height / 2,
      width: rect.width,
      height: rect.height
    });

    setSlideDirection('left');
    setCurrentIndex((prevIndex) => (prevIndex + 1) % textItems.length);

    setShouldShake(true);
    
    setTimeout(() => {
      setGhostPosition(null);
      setShouldShake(false);
    }, 500);
  };

  const handleTextClick = () => {
    setIsPopupOpen(true);
  };

  const handlePopupClose = () => {
    setIsPopupOpen(false);
  };

  return (
    <>
      {ghostPosition && (
        <GhostIcon 
          sx={{
            left: ghostPosition.left - (ghostPosition.width * 1.5),
            top: ghostPosition.top - (ghostPosition.height * 1.5),
            width: ghostPosition.width * 3,
            height: ghostPosition.height * 3,
          }}
        >
          <ArrowForwardOutlinedIcon 
            sx={{ 
              color: 'primary.main',
              fontSize: ghostPosition.width * 1.5 
            }} 
          />
        </GhostIcon>
      )}

      <AppBar
        position="fixed"
        sx={AppBarStyles(darkMode)}
      >
        <Toolbar
          sx={ToolbarStyles(darkMode)}
        >
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            overflow: 'hidden', 
            width: '100%' 
          }}>
            <Slide
              key={currentIndex}
              direction={slideDirection}
              in={true}
              mountOnEnter
              unmountOnExit
            >
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                width: '100%',
                justifyContent: 'space-between'
              }}>
                <Typography
                  variant="body1"
                  sx={{
                    ...TypographyStyles(darkMode),
                    ...(shouldShake && {
                      animation: `${textShakeAnimation} 0.5s ease-in-out`
                    }),
                  }}
                  onClick={handleTextClick}
                >
                  {textItems[currentIndex]}
                </Typography>
                
                <IconButton
                  color="inherit"
                  onClick={handleNext}
                  sx={{ 
                    ...IconButtonStyles(darkMode),
                    ...(shouldShake && {
                      animation: `${iconShakeAnimation} 0.4s ease-in-out`
                    }),
                  }}
                >
                  <ArrowForwardOutlinedIcon />
                </IconButton>
              </Box>
            </Slide>
          </Box>
        </Toolbar>
      </AppBar>

      {isPopupOpen && (
        <ContactPopup 
          onClose={handlePopupClose} 
        />
      )}
    </>
  );
};

export default SnackBox;