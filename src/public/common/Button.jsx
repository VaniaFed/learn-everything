import React from 'react';
import PropTypes from 'prop-types';

import css from './button.module.sass';

const Button = ({ content='Button', className='', onClick=f=>f }) => (
  <button className={`${css.button_default} ${className}`} onClick={onClick}>{content}</button>
);

Button.propTypes = {
  content: PropTypes.string,
  className: PropTypes.string,
}

export default Button;
