import React from 'react';
import { Typography, Box } from '@mui/material';
import CreateCardParts from './CreateCardParts';

export function DemoProductRouter() {

    return (
        <CreateCardParts
            variant="parts"
            headerTitle="Router"
            content={
                <>
                    <Box display="flex" alignItems="center" sx={{ mt: 2 }}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', ml: 1 }}>
                            Router.js
                        </Typography>
                    </Box>
                    <Typography sx={{ ml: 1 }}>
                        Router.js handles client-side routing for this app, mapping paths to components.
                    </Typography>
                    <Typography sx={{ ml: 1 }}>
                        Key components include Home, Demo, Favorite, and Settings pages.
                    </Typography>
                    <Typography sx={{ ml: 1 }}>
                        Supports pushState navigation, drawer link handling, and dynamic content loading.
                    </Typography>
                    <Box display="flex" alignItems="center" sx={{ mt: 3 }}>
                        <Typography variant="body1" sx={{ fontWeight: 'bold', ml: 1 }}>
                            app.tar.gz
                        </Typography>
                    </Box>
                </>
            }
        />
    );
}