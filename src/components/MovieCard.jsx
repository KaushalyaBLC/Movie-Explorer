import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

const MovieCard = ({ movie }) => {
  return (
    // Link to the movie details page
    <Link to={`/movie/${movie.id}`} style={{ textDecoration: 'none' }}>
      <Card
        sx={{
          width: 300,
          height: 500,
          margin: 2,
          padding: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        {/* Movie Poster */}
        <CardMedia
          component="img"
          height="350"
          image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />

        {/* Movie Details */}
        <CardContent>
          {/* Movie Title */}
          <Typography variant="h6" component="div" gutterBottom>
            {movie.title}
          </Typography>

          {/* Release Year */}
          <Typography variant="body2" color="text.secondary">
            Release Year: {new Date(movie.release_date).getFullYear()}
          </Typography>

          {/* Movie Rating */}
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Rating
                name="movie-rating"
                value={movie.vote_average / 2} // Convert rating to a 5-star scale
                precision={0.5}
                readOnly
              />
              <Typography variant="body2" sx={{ ml: 1 }}>
                {movie.vote_average.toFixed(1)} / 10
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Link>
  );
};

export default MovieCard;