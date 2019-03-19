import React from 'react';

import css from './header.module.sass';

import Nav from './nav/Nav';
import Logo from './nav/Logo/Logo';
import User from './nav/User/User';

const Header = () => {
  return (
    <header className={css.header}>
      <div className="container">
        <div className={css.header_inner}>
          <Logo />
          <Nav />
          <User />
        </div>
      </div>
    </header>
  )
}

export default Header;
