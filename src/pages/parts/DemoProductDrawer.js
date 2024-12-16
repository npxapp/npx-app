import React from 'react';
import { Typography, Box } from '@mui/material';
import CreateCardParts from './CreateCardParts';

export function DemoProductDrawer() {

    return (
        <CreateCardParts
            variant="parts"
            headerTitle="Drawer"
            content={
                <>
                    <Box display="flex" alignItems="center" sx={{ mt: 2 }}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Drawer.js</Typography>
                    </Box>
                    <Typography sx={{ ml: 1 }}>
                        <strong>Purpose:</strong> Drawer.js is responsible for managing a sidebar menu drawer, allowing users to toggle visibility.
                    </Typography>
                    <Typography sx={{ ml: 1 }}>
                        <strong>Core Elements:</strong> This component references four elements: the menu icon, the drawer itself, an overlay, and a close icon.
                    </Typography>
                    <Typography sx={{ ml: 1 }}>
                        <strong>Initialization:</strong> The init method adds click event listeners to the menu icon, close icon, and overlay, linking them to toggle and close actions for the drawer.
                    </Typography>
                    <Typography sx={{ ml: 1 }}>
                        <strong>Toggle Drawer:</strong> The toggleDrawer method toggles open and active classes on the drawer and overlay, changing their visibility and appearance.
                    </Typography>
                    <Typography sx={{ ml: 1 }}>
                        <strong>Close Drawer:</strong> The closeDrawer method removes the open and active classes, hiding the drawer and overlay.
                    </Typography>

                    <Box display="flex" alignItems="center" sx={{ mt: 3 }}>
                        <Typography variant="body1" sx={{ fontWeight: 'bold', ml: 1 }}>app.tar.gz</Typography>
                    </Box>
                </>
            }
        />
    );
}