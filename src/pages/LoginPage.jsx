import React, { useState, useContext } from 'react';
import { Container, Box, TextField, Button, Typography, Alert } from '@mui/material';
import { UserContext } from '../context/UserContext';
import { useNavigate, useLocation } from 'react-router-dom';

const LoginPage = () => {
    //email and password set for demo login
  // In a real application,use a secure method to handle authentication
  const [email, setEmail] = useState('demo@example.com');
  const [password, setPassword] = useState('password');
  const [error, setError] = useState('');
  const { login } = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Simple validation
    if (email === 'demo@example.com' && password === 'password') {
      login();
      // Navigate to the page user tried to visit or home
      const from = location.state?.from?.pathname || '/';
      navigate(from, { replace: true });
    } else {
      setError('Invalid credentials. Try demo@example.com / password');
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Typography variant="h4" gutterBottom textAlign="center">
        Login
      </Typography>

      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      <Box
        component="form"
        onSubmit={handleLogin}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
          mt: 4,
        }}
      >
        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit" variant="contained" color="primary">
          Login
        </Button>
      </Box>
    </Container>
  );
};

export default LoginPage;