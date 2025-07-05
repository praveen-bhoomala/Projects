import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <Link to={`/movies/${movie.id}`}>
        <img src={movie.poster} alt={movie.title} />
        <h3>{movie.title}</h3>
        <p>{movie.genre}</p>
      </Link>
    </div>
  );
};

export default MovieCard;
