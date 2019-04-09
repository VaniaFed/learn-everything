import React from 'react'
import PropTypes from 'prop-types'

const SimpleText = ({ content = 'Обычный текст', className = '' }) => {
  return (
    <p className={`simple_text ${className}`}>{content}</p>
  )
}

SimpleText.propTypes = {
  content: PropTypes.string
}

export default SimpleText
