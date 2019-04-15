import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Logo from './logo/Logo'
import Hamburger from './hamburger/Hamburger'
import User from './user/User'

import css from './nav.module.sass'

const Nav = ({ isPressedHamburger = false, toggleState = f => f }) => {
  return (
    <div className={css.nav}>
      <Link to='/decks'>
        <Logo />
      </Link>
      <ul className={css.list}>
        <Link className={css.item} to='/started'>Главная</Link>
        <Link className={css.item} to='/decks'>Колоды</Link>
      </ul>
      <Hamburger isPressedHamburger={isPressedHamburger} toggleState={toggleState} />
      {<User isPressedHamburger={isPressedHamburger} />}
    </div>
  )
}

Nav.propTypes = {

}

export default Nav
