import React, { useContext } from 'react';
import { MovieContext } from '../context/MovieContext';
import MovieCard from '../components/MovieCard';
import { Container, Grid, Typography, Box } from '@mui/material';

const FavouritePage = () => {
  // Access the list of favorite movies from the MovieContext
  const { favorites } = useContext(MovieContext);

  return (
    <Container maxWidth="lg" sx={{ mt: 5 }}>
      {/* Page Title */}
      <Typography variant="h4" gutterBottom>
        Your Favorite Movies
      </Typography>

      {/* Display favorite movies if available */}
      {favorites.length > 0 ? (
        <Grid container spacing={3}>
          {favorites.map((movie) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
              <MovieCard movie={movie} />
            </Grid>
          ))}
        </Grid>
      ) : (
        // Show a message if no favorite movies are available
        <Box sx={{ textAlign: 'center', mt: 5 }}>
          <Typography variant="h6" color="text.secondary">
            You have no favorite movies yet.
          </Typography>
        </Box>
      )}
    </Container>
  );
};

export default FavouritePage;