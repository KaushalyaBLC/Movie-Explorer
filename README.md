# Movie Explorer

Movie Explorer is a React-based web application that allows users to explore trending movies, search for specific movies, and manage their favorite movies. The app supports both light and dark themes and provides a seamless user experience.

---

## Features

- **Trending Movies**: View a list of trending movies updated weekly.
- **Search Functionality**: Search for movies by title with pagination support.
- **Filters**: Filter search results by year, rating, and genre.
- **Favorites Management**: Add or remove movies from your favorites list.
- **Movie Details**: View detailed information about a movie, including its trailer.
- **Light/Dark Mode**: Toggle between light and dark themes.
- **Responsive Design**: Fully responsive UI for desktop and mobile devices.

---

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

- **Node.js**: Ensure you have Node.js installed. You can download it from [Node.js Official Website](https://nodejs.org/).
- **npm**: Comes bundled with Node.js. Alternatively, you can use `yarn`.

---

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/KaushalyaBLC/Movie-Explorer.git
   cd movie-explorer
   ```
2. Install Dependencies:
   ```bash
   npm install

3. Create a .env file in the root directory and add your TMDb API token:
   ```bash
   REACT_APP_API_TOKEN=your_tmdb_api_token_here
   ```
4. Start the Development server:
   ```bash
   npm start
   ```
5. Open your browser and avigate to:
   ```bash
   http://localhost:3000
   ```
---

### Project Structure

```markdown
movie_explorer/
├── public/                # Static files
├── src/
│   ├── api/               # API integration (e.g., TMDb API)
│   ├── components/        # Reusable UI components
│   ├── context/           # Context providers for global state
│   ├── pages/             # Page components for routing
│   ├── routes/            # App routing configuration
│   ├── theme.js           # Light and dark theme configurations
│   ├── App.jsx            # Main app component
│   ├── index.jsx          # Entry point for React
│   └── index.css          # Global styles
├── .env                   # Environment variables (ignored by Git)
├── .gitignore             # Files and directories to ignore in Git
├── package.json           # Project metadata and dependencies
└── README.md              # Project documentation
```
## Features in Detail

### 1. **Trending Movies**
- Displays a dynamic list of trending movies fetched from the [TMDb API](https://www.themoviedb.org/documentation/api).
- Utilizes the `getTrendingMovies` function defined in `tmdbAPI.jsx`.

### 2. **Search Functionality**
- Search for movies by **title** using TMDb's search endpoint.
- Supports **pagination** to load additional results seamlessly.
- Includes advanced **filtering options**:
  - **Year**: Filter by movie release year.
  - **Rating**: Define a rating range (e.g., 5–9).
  - **Genre**: Narrow results by movie genres.

### 3. **Favorites Management**
- Add or remove movies from the **favorites list**.
- Favorites are stored in `localStorage` to maintain persistence across sessions.

### 4. **Movie Details**
- View comprehensive details of a movie, including:
  - **Title**, **tagline**, **genres**, **release date**, **runtime**, **budget**, **revenue**, and **rating**.
- Watch the **official trailer**, if available.

### 5. **Light/Dark Mode**
- Toggle between **light** and **dark** themes using the switch in the navigation bar.
- Theme preference is saved in `localStorage` for future visits.

## Scripts

The following scripts are available in the project. You can run them using **npm** or **yarn**.

### `npm start`
- Runs the app in development mode.
- Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
- The page will reload if you make edits.

### `npm test`
- Launches the test runner in **interactive watch mode**.
- Ideal for running unit tests during development.

### `npm run build`
- Builds the app for **production** to the `build` folder.
- Optimizes the build for the best performance.
- Includes minification and bundling.

### `npm run eject`
- **Ejects** the app and exposes the full Webpack configuration.
- ⚠️ **Note**: This is a **one-way operation**. Once ejected, you can't go back easily.

## License

This project is licensed under the **MIT License**.  

---

## Acknowledgments

- [TMDb API](https://www.themoviedb.org/documentation/api) – for providing movie data.
- [Material-UI](https://mui.com/) – for elegant and reusable UI components.
- [React](https://reactjs.org/) – the powerful JavaScript library used for building the frontend.

---

## Contact

For any inquiries, feedback, or contributions, feel free to reach out:

- **Name**: Chamath Kaushalya
- **Email**: chamathkaushalyack@gmail.com 
---
