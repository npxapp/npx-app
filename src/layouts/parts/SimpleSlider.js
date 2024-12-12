import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { 
  Box,
  Button,
  Typography,
  IconButton,
} from "@mui/material";
import { useDarkMode } from "../../contexts/DarkMode";
import { useDialer } from "../../contexts/DialerContext";
import { 
  darken,
  alpha,
  useTheme,
} from '@mui/material/styles';
import CallIcon from '@mui/icons-material/Call';
import CallEndIcon from '@mui/icons-material/CallEnd';
import BackspaceIcon from '@mui/icons-material/Backspace';

export default function SimpleSlider() {
  const { darkMode } = useDarkMode();
  const { dialerCode, setDialerCode } = useDialer();

  const theme = useTheme();
  
  // Keypad numbers for each slide
  const slideKeypadNumbers = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
  ];
  
  // Assets for each slide
  const slideAssets = [
    "Dial",
    "Dial",
    "Dial", 
    "Dial",
    "Dial",
    "Dial"
  ];
  
  // Unique phone numbers for each asset
  const slideAssetsNumbers = [
    "1234567890",
    "9876543210",
    "5555555555",
    "1111111111", 
    "9999999999",
    "8888888888"
  ];

  const slideColors = [
    alpha(theme.palette.background.paper, .95),
    `linear-gradient(to bottom, transparent 0%, ${theme.palette.background.paper} 75%, ${theme.palette.background.paper} 100%)`,
    `linear-gradient(to bottom, transparent 0%, ${theme.palette.background.paper} 75%, ${theme.palette.background.paper} 100%)`,
    `linear-gradient(to bottom, transparent 0%, ${theme.palette.background.paper} 75%, ${theme.palette.background.paper} 100%)`,
    `linear-gradient(to bottom, transparent 0%, ${theme.palette.background.paper} 75%, ${theme.palette.background.paper} 100%)`,
    `linear-gradient(to bottom, transparent 0%, ${theme.palette.background.paper} 75%, ${theme.palette.background.paper} 100%)`,
  ];

  // State for each slide with independent matching
  const [currentSlideStates, setCurrentSlideStates] = useState(
    Array(slideAssets.length).fill().map(() => ({
      enteredNumber: '',
      localIsMatch: false,
      matchedAsset: null
    }))
  );

  // Settings for slider remain the same
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  
  const formatPhoneNumber = (number) => {
    // Remove any non-digit characters
    const cleaned = ('' + number).replace(/\D/g, '');

    // If the number is empty, return null
    if (cleaned.length === 0) {
      return null;
    }

    // Apply the formatting for 1-3 digits
    if (cleaned.length <= 3) {
      return `(${cleaned})`;
    }

    // Apply the formatting for 4-6 digits
    if (cleaned.length <= 6) {
      return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3)}`;
    }

    // Apply the formatting for 7-9 digits
    if (cleaned.length <= 9) {
      return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
    }

    // Apply the formatting for 10 digits
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6, 10)}`;
  };
  
  // Handle number button click
  const handleNumberClick = (number, slideIndex) => {
    setCurrentSlideStates(prevStates => {
      const newStates = [...prevStates];
      const currentState = newStates[slideIndex];
      
      // Limit to 10 digits
      const newNumber = (currentState.enteredNumber + number).slice(0, 10);
      
      // Check if number matches the corresponding asset's phone number
      const matchIndex = slideAssetsNumbers.findIndex(assetNumber => assetNumber === newNumber);
      
      // Update local state for the current slide
      newStates[slideIndex] = {
        enteredNumber: newNumber,
        localIsMatch: matchIndex !== -1,
        matchedAsset: matchIndex !== -1 ? slideAssets[matchIndex] : null
      };
      
      return newStates;
    });
  };

  // Handle backspace
  const handleBackspace = (slideIndex) => {
    setCurrentSlideStates(prevStates => {
      const newStates = [...prevStates];
      const currentState = newStates[slideIndex];
      const newNumber = currentState.enteredNumber.slice(0, -1);
      
      // Check if the new number (after backspace) still matches the corresponding asset number
      const matchIndex = slideAssetsNumbers.findIndex(assetNumber => assetNumber === newNumber);
      
      // Update local state for the current slide
      newStates[slideIndex] = {
        enteredNumber: newNumber,
        localIsMatch: matchIndex !== -1,
        matchedAsset: matchIndex !== -1 ? slideAssets[matchIndex] : null
      };
      
     if (matchIndex === -1 || newNumber.length === 0) {
       setDialerCode(null);
     }
      
      return newStates;
    });
  };

  // Handle call
  const handleCall = (slideIndex) => {
    const currentState = currentSlideStates[slideIndex];
    if (currentState.localIsMatch) {
      //alert(`Calling ${currentState.matchedAsset} at ${currentState.enteredNumber}`);
      setDialerCode(currentState.enteredNumber);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
      }}
    >
      <Box
        sx={{
          width: {
            xs: '100vw',
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920,
          },
          py: 0,
        }}
      >
        <Slider
          {...settings}
          className={darkMode ? "dark-slider" : "light-slider"}
          style={{
            height: '100%',
            width: '100%',
          }}
        >
          {slideAssets.map((header, index) => (
            <Box
              key={header}
              style={{
                height: '100%',
                width: "100%",
              }}
            >
              <Box
                className="slide-content"
                style={{
                  background: slideColors[index],
                  height: 660,
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 40,
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    height: '100%',
                    width: '100%',
                  }}
                >
                  <Box
                    sx={{
                      position: 'absolute',
                      display: 'flex',
                      flexDirection: 'column',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      alignItems: 'center',
                    }}
                  >
                    <Typography 
                      variant="h4" 
                      component="h4" 
                        sx={{ 
                          mt: 0, 
                          mb: 4,
                          whiteSpace: 'nowrap',
                          minHeight: '50px',
                          maxWidth: '100%',
                          color: currentSlideStates[index].localIsMatch ? 'inherit' : 'inherit'
                        }}
                    >
                      {formatPhoneNumber(currentSlideStates[index].enteredNumber) || ''}
                    </Typography>
            
                    <Box
                      sx={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        rowGap: 2,
                        columnGap: 5,
                        mt: 11,
                        mb: 4,
                      }}
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, '*', 0, '#'].map((num) => (
                        <Button
                          key={`button-${num}-${index}`}
                          variant="outlined"
                          onClick={() => handleNumberClick(num.toString(), index)}
                          sx={{ 
                            padding: 0,
                            margin: 0,
                            borderRadius: '100px',
                            minWidth: '50px', 
                            minHeight: '50px',
                            fontSize: '1.6rem',
                          }}
                        >
                          {num}
                        </Button>
                      ))}
                    </Box>

                    {/* Call/Backspace IconButton */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 5, flexDirection: 'row-reverse', }}>

                      <Box sx={{ position: 'relative', display: 'inline-block' }}>
                        <IconButton 
                          onClick={() => handleBackspace(index)}
                          color="primary"
                          sx={{ 
                            position: 'relative', 
                            zIndex: 1,
                            '& svg': {
                              transform: 'translateX(-0.2rem)',
                            },
                          }}
                        >
                          <BackspaceIcon 
                            sx={{
                              fontSize: '3rem',
                            }}
                          />
                        </IconButton>
                        <IconButton
                          sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            zIndex: 0,
                            pointerEvents: 'none',
                            backgroundColor: theme.palette.action.active,
                            opacity: 0.1,
                            '& svg': {
                              transform: 'translateX(-0.2rem)',
                            },
                          }}
                        >
                          <BackspaceIcon 
                            sx={{
                              fontSize: '3rem',
                            }}
                          />
                        </IconButton>
                      </Box>
                      <Box sx={{ position: 'relative', display: 'inline-block' }}>
                        <IconButton 
                          onClick={() => handleCall(index)}
                          color={currentSlideStates[index].localIsMatch ? 'success' : 'default'}
                          disabled={!currentSlideStates[index].localIsMatch}
                          sx={{ 
                            position: 'relative', 
                            zIndex: 1 
                          }}
                        >
                          <CallIcon 
                            sx={{
                              fontSize: '3rem',
                            }}
                          />
                        </IconButton>
                        <IconButton
                          sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            zIndex: 0,
                            pointerEvents: 'none',
                            backgroundColor: theme.palette.action.active,
                            opacity: 0.1,
                          }}
                        >
                          <CallIcon 
                            sx={{
                              fontSize: '3rem',
                            }}
                          />
                        </IconButton>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          ))}
        </Slider>
        {/* Existing style jsx remains the same */}
        <style jsx global>{`
          .slick-slider,
          .slick-list,
          .slick-track {
            height: 100% !important;
          }
          .slick-slide {
            height: 660px !important;
            display: flex !important;
            align-items: center;
            justify-content: center;
          }
          .slick-slide > div {
            width: 100%;
          }
          .slick-dots {
            bottom: 10px;
          }
          .slick-dots li button:before {
            color: ${darkMode ? "#fff" : "#000"};
            font-size: 12px;
          }
          .slick-dots li.slick-active button:before {
            color: ${darkMode ? "#1abc9c" : "#000"};
          }
        `}</style>
      </Box>
    </Box>
  );
}