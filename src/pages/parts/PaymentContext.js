import React, { createContext, useContext, useState, useEffect } from 'react';

const PaymentContext = createContext();

export const PaymentProvider = ({ children }) => {
  const [sessionId, setSessionId] = useState(null);
  const [payments, setPayments] = useState(null);
  const [filteredPayments, setFilteredPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedFilter, setSelectedFilter] = useState('5');
  const [activeSlide, setActiveSlide] = useState(0);
  const [previousSlide, setPreviousSlide] = useState(0);
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
    setPreviousSlide(activeSlide);
    setSelectedPayment(payment);
    setActiveSlide(1);
  };
  
  const handleViewRestore = () => {
    setPreviousSlide(activeSlide);
    setActiveSlide(2);
  };

  const handleBack = () => {
    setPreviousSlide(activeSlide);
    setActiveSlide(0);
  };

  return (
    <PaymentContext.Provider
      value={{
        loading,
        filteredPayments,
        selectedFilter,
        activeSlide,
        selectedPayment,
        previousSlide,
        handleFilterChange,
        handleViewDetails,
        handleViewRestore,
        handleBack,
      }}
    >
      {children}
    </PaymentContext.Provider>
  );
};

export const usePayment = () => {
  const context = useContext(PaymentContext);
  if (!context) {
    throw new Error('usePayment must be used within a PaymentProvider');
  }
  return context;
};

