import React from 'react';
import { Link } from 'react-router-dom';

function MovieCard({ movie }) {
  return (
    <Link to={`/movie/${movie.id}`}>
      <div className="bg-white rounded shadow-md p-4">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-full h-48 object-contain rounded mb-2"  // Use object-contain class
        />
        <h2 className="text-xl font-bold mb-2">{movie.title}</h2>
        <p className="text-gray-700 truncate">{movie.overview}</p>
      </div>
    </Link>
  );
}

export default MovieCard;
