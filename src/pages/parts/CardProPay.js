import React from 'react';
import { Box, Typography } from '@mui/material';
import PaymentIcon from '@mui/icons-material/Payment';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { useDarkMode } from '../../contexts/DarkMode';
import CreateIcons from './CreateIcons'; // Import the wrapper component
import CreateCard from './CreateCard'; // Import CreateCard component
import Stripe from '../../images/Stripe.svg';
import Visa from '../../images/Visa.svg';
import Mastercard from '../../images/Mastercard.svg';
import Discover from '../../images/Discover.svg';
import Amex from '../../images/Amex.svg';

const CardStyles = {
    marginBottom: 2,
    borderRadius: '20px',
    border: '0px solid #007fff',
    background: 'linear-gradient(135deg, rgba(0, 127, 255, 0.15) 25%, rgba(0, 127, 255, 0.25) 25%, rgba(0, 127, 255, 0.25) 50%, rgba(0, 127, 255, 0.15) 50%, rgba(0, 127, 255, 0.15) 75%, rgba(0, 127, 255, 0.25) 75%)',
    backgroundSize: '20px 20px'
};

const CardHeaderStyles = {
    background: 'linear-gradient(45deg, rgba(0, 127, 255, 0.03) 0%, rgba(0, 127, 255, 0.06) 100%)',
    color: '#007fff'
};

export function CardProPay() {
    const { darkMode } = useDarkMode();

    return (
        <CreateCard
            sx={CardStyles}
            headerSx={CardHeaderStyles}
            headerAvatar={
                <CreateIcons>
                    <PaymentIcon />
                </CreateIcons>
            }
            headerTitle="Payment Information"
            content={
                <Box display="flex" flexDirection={{ xs: 'column', sm: 'column', md: 'row', lg: 'row' }} gap={2}>
                    <Box flex={1} display="flex" justifyContent="center" alignItems="center">
                        <img src={Stripe} alt="Stripe" style={{ width: '100%', maxWidth: '120px' }} />
                    </Box>
                    <Box flex={1} display="flex" justifyContent="center" alignItems="center">
                        <img src={Visa} alt="Visa" style={{ width: '100%', maxWidth: '120px' }} />
                    </Box>
                    <Box flex={1} display="flex" justifyContent="center" alignItems="center">
                        <img src={Mastercard} alt="Mastercard" style={{ width: '100%', maxWidth: '120px' }} />
                    </Box>
                    <Box flex={1} display="flex" justifyContent="center" alignItems="center">
                        <img src={Discover} alt="Discover" style={{ width: '100%', maxWidth: '120px' }} />
                    </Box>
                    <Box flex={1} display="flex" justifyContent="center" alignItems="center">
                        <img src={Amex} alt="Amex" style={{ width: '100%', maxWidth: '120px' }} />
                    </Box>
                </Box>
            }
            sx={{ color: darkMode ? '#fff' : '#007fff' }} // Optional additional styling
        />
    );
}