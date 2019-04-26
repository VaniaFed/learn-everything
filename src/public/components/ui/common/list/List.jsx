import React from 'react'
import PropTypes from 'prop-types'

import css from './list.module.sass'

const List = ({ children }) => {
  return (
    <div>
      <ul className={css.list}>
        {children.map(child => <li className={css.item}>{child}</li>)}
      </ul>
    </div>
  )
}

List.propTypes = {
  children: PropTypes.element
}

export default List
