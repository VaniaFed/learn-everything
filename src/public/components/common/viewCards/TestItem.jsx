import React from 'react';
import PropTypes from 'prop-types';

import Answer from './Answer';
import Question from './Question';

const TestItem = ({ questionText='', answerText='', enabled=false, onDelete=f=>f }) => (
  <div className="test__item">
    <h3 onClick={onDelete} className="test__delete">x</h3>
    <Question questionText={questionText}/>
    <Answer answerText={answerText} enabled={enabled} />
  </div>
);

TestItem.propTypes = {
  questionText: PropTypes.string,
  answerText: PropTypes.string,
  enabled: PropTypes.bool,
  onDelete: PropTypes.func,
}

export default TestItem;