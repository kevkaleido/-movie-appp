import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [trailerKey, setTrailerKey] = useState(null);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=e3f88acd69304e0c7d984e712cf2fece`) // Replace with your actual API key
      .then(response => response.json())
      .then(data => {
        setMovie(data);
        fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=e3f88acd69304e0c7d984e712cf2fece`) // Replace with your actual API key
          .then(response => response.json())
          .then(data => {
            const trailer = data.results.find(video => video.type === 'Trailer' && video.site === 'YouTube');
            if (trailer) {
              setTrailerKey(trailer.key);
            }
          });
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
    <div className="movie-details p-4 max-w-4xl mx-auto mt-10 bg-white rounded-lg shadow-md">
      {movie.poster_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-full h-96 object-contain rounded mb-4"  // Adjust height and use object-contain class
        />
      ) : (
        <p>No image available</p>
      )}
      <h2 className="text-3xl font-bold mb-4">{movie.title}</h2>
      <p className="text-gray-700 mb-4">{movie.overview}</p>
      <div className="flex justify-between mb-4">
        <p className="text-gray-700">Release Date: {movie.release_date}</p>
        <p className="text-gray-700">Rating: {movie.vote_average}</p>
      </div>
      {trailerKey && (
        <div className="trailer mb-4">
          <h3 className="text-2xl font-bold mb-2">Trailer</h3>
          <iframe
            width="100%"
            height="400"
            src={`https://www.youtube.com/embed/${trailerKey}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Trailer"
            className="rounded"
          ></iframe>
        </div>
      )}
    </div>
  );
}

export default MovieDetails;
