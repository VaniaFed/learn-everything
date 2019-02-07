import React from 'react';

import Answer from './Answer';
import Question from './Question';

const TestItem = ({ questionText }) => (
  <div className="test-item">
    <Question questionText={questionText}/>
    <Answer />
  </div>
);

export default TestItem;