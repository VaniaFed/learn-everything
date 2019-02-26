import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';

import Submit from './Submit';
import Title from '../common/Title';

class ModalAuthorization extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.userLogin = React.createRef();
    this.userPassword = React.createRef();
  }

  login(e) {
    e.preventDefault();
    [this.userLogin.current.value, this.userPassword.current.value].map(i => console.log(i));
  }

  render () {
    return (
      <div className="modal-bg">
        <div className="modal-container">
          <Title title={this.props.title} />
            <input className="modal__input modal__input__text" placeholder="Логин" ref={this.userLogin} />
            <input className="modal__input modal__input__text" placeholder="Пароль" ref={this.userPassword} />
          <Submit className="modal__input modal__input__submit" value="Войти" onClick={this.login}/>
        </div>
      </div>
    )
  }
}

ModalAuthorization.propTypes = {
  title: PropTypes.string,
}

render(
  <ModalAuthorization title="Авторизация" />,
  document.querySelector('#authorization')
);
