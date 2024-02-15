const mongoose = require('mongoose');
const axios = require('axios');
const { Post } = require('./models');
require('dotenv').config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Successfully connected to MongoDB . . .');
  })
  .catch((e) => {
    console.error('Connection error', e.message);
  });

const fetchNewsArticles = async () => {
  try {
    const response = await axios.get('https://newsapi.org/v2/top-headlines', {
      params: {
        country: 'us', // Choose the country according to your preference
        apiKey: process.env.NEWSAPI_KEY, // Your NewsAPI key
      },
    });

    return response.data.articles.map((article, idx) => ({
      title: article.title,
      body: article.description || 'No description available.',
      image: article.urlToImage || `https://picsum.photos/500/500?random=${idx}`, // Fallback to a random image if none is provided
    }));
  } catch (error) {
    console.error('Error fetching news articles:', error);
    return []; // Return an empty array in case of error
  }
};

const createPostsFromNews = async () => {
  const articles = await fetchNewsArticles();

  await Post.deleteMany({});
  console.log('Creating posts from news articles . . .');
  await Post.insertMany(articles);
  console.log('Posts created!');

  mongoose.connection.close();
};

createPostsFromNews();
