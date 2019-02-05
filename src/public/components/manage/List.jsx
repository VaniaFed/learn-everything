import React from 'react';
import { render } from 'react-dom';

const List = ({ quantity, name }) => (
  <div className="card-item">
    <a href="#" className="card__link button-hover">
      <div className="card__quantity">{quantity} комбинаций</div> 
      <div className="card__name">{name}</div> 
    </a> 
    <a href="#" className="card__delete button-hover">Удалить</a>
  </div>
);

export default List;