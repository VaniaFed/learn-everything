import React from 'react';
import PropTypes from 'prop-types';

import Answer from './Answer';
import Question from './Question';

const TestItem = ({ questionText='', onChange=f=>f }) => (
  <div className="test__item">
    <Question questionText={questionText} />
    <Answer onChange={onChange} />
  </div>
);

TestItem.propTypes = {
  questionText: PropTypes.string,
  answerText: PropTypes.string,
  enabled: PropTypes.bool,
  onDelete: PropTypes.func,
}

export default TestItem;