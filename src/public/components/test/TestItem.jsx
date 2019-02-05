import React from 'react';
import { render } from 'react-dom';

import Answer from './Answer';
import Question from './Question';

const TestItem = ({ answerText, questionText }) => (
  <div className="test-item">
    <Answer answer={answerText}/>
    <Question answer={questionText}/>
  </div>
);

export default TestItem;