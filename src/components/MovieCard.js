import React from 'react';
import { Link } from 'react-router-dom';

function MovieCard({ movie }) {
  return (
    <Link to={`/movie/${movie.id}`}>
      <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
  <img
    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
    alt={movie.title}
    className="w-full h-64 object-contain"
  />
  <div className="p-4">
    <h2 className="text-lg font-semibold text-gray-900">{movie.title}</h2>
    <p className="mt-2 text-gray-600 line-clamp-3">{movie.overview}</p>
  </div>
</div>

    </Link>
  );
}

export default MovieCard;
