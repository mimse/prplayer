import React, { PropTypes } from 'react';
import styles from './styles.css';

function Button(props) {
  const className = props.className ? props.className : styles.button;
  let button = (
    <button className={className} onClick={props.onClick}>{props.children}</button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired
};

export default Button;