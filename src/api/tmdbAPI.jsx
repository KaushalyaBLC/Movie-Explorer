import axios from 'axios';

// TMDb API configuration
const API_TOKEN = process.env.REACT_APP_API_TOKEN; // Use the environment variable
const BASE_URL = 'https://api.themoviedb.org/3';

// Create an axios instance with default configurations
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Authorization': `Bearer ${API_TOKEN}`, // Authorization header with Bearer token
    'Content-Type': 'application/json',
  },
});

// Fetch trending movies
export const getTrendingMovies = async () => {
  try {
    const response = await api.get('/trending/movie/week');
    return response.data.results; // Return only the movie data
  } catch (error) {
    console.error('Error fetching trending movies:', error);
    throw error;
  }
};

// Search for movies by query
export const searchMovies = async (query, page = 1) => {
  try {
    const response = await api.get('/search/movie', {
      params: {
        query, // Search query string
        page,  // Page number for pagination
      },
    });
    return response.data; // Return the full response to access pagination info
  } catch (error) {
    console.error('Error searching movies:', error);
    throw error;
  }
};

// Get movie details by ID
export const getMovieDetails = async (movieId) => {
  try {
    const response = await api.get(`/movie/${movieId}`);
    return response.data; // Return the full movie details
  } catch (error) {
    console.error('Error fetching movie details:', error);
    throw error;
  }
};
