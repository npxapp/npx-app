import React from 'react';
import { Box, Typography } from '@mui/material';
import CreateCardParts from './CreateCardParts';

export function DemoProductSnackBar() {

    return (
        <CreateCardParts
            variant="parts"
            headerTitle="Snackbar"
            content={
                <>
                    <Box display="flex" alignItems="center" sx={{ mt: 2 }}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', ml: 1 }}>
                            SnackBar.js
                        </Typography>
                    </Box>
                    <Typography sx={{ ml: 1 }}>
                        <strong>Purpose:</strong> SnackBar.js provides a way to display brief messages or alerts to users, typically at the bottom of the screen.
                    </Typography>
                    <Typography sx={{ ml: 1 }}>
                        <strong>Initialization:</strong> The init function attaches a click event to the snackbar icon, allowing the snackbar to be toggled on and off.
                    </Typography>
                    <Typography sx={{ ml: 1 }}>
                        <strong>Toggle Functionality:</strong> The toggleSnackBar method changes the snackbar's visibility by toggling the open class and rotates the icon to indicate the current state.
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