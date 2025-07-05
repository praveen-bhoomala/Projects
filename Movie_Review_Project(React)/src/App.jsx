import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';
import { movies } from './data/movies';

const App = () => {
  return (
    <Router>
      <div className="container">
        <h1>🎬 Movie Review App</h1>
        <Routes>
          <Route path="/" element={<MovieList movies={movies} />} />
          <Route path="/movies/:id" element={<MovieDetail movies={movies} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
