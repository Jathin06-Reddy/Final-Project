import React, { useState } from 'react';
import axios from 'axios';

const ReviewForm = ({ onNewReview }) => {
  const [text, setText] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    try {
      const res = await axios.post('https://final-project-ie3b.onrender.com/api/reviews', {
        review: text,
      });
      onNewReview(res.data);
      setText('');
    } catch (error) {
      console.error(error);  // Add this line
      alert('Error submitting review');
    }    
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write your review..."
        rows="4"
        cols="50"
      />
      <br />
      <button type="submit">Analyze Sentiment</button>
    </form>
  );
};

export default ReviewForm;
