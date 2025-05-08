import React from 'react';
import { useContext } from 'react';
import { MovieContext } from '../context/MovieContext';
import MovieCard from './MovieCard';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { CircularProgress } from '@mui/material';

const Trending = () => {
  // Access trending movies and loading state from MovieContext
  const { trendingMovies, loading } = useContext(MovieContext);

  // Show a loading spinner while data is being fetched
  if (loading) return <div><CircularProgress /></div>;

  return (
    <Container maxWidth="lg">
      <section>
        {/* Display trending movies in a responsive grid */}
        <Grid container spacing={2} justifyContent="center">
          {trendingMovies.map((movie) => (
            <Grid item xs={12} sm={6} md={3} lg={2.5} key={movie.id}>
              <MovieCard movie={movie} />
            </Grid>
          ))}
        </Grid>
      </section>
    </Container>
  );
};

export default Trending;