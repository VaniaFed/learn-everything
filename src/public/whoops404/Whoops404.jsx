import React from 'react';
import PropTypes from 'prop-types';

import css from './whoops404.module.sass';

const Whoops404 = ({ location='' }) => {
  return (
    <div className="whoops404 container">
      <h1>Resource not found at '{location.pathname}'</h1> 
    </div>
  )
}

Whoops404.propTypes = {
  location: PropTypes.string,
};

export default Whoops404;
