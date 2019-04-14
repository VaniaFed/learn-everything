import React from 'react'
import PropTypes from 'prop-types'
import 'hamburgers/dist/hamburgers.min.css'
import css from './hamburger.module.sass'

const Hamburger = ({ isPressedHamburger = false, toggleState = f => f }) => {
  const hamburger = React.createRef()
  window.onclick = e => {
    (isPressedHamburger && e.currentTarget !== hamburger.current) && toggleState()
  }
  return (
    <div className={`hamburger hamburger--emphatic ${css.hamburger} ${isPressedHamburger ? 'is-active' : ''}`}
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
  )
}

Hamburger.propTypes = {
  isPressedHamburger: PropTypes.bool.isRequired,
  toggleState: PropTypes.func.isRequired
}

export default Hamburger
