import React, { useState, useRef, useEffect } from 'react';
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
import { useParams, useLocation } from 'react-router-dom';

export function CardSuccess() {
  const { darkMode } = useDarkMode();
  const buttonRef = useRef(null);
  const location = useLocation();
  const { product } = useParams();

  const [sessionId, setSessionId] = useState(null);
  const [token, setToken] = useState(null);
  const [link, setLink] = useState(null);
  const [file, setFile] = useState(null);
  const [messageResponse, setMessageResponse] = useState(null);
  const [loading, setLoading] = useState(true);

  const BoxStyles = (darkMode) => ({
    width: '100%',
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
  });

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const id = params.get('session_id');
    if (id) {
      setSessionId(id);
    }
  }, [location]);

  useEffect(() => {
    const fetchPaymentStatus = async () => {
      if (!sessionId) {
        const randomSessionId = `npx-app-${Math.random().toString(36).substring(2, 26)}`;
        setSessionId(randomSessionId);
      } else {
        const payload = { session_id: sessionId, product: product };

        try {
          const response = await fetch('/npx/success', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
          });

          const data = await response.json();

          if (data.status === 'OK') {
            setMessageResponse(data.status);
            setFile(data.product);

            if (data.download_link) {
              const origin = window.location.href.match(/^https?:\/\/[^\/]+/)[0];
              const formattedLink = data.download_link.replace(/^https?:\/\/[^\/]+/, origin);
              setLink(formattedLink);
            }

            setToken(data.token);
          } else {
            setMessageResponse('Unexpected response or error');
          }
        } catch (error) {
          setMessageResponse(
            `Error: ${error.message}. Please check the request or try again later. URL: /npx/sample, Stack Trace: ${
              error.stack || 'N/A'
            }`
          );
        } finally {
          setLoading(false);
        }
      }
    };

    if (sessionId) {
      fetchPaymentStatus();
    }
  }, [sessionId, product]);

  const toggleClass = () => {
    const button = buttonRef.current;
    if (button) {
      button.classList.toggle('ResetMe');
    }
  };

  const navigateOpen = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
    toggleClass();
  };

  return (
    <Card variant="demo">
      <CardHeader
        variant="demo"
        title={
          <Typography variant="h6" component="h6">
            Paid Up!
          </Typography>
        }
      />
      <CardContent>
        <>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 2,
            }}
          >
            {loading ? (
              <CircularProgress sx={{ color: darkMode ? '#61dafb' : '#007fff' }} />
            ) : (
              <>
                <Box sx={{ width: { xs: '100%', sm: '50%' } }}>
                  <Box
                    sx={{
                      ...BoxStyles(darkMode),
                      justifyContent: 'center',
                      backgroundColor: 'transparent',
                    }}
                  >
                    <Button
                      ref={buttonRef}
                      fullWidth
                      onClick={() => navigateOpen(link)}
                      variant="contained"
                      sx={{
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
                  </Box>
                  <Box sx={BoxStyles(darkMode)}>{file}</Box>
                  <Box sx={BoxStyles(darkMode)}>{link}</Box>
                  <Box sx={BoxStyles(darkMode)}>{token}</Box>
                  <Box
                    sx={{
                      textAlign: 'center',
                      color: darkMode ? '#61dafb' : '#007fff',
                      fontSize: 'clamp(1rem, 6vh, 3rem)',
                    }}
                  >
                    {messageResponse}
                  </Box>
                </Box>
              </>
            )}
          </Box>
        </>
      </CardContent>
    </Card>
  );
}
