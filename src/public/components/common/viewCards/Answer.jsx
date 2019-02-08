import React from 'react';

const Answer = ({ answerText, disabled }) => (
  <div className="item__bg answer_bg">
    <div className="item__title">Ответ</div>
    <textarea
      className="test__input test__question answer"
      value={answerText}
      // {disabled ? () => "disabled" : () => ""}
    />
  </div>
);

export default Answer;