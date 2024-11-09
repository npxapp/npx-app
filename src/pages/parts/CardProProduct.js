import React from 'react';
import { Typography, Box, Button } from '@mui/material';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DownloadIcon from '@mui/icons-material/Download';
import AssignmentReturnIcon from '@mui/icons-material/AssignmentReturn';
import RestoreIcon from '@mui/icons-material/Restore';
import EventBusyIcon from '@mui/icons-material/EventBusy';
import PublicIcon from '@mui/icons-material/Public';
import CloudIcon from '@mui/icons-material/Cloud';
import { useDarkMode } from '../../contexts/DarkMode';
import CreateIcons from './CreateIcons';
import CreateCard from './CreateCard'; // Import CreateCard component
import CreateCardProProduct from './CreateCardProProduct'; // Import CreateCard component

const CardStyles = {
  marginBottom: 2,
  borderRadius: '20px',
  border: '0px solid #007fff',
  background: 'linear-gradient(135deg, rgba(0, 127, 255, 0.15) 25%, rgba(0, 127, 255, 0.25) 25%, rgba(0, 127, 255, 0.25) 50%, rgba(0, 127, 255, 0.15) 50%, rgba(0, 127, 255, 0.15) 75%, rgba(0, 127, 255, 0.25) 75%)',
  backgroundSize: '20px 20px',
};

const CardHeaderStyles = {
  background: 'linear-gradient(45deg, rgba(0, 127, 255, 0.03) 0%, rgba(0, 127, 255, 0.06) 100%)',
  color: '#007fff',
};

const AvatarIconStyles = {
  backgroundColor: '#007fff',
  padding: '10px',
  borderRadius: '50%',
  color: '#fff',
  '&.MuiIconButton-root': {
    backgroundColor: '#007fff',
    '&:hover': {
      backgroundColor: '#007fff',
    },
    '&:active': {
      backgroundColor: '#007fff',
    },
    '&:focus': {
      backgroundColor: '#007fff',
    },
  },
  '& .MuiSvgIcon-root': {
    fontSize: '6rem',
  },
};

export function CardProProduct() {
  const { darkMode } = useDarkMode();

  return (
    <CreateCardProProduct
      sx={CardStyles}
      headerSx={CardHeaderStyles}
      headerAvatar={
        <CreateIcons sx={AvatarIconStyles}>
          <Inventory2Icon />
        </CreateIcons>
      }
      headerTitle="What You Get"
      content={
        <>
          <Box display="flex" alignItems="center" justifyContent="center" sx={{ mt: 2 }}>
            <Box>
              <Button
                variant="contained"
                color="primary"
                endIcon={<CloudIcon />}
                sx={{
                  borderRadius: '12px',
                  backgroundColor: '#007fff',
                  fontSize: '1.2rem',
                  padding: '10px 20px',
                  textTransform: 'none',
                }}
              >
                ProApp.tar.gz
              </Button>
            </Box>
          </Box>
        </>
      }
      sx={{ color: darkMode ? '#fff' : '#007fff' }} // Optional additional styling
    />
  );
}