import React from 'react'
import css from './list.module.sass'
import PropTypes from 'prop-types'

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
