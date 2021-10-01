import axios from 'axios';
const API_KEY = '0f8155f70d4f3ad2f3093fac7e08e921';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export async function fetchMoviesToday() {
  const { data } = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
  return data.results;
}

export async function fetchMovieById(movieId) {
  const { data } = await axios.get(
    `/movie/${movieId}?api_key=${API_KEY}&language=en-US`,
  );
  return data;
}

export async function fetchActors(movieId) {
  const { data } = await axios.get(
    `/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`,
  );
  return data.cast;
}

export async function fetchReviews(movieId) {
  const { data } = await axios.get(
    `/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`,
  );
  return data.reviews;
}

export async function fetchMovieFromSearch(query) {
  const { data } = await axios.get(
    `/search/movie/query=${query}?api_key=${API_KEY}`,
  );
  return data.results;
}
