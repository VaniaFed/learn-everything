import 'bootstrap';
import '../../sass/index.sass';

import React from 'react';
import { render } from 'react-dom';
import Title from './Title';

const questionsList = [
  'Кто лох?',
  'Ты идиот?',
];

const Test = ({ title }) => (
  // <h1>hello</h1>
  <Title title={title} />
  // {questionsList.map((question, i) => 
  //   <TestItem key={i} questionText={question}/>
  // )};
);

render(
  <Test title="This is my title!"/>,
  document.querySelector('#test')
);
