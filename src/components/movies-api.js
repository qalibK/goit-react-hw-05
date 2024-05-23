import axios from "axios";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NjYyMmU1ZTg4YmFlODhlN2Q3NTQ4MTE0N2M2NDU3ZiIsInN1YiI6IjY2NGI2ZWNiN2E0ZmJhOTBlZjc5OGY0YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vyfFgL7z0nmmTEokQTndqIeAJ2WJbiDMHWhxLalXybs",
  },
};

export const getMovies = async () => {
  const response = await axios.get(
    "https://api.themoviedb.org/3/trending/movie/day",
    options
  );
  return response.data.results;
};

export const getMovieById = async (movieId) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
    options
  );

  return response.data;
};

export const searchMovies = async (query) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${query}&language=en-US`,
    options
  );

  return response.data.results;
};

export const getCast = async (movieId) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
    options
  );
  return response.data.cast;
};

export const getReviews = async (movieId) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US`,
    options
  );

  return response.data.results;
};
