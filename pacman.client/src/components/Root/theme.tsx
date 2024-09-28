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
