import React from 'react'
import PropTypes from 'prop-types'

const Input = ({ className = '', placeholder = 'Enter text' }) => (
  <input type='text' className={className} placeholder={placeholder} />
)

Input.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string
}

export default Input
