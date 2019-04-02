import React from 'react'
import PropTypes from 'prop-types'

import css from './title2.module.sass'

const Title2 = ({ text = 'Title' }) => {
  return (
    <h2 className={css.title2}>{text}</h2>
  )
}

Title2.propTypes = {
  text: PropTypes.string.isRequired
}

export default Title2
