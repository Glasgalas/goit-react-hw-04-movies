import PropTypes from 'prop-types';
import Rating from '@mui/material/Rating';

import MovieGenre from '../MovieGenre/MovieGenre';
import Company from '../Company/Company';

import s from './MovieItemDetails.module.css';

const MovieItemDetails = ({ movie }) => {
  const {
    title,
    poster_path,
    original_title,
    overview,
    release_date,
    budget,
    tagline,
    vote_average,
    vote_count,
    genres,
    production_companies,
  } = movie;

  const postersUrl = 'https://image.tmdb.org/t/p/w500';

  return (
    <div className={s.card}>
      <div className={s.thumb}>
        <img
          className={s.img}
          src={
            poster_path
              ? postersUrl + poster_path
              : 'https://credemi.eu/wp-content/uploads/2018/06/image_large.png'
          }
          alt={original_title + '_poster'}
        />
      </div>
      <div className={s.content}>
        <h1 className={s.title}>
          {title} / {original_title}
        </h1>
        <h2 className={s.slogan}>{tagline}</h2>
        <Rating
          className={s.rate}
          name="half-rating"
          value={vote_average ? vote_average : null}
          precision={0.1}
          max={10}
          readOnly
        />
        <p className={s.text}>Рейтинг: {vote_average}</p>
        <p className={s.text}>Всего оценок: {vote_count} </p>

        {overview && <h3 className={s.overview}>Сюжет</h3>}
        <p className={s.text}>{overview}</p>
        <p className={s.text}>
          Жанр:
          <MovieGenre genres={genres} />
        </p>
        <p className={s.text}>
          Год выпуска: {release_date ? release_date.split('-')[0] : '...'}
        </p>
        {budget ? (
          <p className={s.text}>Бюджет: ${budget.toLocaleString()}</p>
        ) : null}
        <p className={s.text}>
          Производство:
          <Company companies={production_companies} />
        </p>
      </div>
    </div>
  );
};

MovieItemDetails.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    original_title: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
    release_date: PropTypes.string,
    vote_average: PropTypes.number,
    vote_count: PropTypes.number,
    budget: PropTypes.number,
    tagline: PropTypes.string,
    overview: PropTypes.string,
  }),
};

export default MovieItemDetails;
