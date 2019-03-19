import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Answer from '../answer/Answer';
import Question from '../question/Question';

import css from './row.module.sass';

class Row extends Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps) {
    return this.props.questionText !== nextProps.questionText;
  }

  render() {
    const { questionText, onChange, onDelete } = this.props;
    return (
      <div className={css.item}>
      <h3 className={css.delete} onClick={onDelete}>x</h3>
        <Question questionText={questionText} />
        <Answer onChange={onChange} />
      </div>
    )
  }
}

Row.propTypes = {
  questionText: PropTypes.string,
  onDelete: PropTypes.func,
}

Row.defaultProps = {
  questionText: 'empty question',
  onDelete: f=>f,
}

export default Row;