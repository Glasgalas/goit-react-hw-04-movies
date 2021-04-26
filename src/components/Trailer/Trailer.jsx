import { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';

import Loader from 'react-loader-spinner';
import Error from '../../components/Error/Error';

import { searchTrailer } from '../../api/serviceApi';

import s from './Trailer.module.css';

const Trailer = () => {
  const [trailer, setTrailer] = useState({});
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const match = useRouteMatch();

  useEffect(() => {
    trailerFetch();
  }, []);

  const trailerFetch = async () => {
    const { movieId } = match.params;
    setLoading(true);

    try {
      const data = await searchTrailer(movieId);
      setTrailer(data.results);
    } catch (error) {
      setError(!error);
    } finally {
      setLoading(false);
    }
  };

  console.log(trailer);
  return (
    <div>
      {error && <Error />}

      <ul className={s.wrapper}>
        {trailer.length > 0 ? (
          trailer.map(({ id, key, name, type }) => {
            if (type === 'Trailer') {
              return (
                <li key={id}>
                  <p className={s.trailerText}>{name}</p>

                  <iframe
                    width="854"
                    height="480"
                    src={`https://www.youtube.com/embed/${key}`}
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    title="video"
                  />
                </li>
              );
            }
          })
        ) : (
          <p className={s.titleTrailer}>Трейлера пока нет...</p>
        )}
      </ul>

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

export default Trailer;
