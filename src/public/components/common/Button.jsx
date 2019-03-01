import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ content='Button', className='', onClick=f=>f }) => (
  <button className={className} onClick={onClick} >{content}</button>
);
Button.propTypes = {
  content: PropTypes.string,
  className: PropTypes.string,
}

export default Button;
