import React, { Component } from 'react'
import PropTypes from 'prop-types'

import ModalContainer from './modalContainer/ModalContainer'
import Submit from './Submit'
import Title from '../common/title1/Title'

import css from './defaultModal.module.sass'

class ModalAuthorization extends Component {
  constructor (props) {
    super(props)
    this.userLogin = React.createRef()
    this.userPassword = React.createRef()

    this.state = {
      err: false,
      errText: null
    }
  }

  login = (e) => {
    e.preventDefault()
  }

  isError () {
    return this.state.err ? 'borderError' : ''
  }

  render () {
    return (
      <ModalContainer>
        <Title>{this.props.title}</Title>
        <input className={`${css.modal__input} ${css.modal__input__text} ${css.borderError}`}
          placeholder='Логин'
          ref={this.userLogin} />
        <input type='password' className={`${css.modal__input} ${css.modal__input__text}`} placeholder='Пароль' ref={this.userPassword} />
        <p style={{ 'color': 'red' }}>{this.state.err ? this.state.errText : null}</p>
        <Submit className={`${css.modal__input} ${css.modal__input__submit}`} value='Войти' onClick={this.login} />
      </ModalContainer>
    )
  }
}

ModalAuthorization.propTypes = {
  title: PropTypes.string
}

export default ModalAuthorization
