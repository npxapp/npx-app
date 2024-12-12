import React, { useState } from 'react';
import { Card, CardContent, CardHeader, Paper, IconButton } from '@mui/material';
import { useDarkMode } from '../../contexts/DarkMode';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const CreateCard = ({ headerTitle, content, variant}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { darkMode } = useDarkMode();

  const handleToggle = () => setIsOpen((prev) => !prev);

  return (
    <>
      <style>
        {`
          @keyframes bounce {
            0% { transform: scale(1); }
            30% { transform: scale(1.1); }
            50% { transform: scale(0.95); }
            100% { transform: scale(1); }
          }
        `}
      </style>
      <Card
        variant={variant}
        sx={{
          height: isOpen ? 450 : 350,
          ...(isOpen && {
            animation: 'bounce 0.2s ease',
          }),
        }}
      >
        <CardHeader
          variant={variant}
          title={headerTitle}
          action={
            <IconButton onClick={handleToggle}>
              <ExpandMoreIcon />
            </IconButton>
          }
        />
        <CardContent
          variant={variant}
        >
          {content}
        </CardContent>
        <Paper
          variant="fade"
          sx={{
            ...(isOpen && {
              background: 'transparent',
            }),
          }}
        />
      </Card>
    </>
  );
};

export default CreateCard;