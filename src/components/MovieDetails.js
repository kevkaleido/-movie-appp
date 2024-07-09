import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=e3f88acd69304e0c7d984e712cf2fece`) // Replace with your actual API key
      .then(response => response.json())
      .then(data => {
        console.log('Movie data:', data); // Debugging log
        setMovie(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching movie details:', error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!movie) {
    return <p>Movie not found</p>;
  }

  return (
    <div className="movie-details p-4">
      {movie.poster_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="rounded mb-4"
        />
      ) : (
        <p>No image available</p>
      )}
      <h2 className="text-2xl font-bold">{movie.title}</h2>
      <p className="text-gray-700">{movie.overview}</p>
      <p className="text-gray-700">Release Date: {movie.release_date}</p>
      <p className="text-gray-700">Rating: {movie.vote_average}</p>
    </div>
  );
}

export default MovieDetails;
