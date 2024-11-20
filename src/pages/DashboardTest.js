import React, { useEffect, useState } from 'react';
import { Box, Button, Drawer } from '@mui/material';
import { PaymentProvider } from './parts/PaymentContext';
import SlidePayments from './parts/SlidePayments';
import SlideDetails from './parts/SlideDetails';
import SlideReconciliation from './parts/SlideReconciliation';
import { useDarkMode } from '../contexts/DarkMode';

const DashboardTest = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [inputCode, setInputCode] = useState('');
  const [buttonAnimationKeys, setButtonAnimationKeys] = useState({});
  const [animationState, setAnimationState] = useState(false);
  const [globalAnimationKey, setGlobalAnimationKey] = useState(0);
  const { darkMode } = useDarkMode();

  useEffect(() => {
    setDrawerOpen(true);
  }, []);

  const handleCloseDrawer = () => {
    setDrawerOpen(false);
  };

  const handleButtonPress = (value) => {
    const newCode = inputCode + value.toString();
    
    // Update the specific button's animation key
    setButtonAnimationKeys(prev => ({
      ...prev,
      [value]: (prev[value] || 0) + 1
    }));

    // Check if the code matches the correct sequence
    if (newCode === '4242') {
      handleCloseDrawer();
      setAnimationState(false);
      setInputCode('');
      return;
    }

    setInputCode(newCode);
  };

  useEffect(() => {
    if (inputCode.length === 4) {
      setGlobalAnimationKey(prev => prev + 1);
      setAnimationState(true);
      setInputCode('');
    }
  }, [inputCode]);

  // Function to dynamically generate keyframes based on global animation key
  const generateKeyframes = () => {
    const numberOfKeyframes = globalAnimationKey + 1; // Unlimited resets
    return [...Array(numberOfKeyframes)].map((_, i) => `
      @keyframes pulse-button-${i} {
        0% {
          background-color: rgba(97, 218, 251, .2);
        }
        20% {
          background-color: rgba(97, 218, 251, .6);
        }
        100% {
          background-color: rgba(97, 218, 251, .2);
        }
      }
    `).join('\n');
  };

  return (
    <PaymentProvider>
      <Drawer
        anchor="top"
        open={drawerOpen}
        variant="temporary"
        onClose={handleCloseDrawer}
        sx={{
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '100vh',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
          }}
        >
          {[
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
            ['*', 0, '#'],
          ].map((row, rowIndex) => (
            <Box
              key={rowIndex}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                my: 1,
              }}
            >
              {row.map((value) => {
                const individualAnimation = buttonAnimationKeys[value] ? `pulse-button-${buttonAnimationKeys[value]}` : '';
                const globalAnim = animationState ? `pulse-button-${globalAnimationKey}` : '';
                const combinedAnimation = globalAnim || individualAnimation;

                return (
                  <Button
                    key={value}
                    variant="outlined"
                    sx={{
                      backgroundColor: 'rgba(97, 218, 251, .2)',
                      '&:active': { backgroundColor: 'rgba(97, 218, 251, .6)' },
                      '&:hover': { backgroundColor: 'rgba(97, 218, 251, .6)' },
                      '&:focus': { animation: 'pulse 2.5s' },
                      color: darkMode ? '#61dafb' : '#007fff',
                      fontSize: 'clamp(1rem, 6vh, 2rem)',
                      borderRadius: 20,
                      height: 40,
                      border: '1px solid #61dafb',
                      width: 40,
                      mx: 1,
                      animation: combinedAnimation ? `${combinedAnimation} 2.5s` : 'none',
                    }}
                    onClick={() => handleButtonPress(value)}
                  >
                    {value}
                  </Button>
                );
              })}
            </Box>
          ))}
          <style jsx>{generateKeyframes()}</style>
        </Box>
      </Drawer>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <SlidePayments />
        <SlideDetails />
        <SlideReconciliation />
      </Box>
    </PaymentProvider>
  );
};

export default DashboardTest;