import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { TextField, Button, Box, CircularProgress } from '@mui/material';
import { useDarkMode } from '../../contexts/DarkMode';
import CreateIcons from './CreateIcons';
import CreateCardGet from './CreateCardGet';
import { CardStyles, CardHeaderStyles, CardHeaderTextStyles, AvatarIconStyles } from './DownloadsStyles';

export function CardGet() {
  const { darkMode } = useDarkMode();
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
            // Extract the protocol, host, and port from window.location.href
            const origin = window.location.href.match(/^https?:\/\/[^\/]+/)[0];

            // Replace just the origin (protocol + host + port) with the extracted origin
            const formattedLink = data.download_link.replace(/^https?:\/\/[^\/]+/, origin);
            setLink(formattedLink);
          } catch (error) {
            console.error("Error formatting download link:", error);
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

  return (
    <CreateCardGet
      sx={CardStyles(darkMode)}
      headerSx={CardHeaderStyles(darkMode)}
      headerTitleSx={CardHeaderTextStyles(darkMode)}
      headerTitle="Get"
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
                    style: { fontSize: 'clamp(1rem, 6vh, 3rem)', color: darkMode ? '#61dafb' : '#007fff' },
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
                    borderRadius: 2,
                    border: '1px solid #61dafb',
                  }}
                  disabled={loading}
                >
                  Send
                </Button>
              </>
            )}
          </Box>
        </form>
      }
    />
  );
}