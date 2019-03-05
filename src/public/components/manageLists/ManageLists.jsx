import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';

import List from './List.jsx';
import Button from '../common/Button';

class ManageLists extends Component {
  constructor(props) {
    super(props);

    this.addList = this.addList.bind(this);
    this.state = {
      lists: [
        {
          'name': 'Past progressive',
          'quantity': 5,
        },
        {
          'name': 'future simple',
          'quantity': 14,
        },
        {
          'name': 'Complex object',
          'quantity': 53,
        },
      ],
    }
  }

  addList() {
    const lists = [
      ...this.state.lists,
      {
        'name': 'noname',
        'quantity': 0
      }
    ]

    this.setState({ lists });
  }

  render() {
    const { lists,  } = this.state;
    const { addList } = this;
    return (
      <div>
        <div className="lists">
          {lists.map((list, i) => 
            <List key={i} name={list.name} quantity={list.quantity} />
          )}
        </div>
        <Button className="default-btn" onClick={addList} content="Добавить список"/>
      </div>
    )
  }
}

render(
  <ManageLists />,
  document.querySelector('#manage-lists')
)

