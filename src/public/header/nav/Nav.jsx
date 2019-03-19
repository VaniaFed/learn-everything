import React from 'react';
import { Link } from 'react-router-dom';

import css from './nav.module.sass';

const Nav = () => {
  return (
    <nav className="nav">
      <ul className={css.list}>
        <li className={css.item}><Link className={css.link} to="/decks">Колоды</Link></li>
        <li className={css.item}><Link className={css.link} to="/test">Тест</Link></li>
        <li className={css.item}><Link className={css.link} to="/revise">Заучивание</Link></li>
      </ul>
    </nav>
  )
}

export default Nav;

