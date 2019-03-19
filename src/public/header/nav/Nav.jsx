import React from 'react';

import css from './nav.module.sass';

const Nav = () => {
  return (
    <nav className="nav" style={{ background: '#fff', padding: '16px 20px'}}>
      <ul className={css.list}>
        <li className={css.item}><a className={css.link} href="manageLists.html">Колоды</a></li>
        <li className={css.item}><a className={css.link} href="test.html">Тест</a></li>
        <li className={css.item}><a className={css.link} href="remember.html">Заучивание</a></li>
      </ul>
    </nav>
  )
}

export default Nav;

