import React from 'react'

import css from './logo.module.sass'

const Logo = () => {
  return (
    <div >
      <h1 className={css.text}>Revise on Time</h1>
      <p className={css.tagline}>Поможем запомнить</p>
    </div>
  )
}

export default Logo
