import 'bootstrap/dist/css/bootstrap.css';
import '../sass/based.sass';
import '../sass/auxiliary.sass';

import React from 'react';
import { render } from 'react-dom';
import App from '../App';

render(
  <App />,
  document.querySelector('#root')
);
