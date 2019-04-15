import React from 'react'
import { Link } from 'react-router-dom'

import css from './user.module.sass'

const User = ({ isPressedHamburger = false }) => {
  return (
    <div className={`${css.nav} ${isPressedHamburger ? css.active : 'jeje'}`}>
      <Link className={css.link} to='/login'>Войти</Link>
      <Link className={css.link} to='/registration'>Зарегестрироваться</Link>
    </div>
  )
}

export default User