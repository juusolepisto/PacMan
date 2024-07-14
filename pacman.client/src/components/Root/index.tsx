import { Box, Container, CssBaseline, ThemeProvider } from "@mui/material";
import { Outlet } from "react-router-dom";
import theme from './theme'
import NavBar from "../Navigation";

const Root = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box 
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '100vh',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                }}
            >
                <NavBar/>
                <Box component="main" sx={{ p: 2, flexGrow: 1 }}>
                    <Container maxWidth="lg" sx={{ mt: 1 }}>
                        <Outlet />
                    </Container>
                </Box>
            </Box>
        </ThemeProvider>
    )
};

export default Root;