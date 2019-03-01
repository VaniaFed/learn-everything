import React from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';

import List from './List.jsx';
import Button from '../common/Button';

const data = [
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

export default ManageLists;
