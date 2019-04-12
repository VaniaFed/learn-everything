import React from 'react'

import css from './logo.module.sass'

const Logo = () => {
  return (
    <div >
      <h1 className={css.logo__text}>Revise on Time</h1>
      <p className={css.logo__tagline}>Поможем запомнить</p>
    </div>
  )
}

export default Logo
