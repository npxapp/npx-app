import React, { useState } from 'react';
import { Box, CircularProgress, IconButton, Typography, TextField, Button, Slide } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useSlide } from './SlideContext';
import { useDarkMode } from '../../contexts/DarkMode';

const SlideAssetsRegistryCreate = () => {
  const { darkMode } = useDarkMode();
  const [sessionId, setSessionId] = useState(null);
  const [name, setName] = useState(null);
  const [type, setType] = useState(null);
  const [slug, setSlug] = useState(null);
  const [status, setStatus] = useState(null);
  const [webhook, setWebhook] = useState(null);
  const [text, setText] = useState(null);
  const [blob, setBlob] = useState(null);

  const [messageResponse, setMessageResponse] = useState(null);
  
  const { 
    loading, 
    setLoading, 
    activeSlide, 
    setActiveSlide, 
    previousSlide, 
    setPreviousSlide 
  } = useSlide();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const randomSessionId = `npx-app-${Math.random().toString(36).substring(2, 26)}`;

    const payload = { 
      session_id: randomSessionId, 
      name, 
      type, 
      status, 
      webhook, 
      text, 
      blob,
    };

    setSessionId(randomSessionId);

    try {
      const response = await fetch('/npx/assets/registry/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      if (response.ok) {
        setMessageResponse(data.status);
        setName(data.name);
        if (data.type) {
            setType(data.type);
          if (data.slug) {
              setSlug(data.slug);
            if (data.status) {
                setStatus(data.asset_status);
              if (data.webhook) {
                  setWebhook(data.webhook);
                if (data.text) {
                    setText(data.text);
                }
              }
            }
          }
        }
        setBlob(data.token);
      } else {
        setMessageResponse('Unexpected response or error');
      }
    } catch (error) {
      setMessageResponse(`Error: ${error.message}. Please check the request or try again later.`);
    } finally {
      setLoading(false);
    }
  };
  
  const handleBack = () => {
    setPreviousSlide(activeSlide);
    setActiveSlide(0);
  };
  
  return (
    <Slide direction="left" in={activeSlide === 5} mountOnEnter unmountOnExit>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          width: '100%',
        }}
      >
        <IconButton onClick={handleBack}>
          <ArrowBackIcon sx={{ color: '#61dafb' }} />
        </IconButton>
        <form onSubmit={handleSubmit}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            flexDirection: 'column',
            width: '100%',
            height: '100vh',
          }}
        >
            {loading ? (
              <CircularProgress sx={{ color: darkMode ? '#61dafb' : '#007fff' }} />
            ) : (
              <>
                <Box
                  sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Typography variant="h6" sx={{ color: '#61dafb' }}>
                    Assets Registry Create
                  </Typography>
                </Box>
                <Box
                  sx={{
                    width: '50%',
                  }}
                >
                <TextField
                  id="name"
                  value={name || "Name value"}
                  onChange={(e) => setName(e.target.value)}
                  sx={{
                    marginBottom: 2,
                  }}
                  InputLabelProps={{
                    style: { color: darkMode ? '#61dafb' : '#007fff' },
                  }}
                  InputProps={{
                    style: {
                      backgroundColor: 'transparent',
                      borderRadius: 20,
                      height: 40,
                      border: '1px solid #61dafb',
                      fontSize: 'clamp(1rem, 6vh, 2rem)',
                      color: darkMode ? '#61dafb' : '#007fff',
                      width: { xs: '10%', sm: '25%', md: '50%', lg: '75%', xl: '100%' },
                    },
                  }}
                />
                <TextField
                  id="type"
                  value={type || "Type value"}
                  onChange={(e) => setType(e.target.value)}
                  sx={{
                    marginBottom: 2,
                  }}
                  InputLabelProps={{
                    style: { color: darkMode ? '#61dafb' : '#007fff' },
                  }}
                  InputProps={{
                    style: {
                      backgroundColor: 'transparent',
                      borderRadius: 20,
                      height: 40,
                      border: '1px solid #61dafb',
                      fontSize: 'clamp(1rem, 6vh, 2rem)',
                      color: darkMode ? '#61dafb' : '#007fff',
                      width: { xs: '10%', sm: '25%', md: '50%', lg: '75%', xl: '100%' },
                    },
                  }}
                />
                <TextField
                  id="slug"
                  value={type || "Slug value"}
                  onChange={(e) => setSlug(e.target.value)}
                  sx={{
                    marginBottom: 2,
                  }}
                  InputLabelProps={{
                    style: { color: darkMode ? '#61dafb' : '#007fff' },
                  }}
                  InputProps={{
                    style: {
                      backgroundColor: 'transparent',
                      borderRadius: 20,
                      height: 40,
                      border: '1px solid #61dafb',
                      fontSize: 'clamp(1rem, 6vh, 2rem)',
                      color: darkMode ? '#61dafb' : '#007fff',
                      width: { xs: '10%', sm: '25%', md: '50%', lg: '75%', xl: '100%' },
                    },
                  }}
                />
                </Box>
                <Box
                  sx={{
                    width: '100%',
                    display: 'flex',
                  }}
                >
                <TextField
                  id="status"
                  value={status || "Status value"}
                  onChange={(e) => setStatus(e.target.value)}
                  sx={{
                    marginBottom: 2,
                  }}
                  InputLabelProps={{
                    style: { color: darkMode ? '#61dafb' : '#007fff' },
                  }}
                  InputProps={{
                    style: {
                      backgroundColor: 'transparent',
                      borderRadius: 20,
                      height: 40,
                      border: '1px solid #61dafb',
                      fontSize: 'clamp(1rem, 6vh, 2rem)',
                      color: darkMode ? '#61dafb' : '#007fff',
                      width: { xs: '10%', sm: '25%', md: '50%', lg: '75%', xl: '100%' },
                    },
                  }}
                />
                <TextField
                  id="webhook"
                  value={webhook || "Webhook value"}
                  onChange={(e) => setWebhook(e.target.value)}
                  sx={{
                    marginBottom: 2,
                  }}
                  InputLabelProps={{
                    style: { color: darkMode ? '#61dafb' : '#007fff' },
                  }}
                  InputProps={{
                    style: {
                      backgroundColor: 'transparent',
                      borderRadius: 20,
                      height: 40,
                      border: '1px solid #61dafb',
                      fontSize: 'clamp(1rem, 6vh, 2rem)',
                      color: darkMode ? '#61dafb' : '#007fff',
                    },
                  }}
                />
                </Box>
                <Box
                  sx={{
                    width: '100%',
                    display: 'flex',
                  }}
                >
                <TextField
                  id="text"
                  value={text || "Text value"}
                  onChange={(e) => setText(e.target.value)}
                  sx={{
                    marginBottom: 2,
                  }}
                  InputLabelProps={{
                    style: { color: darkMode ? '#61dafb' : '#007fff' },
                  }}
                  InputProps={{
                    style: {
                      backgroundColor: 'transparent',
                      borderRadius: 20,
                      height: 40,
                      border: '1px solid #61dafb',
                      fontSize: 'clamp(1rem, 6vh, 2rem)',
                      color: darkMode ? '#61dafb' : '#007fff',
                      width: { xs: '10%', sm: '25%', md: '50%', lg: '75%', xl: '100%' },
                    },
                  }}
                />
                </Box>

                <Box
                  sx={{
                    width: '50%',
                  }}
                >
                <TextField
                  id="blob"
                  value={blob || "Blob value"}
                  onChange={(e) => setBlob(e.target.value)}
                  sx={{
                    marginBottom: 2,
                  }}
                  InputLabelProps={{
                    style: { color: darkMode ? '#61dafb' : '#007fff' },
                  }}
                  InputProps={{
                    style: {
                      backgroundColor: 'transparent',
                      borderRadius: 20,
                      height: 40,
                      border: '1px solid #61dafb',
                      fontSize: 'clamp(1rem, 6vh, 2rem)',
                      color: darkMode ? '#61dafb' : '#007fff',
                      width: { xs: '10%', sm: '25%', md: '50%', lg: '75%', xl: '100%' },
                    },
                  }}
                />
                <Button
                  type="submit"
                  variant="outlined"
                  sx={{
                    backgroundColor: 'rgba(97, 218, 251, .2)',
                    color: darkMode ? '#61dafb' : '#007fff',
                    fontSize: 'clamp(1rem, 6vh, 2rem)',
                    borderRadius: 20,
                    height: 40,
                    border: '1px solid #61dafb',
                    width: { xs: '100%', },
                  }}
                  disabled={loading}
                >
                  Create
                </Button>
                </Box>
              </>
            )}
        </Box>
        </form>
      </Box>
    </Slide>
  );
};

export default SlideAssetsRegistryCreate;