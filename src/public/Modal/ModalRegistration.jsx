import React, { Component } from 'react';
import { render } from 'react-dom';

import Title from '../common/Title';
import Submit from './Submit';

class ModalRegistration extends Component {
  constructor (props) {
    super(props);
    this.login = React.createRef();
    this.password = React.createRef();
    this.passwordRepeat = React.createRef();

    this.state = {
      err: false
    };
  }

  register (e) {
    e.preventDefault();

    const login = this.login.current.value;
    const password = this.password.current.value;
    const passwordRepeat = this.passwordRepeat.current.value;

    console.log(login, password, passwordRepeat);
    let error = '';
    (login.length === 0) ?
      error = 'Вы не заполнили поле логин' :
      (password.length === 0) ?
        error = 'Вы не заполнили поле пароль' :
      (password !== passwordRepeat) ?
        error = 'Пароли не совпадают' :
        null

    error ?
      this.setState({
        err: true,
        errText: error,
      }) :
      this.setState({
        err: false,
        errText: '',
      })
  }

  render() {
    return (
      <div className="modal-bg">
        <div className="modal-container">
          <Title className="modal__title" title={this.props.title} />
          <input className="modal__input modal__input__text" placeholder="Логин" ref={this.login} />
          <input type="password" className="modal__input modal__input__text" placeholder="Пароль" ref={this.password} />
          <input type="password" className="modal__input modal__input__text" placeholder="Повторите пароль" ref={this.passwordRepeat} />
          <p style={{'color': 'red'}}>{this.state.err ? this.state.errText : null}</p>
          
          <Submit className="modal__input modal__input__submit"
                  value="Зарегистрироваться"
                  onClick={e => this.register(e)}
          />
        </div>
      </div>
    )
  }
}


render(
  <ModalRegistration title="Регистрация" />,
  document.querySelector('#registration')
);