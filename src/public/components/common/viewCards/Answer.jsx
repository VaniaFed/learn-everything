import React from 'react';
import PropTypes from 'prop-types';

const isEnabled = (enabled, answerText) => {
  if (enabled) {
    return (
      <textarea
        className="test__input test__question answer"
      />
    )
  }
  return (
    <textarea
      className="test__input test__question answer"
      value={answerText}
      disabled
    />
  )
}

const Answer = ({ answerText='Answer', enabled=false }) => (
  <div className="item__bg answer_bg">
    <div className="item__title">Ответ</div>
    {isEnabled(enabled, answerText)}
  </div>
);

Answer.propTypes = {
  answerText: PropTypes.string,
  enabled: PropTypes.bool,
}

export default Answer;