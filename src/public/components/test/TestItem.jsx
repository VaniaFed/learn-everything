import React from 'react';
import { render } from 'react-dom';

import Answer from './Answer';
import Question from './Question';

const TestItem = ({ questionText }) => (
  <div className="test-item">
    <Question questionText={questionText}/>
    <Answer />
  </div>
);

export default TestItem;