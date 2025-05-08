import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from '../api/tmdbAPI';
import {
  Container,
  Box,
  Typography,
  Chip,
  CircularProgress,
  Button,
} from '@mui/material';
import { MovieContext } from '../context/MovieContext';

const MoviePage = () => {
  // Get the movie ID from the URL parameters
  const { id } = useParams();

  // State to store movie details and loading status
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  // Access favorites and toggleFavorite function from MovieContext
  const { favorites, toggleFavorite } = useContext(MovieContext);

  // Fetch movie details when the ID changes
  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const data = await getMovieDetails(id);
        setMovie(data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  // Show a loading spinner while fetching data
  if (loading)
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
        <CircularProgress />
      </Box>
    );

  // Show a message if the movie is not found
  if (!movie) return <Typography variant="h6">Movie not found</Typography>;

  // Find the YouTube trailer for the movie
  const trailer = movie.videos?.results.find(
    (video) => video.type === 'Trailer' && video.site === 'YouTube'
  );

  // Check if the movie is in the favorites list
  const isFavorite = favorites.some((fav) => fav.id === movie.id);

  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      {/* Movie Title */}
      <Typography variant="h3" gutterBottom>
        {movie.title}
      </Typography>

      {/* Movie Tagline */}
      {movie.tagline && (
        <Typography variant="h6" color="text.secondary" gutterBottom>
          {movie.tagline}
        </Typography>
      )}

      {/* Movie Poster */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          style={{ width: '100%', maxWidth: 400, borderRadius: 8 }}
        />
      </Box>

      {/* Movie Genres */}
      <Box
        sx={{
          display: 'flex',
          gap: 1,
          flexWrap: 'wrap',
          justifyContent: 'center',
          mt: 3,
        }}
      >
        {movie.genres.map((genre) => (
          <Chip key={genre.id} label={genre.name} color="primary" />
        ))}
      </Box>

      {/* Basic Movie Information */}
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 3,
          justifyContent: 'center',
          mt: 3,
        }}
      >
        <Typography variant="body1" color="text.secondary">
          <strong>Release Date:</strong> {movie.release_date}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          <strong>Runtime:</strong> {movie.runtime} mins
        </Typography>
        <Typography variant="body1" color="text.secondary">
          <strong>Budget:</strong> ${movie.budget.toLocaleString()}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          <strong>Revenue:</strong> ${movie.revenue.toLocaleString()}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          <strong>Rating:</strong> {movie.vote_average.toFixed(1)} / 10 ({movie.vote_count} votes)
        </Typography>
      </Box>

      {/* Add/Remove from Favorites Button */}
      <Box sx={{ mt: 5, textAlign: 'center' }}>
        <Button
          variant={isFavorite ? 'contained' : 'outlined'}
          color="primary"
          onClick={() => toggleFavorite(movie)}
        >
          {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
        </Button>
      </Box>

      {/* Movie Overview */}
      <Box sx={{ mt: 5 }}>
        <Typography variant="h5" gutterBottom>
          Overview
        </Typography>
        <Typography variant="body1" color="gray">
          {movie.overview}
        </Typography>
      </Box>

      {/* Movie Trailer */}
      {trailer && (
        <Box sx={{ mt: 5 }}>
          <Typography variant="h5" gutterBottom>
            Watch Trailer
          </Typography>
          <iframe
            title={`${movie.title} Trailer`} // Add a unique title for accessibility
            width="100%"
            height="500"
            src={`https://www.youtube.com/embed/${trailer.key}`}
            frameBorder="0"
            allowFullScreen
          />
        </Box>
      )}
    </Container>
  );
};

export default MoviePage;
