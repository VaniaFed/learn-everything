import React from 'react'
import PropTypes from 'prop-types'

import Title2 from './title2/Title2'
import Button from './button/Button'

const NoOneCards = ({ textMsg = 'Here is no one cards', comeBack = f => f }) => {
  return (
    <div className='not_found'>
      <Title2 text={textMsg} />
      <Button content='Вернуться обратно' onClick={comeBack} />
    </div>
  )
}

NoOneCards.propTypes = {
  textMsg: PropTypes.string,
  comeBack: PropTypes.func
}

export default NoOneCards
