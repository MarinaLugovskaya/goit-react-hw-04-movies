import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMoviesToday } from '../../services/Api';

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
      <h1>Trending Today</h1>
      {movies && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <NavLink to={`/movies/${movie.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />
                <p>{movie.title}</p>
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
