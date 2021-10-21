import PropTypes from 'prop-types';

import s from './ActorItemDetails.module.css';

const ActorItemDetails = ({ actor }) => {
  const {
    name,
    also_known_as,
    biography,
    birthday,
    deathday,
    place_of_birth,
    profile_path,
  } = actor;
  const postersUrl = 'https://image.tmdb.org/t/p/w500';

  return (
    <div className={s.card}>
      <div className={s.thumb}>
        <img
          className={s.img}
          src={
            profile_path
              ? postersUrl + profile_path
              : 'https://credemi.eu/wp-content/uploads/2018/06/image_large.png'
          }
          alt={name + '_poster'}
        />
      </div>
      <div className={s.content}>
        <h1 className={s.title}>{name}</h1>
        <div className={s.alsoName}>
          {also_known_as &&
            also_known_as.map(name => {
              const cyrillicPattern = /[\u0400-\u04FF]/;
              if (cyrillicPattern.test(name)) {
                return <span className={s.text}>{name}</span>;
              }
            })}
        </div>
        {biography && <h3 className={s.bio}>Биография:</h3>}
        <p className={s.text}>{biography}</p>
        {birthday && <p className={s.text}>Дата рождения: {birthday}</p>}
        {deathday && <p>Год смерти: {deathday.split('-')[0]}</p>}
        {place_of_birth && (
          <p className={s.text}>Место рождения: {place_of_birth}</p>
        )}
      </div>
    </div>
  );
};

ActorItemDetails.propTypes = {
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

export default ActorItemDetails;
