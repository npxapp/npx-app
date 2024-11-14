import React, { useState, useEffect } from 'react';
import { Box, CircularProgress, IconButton, Typography, Button } from '@mui/material';
import { useDarkMode } from '../contexts/DarkMode';
import { useDrawer } from '../contexts/DrawerMode';
import VisaIcon from '../images/Visa';
import MastercardIcon from '../images/Mastercard';
import DiscoverIcon from '../images/Discover';
import AmexIcon from '../images/Amex';
import StripeIcon from '../images/Stripe';

const Dashboard = () => {
  const { darkMode } = useDarkMode();
  const { toggleDrawer } = useDrawer();
  const [sessionId, setSessionId] = useState(null);
  const [payments, setPayments] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPayments = async () => {
      if (!sessionId) {
        const randomSessionId = `npx-app-${Math.random().toString(36).substring(2, 26)}`;
        setSessionId(randomSessionId);
      } else {
        const payload = { session_id: sessionId };

        try {
          const response = await fetch('/npx/payments', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
          });

          const data = await response.json();

          if (data.status === 'OK') {
            setPayments(data.payments);
          } else {
            setPayments(null);
          }
        } catch (error) {
          console.error(`Error: ${error.message}`);
          setPayments(null);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchPayments();
  }, [sessionId]);

  const getCardIcon = (cardType) => {
    const iconProps = { 
      sx: { 
        fontSize: '8rem',
      }};
    switch (cardType) {
      case 'visa':
        return <VisaIcon {...iconProps} />;
      case 'mastercard':
        return <MastercardIcon {...iconProps} />;
      case 'discover':
        return <DiscoverIcon {...iconProps} />;
      case 'amex':
        return <AmexIcon {...iconProps} />;
      default:
        return <StripeIcon {...iconProps} />;
    }
  };

  const [selectedFilter, setSelectedFilter] = useState('all');
  
  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
    // Filter logic to update displayed payments could go here
  };
  
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          overflowX: 'auto',
          whiteSpace: 'nowrap',
          width: '100%',
          paddingX: 1,
          marginBottom: 2,
          '&::-webkit-scrollbar': { display: 'none' },  // Hide scrollbar
        }}
      >
        {['All', 'Completed', 'Pending', 'Failed'].map((status) => (
          <Button
            key={status}
            variant={selectedFilter === status.toLowerCase() ? 'contained' : 'outlined'}
            onClick={() => handleFilterChange(status.toLowerCase())}
            sx={{ 
              flex: '0 0 auto',  // Prevent buttons from shrinking
              marginX: 1, 
              color: '#61dafb',
            }}
          >
            {status}
          </Button>
        ))}
      </Box>
      {loading ? (
        <CircularProgress sx={{ color: darkMode ? '#61dafb' : '#007fff' }} />
      ) : (
        payments?.map((payment) => (
          <Box
            key={payment.id}
            sx={{
              borderRadius: 12,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              my: 4,
              py: 2,
              width: { xs: '90%', sm: '80%', md: '60%', lg: '50%', xl: '40%' },
              border: '1px solid #61dafb',
            }}
          >
            <IconButton
              sx={{
                position: 'relative',
                padding: 0,
                borderRadius: '50%',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {getCardIcon(payment.card_type)} {/* Render the icon */}

              {/* Status Typography */}
              <Typography
                variant="body2"
                sx={{
                  position: 'absolute',
                  top: '-10%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  color: '#61dafb',
                  fontSize: '1.75rem',
                }}
              >
                {payment.payment_status}
              </Typography>

              {/* Last 4 digits Typography */}
              <Typography
                variant="body2"
                sx={{
                  position: 'absolute',
                  bottom: '-10%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  color: '#61dafb',
                  fontSize: '2rem',
                }}
              >
                {payment.card_last4}
              </Typography>
            </IconButton>
          </Box>
        ))
      )}
    </Box>
  );
};

export default Dashboard;