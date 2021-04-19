import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import MovieItem from '../MovieItem/MovieItem';

import s from './MovieList.module.css';

function MovieList({ movieList, location }) {
  return (
    <ul className={s.wrapper}>
      {movieList.map(({ id, title, poster_path, original_title }) => (
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
              original_title={original_title}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}

MovieList.propTypes = {
  movieList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
      original_title: PropTypes.string.isRequired,
    }),
  ),
  location: PropTypes.object.isRequired,
};

export default withRouter(MovieList);
