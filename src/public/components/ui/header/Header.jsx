import { Link } from 'react-router-dom'
import React from 'react'

import css from './header.module.sass'

import Logo from './nav/Logo/Logo'
import User from './nav/User/User'

const Header = () => {
  return (
    <header className={css.header}>
      <div className='container'>
        <div className={css.header_inner}>
          <Link to='/decks'>
            <Logo />
          </Link>
          <User />
        </div>
      </div>
    </header>
  )
}

export default Header
