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
          minHeight: '100vh',
        }}
      >
        <NavBar />
        <Box
          component="main"
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            py: 3, // Add padding top and bottom
            overflowY: 'auto', // Enable scrolling for content
          }}
        >
          <AppRouter />
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
