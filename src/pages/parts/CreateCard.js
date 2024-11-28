import React, { useState } from 'react';
import { Card, CardContent, CardHeader, Box, IconButton } from '@mui/material';
import { useDarkMode } from '../../contexts/DarkMode';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const CardStyles = {
  marginBottom: 2,
  height: 350,
  overflow: 'hidden',
  position: 'relative',
  transition: 'height 0.3s ease',
};

const CardContentStyles = {
  height: '100%',
  overflow: 'hidden',
};

const FadeOverlay = (darkMode) => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  height: '50%',
  zIndex: 2,
  pointerEvents: 'none',
  borderBottomLeftRadius: 20,
  borderBottomRightRadius: 20,
  background: darkMode
    ? 'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))'
    : 'linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1))',
  transition: 'background 3s ease',
});

const CreateCard = ({ headerTitle, headerSx, content, sx }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { darkMode } = useDarkMode();

  const handleToggle = () => setIsOpen((prev) => !prev);

  return (
    <>
      <style>
        {`
          @keyframes bounce {
            0% { transform: scale(1); }
            30% { transform: scale(1.1); }
            50% { transform: scale(0.95); }
            100% { transform: scale(1); }
          }

          @keyframes pulsateTextShadow {
            0% {
              text-shadow: 0 0 1px rgba(61, 218, 251, 0.5), 
                           0 0 2px rgba(61, 218, 251, 0.4), 
                           0 0 3px rgba(61, 218, 251, 0.3);
            }
            50% {
              text-shadow: 0 0 2px rgba(61, 218, 251, 0.8), 
                           0 0 4px rgba(61, 218, 251, 0.7), 
                           0 0 6px rgba(61, 218, 251, 0.6);
            }
            100% {
              text-shadow: 0 0 1px rgba(61, 218, 251, 0.5), 
                           0 0 2px rgba(61, 218, 251, 0.4), 
                           0 0 3px rgba(61, 218, 251, 0.3);
            }
          }
        `}
      </style>
      <Card
        sx={{
          ...CardStyles,
          height: isOpen ? 'auto' : 350,
          ...sx,
          ...(isOpen && {
            animation: 'bounce 0.2s ease',
          }),
        }}
      >
        <CardHeader
          title={headerTitle}
          sx={{
            ...headerSx,
            ...(isOpen && darkMode && {
              animation: 'pulsateTextShadow 1.5s infinite',
            }),
          }}
          action={
            <IconButton onClick={handleToggle}>
              <ExpandMoreIcon />
            </IconButton>
          }
        />
        <CardContent
          sx={{
            ...CardContentStyles,
            ...(isOpen && darkMode && {
              animation: 'pulsateTextShadow 1.5s infinite',
            }),
          }}
        >
          {content}
        </CardContent>
        <Box
          sx={{
            ...FadeOverlay(darkMode),
            ...(isOpen && {
              background: 'transparent',
            }),
          }}
        />
      </Card>
    </>
  );
};

export default CreateCard;