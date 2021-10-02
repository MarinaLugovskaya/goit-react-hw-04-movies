import { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { fetchMovieFromSearch } from '../../services/Api';

import SearchBar from '../../components/SearchBar/SearchBar.jsx';
import MovieList from '../../components/MovieList/MovieList.jsx';

export default function MoviesPage() {
  const [value, setValue] = useState(null);
  const [movies, setMovies] = useState([]);

  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    const searchQueryValue = new URLSearchParams(location.search).get(
      'searchQuery',
    );
    setValue(searchQueryValue);
  }, [location.search]);

  useEffect(() => {
    if (value === '') return;
    fetchMovieFromSearch(value).then(movies => {
      setMovies(movies);
    });
  }, [value]);

  const onSubmit = searchQuery => {
    history.push({
      ...location,
      search: `searchQuery=${searchQuery}`,
    });
    setValue(value);
  };

  return (
    <>
      <SearchBar onSubmit={onSubmit} />
      {value && <MovieList movies={movies} />}
    </>
  );
}
