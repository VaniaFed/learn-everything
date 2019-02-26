import React from 'react';
import PropTypes from 'prop-types';

const List = ({ quantity=0, name='Deck' }) => (
  <div className="card-item">
    <a href="#" className="card__link button-hover">
      <div className="card__quantity">{quantity} комбинаций</div> 
      <div className="card__name">{name}</div> 
    </a> 
    <a href="#" className="card__delete button-hover">Удалить</a>
  </div>
);

List.propTypes = {
  quantity: PropTypes.number,
  name: PropTypes.string,
}

export default List;