import React from 'react';
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, MenuItem } from '@mui/material';
import { Menu as MenuIcon, Savings } from '@mui/icons-material';
import { Link } from 'react-router-dom';

function NavBar() {
    
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        {/* Small screen menu icon */}
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2, display: { xs: 'flex', md: 'none' } }}
                            onClick={handleOpenNavMenu}
                            style={{color: 'black'}}
                        >
                            <MenuIcon />
                        </IconButton>
                        {/* Small screens title */}
                        <Typography
                            className='Link'
                            variant="h5"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'center' }}
                            style={{color: 'black'}}
                        >
                            <Savings sx={{ marginRight: '6px', fontSize: '30px' }} />
                            PacMan
                        </Typography>

                        {/* Large screens title */}
                        <Typography
                            variant="h5"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}
                            style={{color: 'black'}}
                        >
                            <Link to="/">
                                <Savings sx={{ marginRight: '6px', fontSize: '30px' }} />
                                PacMan
                            </Link>
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}
export default NavBar;