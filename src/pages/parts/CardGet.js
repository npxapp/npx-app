import React, { useState } from 'react';
import { TextField, Button, Box, CircularProgress } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import { useDarkMode } from '../../contexts/DarkMode';
import CreateIcons from './CreateIcons';
import CreateCardGet from './CreateCardGet';
import { CardStyles, CardHeaderStyles, CardHeaderTextStyles, AvatarIconStyles, ListStyles, ListItemTextStyles } from './DownloadsStyles';

export function CardGet() {
  const { darkMode } = useDarkMode();
  const [token, setToken] = useState(null);
  const [link, setLink] = useState('');
  const [messageResponse, setMessageResponse] = useState(null); // Store status and download link
  const [loading, setLoading] = useState(false); // Handle loading state

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const payload = { token };

    try {
      const response = await fetch('/npx/sample', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      if (response.ok) {
        setMessageResponse(data.status);
        setLink(data.download_link);
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
      headerAvatar={
        <CreateIcons sx={AvatarIconStyles(darkMode)}>
          <LanguageIcon />
        </CreateIcons>
      }
      headerTitleSx={CardHeaderTextStyles(darkMode)}
      headerTitle="Get"
      content={
        <form onSubmit={handleSubmit}>
          <Box 
            sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              marginTop: 2 
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
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'rgba(97, 218, 251, .2)',
                    borderRadius: 1,
                    marginBottom: 1,
                    fontWeight: 900,
                    color: darkMode ? '#61dafb' : '#007fff',
                    fontSize: 'clamp(1rem, 6vh, 3rem)',
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
                  disabled={loading} // Disable button while loading
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