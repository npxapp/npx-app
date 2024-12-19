import React, { useState } from 'react';
import { 
  Button, 
  Box, 
  Drawer, 
  IconButton, 
  Typography, 
  TextField 
} from '@mui/material';
import { useDarkMode } from '../../../contexts/DarkMode';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CheckCircleOutlineTwoToneIcon from '@mui/icons-material/CheckCircleOutlineTwoTone';
import MoodBadTwoToneIcon from '@mui/icons-material/MoodBadTwoTone';
import { 
  popupStyle, 
  iconStyle 
} from '../styles';
import {
  useTheme,
} from '@mui/material/styles';

const DrawerSlider = () => {
  const { darkMode } = useDarkMode();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedPath, setSelectedPath] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('Legal');
  const [formData, setFormData] = useState({
    message: '',
    phoneNumber: ''
  });
  const [submissionState, setSubmissionState] = useState('form');
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const theme = useTheme();

  const slidesData = ['Social', 'Support', 'Returns', 'Legal', 'Terms of Service', 'Privacy Policy', 'Contact'];
  const paths = ['/social', '/support', '/returns', '/legal', '/terms', '/privacy', '/contact'];

  const content = {
    '/social': `@proappdemo
@proappdemo
Customer Service
(323)-601-8023
proappdemo@outlook.com
Los Angeles, CA 90001`,
    '/support': `Support Options  
We provide customer support for active accounts through multiple platforms, including X (formerly Twitter), Microsoft 365, and Google Voice. For inquiries, troubleshooting, or assistance, reach out via your preferred channel. Our team is committed to providing timely and effective support to address your needs.`,
    '/returns': `Refund Policy
Refunds are available within 30 days of purchase, provided the digital download has not been accessed or downloaded.
Return Policy
Returns are accepted within 14 days if the digital download is found to be defective and has not been accessed or downloaded.
Cancellation Policy
Orders can be canceled within 24 hours of purchase if the digital download has not been accessed or downloaded.
Export Restrictions
Currently, there are no export restrictions for any product.`,
    '/legal': `DMCA Copyright Protection
All digital products sold through this platform are protected under the Digital Millennium Copyright Act (DMCA). Unauthorized reproduction, distribution, or modification of our products is strictly prohibited. We reserve the right to take appropriate legal action against copyright infringement, including removal of infringing content and reporting violations to relevant authorities.`,
    '/terms': `Terms and Conditions
By purchasing or using a product, you agree to the following terms and conditions.
Privacy Policy
We value your privacy and are committed to protecting your personal information.
License
This software is licensed under the Apache 2.0 License.`,
    '/privacy': `Privacy Policy  
We value your privacy and are committed to protecting your personal information. We utilize secure payment gateways that comply with PCI DSS (Payment Card Industry Data Security Standard) requirements to ensure the protection of your financial information. Your personal and payment data is never shared with unauthorized third parties and is used solely for transaction processing and order fulfillment.`,
  };

  const handleButtonClick = (header, path) => {
    setSelectedFilter(header);
    setSelectedPath(path);
    setIsDrawerOpen(true);
    setSubmissionState('form');
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
          setIsDrawerOpen(false);
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

  const renderDrawerContent = () => {
    if (selectedPath === '/contact') {
      return (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            width: '100%',
            padding: 2,
          }}
        >
          <Box sx={popupStyle(isAnimatingOut, darkMode)}>
            <IconButton
              variant="panel"
              onClick={() => {
                setIsAnimatingOut(true);
                setTimeout(() => {
                  setIsDrawerOpen(false);
                  setIsAnimatingOut(false);
                }, 300);
              }}
              sx={{ 
                alignSelf: 'flex-end', 
                position: 'absolute',
                top: 20,
                right: 20,
              }}
            >
              <KeyboardArrowDownIcon variant="arrowIcon"/>
            </IconButton>

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
  InputProps={{
    sx: {
      backgroundColor: darkMode ? 'white' : 'inherit',
      color: darkMode ? 'black' : 'inherit',
    },
  }}
/>

<TextField
  fullWidth
  name="phoneNumber"
  type="tel"
  placeholder="Your phone number"
  value={formData.phoneNumber}
  onChange={handleInputChange}
  InputProps={{
    sx: {
      backgroundColor: darkMode ? 'white' : 'inherit',
      color: darkMode ? 'black' : 'inherit',
    },
  }}
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
  sx={{
    color: darkMode ? 'white' : 'inherit',
  }}
>
  Send Text
</Button>
                </Box>
              </Box>
            )}

            {submissionState === 'success' && (
              <Box sx={iconStyle(submissionState, darkMode)}>
                <CheckCircleOutlineTwoToneIcon 
                  sx={{ 
                    color: '#61dafb', 
                    fontSize: 80
                  }} 
                />
              </Box>
            )}

            {submissionState === 'error' && (
              <Box sx={iconStyle(submissionState, darkMode)}>
                <MoodBadTwoToneIcon 
                  sx={{ 
                    color: '#61dafb', 
                    fontSize: 80
                  }} 
                />
              </Box>
            )}
          </Box>
        </Box>
      );
    }

    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          padding: 2,
        }}
      >
        <IconButton
          variant="panel"
          onClick={() => setIsDrawerOpen(false)}
          sx={{ alignSelf: 'flex-end' }}
        >
          <KeyboardArrowDownIcon variant="arrowIcon"/>
        </IconButton>

        <Typography
          variant="h6"
        >
          {selectedPath || 'No Path Selected'}
        </Typography>
        <Typography
          variant="body2"
        >
          {content[selectedPath] || 'No content available for this path.'}
        </Typography>
      </Box>
    );
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        flexGrow: 1,
        gap: 3,
        justifyContent: {
          xs: 'flex-start',
          sm: 'center',
        },
        alignItems: 'center',
        flexDirection: 'row',
      }}
    >
      {slidesData.map((header, index) => (
        <Button
          key={header}
          variant='filterButton'
          onClick={() => handleButtonClick(header, paths[index])}
          className={selectedFilter === header ? 'Mui-selected' : ''}
        >
          {header}
        </Button>
      ))}

      <Drawer
        anchor="bottom"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        BackdropProps={{
          sx: {
            backgroundColor: 'rgba(0, 0, 0, 0.9) !important',
          },
        }}
        PaperProps={{
          sx: {
            height: '60vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: theme.palette.background.default,
          },
        }}
      >
        {renderDrawerContent()}
      </Drawer>
    </Box>
  );
};

export default DrawerSlider;