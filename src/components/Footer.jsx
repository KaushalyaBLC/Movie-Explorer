import React from 'react';
import { Box, Container, Typography, Link, Divider } from '@mui/material';
import MovieIcon from '@mui/icons-material/Movie';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
      }}
    >
      <Container maxWidth="lg">
        <Divider sx={{ mb: 3 }} />
        
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
            }}
          >
            <MovieIcon />
            <Typography variant="h6" color="text.primary">
              Movie Explorer
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'flex',
              gap: 3,
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            <Link href="/" color="text.secondary" underline="hover">
              Home
            </Link>
            <Link href="/trending" color="text.secondary" underline="hover">
              Trending
            </Link>
            <Link href="/favourites" color="text.secondary" underline="hover">
              Favourites
            </Link>
          </Box>

          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} Movie Explorer. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;