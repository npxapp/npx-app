import React, { useState } from 'react';
import { Button, Box, Drawer, IconButton, Typography } from '@mui/material';
import { useDarkMode } from '../../../contexts/DarkMode';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const DrawerSlider = () => {
  const { darkMode } = useDarkMode();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedPath, setSelectedPath] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('Legal');

  const slidesData = ['Social', 'Support', 'Returns', 'Legal', 'Terms of Service', 'Privacy Policy'];
  const paths = ['/social', '/support', '/returns', '/legal', '/terms', '/privacy'];

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
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        flexGrow: 1,
        gap: 3,
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexDirection: 'row',
        my: 2,
      }}
    >
      {slidesData.map((header, index) => (
        <Button
          key={header}
          variant={selectedFilter === header.toLowerCase() ? 'contained' : 'outlined'}
          onClick={() => handleButtonClick(header, paths[index])}
          sx={{
            flex: '0 0 auto',
            marginX: 1,
            color: '#61dafb',
            borderRadius: 20,
            border: '1px solid #61dafb',
            backgroundColor: selectedFilter === header
              ? 'rgba(97, 218, 251, .2)'
              : 'transparent',
            textTransform: 'none',
          }}
        >
          {header}
        </Button>
      ))}

      <Drawer
        anchor="bottom"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        PaperProps={{
          sx: {
            height: '60vh',
            backgroundColor: 'transparent',
            boxShadow: 'none',
          },
        }}
      >
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
            onClick={() => setIsDrawerOpen(false)}
            sx={{ alignSelf: 'flex-end' }}
          >
            <KeyboardArrowDownIcon />
          </IconButton>

          <Typography
            variant="h6"
            sx={{
              marginTop: 2,
              color: darkMode ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.8)',
            }}
          >
            {selectedPath || 'No Path Selected'}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              marginTop: 1,
              color: darkMode ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.6)',
              textAlign: 'center',
              maxWidth: '80%',
            }}
          >
            {content[selectedPath] || 'No content available for this path.'}
          </Typography>
        </Box>
      </Drawer>
    </Box>
  );
};

export default DrawerSlider;