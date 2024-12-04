import { useState, useEffect } from 'react';

export const useProcessSuccess = () => {
  const [status, setStatus] = useState('');
  const [downloadLink, setDownloadLink] = useState(null);
  const [timer, setTimer] = useState(60);
  const [isLoading, setIsLoading] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  // Helper function to handle payment confirmation asynchronously
  const handleSubmit = async (accessCode, tokenCode) => {
    setIsLoading(true);
    try {
      const response = await fetch(`/npx/confirm`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ access_code: accessCode, token_code: tokenCode }),
      });
      
      const data = await response.json();

      if (data.paymentFound) {
        await fetchDownloadLink(data.paymentId); // Await the download link fetching
      } else {
        setStatus('Payment not found. Please check your codes.');
      }
    } catch (error) {
      setStatus('Error while checking payment.');
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch download link with paymentId asynchronously
  const fetchDownloadLink = async (paymentId) => {
    try {
      const response = await fetch(`/api/downloads?payment_id=${paymentId}`);
      const data = await response.json();
      
      if (data.downloadLink) {
        setDownloadLink(data.downloadLink);
        setStatus('Success!');
      } else {
        // Retry every 5 seconds if downloadLink is not available
        const id = setInterval(async () => {
          const retryResponse = await fetch(`/api/downloads?payment_id=${paymentId}`);
          const retryData = await retryResponse.json();
          if (retryData.downloadLink) {
            clearInterval(id);
            setDownloadLink(retryData.downloadLink);
            setStatus('Success!');
          } else {
            setTimer((prev) => prev - 5); // Update timer for retries
          }
        }, 5000);
        setIntervalId(id);
      }
    } catch (error) {
      setStatus('Error while fetching download link.');
    }
  };

  // Timer for handling expiration
  const handleTimer = () => {
    if (timer <= 0) {
      clearInterval(intervalId);
      setStatus('Time expired. Please try again.');
    }
  };

  useEffect(() => {
    if (timer > 0) {
      const timerId = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(timerId); // Cleanup on unmount or when timer reaches 0
    }
  }, [timer]);

  useEffect(() => {
    handleTimer(); // Check timer expiration
  }, [timer]);

  return { status, downloadLink, timer, isLoading, handleSubmit };
};