import { Link } from 'react-router-dom'
import React, { Component } from 'react'

import css from './header.module.sass'

import Logo from './nav/Logo/Logo'
import User from './nav/User/User'
import 'hamburgers/dist/hamburgers.min.css'

class Header extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isPressedHamburger: false
    }
    this.hamburger = new React.createRef()
    this.toggleState = this.toggleState.bind(this)
  }

  toggleState () {
    this.setState({ isPressedHamburger: !this.state.isPressedHamburger })
  }

  render () {
    const { toggleState, hamburger } = this
    const { isPressedHamburger } = this.state
    window.onclick = e => {
      (isPressedHamburger && e.currentTarget !== hamburger.current) && toggleState()
    }
    return (
      <header className={css.header}>
        <div className='container'>
          <div className={css.header_inner}>
            <Link to='/decks'>
              <Logo />
            </Link>
            <div className={`hamburger hamburger--collapse ${css.hamburger} ${isPressedHamburger ? 'is-active' : ''}`}
              ref={hamburger}
              onClick={
                (e) => {
                  e.stopPropagation()
                  toggleState()
                }
              } >
              <div className='hamburger-box'>
                <div className='hamburger-inner'></div>
              </div>
            </div>
            {<User isPressedHamburger={isPressedHamburger} />}
          </div>
        </div>
      </header>
    )
  }
}

export default Header
