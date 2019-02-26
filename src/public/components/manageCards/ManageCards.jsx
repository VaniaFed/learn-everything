import React from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';

import Title from '../common/Title';
import TestItem from '../common/viewCards/TestItem';
import Button from '../common/Button';

const questionsList = [
  'Кто лох?',
  'Ты идиот?',
  'Ты идиот?',
  'Ты идиот?',
  'Ты идиот?',
];

const answersList = [
  'Да',
  'Да',
  'Да',
  'Да',
  'Да',
];

const ManageCards = ({ title='', questionsList=[], answersList=[] }) => (
  <div>
    <Title title={title} />
    <div className="test-items">
      {questionsList.map((question, i) =>
        <TestItem key={i} questionText={question} answerText={answersList[i]} enabled={false}/>
      )}
      <Button className="default-btn" content="Check the result"/>
    </div>
  </div>
);

ManageCards.propTypes = {
  title: PropTypes.string,
  questionsList: PropTypes.array,
  answersList: PropTypes.array,
}

render(
  <ManageCards title="Present simple" questionsList={questionsList} answersList={answersList} />,
  document.querySelector('#manage-cards')
);