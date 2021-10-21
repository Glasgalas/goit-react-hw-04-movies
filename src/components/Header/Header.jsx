import { Link } from 'react-router-dom';

import s from './Header.module.css';

const Headerbar = () => {
  return (
    <header className={s.Headerbar}>
      <ul className={s.nav}>
        <li>
          <Link className={s.link} exact to="/">
            Новинки
          </Link>
        </li>
        <li>
          <Link className={s.link} to="/movies">
            Поиск
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Headerbar;
