import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem('isLoggedIn') === 'true';
  });

  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  const login = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
  };

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.setItem('isLoggedIn', 'false');
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  };

  return (
    <UserContext.Provider value={{ 
      isLoggedIn, 
      login, 
      logout, 
      theme, 
      toggleTheme 
    }}>
      {children}
    </UserContext.Provider>
  );
};