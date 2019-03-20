import React from 'react';

import css from './logo.module.sass';

const Logo = () => {
  return (
    <div >
      <h1 className={css.logo__text}>Train to Memorize!</h1>
      <p className={css.logo__tagline}>Запоминайте больше информации и равивайте свою память</p>
    </div>
  )
}

export default Logo;

