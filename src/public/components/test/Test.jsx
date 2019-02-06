import 'bootstrap';
import '../../sass/index.sass';

import React from 'react';
import { render } from 'react-dom';
import TestItem from './TestItem';
import Title from './Title';

const questionsList = [
  'Кто лох?',
  'Ты идиот?',
];

const Test = ( title ) => (
  <Title title={title} />
  // {questionsList.map((question, i) => 
  //   <TestItem key={i} questionText={question}/>
  // )};
);

render(
  <Title title="Some title"/>,
  document.getElementById('test')
);
