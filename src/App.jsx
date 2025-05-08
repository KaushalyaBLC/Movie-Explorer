import React, { useContext } from 'react';
import './App.css';
import AppRouter from './routes/Router';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { UserContext } from './context/UserContext';
import { lightTheme, darkTheme } from './theme';

function App() {
  const { theme } = useContext(UserContext);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh', // Ensures footer stays at bottom
        }}
      >
        <NavBar />
        <Box sx={{ flex: 1 }}>
          <AppRouter />
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
