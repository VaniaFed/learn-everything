import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';
import { v4 } from 'uuid';

import List from './List.jsx';
import Button from '../common/Button';

class ManageLists extends Component {
  constructor(props) {
    super(props);

    this.addList = this.addList.bind(this);
    this.deleteList = this.deleteList.bind(this);
    this.state = {
      lists: [
        {
          'id': v4(),
          'name': 'list',
          'quantity': 0,
        },
        {
          'id': v4(),
          'name': 'future simple',
          'quantity': 14,
        },
        {
          'id': v4(),
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
        'id': v4(),
        'name': 'noname',
        'quantity': 0
      }
    ]

    this.setState({ lists });

  }

  componentDidUpdate() {
    console.log('updated');
  }

  deleteList(id) {
    this.setState(prevState => ({
      lists: prevState.lists.filter(list => list.id !== id)
    }));
  }

  render() {
    const { lists } = this.state;
    const { addList, deleteList } = this;
    return (
      <div>
        <div className="lists">
          {lists.map((list, i) => 
            <List key={list.id} name={list.name} quantity={list.quantity} onDelete={() => deleteList(list.id)} />
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