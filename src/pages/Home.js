import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Card,
  CardHeader,
  CardContent,
  CircularProgress,
  Paper,
} from '@mui/material';
import CloudIcon from '@mui/icons-material/Cloud';
import AppShortcutIcon from '@mui/icons-material/AppShortcut';
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
  const navigate = useNavigate();
  const { loading, setLoading, dialerCode, version } = useDialer();
  const [codeBlocks, setCodeBlocks] = useState({});
  const [activeToggle, setActiveToggle] = useState(null);
  const [selectedCodeBlock, setSelectedCodeBlock] = useState(null);

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

  const navigateOpen = (url) => {
    navigate(url);
  };

  useEffect(() => {
    if (dialerCode) {
      const block = codeBlocks[dialerCode] || null;
      setSelectedCodeBlock(block);
      if (block) {
        setLoading(false);
      }
    }
  }, [codeBlocks, dialerCode, version, setLoading]);

  const formatPhoneNumber = (number) => {
    const cleaned = ('' + number).replace(/\D/g, '');
    if (cleaned.length === 0) return null;
    if (cleaned.length <= 3) return `(${cleaned})`;
    if (cleaned.length <= 6) return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3)}`;
    if (cleaned.length <= 9)
      return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6, 10)}`;
  };

  const handleToggle = (key) => {
    setActiveToggle((prev) => (prev === key ? null : key));
  };

  // New array for Card mappings
  const cardMappings = [
    {
      title: 'Focus on same syntax principle',
      action: <AppShortcutIcon />,
      buttonPath: '/',
      buttonText: 'Learn More',
      hasInnerBox: false, // Conditional rendering of inner Box
    },
    {
      title: 'Starter software',
      action: <CloudIcon />,
      buttonPath: '/',
      buttonText: 'Learn More',
      hasInnerBox: true, // Conditional rendering of inner Box
    },
  ];

  return (
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
      {cardMappings.map((card) => (
        <Card variant="action" key={card.title}>
          <CardHeader 
            title={card.title} 
            action={card.action} 
            variant="action" 
          />
          <CardContent variant="action">
            <Button variant="customPanel" onClick={() => navigateOpen(card.buttonPath)}>
              {card.buttonText}
            </Button>
            {card.hasInnerBox && (
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  gap: 2,
                  marginTop: 2,
                }}
              >
                {Object.keys(codeBlocks).map((key) => {
                  const block = codeBlocks[key];
                  const isActive = activeToggle === key;
                  return (
                    <Button
                      variant="customPanel"
                      key={key}
                      onClick={() => {
                        handleToggle(key);
                      }}
                    >
                      {isActive ? formatPhoneNumber(key) : block.title}
                    </Button>
                  );
                })}
              </Box>
            )}
          </CardContent>
        </Card>
      ))}
      {loading ? (
        <CircularProgress />
      ) : (
        selectedCodeBlock && (
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
        )
      )}
    </Box>
  );
};

export default Home;