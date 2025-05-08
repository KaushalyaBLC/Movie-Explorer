import React, { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import MovieIcon from '@mui/icons-material/Movie';
import Switch from '@mui/material/Switch';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

const pages = [
  { name: 'Home', path: '/' },
  { name: 'Trending', path: '/trending' },
  { name: 'Favourites', path: '/favourites' },
];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const { theme, toggleTheme, isLoggedIn, logout } = useContext(UserContext);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <AppBar position="static" color={theme === 'light' ? 'primary' : 'secondary'}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo for desktop */}
          <MovieIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Movie Explorer
          </Typography>

          {/* Logo and menu for mobile */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, flexGrow: 1, justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <MovieIcon sx={{ mr: 1 }} />
              <Typography
                variant="h5"
                noWrap
                component="a"
                href="#"
                sx={{
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                Movie Explorer
              </Typography>
            </Box>
            {isLoggedIn && (
              <IconButton size="large" aria-label="menu" onClick={handleOpenNavMenu} color="inherit">
                <MenuIcon />
              </IconButton>
            )}
          </Box>

          {/* Mobile menu - only shown when logged in */}
          {isLoggedIn && (
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              keepMounted
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          )}

          {/* Desktop navigation */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, ml: 'auto', alignItems: 'center' }}>
            {/* Navigation links - only shown when logged in */}
            {isLoggedIn && pages.map((page) => (
              <Button
                key={page.name}
                component="a"
                href={page.path}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.name}
              </Button>
            ))}

            {/* Login/Logout Button */}
            {isLoggedIn ? (
              <Button
                color="inherit"
                onClick={handleLogout}
                sx={{ ml: 2 }}
              >
                Logout
              </Button>
            ) : (
              <Button
                color="inherit"
                onClick={handleLogin}
                sx={{ ml: 2 }}
              >
                Login
              </Button>
            )}

            {/* Theme toggle switch */}
            <Switch
              checked={theme === 'dark'}
              onChange={toggleTheme}
              color="default"
              inputProps={{ 'aria-label': 'toggle theme' }}
              sx={{ ml: 2 }}
            />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default ResponsiveAppBar;
