import React from 'react';

function MovieCard({ movie }) {
  return (
    <div className="bg-white rounded shadow-md p-4">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="rounded mb-4"
      />
      <h2 className="text-xl font-bold">{movie.title}</h2>
      <p className="text-gray-700">{movie.overview}</p>
    </div>
  );
}

export default MovieCard;