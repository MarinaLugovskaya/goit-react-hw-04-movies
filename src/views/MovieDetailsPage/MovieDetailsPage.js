import { useState, useEffect } from "react";
import {
  NavLink,
  useParams,
  BrowserRouter as Router,
  Route,
  useRouteMatch,
  useLocation,
  useHistory,
} from "react-router-dom";
import { fetchMovieById } from "../../services/Api";
import Cast from "../../views/Cast/Cast";
import Reviews from "../../views/Reviews/Reviews";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const { url, path } = useRouteMatch();
  const location = useLocation();
  const history = useHistory();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovieById(movieId).then(setMovie);
  }, [movieId]);

  function goBack() {
    history.push(location.state?.from ? location.state.from : "/");
  }

  return (
    <>
      <button type="button" onClick={goBack}>
        Go Back
      </button>
      {movie && (
        <>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <h1>{movie.title}</h1>
          <p>User score: {movie.vote_average * 10}%</p>
          <h2>Overview</h2>
          <p>{movie.overview}</p>
          <h2>Genres</h2>
          <ul>
            {movie.genres.map((genre) => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        </>
      )}

      <p>Additional information</p>

      <NavLink to={`${url}/cast`}>Cast</NavLink>

      <Route path={`${path}/cast`}>
        <Cast />
      </Route>

      <NavLink exact to={`${url}/reviews`}>
        Reviews
      </NavLink>

      <Route path={`${path}/reviews`}>
        <Reviews />
      </Route>
    </>
  );
}
