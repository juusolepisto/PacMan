import { Box, Container, CssBaseline, ThemeProvider } from "@mui/material";
import { Outlet } from "react-router-dom";
import theme from './theme'
import NavBar from "../Navigation";
import pacman from '../../assets/pacman-svgrepo-com.svg';

const Root = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box 
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '100vh',
                    backgroundSize: {xs:'90%', md: '50%'},
                    backgroundRepeat: 'no-repeat',
                    backgroundPositionY: 'center',
                    backgroundPositionX: '40%',
                    backgroundColor: '#015757',
                    backgroundImage: `url(${pacman})`,
                }}
            >
                <NavBar/>
                <Box component="main" sx={{ 
                    p: 2, 
                    flexGrow: 1
                    
                    }}>
                    <Container maxWidth="lg" sx={{ 
                        mt: 1, mb: 2, p: 4, 
                        borderRadius: 5
                        }}>
                        <Outlet />
                    </Container>
                </Box>
            </Box>
        </ThemeProvider>
    )
};

export default Root;