import React from 'react';

const Label = ({ ...props }) => {
    return <label for={props.name}>{props.labelName}</label>
};

export default Label;
