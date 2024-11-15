import React, { useState, useEffect } from 'react';
import { Box, CircularProgress } from '@mui/material';
import { useDarkMode } from '../../contexts/DarkMode';
import { useLocation } from 'react-router-dom';
import CreateIcons from './CreateIcons';
import CreateCardPaid from './CreateCardPaid';
import {
  CardStyles,
  CardHeaderStyles,
  CardHeaderTextStyles,
  AvatarIconStyles,
  ListStyles,
  ListItemTextStyles
} from './PaidStyles';

export function CardPaid() {
  const { darkMode } = useDarkMode();
  const location = useLocation();
  const [sessionId, setSessionId] = useState(null);
  const [token, setToken] = useState(null);
  const [link, setLink] = useState(null);
  const [file, setFile] = useState(null);
  const [messageResponse, setMessageResponse] = useState(null);
  const [loading, setLoading] = useState(true);

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
        const payload = { session_id: sessionId, product: 'app.tar.gz' };

        try {
          const response = await fetch('/npx/sample', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
          });

          const data = await response.json();

          if (data.status && data.status === 'OK') {
            setMessageResponse(data.status);
            setFile(data.product);
            if (data.download_link) {
              try {
                const origin = window.location.href.match(/^https?:\/\/[^\/]+/)[0];
                const formattedLink = data.download_link.replace(/^https?:\/\/[^\/]+/, origin);
                setLink(formattedLink);
              } catch (error) {
                console.error("Error formatting download link:", error);
              }
            }
            setToken(data.token);
          } else {
            setMessageResponse('Unexpected response or error');
          }
        } catch (error) {
          setMessageResponse(`Error: ${error.message}. Please check the request or try again later. URL: /npx/sample, Stack Trace: ${error.stack || 'N/A'}`);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchPaymentStatus();
  }, [sessionId]);

  return (
    <CreateCardPaid
      sx={CardStyles(darkMode)}
      headerSx={CardHeaderStyles(darkMode)}
      headerTitleSx={CardHeaderTextStyles(darkMode)}
      headerTitle="Paid"
      content={
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 2 }}>
          {loading ? (
            <CircularProgress sx={{ color: darkMode ? '#61dafb' : '#007fff' }} />
          ) : (
            <>
              <Box
                sx={{
                  width: '100%',
                  height: '100px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
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
                {link}
              </Box>
              <Box
                sx={{
                  width: '100%',
                  height: '100px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'rgba(97, 218, 251, .2)',
                  fontWeight: 900,
                  color: darkMode ? '#61dafb' : '#007fff',
                  fontSize: 'clamp(1rem, 6vh, 3rem)',
                }}
              >
                {token}
              </Box>
              <Box
                sx={{
                  textAlign: 'center',
                  color: darkMode ? '#61dafb' : '#007fff',
                  fontSize: 'clamp(1rem, 6vh, 3rem)',
                }}
              >
                {messageResponse}
              </Box>
            </>
          )}
        </Box>
      }
    />
  );
}