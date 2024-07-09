
  
// src/services/movieService.js
const API_KEY = 'e3f88acd69304e0c7d984e712cf2fece'; // Replace with your actual API key

export const fetchMovies = async (query = '') => {
  const url = query
    ? `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
    : `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.results;
};
