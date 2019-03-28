import React from 'react'
import PropTypes from 'prop-types'

const Title = ({ title = 'Title', className = '' }) => (
  <h2 className={className}>{title}</h2>
)

Title.propTypes = {
  title: PropTypes.string
}

export default Title
