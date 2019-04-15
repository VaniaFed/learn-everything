import React from 'react'
import PropTypes from 'prop-types'

import css from './articleBlock.module.sass'
const ArticleBlock = ({ children }) => {
  return (
    <div className={css.block}>
      {children}
    </div>
  )
}

ArticleBlock.propTypes = {

}

export default ArticleBlock
