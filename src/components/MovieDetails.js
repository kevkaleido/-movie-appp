import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=YOUR_API_KEY`) // Replace with your actual API key
      .then(response => response.json())
      .then(data => setMovie(data));
  }, [id]);

  if (!movie) {
    return <p>Loading...</p>;
  }

  return (
    <div className="movie-details p-4">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="rounded mb-4"
      />
      <h2 className="text-2xl font-bold">{movie.title}</h2>
      <p className="text-gray-700">{movie.overview}</p>
      <p className="text-gray-700">Release Date: {movie.release_date}</p>
      <p className="text-gray-700">Rating: {movie.vote_average}</p>
    </div>
  );
}

export default MovieDetails;
