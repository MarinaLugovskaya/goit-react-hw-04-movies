import { NavLink } from 'react-router-dom';
import css from '../Navigation/Navigation.module.css';

export default function Navigation() {
  return (
    <nav className={css.navigation}>
      <NavLink
        exact
        to="/"
        className={css.link}
        activeClassName={css.activeLink}
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        className={css.link}
        activeClassName={css.activeLink}
      >
        Movies
      </NavLink>
    </nav>
  );
}
