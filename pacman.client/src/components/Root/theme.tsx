import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: '"Roboto Flex", "Helvetica", "Arial", sans-serif',
    },
    palette: {
        mode: 'light',
        text: {
            primary: '#ffffff',
            secondary: '#ffffff',
        },
    },
    components: {
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
                    backgroundColor: '#7ae6d8',
                },
            },
        },
        MuiTable: {
            styleOverrides: {
                root: {
                    backgroundColor: 'white',
                }
            }
        },
        MuiToolbar: {
            styleOverrides: {
                root: {
                    backgroundColor: 'white'
                }
            }
        }
    },
});

export default theme;
