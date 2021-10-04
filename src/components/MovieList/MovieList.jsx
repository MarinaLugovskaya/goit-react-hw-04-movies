import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import css from '../../components/MovieList/MovieList.module.css';

export default function SearchList({ movies, route }) {
  const location = useLocation();

  return (
    <>
      <ul className={css.movieList}>
        {movies &&
          movies.map(movie => (
            <li key={movie.id} className={css.movieListItem}>
              <NavLink
                to={{
                  pathname: `/movies/${movie.id}`,
                  state: { from: location },
                }}
              >
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
    </>
  );
}
