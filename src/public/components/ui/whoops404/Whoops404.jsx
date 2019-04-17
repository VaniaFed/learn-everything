import React from 'react'
import PropTypes from 'prop-types'

import css from './whoops404.module.sass'

const Whoops404 = ({ location = '' }) => {
  return (
    <div className={`${css.container} container`}>
      <h1 className={css.number404}>404</h1>
      <h1 className={css.title}>Resource not found at '{location.pathname}'</h1>
    </div>
  )
}

Whoops404.propTypes = {
  location: PropTypes.string
}

export default Whoops404
