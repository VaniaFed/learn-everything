import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ content='Button', className='' }) => (
  <button className={className}>{content}</button>
);
Button.propTypes = {
  content: PropTypes.string,
  className: PropTypes.string,
}

export default Button;
