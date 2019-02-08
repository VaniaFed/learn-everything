import React from 'react';
import { render } from 'react-dom';

import Title from '../common/Title';
import Input from './Input';
import Submit from './Submit';

const ModalRegistration = ({ titleText }) => (
  <div className="modal-bg">
    <div className="modal-container">
      <Title className="modal__title" title={titleText} />
      <Input className="modal__input modal__input__text" placeholder="Логин" />
      <Input className="modal__input modal__input__text" placeholder="Пароль" />
      <Input className="modal__input modal__input__text" placeholder="Повторите пароль" />
      <Submit className="modal__input modal__input__submit" value="Зарегистрироваться" />
    </div>
  </div>
);

render(
  <ModalRegistration titleText="Регистрация" />,
  document.querySelector('#registration')
);
