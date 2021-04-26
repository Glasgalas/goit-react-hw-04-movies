import { useState, useEffect } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { useRouteMatch, useLocation, useHistory } from 'react-router-dom';

import Loader from 'react-loader-spinner';
import Error from '../../components/Error/Error';
import MovieItemDetails from '../../components/MovieItemDetails/MovieItemDetails';
import Cast from '../../components/Cast/Cast';
import Reviews from '../../components/Reviews/Reviews';
import Back from '../../components/Button/Button';
import Trailer from '../../components/Trailer/Trailer';

import { searchDetailsFilmApi, searchDetailsFilm } from '../../api/serviceApi';

import s from './MovieDetailsPage.module.css';

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState({});
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const match = useRouteMatch();
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    // movieIdFetch();
    movieFetchID();
  }, []);

  // const movieIdFetch = () => {
  //   const { movieId } = match.params;
  //   setLoading(true);
  //   searchDetailsFilmApi(movieId)
  //     .then(result => setMovie(result))
  //     .catch(error => setError(!error))
  //     .finally(() => setLoading(false));
  // };

  const movieFetchID = async () => {
    const { movieId } = match.params;
    setLoading(true);

    try {
      const result = await searchDetailsFilm(movieId);
      setMovie(result);
    } catch (error) {
      setError(!error);
    } finally {
      setLoading(false);
    }
  };

  const handleBack = () => {
    history.push(location?.state?.from || '/');
  };

  return (
    <>
      {error && <Error />}

      <Back goBack={handleBack} />

      <MovieItemDetails movie={movie} />

      {isLoading && (
        <Loader
          className={s.loader}
          type="ThreeDots"
          color="#00BFFF"
          height={80}
          width={80}
        />
      )}

      <div>
        <ul className={s.nav}>
          <li>
            <Link
              className={s.link}
              to={{
                pathname: `${match.url}/cast`,
                state: { ...location.state },
              }}
            >
              Актёры
            </Link>
          </li>
          <li>
            <Link
              className={s.link}
              to={{
                pathname: `${match.url}/reviews`,
                state: { ...location.state },
              }}
            >
              Отзывы
            </Link>
          </li>
          <li>
            <Link
              className={s.link}
              to={{
                pathname: `${match.url}/trailers`,
                state: { ...location.state },
              }}
            >
              Трейлеры
            </Link>
          </li>
        </ul>
      </div>

      <Switch>
        <Route exact path={`${match.path}/cast`} component={Cast} />
        <Route exact path={`${match.path}/reviews`} component={Reviews} />
        <Route exact path={`${match.path}/trailers`} component={Trailer} />
      </Switch>
    </>
  );
}
