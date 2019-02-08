import React from 'react';
import { render } from 'react-dom';

const Input = ({ className, placeholder }) => (
  <input type="text" className={className} placeholder={placeholder} />
);

export default Input;