import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { TextField, Button, Box, CircularProgress } from '@mui/material';
import { useDarkMode } from '../../contexts/DarkMode';
import getCardIcon from './DashboardIcons';
import CreateIcons from './CreateIcons';
import CreateCardStripe from './CreateCardStripe';
import { CardStyles, CardHeaderStyles, CardHeaderTextStyles, AvatarIconStyles } from './DownloadsStyles';

export function CardStripe() {
  const { darkMode } = useDarkMode();
  const [sessionId, setSessionId] = useState(null);
  const [token, setToken] = useState(null);
  const [link, setLink] = useState(null);
  const [file, setFile] = useState(null);
  const [last4, setLast4] = useState('4242');
  const [type, setType] = useState('stripe');
  const [messageResponse, setMessageResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const randomSessionId = `npx-app-${Math.random().toString(36).substring(2, 26)}`;
    
    const payload = { session_id: randomSessionId, last4, type, product: 'app.tar.gz' };

    setSessionId(randomSessionId);
    
    try {
      const response = await fetch('/npx/test/restore', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      if (response.ok) {
        setMessageResponse(data.status);
        setLast4(data.card_last4);
        if (data.download_link) {
          try {
            const origin = window.location.href.match(/^https?:\/\/[^\/]+/)[0];
            setType(data.card_type);
            const formattedLink = data.download_link.replace(/^https?:\/\/[^\/]+/, origin);
            setLink(formattedLink);
          } catch (error) {
            console.error("Error formatting download link:", error);
          }
          setFile(data.product);
        }
        setToken(data.token);
      } else {
        setMessageResponse('Unexpected response or error');
      }
    } catch (error) {
      setMessageResponse(`Error: ${error.message}. Please check the request or try again later.`);
      setLink(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <CreateCardStripe
      sx={CardStyles(darkMode)}
      headerSx={CardHeaderStyles(darkMode)}
      headerTitleSx={CardHeaderTextStyles(darkMode)}
      headerTitle="Stripe"
      content={
        <form onSubmit={handleSubmit}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginTop: 2,
            }}
          >
            {loading ? (
              <CircularProgress sx={{ color: darkMode ? '#61dafb' : '#007fff' }} />
            ) : (
              <>
                <Box
                  sx={{
                    width: {
                      xs: '100%',
                      sm: '50%',
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    {getCardIcon(type)}
                  </Box>

                  <Box
                    sx={{
                      width: '100%',
                      height: '100px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 40,
                      height: 80,
                      backgroundColor: 'rgba(97, 218, 251, .2)',
                      fontWeight: 900,
                      color: darkMode ? '#61dafb' : '#007fff',
                      fontSize: 'clamp(1rem, 6vh, 3rem)',
                      overflowX: 'auto',
                      whiteSpace: 'nowrap',
                      paddingX: 1,
                      my: 2,
                      '&::-webkit-scrollbar': { display: 'none' },
                    }}
                  >
                    {last4}
                  </Box>

                  <Box
                    sx={{
                      width: '100%',
                      height: '100px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 40,
                      height: 80,
                      backgroundColor: 'rgba(97, 218, 251, .2)',
                      fontWeight: 900,
                      color: darkMode ? '#61dafb' : '#007fff',
                      fontSize: 'clamp(1rem, 6vh, 3rem)',
                      overflowX: 'auto',
                      whiteSpace: 'nowrap',
                      paddingX: 1,
                      my: 2,
                      '&::-webkit-scrollbar': { display: 'none' },
                    }}
                  >
                    {file}
                  </Box>

                  <Box
                    sx={{
                      width: '100%',
                      height: '100px',
                      display: 'flex',
                      justifyContent: 'flex-start',
                      alignItems: 'center',
                      borderRadius: 40,
                      height: 80,
                      backgroundColor: 'rgba(97, 218, 251, .2)',
                      fontWeight: 900,
                      color: darkMode ? '#61dafb' : '#007fff',
                      fontSize: 'clamp(1rem, 6vh, 3rem)',
                      overflowX: 'auto',
                      whiteSpace: 'nowrap',
                      paddingX: 1,
                      my: 2,
                      '&::-webkit-scrollbar': { display: 'none' },
                    }}
                  >
                    {link || messageResponse}
                  </Box>

                  <Box
                    sx={{
                      width: '100%',
                      height: '100px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 40,
                      height: 80,
                      backgroundColor: 'rgba(97, 218, 251, .2)',
                      fontWeight: 900,
                      color: darkMode ? '#61dafb' : '#007fff',
                      fontSize: 'clamp(1rem, 6vh, 3rem)',
                      overflowX: 'auto',
                      whiteSpace: 'nowrap',
                      paddingX: 1,
                      my: 2,
                      '&::-webkit-scrollbar': { display: 'none' },
                    }}
                  >
                    {token}
                  </Box>

                  <TextField
                    id="last4"
                    label="Last4"
                    variant="outlined"
                    fullWidth
                    value={last4}
                    onChange={(e) => setLast4(e.target.value)}
                    sx={{
                      marginBottom: 2,
                    }}
                    InputLabelProps={{
                      style: { color: darkMode ? '#61dafb' : '#007fff' },
                    }}
                    InputProps={{
                      style: {
                        borderRadius: 40,
                        height: 80,
                        fontSize: 'clamp(1rem, 6vh, 3rem)',
                        color: darkMode ? '#61dafb' : '#007fff',
                      },
                    }}
                  />

                  <Button
                    type="submit"
                    variant="outlined"
                    fullWidth
                    sx={{
                      backgroundColor: 'transparent',
                      color: darkMode ? '#61dafb' : '#007fff',
                      fontSize: 'clamp(1rem, 6vh, 3rem)',
                      borderRadius: 40,
                      height: 80,
                      border: '1px solid #61dafb',
                    }}
                    disabled={loading}
                  >
                    Pay
                  </Button>
                </Box>
              </>
            )}
          </Box>
        </form>
      }
    />
  );
}