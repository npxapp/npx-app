import React, { useEffect, useState } from 'react';
import { Box, Button, Drawer } from '@mui/material';
import { PaymentProvider } from './parts/PaymentContext';
import SlidePayments from './parts/SlidePayments';
import SlideDetails from './parts/SlideDetails';
import SlideReconciliation from './parts/SlideReconciliation';
import { useDarkMode } from '../contexts/DarkMode';

const Dashboard = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [inputCode, setInputCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [codeLength, setCodeLength] = useState(0);

  const { darkMode } = useDarkMode();

  useEffect(() => {
    setDrawerOpen(true);
  }, []);

  const handleCloseDrawer = () => {
    setDrawerOpen(false);
  };

  const handleButtonPress = (value) => {
    let newCode = inputCode + value.toString();

    if (newCode === '4242') {
      handleCloseDrawer();
      return;
    }

    setCodeLength((prevLength) => prevLength + 1);

    if (codeLength === 3) {
      newCode = '';
      setCodeLength(0);
    }

    setInputCode(newCode);
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
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              my: 1,
            }}
          >
            {[1, 2, 3].map((value) => (
              <Button
                key={value}
                variant="outlined"
                sx={{
                  backgroundColor: 'rgba(97, 218, 251, .2)',
                  color: darkMode ? '#61dafb' : '#007fff',
                  fontSize: 'clamp(1rem, 6vh, 2rem)',
                  borderRadius: 20,
                  height: 40,
                  border: '1px solid #61dafb',
                  width: 40,
                  animation: codeLength === 0 && 'pulse 2.5s',
                }}
                onClick={() => handleButtonPress(value)}
                disabled={loading}
              >
                {value}
              </Button>
            ))}
          </Box>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              my: 1,
            }}
          >
            {[4, 5, 6].map((value) => (
              <Button
                key={value}
                variant="outlined"
                sx={{
                  backgroundColor: 'rgba(97, 218, 251, .2)',
                  color: darkMode ? '#61dafb' : '#007fff',
                  fontSize: 'clamp(1rem, 6vh, 2rem)',
                  borderRadius: 20,
                  height: 40,
                  border: '1px solid #61dafb',
                  width: 40,
                  animation: codeLength === 0 && 'pulse 2.5s',
                }}
                onClick={() => handleButtonPress(value)}
                disabled={loading}
              >
                {value}
              </Button>
            ))}
          </Box>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              my: 1,
            }}
          >
            {[7, 8, 9].map((value) => (
              <Button
                key={value}
                variant="outlined"
                sx={{
                  backgroundColor: 'rgba(97, 218, 251, .2)',
                  color: darkMode ? '#61dafb' : '#007fff',
                  fontSize: 'clamp(1rem, 6vh, 2rem)',
                  borderRadius: 20,
                  height: 40,
                  border: '1px solid #61dafb',
                  width: 40,
                  animation: codeLength === 0 && 'pulse 2.5s',
                }}
                onClick={() => handleButtonPress(value)}
                disabled={loading}
              >
                {value}
              </Button>
            ))}
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              mt: 1,
              mb: 2,
            }}
          >
            {['*','0','#'].map((value) => (
              <Button
                key={value}
                variant="outlined"
                sx={{
                  backgroundColor: 'rgba(97, 218, 251, .2)',
                  color: darkMode ? '#61dafb' : '#007fff',
                  fontSize: 'clamp(1rem, 6vh, 2rem)',
                  borderRadius: 20,
                  height: 40,
                  border: '1px solid #61dafb',
                  width: 40,
                  animation: codeLength === 0 && 'pulse 2.5s',
                }}
                onClick={() => handleButtonPress(value)}
                disabled={loading}
              >
                {value}
              </Button>
            ))}
          </Box>

          <Button
            type="submit"
            variant="outlined"
            sx={{
              display: 'none',
              backgroundColor: 'rgba(97, 218, 251, .2)',
              color: darkMode ? '#61dafb' : '#007fff',
              fontSize: 'clamp(1rem, 6vh, 2rem)',
              borderRadius: 20,
              height: 40,
              border: '1px solid #61dafb',
              animation: codeLength === 0 && 'pulse 2.5s',
              textTransform: 'none',
            }}
            onClick={handleCloseDrawer}
            disabled={loading}
          >
            Go
          </Button>
    <style jsx>{`
      @keyframes pulse {
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
    `}</style>
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

export default Dashboard;