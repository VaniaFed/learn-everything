import React from 'react'
import PropTypes from 'prop-types'

import css from './button.module.sass'

const Button = ({ children, className = '', onClick = f => f }) => (
  <button className={`${css.button_default} ${className}`} onClick={onClick}>{children}</button>
)

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func
}

export default Button
