import PropTypes from 'prop-types';
import s from './Unit.module.css';

const Unit = ({ name, photo }) => {
  const photoUrl = 'https://image.tmdb.org/t/p/w300';
  return (
    <div>
      <div className={s.thumb}>
        <img
          className={s.photo}
          src={
            photo
              ? photoUrl + photo
              : 'https://credemi.eu/wp-content/uploads/2018/06/image_large.png'
          }
          alt={name + '_photo'}
        />
      </div>

      <p className={s.text}> {name}</p>
    </div>
  );
};

Unit.propTypes = {
  name: PropTypes.string.isRequired,
  photo: PropTypes.string,
};

export default Unit;
