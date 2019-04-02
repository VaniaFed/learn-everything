import React from 'react'
import { Link } from 'react-router-dom';

import css from './user.module.sass'

const User = () => {
  return (
    <div>
      <Link className={css.user__link} to='/login'>Войти</Link>
      <Link className={css.user__link} to='/registration'>Зарегестрироваться</Link>
    </div>
  )
}

export default User
