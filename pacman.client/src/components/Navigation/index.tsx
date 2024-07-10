import React from 'react';
import { AppBar, Box, Toolbar, IconButton, Typography, Link, Menu, MenuItem } from '@mui/material';
import { Menu as MenuIcon, ContentPasteGo } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

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
                        >
                            <MenuIcon />
                        </IconButton>
                        {/* Small screens title */}
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'center' }}
                        >
                            <ContentPasteGo sx={{ marginRight: '6px', fontSize: '30px' }} />
                            PacMan
                        </Typography>

                        {/* Large screens title */}
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}
                        >
                            <ContentPasteGo sx={{ marginRight: '6px', fontSize: '30px' }} />
                            PacMan
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}
export default NavBar;