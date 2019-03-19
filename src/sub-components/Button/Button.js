import React from "react";
import './Button.css';
import PropTypes from 'prop-types';

const Button = ({ type, onClick, children, buttonLoading }) =>
  <div>
    <button className="btn btn-primary btn-sm" type={type} onClick={onClick}>
    { buttonLoading ? 'Loading...' : children}
    </button>
  </div>

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string,
  children: PropTypes.node,
};

export default Button;
