import React from 'react';
import { Box, Typography } from '@mui/material';
import CreateCardParts from './CreateCardParts';

export function DemoProductAccordion() {

    return (
        <CreateCardParts
            variant="parts"
            headerTitle="Accordion"
            content={
                <>
                    <Box display="flex" alignItems="center" sx={{ mt: 2 }}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', ml: 1 }}>
                            Accordion.js
                        </Typography>
                    </Box>
                    <Typography sx={{ ml: 1 }}>
                        <strong>Purpose:</strong> Accordion.js handles expanding and collapsing sections of content, allowing users to show or hide details interactively.
                    </Typography>
                    <Typography sx={{ ml: 1 }}>
                        <strong>Initialization:</strong> The init method attaches click events to each accordion header, linking them to toggle their respective sections.
                    </Typography>
                    <Typography sx={{ ml: 1 }}>
                        <strong>Toggle Function:</strong> The toggleAccordion function toggles the active class on a clicked item, expanding or collapsing it. The function also updates the accordion icon to reflect the item's state.
                    </Typography>
                    <Typography sx={{ ml: 1 }}>
                        <strong>Icon Update:</strong> The updateAccordionIcon method changes the icon based on the state of the section (add/remove).
                    </Typography>
                    <Typography sx={{ ml: 1 }}>
                        <strong>Download Setup:</strong> setupDownloadButtons sets up functionality for download buttons within each accordion, triggering an alert for the selected package download.
                    </Typography>
                    <Box display="flex" alignItems="center" sx={{ mt: 3 }}>
                        <Typography variant="body1" sx={{ fontWeight: 'bold', ml: 1 }}>app.tar.gz</Typography>
                    </Box>
                </>
            }
        />
    );
}