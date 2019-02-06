import React from 'react';
import { render } from 'react-dom';

const Answer = () => (
  <div className="item__bg">
    <div className="item__title">Вопрос</div> 
    <input type="text"
      className="test__input test__question"
      disabled 
    />
  </div>
);

export default Answer;