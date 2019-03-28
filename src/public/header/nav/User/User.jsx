import React from 'react'

import css from './user.module.sass'

const User = () => {
  return (
    <div>
      <a className={css.user__link} href='/login'>Войти</a>
      <a className={css.user__link} href='/checkin'>Зарегестрироваться</a>
    </div>
  )
}

export default User
