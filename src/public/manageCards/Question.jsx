import React from 'react';
import PropTypes from 'prop-types';

const Question = ({ questionText='', onChange=f=>f }) => {
  let input = React.createRef();
  return (
    <div className="item__bg">
      <div className="item__title">Вопрос</div> 
      <input type="text"
        className="test__input test__question"
        defaultValue={questionText}
        onChange={() => onChange(input.current.value)}
        ref={input}
        placeholder="Type a question..."
      />
    </div>
  )
};
Question.propTypes = {
  questionText: PropTypes.string.onChange,
  onChange: PropTypes.func,
}

export default Question;
