import React from 'react';
import PropTypes from 'prop-types';

const Answer = ({answerText='', onChange=f=>f}) => {
  let userAnswer = React.createRef();

  return (
    <div className="item__bg answer_bg">
      <div className="item__title">Ответ</div>
        <textarea
          className="test__input test__question answer"
          defaultValue={answerText}
          ref={userAnswer}
          onChange={() => onChange(userAnswer.current.value)}
          placeholder="Type an answer..."
        />
    </div>
  )
}

// test
Answer.propTypes = {
  answerText: PropTypes.string,
  enabled: PropTypes.bool,
}

export default Answer;