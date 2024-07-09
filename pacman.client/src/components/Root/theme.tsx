import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: '"Roboto Flex", "Helvetica", "Arial", sans-serif',
    },
    palette: {
        text: {
            primary: '#ffffff',
            secondary: '#ffffff',
        },
    },
    components: {
        MuiDivider: {
            styleOverrides: {
                root: {
                    borderColor: 'white',
                },
            },
        },
        MuiAccordion: {
            styleOverrides: {
                root: {
                    backgroundColor: 'rgba(39, 23, 128, 1)',
                    border: '1px solid white',
                    '&.Mui-expanded': {
                        borderColor: 'orange',
                    },
                },
            },
        },
        MuiAccordionSummary: {
            styleOverrides: {
                root: {
                    '&.Mui-expanded': {
                        color: 'orange',
                    },
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    backgroundColor: 'rgba(45, 181, 131, 1)',
                    '&:hover': {
                        backgroundColor: 'rgba(35, 171, 121, 1)',
                    },
                    color: 'white',
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundColor: 'rgba(39, 23, 128, 0.5)',
                },
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'white',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'orange',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'orange',
                    },
                },
            },
        },
        MuiInput: {
            styleOverrides: {
                root: {
                    '&:before': {
                        borderBottom: '1px solid white',
                    },
                    '&:hover:not(.Mui-disabled):before': {
                        borderBottom: '2px solid orange',
                    },
                    '&.Mui-focused:after': {
                        borderBottom: '2px solid orange',
                    },
                },
            },
        },
        MuiMenu: {
            styleOverrides: {
                paper: {
                    backgroundColor: 'rgba(39, 23, 128, 1)',
                },
            },
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    '&:hover': {
                        backgroundColor: 'rgba(255, 152, 0, 0.9)',
                        color: 'black',
                    },
                },
            },
        },
        MuiSelect: {
            styleOverrides: {
                icon: {
                    color: 'white',
                },
            },
        },
        MuiDialog: {
            styleOverrides: {
                paper: {
                    backgroundColor: 'rgba(39, 23, 128, 1)',
                },
            },
        },
    },
});

export default theme;
