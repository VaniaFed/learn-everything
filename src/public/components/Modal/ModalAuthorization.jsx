import React from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';

import Input from './Input';
import Submit from './Submit';
import Title from '../common/Title';

const ModalAuthorization = ({ title }) => (
  <div className="modal-bg">
    <div className="modal-container">
      <Title title={title} />
      <Input className="modal__input modal__input__text" placeholder="Логин" />
      <Input className="modal__input modal__input__text" placeholder="Пароль" />
      <Submit className="modal__input modal__input__submit" value="Зарегистрироваться" />
    </div>
  </div>
);

ModalAuthorization.propTypes = {
  title: PropTypes.string,
}

render(
  <ModalAuthorization title="Авторизация" />,
  document.querySelector('#authorization')
);
