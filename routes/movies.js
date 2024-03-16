var express = require('express');
const mongoose = require('mongoose');
var router = express.Router();

const collectionName = 'movies';
const MoviesSchema = new mongoose.Schema({
  plot: String,
  genres: [String],
  runtime: Number,
  cast: [String],
  poster: String,
  title: String,
  fullplot: String,
  languages: [String],
  released: Date,
  directors: [String],
  rated: String,
  awards: Object,
  lastupdated: Date,
  year: Number,
  imdb: Object,
  countries: [String],
  type: String,
  tomatoes: Object,
  fresh: Number,
  rotten: Number,
  num_mflix_comments: Number,
});

// Create a Mongoose model for the collection
const Movies = mongoose.model(collectionName, MoviesSchema);

/* GET movies listing. */
router.get('/', async function (req, res, next) {
  try {
    const movies = await Movies.find({}).limit(10);
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving movies' });
  }
});

module.exports = router;
