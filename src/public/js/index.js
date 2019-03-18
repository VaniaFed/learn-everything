import 'bootstrap/dist/css/bootstrap.css';
import '../sass/based.sass';

import React, { Component } from 'react';
import { render } from 'react-dom';
import App from '../App';

render(
  <App />,
  document.querySelector('#root')
);
