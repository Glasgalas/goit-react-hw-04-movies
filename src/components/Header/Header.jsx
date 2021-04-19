import { Link } from 'react-router-dom';

import s from './Header.module.css';

const Headerbar = () => {
  return (
    <header className={s.Headerbar}>
      <ul className={s.nav}>
        <li>
          <Link className={s.link} exact to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className={s.link} to="/movies">
            Movies
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Headerbar;
