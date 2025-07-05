import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReviewForm from './ReviewForm';

const MovieDetail = ({ movies }) => {
  const { id } = useParams();
  const movie = movies.find(m => m.id === parseInt(id));
  const [reviews, setReviews] = useState(movie.reviews);

  const addReview = (review) => {
    setReviews([...reviews, review]);
  };

  return (
    <div>
      <Link to="/">← Back to movies</Link>
      <h2>{movie.title}</h2>
      <img src={movie.poster} alt={movie.title} />
      <p>{movie.description}</p>
      <p><strong>Genre:</strong> {movie.genre}</p>
      <p><strong>Rating:</strong> {movie.rating}</p>

      <h3>Reviews</h3>
      {reviews.length === 0 && <p>No reviews yet.</p>}
      <ul>
        {reviews.map((r, index) => (
          <li key={index}><strong>{r.name}:</strong> {r.comment} ({r.rating}/10)</li>
        ))}
      </ul>

      <h3>Add a Review</h3>
      <ReviewForm onAddReview={addReview} />
    </div>
  );
};

export default MovieDetail;
