import React, { useContext } from 'react';
import './App.css';
import AppRouter from './routes/Router';
import NavBar from './components/NavBar';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { UserContext } from './context/UserContext';
import { lightTheme, darkTheme } from './theme';

function App() {
  const { theme } = useContext(UserContext); // Access theme from UserContext

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <CssBaseline /> {/* Normalize styles for consistent theming */}
      <NavBar />
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
