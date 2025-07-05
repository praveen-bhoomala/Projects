import React, { useState } from 'react';

const ReviewForm = ({ onAddReview }) => {
  const [review, setReview] = useState({
    name: '',
    rating: '',
    comment: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddReview(review);
    setReview({ name: '', rating: '', comment: '' });
  };

  return (
    <form className="review-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Your Name"
        value={review.name}
        onChange={(e) => setReview({ ...review, name: e.target.value })}
        required
      />
      <input
        type="number"
        placeholder="Rating (1-10)"
        value={review.rating}
        onChange={(e) => setReview({ ...review, rating: e.target.value })}
        required
      />
      <textarea
        placeholder="Your review"
        value={review.comment}
        onChange={(e) => setReview({ ...review, comment: e.target.value })}
        required
      ></textarea>
      <button type="submit">Submit Review</button>
    </form>
  );
};

export default ReviewForm;
