import React from 'react'
import PropTypes from 'prop-types'

import css from './text.module.sass'
const Text = ({ children }) => {
  return (
    <p className={css.text}>
      {children}
    </p>
  )
}

Text.propTypes = {

}

export default Text
