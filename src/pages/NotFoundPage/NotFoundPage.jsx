import { Link } from 'react-router-dom';

import s from './NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <div className={s.notFound}>
      <h1 className={s.titleError}>Извините, эта страница еще не создана 😕</h1>
      <button type="button" className={s.btnHome}>
        <Link className={s.link} to="/">
          На главную страницу
        </Link>
      </button>
      <button className={s.btnSearch}>
        <Link className={s.link} to="/movies">
          К поиску фильмов
        </Link>
      </button>
    </div>
  );
};

export default NotFoundPage;
