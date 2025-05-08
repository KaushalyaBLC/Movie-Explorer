import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import TrendingPage from '../pages/TrendingPage';
import MoviePage from '../pages/MoviePage';
import FavouritePage from '../pages/FavouritePage';
import LoginPage from '../pages/LoginPage';
import ProtectedRoute from './ProtectedRoute';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/trending"
        element={
          <ProtectedRoute>
            <TrendingPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/movie/:id"
        element={
          <ProtectedRoute>
            <MoviePage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/favourites"
        element={
          <ProtectedRoute>
            <FavouritePage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AppRouter;