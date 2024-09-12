const express = require('express');
const dotenv = require('dotenv');
const axios = require('axios');
const cors = require('cors');

dotenv.config();

const app = express();

app.use(cors({
  origin: '*', // Be cautious with this in production
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const API_KEY = process.env.API_KEY;

const fetchNews = async (url) => {
    try {
        const response = await axios.get(url);
        
        return {
            status: 200,
                success: true,
                message: 'Successfully fetched the data',
                data: response.data
        }
    } catch (error) {
        return {
      status: 500,
      success: false,
      message: "Failed to fetch data from the API",
      error: error.response ? error.response.data : error.message,
    };
    }   
}


app.get('/all-news', async (req, res) => {
    let pageSize = parseInt(req.query.max) || 40;
    let page = parseInt(req.query.page) || 1;
    let url = `https://gnews.io/api/v4/top-headlines?category=general&max=${pageSize}&lang=en&apikey=${API_KEY}`;
    const result = await fetchNews(url);
    res.status(result.status).json(result);
});

app.get('/top-headlines', async (req, res) => {
    let pageSize = parseInt(req.query.max) || 40;
    let page = parseInt(req.query.page) || 1;
    let category = req.query.category || 'general';
    let url = `https://gnews.io/api/v4/top-headlines?category=${category}&max=${pageSize}&lang=en&apikey=${API_KEY}`;
    const result = await fetchNews(url);
    res.status(result.status).json(result);
});

app.get("/country/:iso", async (req, res) => {
  let pageSize = parseInt(req.query.pageSize) || 80;
  let page = parseInt(req.query.page) || 1;
  const country = req.params.iso;

  let url = `https://gnews.io/api/v4/top-headlines?country=${country}&max=${pageSize}&lang=en&apikey=${API_KEY}`;
  const result = await fetchNews(url);
  res.status(result.status).json(result);
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});