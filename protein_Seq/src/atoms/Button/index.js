import React from 'react';

const Button = ({...props}) => {
  return  <button data-testid="button" className="btn btn-success" {...props}>{props.text}</button>
}
export default Button;