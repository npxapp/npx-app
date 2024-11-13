// Import the CreateIcons wrapper
import React from 'react';
import { Typography, Box } from '@mui/material';
import PaymentIcon from '@mui/icons-material/Payment';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { useDarkMode } from '../../contexts/DarkMode';
import CreateIcons from './CreateIcons'; // Import the wrapper component
import CreateCard from './CreateCard'; // Import CreateCard component

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
                <>
                    <Box display="flex" alignItems="center" sx={{ mb: 1 }}>
                        <CreateIcons>
                            <CreditCardIcon sx={{ fontSize: 24 }} />
                        </CreateIcons>
                        <Typography variant="body1">Credit/Debit Cards, Stripe Payments</Typography>
                    </Box>
                    <Box display="flex" alignItems="center">
                        <CreateIcons>
                            <AttachMoneyIcon sx={{ fontSize: 24 }} />
                        </CreateIcons>
                        <Typography variant="body1">100 USD</Typography>
                    </Box>
                </>
            }
            sx={{ color: darkMode ? '#fff' : '#007fff' }} // Optional additional styling
        />
    );
}