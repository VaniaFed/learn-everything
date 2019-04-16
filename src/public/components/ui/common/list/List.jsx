import React from 'react'
import css from './list.module.sass'

const List = ({ children }) => {
  return (
    <div>
      <ul className={css.list}>
        {children.map(child => <li className={css.item}>{child}</li>)}
        {/* {children} */}
      </ul>
    </div>
  )
}

export default List
