import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  Card,
  CardHeader,
  CardContent,
} from '@mui/material';
import SentimentSatisfiedTwoToneIcon from '@mui/icons-material/SentimentSatisfiedTwoTone';

export function CardHomeOverviewPayment() {
  const navigate = useNavigate();
  const [selectedFilter, setSelectedFilter] = useState('Digital product download');

  const navigateOpen = (header, url) => {
    navigate(url);
    setSelectedFilter(header);
  };
  
  return (
    <Card variant="action">
        <CardHeader
          variant="action"
          title="Secure payment with Stripe"
          action={
            <SentimentSatisfiedTwoToneIcon />         
          }
        />
        <CardContent variant="action">
            <Button
              key="Digital product download"
              variant="outlined"
              onClick={() => navigateOpen('Digital product download', '/get')}
              className={`demo-button ${selectedFilter === `Digital product download` ? 'selected' : ''}`}
            >
              Digital product download
            </Button>
        </CardContent>
    </Card>
  );
}