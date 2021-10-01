import { Switch, Route } from "react-router-dom";

import Container from "../components/Container/Container";
import NotFoundView from "../views/NotFoundView/NotFoundView";
import AppBar from "../components/AppBar/AppBar";
import HomePage from "../views/HomePage/HomePage";
import MoviesPage from "../views/MoviesPage/MoviesPage";
import MovieDetailsPage from "../views/MovieDetailsPage/MovieDetailsPage";

export default function App() {
  return (
    <>
      <Container>
        <AppBar />
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/movies" exact>
            <MoviesPage />
          </Route>

          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>

          <Route>
            <NotFoundView />
          </Route>
        </Switch>
      </Container>
    </>
  );
}
