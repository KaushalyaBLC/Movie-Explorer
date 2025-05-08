// src/context/MovieContext.js
import React, { createContext, useState, useEffect } from 'react';
import { getTrendingMovies } from '../api/tmdbAPI';

// Create Context
export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  // Trending movies
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  // Favorites state
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem('favorites');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  // Last search state
  const [lastSearch, setLastSearch] = useState(() => {
    return localStorage.getItem('lastSearch') || '';
  });

  // Fetch trending movies on mount
  useEffect(() => {
    const loadTrendingMovies = async () => {
      try {
        const movies = await getTrendingMovies();
        setTrendingMovies(movies);
      } catch (error) {
        console.error('Error fetching trending movies:', error);
      } finally {
        setLoading(false);
      }
    };

    loadTrendingMovies();
  }, []); // Empty dependency array ensures it only runs once on mount

  // Persist favorites and last search to localStorage
  useEffect(() => {
    if (favorites.length > 0) {
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }
    if (lastSearch) {
      localStorage.setItem('lastSearch', lastSearch);
    }
  }, [favorites, lastSearch]);

  // Toggle favorite status
  const toggleFavorite = (movie) => {
    setFavorites((prevFavorites) => {
      const exists = prevFavorites.some((m) => m.id === movie.id);
      return exists
        ? prevFavorites.filter((m) => m.id !== movie.id)
        : [...prevFavorites, movie];
    });
  };

  return (
    <MovieContext.Provider
      value={{
        trendingMovies,
        loading,
        favorites,
        lastSearch,
        setLastSearch,
        toggleFavorite,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
