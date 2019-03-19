import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
    const { quantity, name, onDelete } = this.props;
    return (
      <div className={css.cardItem}>
        <a href="#" className={`${css.card__link} button-hover`}>
          <div className={css.card__quantity}>{quantity} комбинаций</div> 
          <div className="card__name" style={this.style}>{name}</div> 
        </a> 
        <a href="#" className={`${css.card__delete} button-hover`} onClick={onDelete}>Удалить</a>
      </div>
    )
  }
};

Deck.propTypes = {
  quantity: PropTypes.number,
  name: PropTypes.string,
  onDelete: PropTypes.func,
}

Deck.defaultTypes = {
  quantity: 0,
  name: 'list',
  onDelete: PropTypes.func,
}

export default Deck;
