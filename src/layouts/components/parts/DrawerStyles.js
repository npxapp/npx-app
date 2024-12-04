export const DrawerStyles = (darkMode) => ({
    background: 'rgba(97, 218, 251, 0.9) !important',
    boxShadow: 'none',
});

export const AccordionStyles = (darkMode) => ({
    background: 'transparent',
    '& .MuiAccordionSummary-root': {
        background: 'transparent',
        transition: 'background 0.3s ease',
        '&:hover': {
            background: 'rgba(97, 218, 251, 0.1)',
        },
    },
});

export const AccordionSummaryIconStyles = (darkMode) => ({
    fontSize: '1.2rem',
    color: darkMode ? 'rgb(97, 218, 251)' : '#61dafb',
    position: 'absolute',
    left: '-5px',
    top: '50%',
    transform: 'translateY(-50%)',
    transition: 'all 0.3s ease',
    '&:hover': {
        transform: 'translateY(-50%) scale(1.2)',
        textShadow: '0 0 10px rgba(97, 218, 251, 0.6)',
    },
});

export const AccordionSummaryTypographyStyles = (darkMode) => ({
    color: darkMode ? 'rgb(97, 218, 251)' : '#fff',
    position: 'relative',
    fontSize: '1rem',
    paddingRight: '10px',
    transition: 'border-right-color 0.3s ease',
});

export const AccordionDetailsListItemTextStyles = (darkMode) => ({
    cursor: 'pointer',
    padding: '0',
    margin: '0',
    transition: 'all 0.3s ease',
    '& .MuiTypography-root': {
        color: darkMode ? 'rgb(97, 218, 251)' : '#fff',
        fontSize: '1rem',
        padding: '0',
        margin: '0',
        position: 'relative',
        paddingRight: '8px',
        transition: 'border-right-color 0.3s ease',
    },
});

export const AccordionDetailsStyles = (darkMode) => ({
    paddingTop: '0',
    paddingBottom: '0',
    background: 'transparent',
    transition: 'background 0.3s ease, border-right-color 0.3s ease',
    '&:hover': {
        background: 'rgba(97, 218, 251, 0.05)',
    },
    '& .MuiListItem-root': {
        transition: 'background 0.3s ease',
        '&:hover': {
            background: 'rgba(97, 218, 251, 0.1)',
            borderRadius: '4px',
        },
    },
    color: darkMode ? 'rgb(97, 218, 251)' : '#61dafb',
});

export const AccordionSummaryStyles = (darkMode) => ({
    display: 'flex',
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '0 !important',
    paddingTop: '0',
    paddingBottom: '0',
    minHeight: '28px',
    transition: 'border-right-color 0.3s ease',
    '& .MuiAccordionSummary-content': {
        margin: '0',
    },
    position: 'relative',
    borderRight: '0px solid transparent',
});