import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMoviesToday } from '../../services/Api';
import css from '../../components/MovieList/MovieList.module.css';
import style from '../../views/HomePage/HomePage.module.css';

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMoviesToday()
      .then(setMovies)
      .catch(error => setError({ error }));
  }, []);

  return (
    <>
      <h1 className={style.HomePageTitle}>Trending Today</h1>
      {movies && (
        <ul className={css.movieList}>
          {movies.map(movie => (
            <li key={movie.id} className={css.movieListItem}>
              <NavLink to={`/movies/${movie.id}`}>
                <img
                  className={css.movieListItemImage}
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />
                <p className={css.movieListTitle}>{movie.title}</p>
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
