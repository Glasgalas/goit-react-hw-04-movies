import React, { useState, useEffect } from 'react';

import MovieList from '../../components/MovieList/MovieList';
import Error from '../../components/Error/Error';
import Loader from 'react-loader-spinner';

import { trendingApi } from '../../api/serviceApi';

import s from './HomePage.module.css';

const HomePage = () => {
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    trendingFetch();
  }, []);

  const trendingFetch = () => {
    setLoading(true);
    trendingApi()
      .then(({ results }) => setMovieList(results))
      .catch(error => setError(!error))
      .finally(() => setLoading(false));
  };

  return (
    <div>
      {error && <Error />}

      {movieList ? <MovieList movieList={movieList} /> : <Error />}

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

export default HomePage;
