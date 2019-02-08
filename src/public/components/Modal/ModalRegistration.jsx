import React from 'react';
import { render } from 'react-dom';
import Title from '../common/Title';



const ModalRegistration = ({ data }) => (
  <div className="modal-bg">
    <div className="modal-container">
      <Title content="Регистрация" />
    </div>
  </div>
);

render(
  <ModalRegistration />,
  document.querySelector('#registration')
);
