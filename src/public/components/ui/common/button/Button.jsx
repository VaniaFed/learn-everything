import React from 'react'
import PropTypes from 'prop-types'

import css from './button.module.sass'

const Button = ({ children, className = '', onClick = f => f }) => (
  <button className={`${css.button_default} ${className}`} onClick={onClick}>{children}</button>
)

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
}

export default Button
