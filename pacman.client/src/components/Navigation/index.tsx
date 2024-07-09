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

                        {/* Menu for small screens */}
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            <MenuItem onClick={handleCloseNavMenu}
                                sx={{
                                    mt: 2,
                                    mb: 2,
                                    '&:hover': {
                                        backgroundColor: 'transparent', // Override hover background for this specific MenuItem
                                    },
                                }}>
                                <Typography textAlign="center" sx={{ width: '100%' }}>
                                    <Link
                                        component={RouterLink}
                                        to="/admin"
                                        underline="hover"
                                        sx={{
                                            color: 'white',
                                            mx: '2px',
                                            '&:hover': {
                                                textDecorationThickness: '6px',
                                                textUnderlineOffset: '18px',
                                                color: 'orange',
                                            }
                                        }}>
                                        Ylläpito
                                    </Link>
                                </Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}
                                sx={{
                                    mt: 2,
                                    mb: 2,
                                    '&:hover': {
                                        backgroundColor: 'transparent', // Override hover background for this specific MenuItem
                                    },
                                }}>
                                <Typography textAlign="center" sx={{ width: '100%' }}>
                                    <Link href="#logout"
                                        underline="hover"
                                        sx={{
                                            color: 'white',
                                            mx: '2px',
                                            '&:hover': {
                                                textDecorationThickness: '6px',
                                                textUnderlineOffset: '18px',
                                                color: 'orange',
                                            }
                                        }}>
                                        Kirjaudu ulos
                                    </Link>
                                </Typography>
                            </MenuItem>
                        </Menu>

                        {/* Small screens title */}
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'center' }}
                        >
                            <ContentPasteGo sx={{ marginRight: '6px', fontSize: '30px' }} />
                            eLähete
                        </Typography>

                        {/* Large screens title */}
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}
                        >
                            <ContentPasteGo sx={{ marginRight: '6px', fontSize: '30px' }} />
                            eLähete
                        </Typography>
                        <Link
                            component={RouterLink}
                            to="/admin"
                            underline="hover"
                            sx={{
                                color: 'white',
                                mx: '30px',
                                '&:hover': {
                                    textDecorationThickness: '6px',
                                    textUnderlineOffset: '18px',
                                    color: 'orange',
                                    borderColor: 'orange'
                                },
                                display: { xs: 'none', md: 'flex' }
                            }}>
                            Ylläpito
                        </Link>
                        {/*  TODO LOGOUT logci  */}
                        <Link href="#logout"
                            underline="hover"
                            sx={{
                                color: 'white',
                                mx: '20px',
                                '&:hover': {
                                    textDecorationThickness: '6px',
                                    textUnderlineOffset: '18px',
                                    color: 'orange',
                                    borderColor: 'orange'
                                },
                                display: { xs: 'none', md: 'flex' }
                            }}>
                            Kirjaudu ulos
                        </Link>

                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}
export default NavBar;