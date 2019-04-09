import React from 'react'
import PropTypes from 'prop-types'

import css from './title1.module.sass'

const Title = ({ content = 'Title' }) => (
  <h2 className={css.title}>{content}</h2>
)

Title.propTypes = {
  content: PropTypes.string
}

export default Title
