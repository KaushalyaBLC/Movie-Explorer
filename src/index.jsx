import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { MovieProvider } from "./context/MovieContext";
import { UserProvider } from "./context/UserContext";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <UserProvider>
        <MovieProvider>
          <App />
        </MovieProvider>
      </UserProvider>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
