import React, { useState } from 'react';
import ReviewForm from './components/ReviewForm.jsx';
import SentimentList from './components/SentimentList.jsx';
import SentimentChart from './components/SentimentChart.jsx';

function App() {
  const [reviews, setReviews] = useState([]);

  const handleNewResult = (data) => {
    setReviews((prev) => [
      ...prev,
      {
        text: data.text,               // original review text
        sentiment: data.sentiment,     // sentiment string
        timestamp: data.timestamp      // timestamp string
      }
    ]);
  };
  

  return (
    <div style={{ padding: '2rem' }}>
      <h1>🧠 Sentiment Analysis Dashboard</h1>
      <ReviewForm onNewReview={handleNewResult} />
      <h3>Recent Reviews:</h3>
      <SentimentList reviews={reviews} />
      <SentimentChart data={reviews} />
    </div>
  );
}

export default App;



