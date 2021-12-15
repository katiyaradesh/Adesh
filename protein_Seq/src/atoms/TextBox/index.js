import React from 'react';

const TextBox = ({ ...props }) => {
  return <input type="text" className="form-control" {...props} />
};

export default TextBox;