import React from 'react'
import PropTypes from 'prop-types'

import css from './title2.module.sass'

const Title2 = ({ children }) => {
  return (
    <h2 className={css.title2}>{children}</h2>
  )
}

Title2.propTypes = {
}

export default Title2
