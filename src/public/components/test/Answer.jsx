import React from 'react';
import PropTypes from 'prop-types';

const  Answer = ({ onChange=f=>f }) => {
  const userAnswer = React.createRef();

  return (
    <div className="item__bg answer_bg">
      <div className="item__title">Ответ</div>
    <textarea
      className="test__input test__question answer"
      ref={userAnswer}
      onChange={() => onChange(userAnswer.current.value)}
      placeholder="Type an answer..."
    />
    </div>
  )
}

Answer.propTypes = {
  onChange: PropTypes.func,
}

export default Answer;