import React, { Component } from 'react';
import PropTypes from 'prop-types';

const isEnabled = (enabled, answerText, onChange, userAnswer) => {
  if (enabled) {
    return (
      <textarea
        className="test__input test__question answer"
        onClick={() => onChange(userAnswer)}
        ref={userAnswer}
      />
    )
  }
  return (
    <textarea
      className="test__input test__question answer"
      value={answerText}
      disabled
      onClick={() => onChange(userAnswer)}
      ref={userAnswer}
    />
  )
}

class Answer extends Component {
  constructor(props) {
    super(props);

    this.userAnswer = React.createRef();
  }

  render() {
    const { answerText, enabled, onChange } = this.props;
    const { userAnswer } = this;
    return (
      <div className="item__bg answer_bg">
        <div className="item__title">Ответ</div>
        {isEnabled(enabled, answerText, onChange, userAnswer)}
      </div>
    )
  }

}

Answer.propTypes = {
  answerText: PropTypes.string,
  enabled: PropTypes.bool,
}

export default Answer;