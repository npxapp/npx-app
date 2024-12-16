import React, { useState } from 'react';
import {
  Button,
  Card,
  CardHeader,
  CardContent,
} from '@mui/material';
import CreditScoreTwoToneIcon from '@mui/icons-material/CreditScoreTwoTone';

export function CardHomeOverview() {
  const [selectedFilter, setSelectedFilter] = useState('Secure payment link');

  const navigateOpen = (header, url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
    setSelectedFilter(header);
  };
  
  return (
    <Card>
        <CardHeader
          title="Stripe"
          action={
            <CreditScoreTwoToneIcon />         
          }
        />
        <CardContent>
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