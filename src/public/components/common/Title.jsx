import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ title='Title' }) => (
  <h2 className="test__title">{title}</h2>
);

Title.propTypes = {
  title: PropTypes.string,
}

export default Title;
