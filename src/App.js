import { Route, Switch } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import Headerbar from './components/Header/Header';
import Loader from 'react-loader-spinner';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import './App.css';

const HomePage = lazy(() =>
  import('./pages/HomePage/HomePage' /* webpackChunkName: "home-page" */),
);
const MoviesPage = lazy(() =>
  import('./pages/MoviesPage/MoviesPage' /* webpackChunkName: "movies-page" */),
);
const MovieDetailsPage = lazy(() =>
  import(
    './pages/MovieDetailsPage/MovieDetailsPage' /* webpackChunkName: "movie-details-page" */
  ),
);
const ActorDetailsPage = lazy(() =>
  import(
    './pages/ActorDetailsPage/ActorDetailsPage' /* webpackChunkName: "actor-details-page" */
  ),
);
const NotFoundPage = lazy(() =>
  import(
    './pages/NotFoundPage/NotFoundPage' /* webpackChunkName: "page-404" */
  ),
);

function App() {
  return (
    <>
      <Headerbar />
      <Suspense
        fallback={
          <Loader
            className="loader"
            type="ThreeDots"
            color="#00BFFF"
            height={80}
            width={80}
          />
        }
      >
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/movies" component={MoviesPage} />
          <Route path="/movies/:movieId" component={MovieDetailsPage} />
          <Route path="/person/:personId" component={ActorDetailsPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
