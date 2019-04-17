import React from 'react'
import PropTypes from 'prop-types'

const Submit = ({ className, value = 'Submit', onClick = f => f }) => (
  <input type='submit'
    className={className}
    value={value}
    onClick={onClick} />
)

Submit.propTypes = {
  value: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func
}

export default Submit
