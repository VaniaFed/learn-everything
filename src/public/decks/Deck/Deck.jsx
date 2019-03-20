import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import css from './deck.module.sass';

class Deck extends Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps) {
    return (this.props.name !== nextProps.name &&
            this.props.quantity !== nextProps.quantity
    );
  }

  render() {
    const { id, quantity, name, onDelete } = this.props;
    return (
      <div className={css.item}>
        <Link to='/deck' className={`${css.link} button-hover`}>
          <div className={css.quantity}>{quantity} комбинаций</div> 
          <div className="card__name" style={this.style}>{name}</div> 
        </Link> 
        <a href="#" className={`${css.delete} button-hover`} onClick={onDelete} onMouseDown={() => false}>Удалить</a>
      </div>
    )
  }
};

Deck.propTypes = {
  id: PropTypes.number.isRequired,
  quantity: PropTypes.number,
  name: PropTypes.string,
  onDelete: PropTypes.func,
}

Deck.defaultTypes = {
  id: -1,
  quantity: 0,
  name: 'list',
  onDelete: f=>f,
}

export default Deck;
