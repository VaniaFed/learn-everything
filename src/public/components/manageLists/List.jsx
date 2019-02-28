import React, { Component } from 'react';
import PropTypes from 'prop-types';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
    }
  }

  delete(e) {
    e.preventDefault();
    this.setState({
      visible: false,
    });
  }

  defaultRender() {
    return (
      <div className="card-item">
        <a href="#" className="card__link button-hover">
          <div className="card__quantity">{this.props.quantity} комбинаций</div> 
          <div className="card__name">{this.props.name}</div> 
        </a> 
        <a href="#" className="card__delete button-hover" onClick={(e) => this.delete(e)}>Удалить</a>
      </div>
    )
  }
  render() {
    return this.state.visible ? this.defaultRender() : null
  }
};

List.propTypes = {
  quantity: PropTypes.number,
  name: PropTypes.string,
}

List.defaultTypes = {
  quantity: 0,
  name: 'noname',
}

export default List;