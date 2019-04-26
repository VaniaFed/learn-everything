import React, { Component } from 'react'

import css from './header.module.sass'
import Nav from './nav/Nav'

class Header extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isPressedHamburger: false
    }
  }

  toggleState = () => {
    this.setState({ isPressedHamburger: !this.state.isPressedHamburger })
  }

  render () {
    const { toggleState } = this
    const { isPressedHamburger } = this.state
    return (
      <header className={css.header}>
        <div className='container'>
          <div className={css.header_inner}>
            <Nav isPressedHamburger={isPressedHamburger} toggleState={toggleState} />
          </div>
        </div>
      </header>
    )
  }
}

export default Header
