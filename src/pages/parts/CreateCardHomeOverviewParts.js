import React from 'react';
import { 
  Card, 
  CardContent, 
  Box, 
  Typography, 
  Fade, 
  Zoom 
} from '@mui/material';
import { useDarkMode } from '../../contexts/DarkMode';
import {
  CardStyles,
  CardHeaderStyles,
  CardContentStyles,
} from './CardsStylesCreate';

interface CreateCardHomeOverviewPartsProps {
  headerSx?: React.CSSProperties;
  headerAvatar?: React.ReactNode;
  headerTitle: string;
  contentSx?: React.CSSProperties;
  content: React.ReactNode;
  sx?: React.CSSProperties;
  animationDelay?: number;
}

const CreateCardHomeOverviewParts: React.FC<CreateCardHomeOverviewPartsProps> = ({ 
  headerSx, 
  headerAvatar, 
  headerTitle, 
  contentSx, 
  content, 
  sx,
  animationDelay = 0 
}) => {
  const { darkMode } = useDarkMode();

  return (
    <Zoom in={true} style={{ transitionDelay: `${animationDelay}ms` }}>
      <Card 
        sx={{ 
          ...CardStyles(darkMode), 
          ...sx,
          position: 'relative',
          overflow: 'visible',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: '-2px',
            left: '-2px',
            right: '-2px',
            bottom: '-2px',
            background: darkMode 
              ? 'linear-gradient(45deg, rgba(97, 218, 251, 0.2), transparent)' 
              : 'linear-gradient(45deg, rgba(97, 218, 251, 0.1), transparent)',
            zIndex: -1,
            opacity: 0.7,
            transition: 'all 0.3s ease',
          },
          '&:hover::before': {
            opacity: 1,
            transform: 'scale(1.02)',
          }
        }}
      >
        <CardContent
          sx={{
            ...CardContentStyles(darkMode),
            ...contentSx,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            position: 'relative',
          }}
        >
          <Fade in={true} style={{ transitionDelay: `${animationDelay + 100}ms` }}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -10,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '50%',
                  height: '2px',
                  background: darkMode 
                    ? 'linear-gradient(to right, transparent, rgba(97, 218, 251, 0.5), transparent)' 
                    : 'linear-gradient(to right, transparent, rgba(97, 218, 251, 0.3), transparent)',
                },
              }}
            >
              {headerAvatar && (
                <Box 
                  sx={{
                    transform: 'perspective(500px) rotateY(10deg)',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'perspective(500px) rotateY(0deg) scale(1.05)',
                    }
                  }}
                >
                  {headerAvatar}
                </Box>
              )}
            </Box>
          </Fade>

          <Fade in={true} style={{ transitionDelay: `${animationDelay + 200}ms` }}>
            <Typography
              variant="h5"
              component="div"
              sx={{
                ...CardHeaderStyles(darkMode),
                ...headerSx,
                textAlign: 'center',
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -10,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '70%',
                  height: '2px',
                  background: darkMode 
                    ? 'linear-gradient(to right, transparent, rgba(97, 218, 251, 0.7), transparent)' 
                    : 'linear-gradient(to right, transparent, rgba(97, 218, 251, 0.5), transparent)',
                },
              }}
            >
              {headerTitle}
            </Typography>
          </Fade>

          <Fade in={true} style={{ transitionDelay: `${animationDelay + 300}ms` }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 1.5,
                position: 'relative',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: -10,
                  left: 0,
                  right: 0,
                  height: '1px',
                  background: darkMode 
                    ? 'linear-gradient(to right, transparent, rgba(97, 218, 251, 0.3), transparent)' 
                    : 'linear-gradient(to right, transparent, rgba(97, 218, 251, 0.2), transparent)',
                },
              }}
            >
              {content}
            </Box>
          </Fade>
        </CardContent>
      </Card>
    </Zoom>
  );
};

export default CreateCardHomeOverviewParts;