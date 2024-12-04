import React, { useState, useEffect } from 'react';
import { 
  Box, 
  TextField, 
  Button, 
  IconButton,
  Modal
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleOutlineTwoToneIcon from '@mui/icons-material/CheckCircleOutlineTwoTone';
import MoodBadTwoToneIcon from '@mui/icons-material/MoodBadTwoTone';
import { 
  popInAnimation, 
  popOutAnimation, 
  itemPopInAnimation, 
  itemPopOutAnimation 
} from './animations';
import { 
  popupStyle, 
  inputStyle, 
  iconStyle,
  buttonStyle,
} from './styles';
import { useDarkMode } from '../../contexts/DarkMode';

const ContactPopup = ({ onClose }) => {
  const { darkMode } = useDarkMode();
  
  const [formData, setFormData] = useState({
    message: '',
    phoneNumber: ''
  });
  const [submissionState, setSubmissionState] = useState('form');
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  const handleClose = () => {
    setIsAnimatingOut(true);
    setTimeout(onClose, 300); // Match animation duration
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/npx/mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmissionState('success');
        
        setTimeout(() => {
          handleClose();
        }, 3000);
      } else {
        setSubmissionState('error');
        
        setTimeout(() => {
          setSubmissionState('form');
        }, 5000);
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmissionState('error');
      
      setTimeout(() => {
        setSubmissionState('form');
      }, 5000);
    }
  };


  return (
    <Modal
      open={true}
      onClose={handleClose}
      aria-labelledby="contact-popup-title"
      BackdropProps={{
          style: {
            backgroundColor: darkMode ? 'rgba(0, 0, 0, 0)' : 'rgba(255, 255, 255, .6)',
          },
      }}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backdropFilter: 'blur(15px)',
        background: 'rgba(0,0,0,0.05)'
      }}
    >
      <Box sx={popupStyle(isAnimatingOut, darkMode)}>
        <Box sx={{ 
          width: '100%', 
          display: 'flex', 
          justifyContent: 'flex-end' 
        }}>
          <IconButton 
            onClick={handleClose} 
            aria-label="close" 
            sx={{ 
              position: 'absolute',
              top: 20,
              right: 20,
              color: darkMode ? '#61dafb' : 'rgba(97, 218, 251, 0.6)',
              animation: `${itemPopInAnimation} 0.3s ease-out`
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>

        {submissionState === 'form' && (
          <Box 
            component="form" 
            onSubmit={handleSubmit} 
            sx={{ 
              width: '100%', 
              display: 'flex', 
              flexDirection: 'column', 
              gap: 2,
              height: '100%',
              justifyContent: 'center' 
            }}
          >
            <TextField
              fullWidth
              multiline
              rows={4}
              name="message"
              placeholder="Your message..."
              value={formData.message}
              onChange={handleInputChange}
              sx={inputStyle(darkMode)}
            />
            
            <TextField
              fullWidth
              name="phoneNumber"
              type="tel"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              sx={inputStyle(darkMode)}
            />
            
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
            <Button 
              type="submit" 
              sx={buttonStyle(darkMode)}
            >
              Send Text
            </Button>
            </Box>
          </Box>
        )}

        {submissionState === 'success' && (
          <Box 
            sx={iconStyle(submissionState, darkMode)}
          >
            <CheckCircleOutlineTwoToneIcon 
              sx={{ 
                color: '#61dafb', 
                fontSize: 80
              }} 
            />
          </Box>
        )}

        {submissionState === 'error' && (
          <Box 
            sx={iconStyle(submissionState, darkMode)}
          >
            <MoodBadTwoToneIcon 
              sx={{ 
                color: '#61dafb', 
                fontSize: 80
              }} 
            />
          </Box>
        )}
      </Box>
    </Modal>
  );
};

export default ContactPopup;