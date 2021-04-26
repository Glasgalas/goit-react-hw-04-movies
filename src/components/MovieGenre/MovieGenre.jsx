import s from './MovieGenre.module.css';

const MovieGenre = ({ genres }) => {
  return (
    <>
      <ul className={s.genres}>
        {genres &&
          genres.map(({ id, name }) => {
            return (
              <li className={s.genreItem} key={id}>
                <span>{name}</span>
              </li>
            );
          })}
      </ul>
    </>
  );
};
export default MovieGenre;
