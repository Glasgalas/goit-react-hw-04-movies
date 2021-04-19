import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { searchMovieApi } from '../../api/serviceApi';

import Searchform from '../../components/Searchform/Searchform';
import MovieList from '../../components/MovieList/MovieList';

import Loader from 'react-loader-spinner';
import Error from '../../components/Error/Error';

import queryString from 'query-string';

import s from './MoviesPage.module.css';

const MoviesPage = () => {
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const history = useHistory();
  const location = useLocation();
  const { search } = location;
  const { query } = queryString.parse(search);

  const [searchQuery, setSearchQuery] = useState(query || '');

  useEffect(() => {
    if (!searchQuery) return;

    moviesFetch();
  }, [searchQuery]);

  const onChange = query => {
    setMovieList([]);
    setSearchQuery(query);
    setError(false);
    history.push({
      ...location,
      search: `query=${query}`,
    });
  };

  const moviesFetch = () => {
    setLoading(true);
    searchMovieApi(searchQuery)
      .then(({ results }) => {
        if (results.length === 0) {
          setError(true);
        }
        setMovieList(results);
      })
      .catch(error => setError(true))
      .finally(() => setLoading(false));
  };

  return (
    <div>
      <Searchform onChange={onChange} />

      {error && <Error />}

      {isLoading && (
        <Loader
          className={s.loader}
          type="ThreeDots"
          color="#00BFFF"
          height={80}
          width={80}
        />
      )}

      {movieList ? <MovieList movieList={movieList} /> : null}
    </div>
  );
};
export default MoviesPage;
