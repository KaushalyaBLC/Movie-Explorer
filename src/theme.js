import { createTheme } from '@mui/material/styles';

// Light theme configuration
export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#1976d2' },
    secondary: { main: '#9c27b0' },
    background: { default: '#f5f5f5', paper: '#ffffff' },
    text: { primary: '#000000', secondary: '#555555' },
  },
});

// Dark theme configuration
export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#90caf9' },
    secondary: { main: '#ce93d8' },
    background: { default: '#121212', paper: '#1e1e1e' },
    text: { primary: '#ffffff', secondary: '#aaaaaa' },
  },
});