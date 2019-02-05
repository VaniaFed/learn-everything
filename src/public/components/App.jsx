import 'bootstrap';
import '../sass/index.sass';

import React from 'react';
import { render } from 'react-dom';

import List from './manage/List.jsx';

const data = [
  {
    "name": "Past progressive",
    "quantity": "5",
  },
  {
    "name": "Future simple",
    "quantity": "14",
  },
  {
    "name": "Complex object",
    "quantity": "53",
  },
];

const Lists = ({ data }) => (
  <div className="lists">
    {data.map((list, i) => 
      <List key={i} name={list.name} quantity={list.quantity} />
    )}
  </div>
);

render(
  <Lists data={data} />,
  document.querySelector('#react-cards-manage')
);
