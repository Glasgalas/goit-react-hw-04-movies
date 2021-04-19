import PropTypes from 'prop-types';

import s from './MovieItem.module.css';

const MovieItem = ({ title, poster_path, original_title }) => {
  const postersUrl = 'https://image.tmdb.org/t/p/w500';

  return (
    <div className={s.card}>
      <div className={s.thumb}>
        <img
          src={
            poster_path
              ? postersUrl + poster_path
              : 'https://credemi.eu/wp-content/uploads/2018/06/image_large.png'
          }
          alt={original_title + '_poster'}
        />
      </div>
      <div className={s.content}>
        <p className={s.title}>{title}</p>
      </div>
    </div>
  );
};

MovieItem.propTypes = {
  title: PropTypes.string.isRequired,
  poster_path: PropTypes.string,
  original_title: PropTypes.string,
};

export default MovieItem;
