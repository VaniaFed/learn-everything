import React from 'react';

import css from './nav.module.sass';

const Nav = () => {
  return (
    <nav class="nav">
      <ul class={css.list}>
        <li class={css.item}><a class={`${css.link}`} href="manageLists.html">Колоды</a></li>
        <li class={css.item}><a class={`${css.link}`} href="test.html">Тест</a></li>
        <li class={css.item}><a class={`${css.link}`} href="remember.html">Заучивание</a></li>
      </ul>
    </nav>
  )
}

export default Nav;

