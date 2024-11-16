import React, { useState, useEffect, useCallback } from 'react';
import { Box, CircularProgress, IconButton, Typography, Button, Slide } from '@mui/material';
import { useDarkMode } from '../../contexts/DarkMode';
import getCardIcon from './DashboardIcons';
import { usePayment } from './PaymentContext';

const SlidePayments = () => {
  const { darkMode } = useDarkMode();
  const {
    loading,
    filteredPayments,
    selectedFilter,
    activeSlide,
    previousSlide,
    handleFilterChange,
    handleViewDetails,
    handleViewRestore,
  } = usePayment();
  
  // Track exit direction
  const [exitDirection, setExitDirection] = useState(null);
  
  // Reset exit direction when slide becomes active
  useEffect(() => {
    if (activeSlide === 0) {
      setExitDirection(null);
    }
  }, [activeSlide]);

  // Modified handlers to set exit direction
  const handleViewRestoreWithDirection = () => {
    setExitDirection('right');
    handleViewRestore();
  };

  const handleViewDetailsWithDirection = (payment) => {
    setExitDirection('left');
    handleViewDetails(payment);
  };
  
  // Determine slide direction based on whether we're entering or exiting
  const slideDirection = exitDirection || (previousSlide === 2 ? "left" : "right");

  return (
    <Slide direction={slideDirection} in={activeSlide === 0} mountOnEnter unmountOnExit>
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
            flexDirection: 'column',
            justifyContent: 'center',
            width: '100%',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
              overflowX: 'auto',
              whiteSpace: 'nowrap',
              paddingX: 1,
              my: 2,
              '&::-webkit-scrollbar': { display: 'none' },
            }}
          >
            {['Stripe Reconciliation', 'Stripe Payment Session', 'Stripe Paid Products', 'All Sessions'].map((status) => (
              <Button
                key={status}
                variant={selectedFilter === status.toLowerCase() ? 'contained' : 'outlined'}
                onClick={handleViewRestoreWithDirection}
                sx={{
                  flex: '0 0 auto',
                  marginX: 1,
                  color: '#61dafb',
                  borderRadius: 20,
                  border: '1px solid #61dafb',
                  backgroundColor: selectedFilter === status.split(' ')[0].toLowerCase() ? 'rgba(97, 218, 251, .2)' : 'transparent',
                  textTransform: 'none',
                }}
              >
                {status}
              </Button>
            ))}
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
              overflowX: 'auto',
              whiteSpace: 'nowrap',
              paddingX: 1,
              my: 2,
              '&::-webkit-scrollbar': { display: 'none' },
            }}
          >
            {['5 Payments', '10 Payments', '50 Payments', 'All Payments'].map((status) => (
              <Button
                key={status}
                variant={selectedFilter === status.toLowerCase() ? 'contained' : 'outlined'}
                onClick={() => handleFilterChange(status.toLowerCase())}
                sx={{
                  flex: '0 0 auto',
                  marginX: 1,
                  color: '#61dafb',
                  borderRadius: 20,
                  border: '1px solid #61dafb',
                  backgroundColor: selectedFilter === status.split(' ')[0].toLowerCase() ? 'rgba(97, 218, 251, .2)' : 'transparent',
                  textTransform: 'none',
                }}
              >
                {status}
              </Button>
            ))}
          </Box>
        </Box>
        {loading ? (
          <CircularProgress sx={{ color: darkMode ? '#61dafb' : '#007fff' }} />
        ) : (
          filteredPayments.map((payment) => (
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
              onClick={() => handleViewDetailsWithDirection(payment)}
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
                {getCardIcon(payment.card_type)}
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
    </Slide>
  );
};

export default SlidePayments;