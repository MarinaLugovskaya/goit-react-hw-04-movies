import React from 'react';
import { NavLink } from 'react-router-dom';

export default function SearchList({ movies }) {
  // const location = useLocation();
  // const history = useHistory();

  // function goBack() {
  //   history.push(location.state?.from ? location.state.from : '/movies');
  // }

  return (
    <>
      {/* <button type="button">Go Back</button> */}

      <ul>
        {movies &&
          movies.map(movie => (
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
    </>
  );
}
