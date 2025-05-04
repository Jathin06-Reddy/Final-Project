const SentimentList = ({ reviews }) => (
  <div>
    <h2>Recent Reviews:</h2>
    <ul>
      {reviews.map((r, i) => (
        <li key={i}>
          <strong>"{r.text}"</strong> → {r.sentiment}
        </li>
      ))}
    </ul>
  </div>
);

export default SentimentList;
