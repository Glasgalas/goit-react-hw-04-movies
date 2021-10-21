import { useState, useEffect } from 'react';
import { useRouteMatch, Link, withRouter } from 'react-router-dom';

import Loader from 'react-loader-spinner';
import Error from '../../components/Error/Error';
import Unit from '../../components/Unit/Unit';

import { searchCastFilmApi } from '../../api/serviceApi';

import s from './Cast.module.css';

const Cast = ({ location }) => {
  const [cast, setCast] = useState({});
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const match = useRouteMatch();

  useEffect(() => {
    castFetch();
  }, []);

  const castFetch = () => {
    const { movieId } = match.params;
    setLoading(true);
    searchCastFilmApi(movieId)
      .then(result => setCast(result.cast))
      .catch(error => setError(!error))
      .finally(() => setLoading(false));
  };

  return (
    <div>
      {error && <Error />}

      {cast.length > 0 ? (
        <div>
          <h3 className={s.titleCast}>Актерский состав:</h3>
          <ul className={s.castList}>
            {cast.map(({ id, original_name, profile_path }) => {
              return (
                <>
                  <li className={s.castItem} key={id}>
                    <Link
                      className={s.link}
                      to={{
                        pathname: `/person/${id}`,
                        state: { from: location },
                      }}
                    >
                      <Unit name={original_name} photo={profile_path} />
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

export default withRouter(Cast);
