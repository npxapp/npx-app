import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  Typography,
  Card,
  CardHeader,
  CardContent,
} from '@mui/material';
import CreditScoreTwoToneIcon from '@mui/icons-material/CreditScoreTwoTone';
import { useDarkMode } from '../../contexts/DarkMode';

export function CardHomeOverview() {
  const { darkMode } = useDarkMode();
  const navigate = useNavigate();
  const [selectedFilter, setSelectedFilter] = useState('Secure payment link');

  const navigateOpen = (header, url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
    setSelectedFilter(header);
  };
  
  return (
    <Card variant="action">
        <CardHeader
          variant="action"
          title="Stripe"
          action={
            <CreditScoreTwoToneIcon />         
          }
        />
        <CardContent variant="action">
            <Button
              key="Secure payment link"
              variant="outlined"
              onClick={() => navigateOpen('Secure payment link', 'https://buy.stripe.com/bIYdSG5EZ0Ba492eUV')}
              className={`demo-button ${selectedFilter === `Secure payment link` ? 'selected' : ''}`}
            >
              Secure Payment Link
            </Button>
        </CardContent>
    </Card>
  );
}