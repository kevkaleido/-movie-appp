import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import { fetchMovies } from './services/movieService';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleSearch = (query) => {
    setLoading(true);
    fetchMovies(query).then(data => {
      setMovies(data);
      setLoading(false);
    });
  };

  useEffect(() => {
    handleSearch('');
  }, []);

  return (
    <Router>
      <div className="App">
        <Header onSearch={handleSearch} />
        <Routes>
          <Route
            path="/"
            element={loading ? <p>Loading...</p> : <MovieList movies={movies} />}
          />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
