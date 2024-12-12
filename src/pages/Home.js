import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Card,
  CardHeader,
  CardContent,
  Paper,
} from '@mui/material';
import CloudIcon from '@mui/icons-material/Cloud';
import { useDarkMode } from '../contexts/DarkMode';
import { useDialer } from '../contexts/DialerContext';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import json from 'react-syntax-highlighter/dist/esm/languages/hljs/json';
import sql from 'react-syntax-highlighter/dist/esm/languages/hljs/sql';
import html from 'react-syntax-highlighter/dist/esm/languages/hljs/xml';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';

SyntaxHighlighter.registerLanguage('javascript', js);
SyntaxHighlighter.registerLanguage('json', json);
SyntaxHighlighter.registerLanguage('sql', sql);
SyntaxHighlighter.registerLanguage('html', html);

const Home = () => {
  const { darkMode } = useDarkMode();
  const navigate = useNavigate();
  const { dialerCode } = useDialer();
  const [codeBlocks, setCodeBlocks] = useState({});
  const [activeToggle, setActiveToggle] = useState(null);  // Track active toggle

  useEffect(() => {
    const loadCodeBlocks = () => {
      const context = require.context('../contexts/src', false, /\.js$/);
      const loadedCodeBlocks = {};
      context.keys().forEach((key) => {
        try {
          const module = context(key);
          const keyName = Object.keys(module)[0];
          const codeBlockModule = module[keyName];
          Object.assign(loadedCodeBlocks, codeBlockModule);
        } catch (error) {
          console.error(`Error loading code block from ${key}:`, error);
        }
      });
      setCodeBlocks(loadedCodeBlocks);
    };
    loadCodeBlocks();
  }, []);

  const navigateOpen = (header, url) => {
    navigate(url);
  };

  const selectedCodeBlock = codeBlocks[dialerCode] || null;

  // Format phone number
  const formatPhoneNumber = (number) => {
    // Remove any non-digit characters
    const cleaned = ('' + number).replace(/\D/g, '');

    // If the number is empty, return null
    if (cleaned.length === 0) {
      return null;
    }

    // Apply the formatting for 1-3 digits
    if (cleaned.length <= 3) {
      return `(${cleaned})`;
    }

    // Apply the formatting for 4-6 digits
    if (cleaned.length <= 6) {
      return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3)}`;
    }

    // Apply the formatting for 7-9 digits
    if (cleaned.length <= 9) {
      return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
    }

    // Apply the formatting for 10 digits
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6, 10)}`;
  };

  const handleToggle = (key) => {
    setActiveToggle((prev) => (prev === key ? null : key));  // Toggle active key
  };

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          maxWidth: '100%',
        }}
      >
        <Card variant="action">
          <CardHeader
            title="Starter software"
            action={<CloudIcon />}
            variant="action"
          />
          <CardContent variant="action">
            <Button
              variant="outlined"
              onClick={() => navigateOpen('Download', '/')}
              className={`demo-button`}
            >
              Learn More
            </Button>

            {/* Flex row for wrapping buttons */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                gap: 2,  // Add space between buttons
                marginTop: 2,
              }}
            >
              {Object.keys(codeBlocks).map((key) => {
                const block = codeBlocks[key];
                const isActive = activeToggle === key;  // Check if this button is the active one

                return (
                  <Button
                    key={key}
                    variant="outlined"
                    onClick={() => {
                      handleToggle(key);  // Toggle the active state
                      navigateOpen(block.title, '/');  // Navigate as before
                    }}
                  >
                    {isActive ? formatPhoneNumber(key) : block.title}  {/* Format the key when toggled */}
                  </Button>
                );
              })}
            </Box>
          </CardContent>
        </Card>

        {selectedCodeBlock && (
          <Paper variant="dialer">
            <Box
              sx={{
                borderRadius: '20px',
                minWidth: '100%',
                fontFamily: 'monospace',
                whiteSpace: 'pre-wrap',
                overflowX: 'hidden',
                overflowWrap: 'break-word',
              }}
            >
              <Button variant="customTitle">{selectedCodeBlock.title}</Button>
              <SyntaxHighlighter
                language={selectedCodeBlock.language}
                style={github}
                customStyle={{
                  background: 'transparent',
                }}
              >
                {selectedCodeBlock.code}
              </SyntaxHighlighter>
            </Box>
          </Paper>
        )}
      </Box>
    </>
  );
};

export default Home;