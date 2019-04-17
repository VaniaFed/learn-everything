import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import css from './user.module.sass'

const User = ({ isPressedHamburger = false }) => {
  return (
    <div className={`${css.nav} ${isPressedHamburger ? css.active : 'jeje'}`}>
      <Link className={css.link} to='/registration'>Зарегестрироваться</Link>
      <Link className={`${css.link} ${css.volume}`} to='/login'>Войти</Link>
    </div>
  )
}

User.propTypes = {
  isPressedHamburger: PropTypes.bool
}

export default User
