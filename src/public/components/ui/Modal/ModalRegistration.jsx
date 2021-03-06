import React, { Component } from 'react'
import PropTypes from 'prop-types'

import ModalContainer from './modalContainer/ModalContainer'
import Title from '../common/title1/Title'
import Submit from './Submit'

import css from './defaultModal.module.sass'

class ModalRegistration extends Component {
  constructor (props) {
    super(props)
    this.login = React.createRef()
    this.password = React.createRef()
    this.passwordRepeat = React.createRef()

    this.state = {
      err: false
    }
  }

  register (e) {
    e.preventDefault()

    const login = this.login.current.value
    const password = this.password.current.value
    const passwordRepeat = this.passwordRepeat.current.value

    console.log(login, password, passwordRepeat)

    let error

    error
      ? this.setState({
        err: true,
        errText: error
      })
      : this.setState({
        err: false,
        errText: ''
      })
  }

  render () {
    return (
      <ModalContainer>
        <Title>{this.props.title}</Title>
        <input className={`${css.modal__input} ${css.modal__input__text}`} placeholder='Логин' ref={this.login} />
        <input type='password' className={`${css.modal__input} ${css.modal__input__text}`} placeholder='Пароль' ref={this.password} />
        <input type='password' className={`${css.modal__input} ${css.modal__input__text}`} placeholder='Повторите пароль' ref={this.passwordRepeat} />
        <p style={{ 'color': 'red' }}>{this.state.err ? this.state.errText : null}</p>
        <Submit className={`${css.modal__input} ${css.modal__input__submit}`}
          value='Зарегистрироваться'
          onClick={e => this.register(e)}
        />
      </ModalContainer>
    )
  }
}

ModalRegistration.propTypes = {
  title: PropTypes.string
}

export default ModalRegistration
