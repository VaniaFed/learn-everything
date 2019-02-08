
import React from 'react';
import { render } from 'react-dom';

import Title from '../common/Title';
import TestItem from './TestItem';
import Button from '../common/Button';

const questionsList = [
  'Кто лох?',
  'Ты идиот?',
  'Ты идиот?',
  'Ты идиот?',
  'Ты идиот?',
];

const Test = ({ title, questionsList }) => (
  <div>
    <Title title={title} />
    <div className="test-items">
      {questionsList.map((question, i) =>
        <TestItem key={i} questionText={question}/>
      )}
      <Button className="default-btn" content="Check the result"/>
    </div>
  </div>
);

render(
  <Test title="This is my title!" questionsList={questionsList}/>,
  document.querySelector('#test')
);
