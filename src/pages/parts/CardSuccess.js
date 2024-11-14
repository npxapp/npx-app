import React, { useState, useEffect } from 'react';
import { Box, CircularProgress } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import { useDarkMode } from '../../contexts/DarkMode';
import { useLocation } from 'react-router-dom';
import CreateIcons from './CreateIcons';
import CreateCardSuccess from './CreateCardSuccess';
import { CardStyles, CardHeaderStyles, CardHeaderTextStyles, AvatarIconStyles, ListStyles, ListItemTextStyles } from './PaidStyles';

export function CardSuccess() {
  const { darkMode } = useDarkMode();
  const location = useLocation();
  const [sessionId, setSessionId] = useState(null);
  const [token, setToken] = useState(null);
  const [messageResponse, setMessageResponse] = useState(null);
  const [loading, setLoading] = useState(true);  // Track loading state

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
        const payload = { session_id: sessionId };

        try {
          const response = await fetch('/npx/sample', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
          });

          const data = await response.json();

          if (data.status && data.status === 'OK') {
            setMessageResponse(data.status);
            setToken(data.token);
          } else {
            setMessageResponse('Unexpected response or error');
            setToken(null);
          }
        } catch (error) {
          setMessageResponse(`Error: ${error.message}. Please check the request or try again later. URL: /npx/sample, Stack Trace: ${error.stack || 'N/A'}`);
          setToken(null);
        } finally {
          setLoading(false);  // Set loading to false once the fetch is complete
        }
      }
    };

    fetchPaymentStatus();
  }, [sessionId]);

  return (
    <CreateCardSuccess
      sx={CardStyles(darkMode)}
      headerSx={CardHeaderStyles(darkMode)}
      headerAvatar={
        <CreateIcons sx={AvatarIconStyles(darkMode)}>
          <LanguageIcon />
        </CreateIcons>
      }
      headerTitleSx={CardHeaderTextStyles(darkMode)}
      headerTitle="Paid"
      content={
        <>
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
                    borderRadius: 1,
                    marginBottom: 1,
                    marginLeft: 30,
                    marginRight: 30,
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
        </>
      }
    />
  );
}