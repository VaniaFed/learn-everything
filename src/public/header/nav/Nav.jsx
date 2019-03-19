import React from 'react';

import css from './nav.module.sass';

const Nav = () => {
  return (
    <nav className="nav" style={{ background: '#fff', padding: '16px 20px'}}>
      <ul className={css.list}>
        <li className={css.item}><a className={css.link} href="#/decks">Колоды</a></li>
        <li className={css.item}><a className={css.link} href="#/test">Тест</a></li>
        <li className={css.item}><a className={css.link} href="#/revise">Заучивание</a></li>
      </ul>
    </nav>
  )
}

export default Nav;

