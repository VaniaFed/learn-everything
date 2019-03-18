import React from 'react';

import css from './header.module.sass';

import Nav from './nav/Nav';

const Header = () => {
  return (
    <header className={css.header}>
      <div className="container">
        <div className={css.header_inner}>
          <div className={css.logo}>
            <h1 className={css.logo__text}>Train to Memorize!</h1>
            <p className={css.logo__tagline}>Запоминайте больше информации и равивайте свою память</p>
          </div>
          <Nav />
          <div>
            <a className={`${css.user__link}`} href="/login">Войти</a>
            <a className={css.user__link} href="/checkin">Зарегестрироваться</a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;
