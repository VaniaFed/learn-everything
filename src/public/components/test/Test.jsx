import React from 'react';
import { render } from 'react-dom';

import TestItem from './TestItem'

const Test = ({ title, answersList, questionsList }) => (
  <h2 className="test__title">{title}</h2>
  <div className="test-items">
  </div>
);

export default List;

