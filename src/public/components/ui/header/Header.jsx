import { Link } from 'react-router-dom'
import React, { Component } from 'react'

import css from './header.module.sass'

import Logo from './nav/logo/Logo'
import Hamburger from './nav/hamburger/Hamburger'
import User from './nav/user/User'

class Header extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isPressedHamburger: false
    }
    this.toggleState = this.toggleState.bind(this)
  }

  toggleState () {
    this.setState({ isPressedHamburger: !this.state.isPressedHamburger })
  }

  render () {
    const { toggleState } = this
    const { isPressedHamburger } = this.state
    return (
      <header className={css.header}>
        <div className='container'>
          <div className={css.header_inner}>
            <Link to='/decks'>
              <Logo />
            </Link>
            <Hamburger isPressedHamburger={isPressedHamburger} toggleState={toggleState} />
            {<User isPressedHamburger={isPressedHamburger} />}
          </div>
        </div>
      </header>
    )
  }
}

export default Header
