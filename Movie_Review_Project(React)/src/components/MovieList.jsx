import React, { useState } from 'react';
import MovieCard from './MovieCard';
import { movies } from '../data/movies';

function MovieList() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search movies..."
          value={searchTerm}
          onChange={handleSearch}
          className="search-input"
        />
        <span className="search-icon">🔍</span>
      </div>

      <div className="movie-list">
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default MovieList;
