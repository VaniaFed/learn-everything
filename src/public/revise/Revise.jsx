// import 'bootstrap';
// import '../../sass/index.sass';

import React from 'react';
import PropTypes from 'prop-types';

const Revise = ({questionText='Question text', answerText='Answer text'}) => {
  return (
    <div className="container">
      <main className="remember-container">
        <h2 className="remember__title">Present Simple</h2>
        <div className="remember__question">{questionText}</div><button className="remember__check button-hover">Проверить</button>
        <div className="remember-container__complexity hidden"><button className="complexity__item button-hover">Забыл</button><button className="complexity__item button-hover">Сложно</button><button className="complexity__item button-hover">Нормально</button><button className="complexity__item button-hover">Легко</button></div>
        <div className="answer">{answerText}</div>
      </main>
    </div>
  )
}

export default Revise;