import { Switch, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Loader from 'react-loader-spinner';

import Container from '../components/Container/Container';
import AppBar from '../components/AppBar/AppBar';

import css from '../../src/Style.module.css';

const NotFoundView = lazy(() => import('../views/NotFoundView/NotFoundView'));
const HomePage = lazy(() => import('../views/HomePage/HomePage'));
const MoviesPage = lazy(() => import('../views/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() =>
  import('../views/MovieDetailsPage/MovieDetailsPage'),
);

export default function App() {
  return (
    <>
      <Container>
        <AppBar />
        <Suspense
          fallback={
            <Loader type="Puff" color="#00BFFF" height={80} width={80} />
          }
        >
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
        </Suspense>
      </Container>
    </>
  );
}
