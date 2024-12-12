import React, { useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { 
  TextField, 
  Button, 
  Box, 
  CircularProgress,
  Card,
  CardContent,
  Typography,
  CardHeader,
} from '@mui/material';
import { useDarkMode } from '../../contexts/DarkMode';
import CreateIcons from './CreateIcons';

export function CardGet() {
  const { darkMode } = useDarkMode();
  const buttonRef = useRef(null);
  const [token, setToken] = useState(null);
  const [link, setLink] = useState('');
  const [messageResponse, setMessageResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const payload = { token };

    try {
      const response = await fetch('/npx/access', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      if (response.ok) {
        setMessageResponse(data.status);

        if (data.download_link) {
          try {
            const origin = window.location.href.match(/^https?:\/\/[^\/]+/)[0];
            const formattedLink = data.download_link.replace(/^https?:\/\/[^\/]+/, origin);
            setLink(formattedLink);
          } catch (error) {
            console.error('Error formatting download link:', error);
          }
        }
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

  const ResetButton = {
    '&.ResetMe': {
      backgroundColor: darkMode ? '#61dafb' : '#4fa3d7',
    },
  };

  const toggleClass = () => {
    const button = buttonRef.current;
    if (button && !button.classList.contains('ResetMe')) {
      button.classList.add('ResetMe');
    } else if (button) {
      button.classList.remove('ResetMe');
    }
  };

  const navigateOpen = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
    toggleClass();
  };

  return (
    <Card
      variant="demo"
    >
      <CardHeader
        variant="demo"
        title={
          <Typography
            variant="h6"
            component="h6"
          >
            Get
          </Typography>
        }
      />
       <CardContent>
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

                  <TextField
                    id="token"
                    label="Token"
                    variant="outlined"
                    fullWidth
                    value={token}
                    onChange={(e) => setToken(e.target.value)}
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
                    Send
                  </Button>
                  {link ? (
                    <Button
                      ref={buttonRef}
                      fullWidth
                      onClick={() => navigateOpen(link)}
                      variant="contained"
                      sx={{
                        mt: 2,
                        fontSize: '3rem',
                        '@media (min-width: 480px)': {
                          fontSize: 'clamp(1rem, 3vw, 3rem)',
                        },
                        borderRadius: 40,
                        height: 80,
                        border: darkMode ? '1px solid #61dafb' : '1px solid #8ce1fc',
                        color: '#fff',
                        backgroundColor: darkMode ? '#61dafb' : '#4fa3d7',
                        textTransform: 'none',
                      }}
                    >
                      Download
                    </Button>
                  ) : (
                    messageResponse
                  )}
                </Box>
              </>
            )}
          </Box>
        </form>
       </CardContent>
    </Card>
  );
}