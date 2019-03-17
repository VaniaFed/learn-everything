import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Answer from './Answer';
import Question from './Question';

class TestItem extends Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps) {
    return this.props.questionText !== nextProps.questionText;
  }

  render() {
    const { questionText, onChange } = this.props;
    return (
      <div style={this.style} className="test__item">
        <Question questionText={questionText} />
        <Answer onChange={onChange} />
      </div>
    )
  }
}

TestItem.propTypes = {
  questionText: PropTypes.string,
  onDelete: PropTypes.func,
}

TestItem.defaultProps = {
  questionText: 'empty question',
  onDelete: f=>f,
}

export default TestItem;