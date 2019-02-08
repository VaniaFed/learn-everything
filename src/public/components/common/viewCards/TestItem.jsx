import React from 'react';

import Answer from './Answer';
import Question from './Question';

const TestItem = ({ questionText, answerText }) => (
  <div className="test-item">
    <Question questionText={questionText}/>
    <Answer answerText={answerText} />
  </div>
);

export default TestItem;