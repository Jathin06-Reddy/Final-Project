const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const axios = require('axios');

console.log("API Key Loaded:", process.env.OPENAI_API_KEY ? "✅ Yes" : "❌ No");
const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/reviews', async (req, res) => {
  const { review } = req.body;
  console.log("Review received:", review);

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'user',
            content: `Classify this customer review as positive, negative, or neutral and provide a sentiment score from 0 to 1:\n\n"${review}"`
          }
        ]        
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );

    const aiReply = response.data.choices[0].message.content;
    res.json({ sentiment: aiReply });
  } catch (error) {
    console.error("OpenAI API Error:", error.response?.data || error.message || error);
    res.status(500).json({ error: 'Sentiment analysis failed' });
}
});

app.listen(3000, () => console.log('🚀 Server running on http://localhost:3000'));
