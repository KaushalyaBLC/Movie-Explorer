import React, { useState, useEffect, useContext } from 'react';
import SearchBar from '../components/SearchBar';
import Trending from '../components/Trending';
import MovieCard from '../components/MovieCard';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { searchMovies } from '../api/tmdbAPI';
import { MovieContext } from '../context/MovieContext';
import { TextField, MenuItem, Slider, Container, CircularProgress } from '@mui/material';

const HomePage = () => {
  // Access last search and setLastSearch from MovieContext
  const { lastSearch, setLastSearch } = useContext(MovieContext);

  // State variables for search and results
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1); // Current page for pagination
  const [hasMore, setHasMore] = useState(false); // Whether more results are available

  // State variables for filters
  const [year, setYear] = useState('');
  const [rating, setRating] = useState([0, 10]);
  const [genre, setGenre] = useState('');

  // List of genres for the genre filter
  const genres = [
    { id: 28, name: 'Action' },
    { id: 12, name: 'Adventure' },
    { id: 16, name: 'Animation' },
    { id: 35, name: 'Comedy' },
    { id: 80, name: 'Crime' },
    { id: 99, name: 'Documentary' },
    { id: 18, name: 'Drama' },
    { id: 10751, name: 'Family' },
    { id: 14, name: 'Fantasy' },
    { id: 36, name: 'History' },
    { id: 27, name: 'Horror' },
    { id: 10402, name: 'Music' },
    { id: 9648, name: 'Mystery' },
    { id: 10749, name: 'Romance' },
    { id: 878, name: 'Science Fiction' },
    { id: 10770, name: 'TV Movie' },
    { id: 53, name: 'Thriller' },
    { id: 10752, name: 'War' },
    { id: 37, name: 'Western' },
  ];

  // Handle search input and reset results
  const handleSearch = (query) => {
    setSearchTerm(query);
    setLastSearch(query); // Save the search term in context
    setSearchResults([]); // Reset search results
    setPage(1); // Reset to the first page
  };

  // Fetch search results from the API
  const fetchSearchResults = async (query, page) => {
    if (!query) return;

    setLoading(true);
    try {
      const results = await searchMovies(query, page);
      setSearchResults((prevResults) => [...prevResults, ...results.results]); // Append new results
      setHasMore(results.page < results.total_pages); // Check if more pages are available
    } catch (error) {
      console.error('Error fetching search results:', error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch results whenever searchTerm or page changes
  useEffect(() => {
    fetchSearchResults(searchTerm, page);
  }, [searchTerm, page]);

  // Load the next page of results
  const handleSeeMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  // Apply filters to the search results
  const filteredResults = searchResults.filter((movie) => {
    const matchesYear = year ? movie.release_date.startsWith(year) : true;
    const matchesRating =
      movie.vote_average >= rating[0] && movie.vote_average <= rating[1];
    const matchesGenre = genre ? movie.genre_ids.includes(Number(genre)) : true;
    return matchesYear && matchesRating && matchesGenre;
  });

  return (
    <>
      {/* Search bar for entering movie queries */}
      <SearchBar onSearch={handleSearch} placeholder={lastSearch} />

      {/* Filters for year, rating, and genre */}
      <Container maxWidth="lg" sx={{ mt: 5 }}>
        <Box
          sx={{
            display: 'flex',
            gap: 4, // Space between filters
            mt: 3,
            justifyContent: 'space-between',
          }}
        >
          {/* Year Filter */}
          <TextField
            label="Year"
            type="number"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            sx={{ width: 120 }}
          />

          {/* Rating Filter */}
          <Box sx={{ width: 200 }}>
            <Typography gutterBottom>Rating</Typography>
            <Slider
              value={rating}
              onChange={(e, newValue) => setRating(newValue)}
              valueLabelDisplay="auto"
              min={0}
              max={10}
            />
          </Box>

          {/* Genre Filter */}
          <TextField
            select
            label="Genre"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            sx={{ width: 200 }}
          >
            <MenuItem value="">All Genres</MenuItem>
            {genres.map((g) => (
              <MenuItem key={g.id} value={g.id}>
                {g.name}
              </MenuItem>
            ))}
          </TextField>
        </Box>
      </Container>

      {/* Display search results or trending movies */}
      {searchTerm ? (
        <section>
          <h2>Search Results for "{searchTerm}"</h2>
          {loading && page === 1 ? (
            <CircularProgress sx={{ display: 'block', margin: '0 auto' }} />
          ) : filteredResults.length > 0 ? (
            <>
              <Grid container spacing={2} justifyContent="center">
                {filteredResults.map((movie) => (
                  <Grid item xs={12} sm={6} md={3} lg={2.5} key={movie.id}>
                    <MovieCard movie={movie} />
                  </Grid>
                ))}
              </Grid>
              {hasMore && (
                <Box sx={{ textAlign: 'center', mt: 3, mb: 3 }}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSeeMore}
                    disabled={loading}
                  >
                    {loading ? 'Loading...' : 'See More'}
                  </Button>
                </Box>
              )}
            </>
          ) : (
            <p>No results found for "{searchTerm}".</p>
          )}
        </section>
      ) : (
        <section>
          <h2>Trending movies this week</h2>
          <Trending />
        </section>
      )}
    </>
  );
};

export default HomePage;