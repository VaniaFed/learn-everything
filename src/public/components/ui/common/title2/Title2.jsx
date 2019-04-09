import React from 'react'
import PropTypes from 'prop-types'

import css from './title2.module.sass'

const Title2 = ({ content = 'Title' }) => {
  return (
    <h2 className={css.title2}>{content}</h2>
  )
}

Title2.propTypes = {
  content: PropTypes.string.isRequired
}

export default Title2
