import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import DrawerSlider from './parts/DrawerSlider';
import { useDarkMode } from '../../contexts/DarkMode';

const Footer = () => {
    const { darkMode } = useDarkMode();
    
    const tags = [
        'Getting Started',
        'Overview Dashboard',
        'Demo',
        'See Demo',
        'See Scaffold Parts',
        'Dashboard Test',
        'Integrations',
        'Payment Success',
        'Digital Download',
        'Experimental APIs',
        'Success Endpoint',
        'Download Product',
        'Stripe Reconciliation',
    ];

    // Calculate tag positions in a circular pattern
    const radius = 65; // Radius of the circle
    const center = { x: radius, y: radius }; // Center of the circle

    const tagPositions = tags.map((_, index) => {
        const angle = (index / tags.length) * 2 * Math.PI; // Angle for each tag
        return {
            x: center.x + radius * Math.cos(angle),
            y: center.y + radius * Math.sin(angle),
        };
    });

    // State to track the active tag
    const [activeIndex, setActiveIndex] = useState(0);

    // Animation cycle
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % tags.length);
        }, 1500); // Change every 1.5 seconds
        return () => clearInterval(interval); // Cleanup on unmount
    }, [tags.length]);

    return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        <DrawerSlider />
      </Box>
        <Box
            sx={{
                position: 'relative',
                width: `${radius * 2}px`,
                height: `${radius * 2}px`,
                margin: '0 auto',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '50%',
                my: 8,
            }}
        >
            {tags.map((tag, index) => {
                const { x, y } = tagPositions[index];
                const isActive = index === activeIndex;

                return (
                    <Typography
                        key={index}
                        sx={{
                            position: 'absolute',
                            left: `${x}px`,
                            top: `${y}px`,
                            fontSize: isActive ? '20px' : '14px', // Enlarged size for active tag
                            transform: 'translate(-50%, -50%) scale(' + (isActive ? 1.5 : 1) + ')', // Scale effect
                            color: darkMode ? `rgba(0, 127, 255, ${isActive ? 1 : 0.4})` : `rgba(97, 218, 251, ${isActive ? 1 : 0.4})`, // Full alpha for active, faded for others
                            cursor: 'pointer',
                            transition: 'transform 0.3s, color 0.3s', // Smooth transition
                        }}
                    >
                        {tag}
                    </Typography>
                );
            })}
        </Box>
    </>
    );
};

export default Footer;