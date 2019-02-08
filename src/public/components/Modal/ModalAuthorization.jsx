import React from 'react';
import { render } from 'react-dom';

import Title from '../common/Title';

const ModalAuthorization = ({ data }) => (
  <div className="modal-bg">
    <div className="modal-container">
      <Title content="Авторизация" />
    </div>
  </div>
);

render(
  <ModalRegistration />,
  document.querySelector('#authorization')
);
