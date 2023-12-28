// Button.js
import React from 'react';
import PropTypes from 'prop-types';
import { Button as AntButton } from 'antd';

export const Button = ({ type, size, label, onClick }) => {
  return (
    <AntButton type={type} size={size} onClick={onClick}>
      {label}
    </AntButton>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: 'default',
  size: 'medium',
  onClick: () => {}, // Default empty click handler
};
