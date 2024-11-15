import React, { useState, useEffect } from 'react';
import { Box, CircularProgress, IconButton, Typography, Button, Slide } from '@mui/material';
import { useDarkMode } from '../contexts/DarkMode';
import { useDrawer } from '../contexts/DrawerMode';
import getCardIcon from './parts/DashboardIcons';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Dashboard = () => {
  const { darkMode } = useDarkMode();
  const { toggleDrawer } = useDrawer();
  const [sessionId, setSessionId] = useState(null);
  const [payments, setPayments] = useState(null);
  const [filteredPayments, setFilteredPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedFilter, setSelectedFilter] = useState('5');
  const [activeSlide, setActiveSlide] = useState(0); // 0 = Main view, 1 = Detail view
  const [selectedPayment, setSelectedPayment] = useState(null);

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
            setFilteredPayments(data.payments.slice(0, 5));
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

  const handleFilterChange = (filter) => {
    const cleanedFilter = filter.split(' ')[0].toLowerCase();

    setSelectedFilter(cleanedFilter);

    if (cleanedFilter === 'all') {
      setFilteredPayments(payments);
    } else {
      const limit = parseInt(cleanedFilter, 10);
      setFilteredPayments(payments.slice(0, limit));
    }
  };

  const handleViewDetails = (payment) => {
    setSelectedPayment(payment);
    setActiveSlide(1);
  };

  const handleBack = () => {
    setActiveSlide(0);
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
      {/* Slide component wraps the entire structure */}
      <Slide direction="left" in={activeSlide === 0} mountOnEnter unmountOnExit>
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
                onClick={() => handleViewDetails(payment)}
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
      <Slide direction="right" in={activeSlide === 1} mountOnEnter unmountOnExit>
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
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              height: '100vh',
            }}
          >
            <Typography variant="h6" sx={{ color: '#61dafb' }}>
              {selectedPayment?.token}
            </Typography>
          </Box>
        </Box>
      </Slide>
    </Box>
  );
};

export default Dashboard;