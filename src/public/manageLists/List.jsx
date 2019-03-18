import React, { Component } from 'react';
import PropTypes from 'prop-types';

class List extends Component {
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
      <div className="card-item">
        <a href="#" className="card__link button-hover">
          <div className="card__quantity">{quantity} комбинаций</div> 
          <div className="card__name" style={this.style}>{name}</div> 
        </a> 
        <a href="#" className="card__delete button-hover" onClick={onDelete}>Удалить</a>
      </div>
    )
  }
};

List.propTypes = {
  quantity: PropTypes.number,
  name: PropTypes.string,
  onDelete: PropTypes.func,
}

List.defaultTypes = {
  quantity: 0,
  name: 'list',
  onDelete: PropTypes.func,
}

export default List;
