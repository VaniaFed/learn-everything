// import 'bootstrap';
// import '../../sass/index.sass';

import React from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';

import List from './List.jsx';
import Button from '../common/Button';

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

const ManageLists = ({ listsData=[] }) => (
  <div>
    <div className="lists">
      {listsData.map((list, i) => 
        <List key={i} name={list.name} quantity={list.quantity} />
      )}
    </div>
    <Button className="default-btn" content="Добавить список"/>
  </div>
);
ManageLists.propTypes = {
  listsData: PropTypes.array,
}

render(
  <ManageLists listsData={data} />,
  document.querySelector('#manage-lists')
);