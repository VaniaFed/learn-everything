import React from 'react'
import PropTypes from 'prop-types'

import css from './title1.module.sass'

const Title = ({ children, margin }) => (
  <h2 className={`${css.title} ${margin === 'bottom' ? css.marginBottom : ''}`}>{children}</h2>
)

Title.propTypes = {
  children: PropTypes.string.isRequired,
  margin: PropTypes.string
}

export default Title
