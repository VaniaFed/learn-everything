import React from 'react'
import PropTypes from 'prop-types'

import Text from '../text/Text'
import Button from '../button/Button'

import css from './noOneCards.module.sass'

const NoOneCards = ({ textMsg = 'Here is no one cards', comeBack = f => f }) => {
  return (
    <div className={css.not_found}>
      <Text className={css.simple_text}>{textMsg}</Text>
      <Button onClick={comeBack}>Вернуться обратно</Button>
    </div>
  )
}

NoOneCards.propTypes = {
  textMsg: PropTypes.string,
  comeBack: PropTypes.func
}

export default NoOneCards
