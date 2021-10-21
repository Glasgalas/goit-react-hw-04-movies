import { useState, useEffect } from 'react';
import { useRouteMatch, Link, withRouter } from 'react-router-dom';

import Loader from 'react-loader-spinner';
import Error from '../Error/Error';
import MovieItem from '../MovieItem/MovieItem';

import { searchMoviesWithPerson } from '../../api/serviceApi';

import s from './Jobs.module.css';

const Jobs = ({ location }) => {
  const [jobs, setJobs] = useState({});
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const match = useRouteMatch();

  useEffect(() => {
    jobsFetch();
  }, []);

  const jobsFetch = async () => {
    const { personId } = match.params;
    setLoading(true);
    try {
      const data = await searchMoviesWithPerson(personId);
      setJobs(data.cast);
    } catch (error) {
      setError(!error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {error && <Error />}
      {jobs.length > 0 ? (
        <div>
          <h3 className={s.titleCast}>Фильмы с участием:</h3>
          <ul className={s.wrapper}>
            {jobs.map(({ id, title, poster_path }) => {
              return (
                <>
                  <li className={s.item} key={id}>
                    <Link
                      className={s.link}
                      to={{
                        pathname: `/movies/${id}`,
                        state: { from: location },
                      }}
                    >
                      <MovieItem
                        key={id}
                        title={title}
                        poster_path={poster_path}
                      />
                    </Link>
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      ) : null}
      {isLoading && (
        <Loader
          className={s.loader}
          type="ThreeDots"
          color="#00BFFF"
          height={80}
          width={80}
        />
      )}
    </div>
  );
};

export default withRouter(Jobs);
