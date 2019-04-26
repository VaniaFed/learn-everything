import React from 'react'
import PropTypes from 'prop-types'

import css from './modalContainer.module.sass'

const ModalContainer = ({ children }) => {
  return (
    <div>
      <div className={css.bg}>
        <div className={css.container}>
          {children}
        </div>
      </div>
    </div>
  )
}

ModalContainer.propTypes = {
  children: PropTypes.element.isRequired
}

export default ModalContainer
