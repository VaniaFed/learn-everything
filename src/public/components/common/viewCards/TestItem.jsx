import React from 'react';
import PropTypes from 'prop-types';

import Answer from './Answer';
import Question from './Question';

const TestItem = ({ questionText='', answerText='', enabled=false }) => (
  <div className="test-item">
    <Question questionText={questionText}/>
    <Answer answerText={answerText} enabled={enabled} />
  </div>
);

TestItem.propTypes = {
  questionText: PropTypes.string,
  answerText: PropTypes.string,
  enabled: PropTypes.bool,
}

export default TestItem;