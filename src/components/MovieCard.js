import React from 'react';
import { Link } from 'react-router-dom';

function MovieCard({ movie }) {
  return (
    <Link to={`/movie/${movie.id}`}>
      <div className="bg-white rounded shadow-md p-4">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="rounded mb-4"
        />
        <h2 className="text-xl font-bold">{movie.title}</h2>
        <p className="text-gray-700">{movie.overview}</p>
      </div>
    </Link>
  );
}

export default MovieCard;
