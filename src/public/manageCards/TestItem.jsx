import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Answer from './Answer';
import Question from './Question';

class TestItem extends Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps) {
    const { questionText, answerText } = this.props;
    return (questionText !== nextProps.questionText &&
            answerText !== nextProps.answerText
    );
  }

  render() {
    const { questionText, answerText, onDelete, onChangeQuestion, onChangeAnswer } = this.props;
    return (
      <div className="test__item">
        <h3 style={this.style} onClick={onDelete} className="test__delete">x</h3>
        <Question questionText={questionText} onChange={onChangeQuestion} />
        <Answer answerText={answerText} onChange={onChangeAnswer} />
      </div>
    )
  }
}

TestItem.propTypes = {
  questionText: PropTypes.string,
  answerText: PropTypes.string,
  enabled: PropTypes.bool,
  onDelete: PropTypes.func,
}

TestItem.defaultProps = {
  questionText: '',
  answerText: '',
  onDelete: f=>f,
  onChangeAnswer: f=>f,
  onChangeQuestion: f=>f,
}

export default TestItem;