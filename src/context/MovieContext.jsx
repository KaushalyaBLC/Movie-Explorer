// src/context/MovieContext.js
import React, { createContext, useState, useEffect } from 'react';
import { getTrendingMovies } from '../api/tmdbAPI';

// Create Context
export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  // Initialize favorites from localStorage
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem('favorites');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  const [trendingMovies, setTrendingMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lastSearch, setLastSearch] = useState(() => {
    return localStorage.getItem('lastSearch') || '';
  });

  // Update localStorage whenever favorites change
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  // Toggle favorite status
  const toggleFavorite = (movie) => {
    setFavorites((prevFavorites) => {
      const exists = prevFavorites.some((m) => m.id === movie.id);
      
      // If movie exists in favorites, remove it
      if (exists) {
        const updatedFavorites = prevFavorites.filter((m) => m.id !== movie.id);
        // Update localStorage immediately after removal
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        return updatedFavorites;
      }
      
      // If movie doesn't exist, add it
      const updatedFavorites = [...prevFavorites, movie];
      // Update localStorage immediately after addition
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      return updatedFavorites;
    });
  };

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
  }, []);

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
