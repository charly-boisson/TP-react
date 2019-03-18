import React from "react";
import './Button.css';
import PropTypes from 'prop-types';

const Button = ({ type, onClick, children }) =>
  <div>
    <button type={type} onClick={onClick}>{children}</button>
  </div>

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string,
  children: PropTypes.node,
};

export default Button;
