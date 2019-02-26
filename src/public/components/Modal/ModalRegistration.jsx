import React, { Component } from 'react';
import { render } from 'react-dom';

import Title from '../common/Title';
import Input from './Input';
import Submit from './Submit';

class ModalRegistration extends Component {
  constructor (props) {
    super(props);
    this.login = React.createRef();
    this.password = React.createRef();
    this.passwordRepeat = React.createRef();
    this.register = this.register.bind(this);
  }

  register (e) {
    e.preventDefault();
    [this.login.current.value, this.password.current.value, this.passwordRepeat.current.value]
      .map(i => console.log(i));
  }

  render() {
    return (
      <div className="modal-bg">
        <div className="modal-container">
          <Title className="modal__title" title={this.props.title} />
          {/* <Input className="modal__input modal__input__text" placeholder="Логин" ref={this.login} /> */}
          <input className="modal__input modal__input__text" placeholder="Логин" ref={this.login} />
          <input className="modal__input modal__input__text" placeholder="Пароль" ref={this.password} />
          <input className="modal__input modal__input__text" placeholder="Повторите пароль" ref={this.passwordRepeat} />
          <Submit className="modal__input modal__input__submit"
                  value="Зарегистрироваться"
                  onClick={this.register}
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
