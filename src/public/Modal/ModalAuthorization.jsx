import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { render } from 'react-dom'

import Submit from './Submit'
import Title from '../common/Title'

class ModalAuthorization extends Component {
  constructor (props) {
    super(props)
    this.login = this.login.bind(this)
    this.userLogin = React.createRef()
    this.userPassword = React.createRef()

    this.state = {
      err: false,
      errText: null
    }
  }

  login (e) {
    e.preventDefault()
    const login = this.userLogin.current.value
    const password = this.userPassword.current.value
    console.log(login, password)

    let error = ''
    let errorCode = 0

    // if (!login.length) {
    //   error = 'Вы не заполнили поле логин'
    //   errorCode = 1
    // } else if (!password.length) {
    //   error = 'Вы не заполнили поле пароль'
    //   errorCode = 2
    // }
    (login.length === 0)
      ? error = 'Вы не заполнили поле логин'
      : password.length === 0
        ? error = 'Вы не заполнили поле пароль'
        : null
    (error)
        ? this.setState({
          err: true,
          errText: error,
          errCode: errorCode,
        }) :
        this.setState({
          err: false,
          errText: '',
          errCode: errorCode,
        })
    }

  isError () {
    return this.state.err ? 'borderError' : ''
  }

  render () {
    return (
      <div className='modal-bg'>
        <div className='modal-container'>
          <Title title={this.props.title} />
          <input className='modal__input modal__input__text borderError'
            placeholder='Логин'
            ref={this.userLogin} />
          <input type='password' className='modal__input modal__input__text' placeholder='Пароль' ref={this.userPassword} />
          <p style={{'color': 'red'}}>{this.state.err ? this.state.errText : null}</p>
          <Submit className='modal__input modal__input__submit' value='Войти' onClick={this.login} />
        </div>
      </div>
    )
  }
}

ModalAuthorization.propTypes = {
  title: PropTypes.string
}

render(
  <ModalAuthorization title='Авторизация' />,
  document.querySelector('#authorization')
)
